// Find all posts by a specific user.

db.posts.find({ user_id: "user_id4" });

// Find the latest 5 posts from users a specific user is following.

var user_name = 'user3'

db.users.aggregate([
    {
        $match: { username: 'user3' }
    },

    {
        $unwind: "$following"
    },

    {
        $lookup: {
            from: "posts",
            localField: "following",
            foreignField: "user_id",
            as: "following_posts"
        }
    },

    {
        $unwind: "$following_posts"
    },

    {
        $group: {
            _id: "$following",
            followingPosts: {
                $addToSet: "$following_posts"
            }
        }
    },

    {
        $sort: { "following_posts": -1 }
    },

    {
        $limit: 5
    }

]);

// Find all comments on a specific post, sorted by timestamp.

var specific_post = 'post_id5';

db.comments.aggregate([
    {
        $match: { post_id: 'post_id5' }
    },

    {
        $sort: { "timestamp": -1 }
    }
]);


//  Find users who have liked a specific post.
specific_post = 'post_id7'

db.likes.aggregate([
    {
        $match: { post_id: 'post_id7' }
    },

    {
        $group: { _id: '$post_id', users_liked_post: { $addToSet: "$user_id" } }
    },

    {
        $unwind: "$users_liked_post"
    },

    {
        $project: {
            post_liked_by_user: {
                $concat: [
                    {
                        $substr: ["$users_liked_post", 0, 4]
                    },
                    {
                        $substr: ["$users_liked_post", 7, 8]
                    }
                ]
            }
        }
    },

    {
        $lookup: {
            from: "users",
            localField: "post_liked_by_user",
            foreignField: "username",
            as: "post_liked_by_users"
        }
    }
]);

// Update the `likes_count` and `comments_count` 
//fields of a post when a new like or comment is added.

// i am expecting it for postnumber: "post_id3"

db.posts.updateOne({ postnumber: "post_id3" },
    { $inc: { comments_count: 1 } },
    { $inc: { likes_count: 1 } });

//Update a user's `full_name` and `birthdate`.

// full name -> Write all in capital
// birthdate -> yyyy-mm-dd format only

db.users.aggregate([
    {
        $project: {
            username: 1,
            email: 1,
            full_name: {
                $toUpper: "$full_name"
            },

            birthdate: {
                $dateToString: {
                    format: "%Y-%m-%d",
                    date: "$birthdate"
                }
            }
        }
    }
]);

// Calculate the total number of likes for a specific user's posts.

var specific_user = 'user_id9'

db.posts.aggregate([
    {
        $match: {
            user_id: 'user_id9'
        },
    },
    {
        $group: {
            _id: "$user_id",
            total_likes: {
                $sum: "$likes_count"
            }
        }
    }
]);

//  Find the most liked post in the `posts` collection.

db.posts.aggregate([
    {
        $group: {
            _id: "$user_id",
            total_likes: {
                $sum: "$likes_count"
            }
        }
    },

    {
        $sort: { "total_likes": -1 }
    },

    {
        $limit: 1
    }
]);

// Create appropriate indexes to improve the performance of the 
//queries you've executed in tasks 3 and 5.

// performance without indexing
// executionStats: {
//     executionSuccess: true,
//     nReturned: 1,
//     executionTimeMillis: 0,
//     totalKeysExamined: 0,
//     totalDocsExamined: 12

db.posts.createIndex({ "user_id": 1 })

// performance after indexing

// executionStats: {
//     executionSuccess: true,
//     nReturned: 1,
//     executionTimeMillis: 9,
//     totalKeysExamined: 1,
//     totalDocsExamined: 1,

db.users.createIndex({ "full_name": 1 });

// Implement a transaction that allows a user to unfollow another user. 
//Ensure that the `followers` and `following` arrays are updated atomically.

var session = db.getMongo().startSession()

session.startTransaction()


var user_name = 'user1';

var user_to_unfollow = 'user_id5'

var unfollowed = 'user5';

var remove_from_follower = 'user_id1';

db.users.updateOne({ username: user_name }, { $pull: { "following": user_to_unfollow } });

db.users.updateOne({ username: unfollowed }, { $pull: { "followers": remove_from_follower } });

session.commitTransaction();
session.endTransaction();

// Delete a user's account, including their posts, comments, and likes.

var user_to_delete = 'user_id8'

db.likes.deleteMany({user_id: user_to_delete});

db.comments.deleteMany({user_id: 'user_id8'})

db.posts.deleteMany({user_id: 'user_id8'})

db.users.updateMany({following: "user_id8"}, {$pull: {following: 'user_id8'}});

db.users.updateMany({followers: "user_id8"}, {$pull: {followers: 'user_id8'}});

// Delete a post, including its comments and likes.

var post_to_delete = 'post_id2'

db.comments.deleteMany({post_id: 'post_id2'})

db.likes.deleteMany({post_id: 'post_id2'})

db.posts.deleteMany({postnumber: 'post_id2'})