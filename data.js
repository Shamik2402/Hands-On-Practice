db.users.insertMany([
    {
        "username": "user1",
        "email": "user1@example.com",
        "full_name": "Alice Johnson",
        "birthdate": ISODate("1995-03-20"),
        "followers": ["user_id2", "user_id3"],
        "following": ["user_id4", "user_id5"]
    },
    {
        "username": "user2",
        "email": "user2@example.com",
        "full_name": "Bob Smith",
        "birthdate": ISODate("1988-07-10"),
        "followers": ["user_id1", "user_id3"],
        "following": ["user_id5", "user_id6"]
    },
    {
        "username": "user3",
        "email": "user3@example.com",
        "full_name": "Charlie Brown",
        "birthdate": ISODate("1992-12-05"),
        "followers": ["user_id2", "user_id4"],
        "following": ["user_id6", "user_id7"]
    },
    {
        "username": "user4",
        "email": "user4@example.com",
        "full_name": "David Lee",
        "birthdate": ISODate("1987-09-15"),
        "followers": ["user_id1", "user_id5"],
        "following": ["user_id7", "user_id8"]
    },
    {
        "username": "user5",
        "email": "user5@example.com",
        "full_name": "Eva Martinez",
        "birthdate": ISODate("1990-05-25"),
        "followers": ["user_id1", "user_id2"],
        "following": ["user_id8", "user_id9"]
    },
    {
        "username": "user6",
        "email": "user6@example.com",
        "full_name": "Frank Wilson",
        "birthdate": ISODate("1989-04-02"),
        "followers": ["user_id3", "user_id4"],
        "following": ["user_id9", "user_id10"]
    },
    {
        "username": "user7",
        "email": "user7@example.com",
        "full_name": "Grace Adams",
        "birthdate": ISODate("1998-01-08"),
        "followers": ["user_id4", "user_id5"],
        "following": ["user_id1", "user_id10"]
    },
    {
        "username": "user8",
        "email": "user8@example.com",
        "full_name": "Helen Davis",
        "birthdate": ISODate("1994-11-17"),
        "followers": ["user_id2", "user_id6"],
        "following": ["user_id2", "user_id7"]
    },
    {
        "username": "user9",
        "email": "user9@example.com",
        "full_name": "Ian Moore",
        "birthdate": ISODate("1993-06-30"),
        "followers": ["user_id7", "user_id8"],
        "following": ["user_id4", "user_id5"]
    },
    {
        "username": "user10",
        "email": "user10@example.com",
        "full_name": "Jenny Taylor",
        "birthdate": ISODate("1991-08-12"),
        "followers": ["user_id1", "user_id9"],
        "following": ["user_id3", "user_id8"]
    }
]);

// post collection

db.posts.insertMany([
    {
        "user_id": "user_id1",
        "text": "Hello, this is my first post!",
        "timestamp": ISODate("2023-09-04T12:00:00Z"),
        "likes_count": 3,
        "comments_count": 2
    },
    {
        "user_id": "user_id2",
        "text": "A beautiful day!",
        "timestamp": ISODate("2023-09-04T13:30:00Z"),
        "likes_count": 7,
        "comments_count": 1
    },
    {
        "user_id": "user_id3",
        "text": "Just enjoying the weekend.",
        "timestamp": ISODate("2023-09-04T14:45:00Z"),
        "likes_count": 10,
        "comments_count": 3
    },
    {
        "user_id": "user_id4",
        "text": "Coding is fun!",
        "timestamp": ISODate("2023-09-04T15:15:00Z"),
        "likes_count": 4,
        "comments_count": 0
    },
    {
        "user_id": "user_id5",
        "text": "Dinner with friends tonight.",
        "timestamp": ISODate("2023-09-04T16:00:00Z"),
        "likes_count": 8,
        "comments_count": 2
    },
    {
        "user_id": "user_id6",
        "text": "Traveling to a new city!",
        "timestamp": ISODate("2023-09-04T17:20:00Z"),
        "likes_count": 6,
        "comments_count": 1
    },
    {
        "user_id": "user_id7",
        "text": "Movie night at home.",
        "timestamp": ISODate("2023-09-04T18:30:00Z"),
        "likes_count": 5,
        "comments_count": 1
    },
    {
        "user_id": "user_id8",
        "text": "Learning a new language.",
        "timestamp": ISODate("2023-09-04T19:45:00Z"),
        "likes_count": 9,
        "comments_count": 4
    },
    {
        "user_id": "user_id9",
        "text": "Hiking in the mountains.",
        "timestamp": ISODate("2023-09-04T20:15:00Z"),
        "likes_count": 12,
        "comments_count": 3
    },
    {
        "user_id": "user_id10",
        "text": "Reading a good book.",
        "timestamp": ISODate("2023-09-04T21:00:00Z"),
        "likes_count": 5,
        "comments_count": 2
    }
]);

// comments collection

db.comments.insertMany([
    {
        "post_id": "post_id1",
        "user_id": "user_id3",
        "text": "Nice first post!",
        "timestamp": ISODate("2023-09-04T12:30:00Z")
    },
    {
        "post_id": "post_id2",
        "user_id": "user_id1",
        "text": "Beautiful indeed!",
        "timestamp": ISODate("2023-09-04T13:45:00Z")
    },
    {
        "post_id": "post_id3",
        "user_id": "user_id5",
        "text": "Weekends are the best!",
        "timestamp": ISODate("2023-09-04T15:00:00Z")
    },
    {
        "post_id": "post_id4",
        "user_id": "user_id2",
        "text": "I agree, coding is fun!",
        "timestamp": ISODate("2023-09-04T15:45:00Z")
    },
    {
        "post_id": "post_id5",
        "user_id": "user_id7",
        "text": "Enjoy your dinner!",
        "timestamp": ISODate("2023-09-04T16:45:00Z")
    },
    {
        "post_id": "post_id6",
        "user_id": "user_id9",
        "text": "Have a great trip!",
        "timestamp": ISODate("2023-09-04T18:00:00Z")
    },
    {
        "post_id": "post_id7",
        "user_id": "user_id6",
        "text": "What movie are you watching?",
        "timestamp": ISODate("2023-09-04T19:15:00Z")
    },
    {
        "post_id": "post_id8",
        "user_id": "user_id10",
        "text": "Learning new languages is rewarding.",
        "timestamp": ISODate("2023-09-04T19:50:00Z")
    },
    {
        "post_id": "post_id9",
        "user_id": "user_id8",
        "text": "Enjoy the hike!",
        "timestamp": ISODate("2023-09-04T20:30:00Z")
    },
    {
        "post_id": "post_id10",
        "user_id": "user_id4",
        "text": "What's the book title?",
        "timestamp": ISODate("2023-09-04T21:15:00Z")
    }
]);

db.comments.insertMany([
    {
        "post_id": "post_id5",
        "user_id": "user_id6", 
        "text": "I hope you have a great time!",
        "timestamp": ISODate("2023-09-05T10:00:00Z")
    },
    {
        "post_id": "post_id5",
        "user_id": "user_id2", 
        "text": "Enjoy the beautiful scenery!",
        "timestamp": ISODate("2023-09-05T11:30:00Z")
    },

]);


// likes collection

db.likes.insertMany([
    {
        "post_id": "post_id1",
        "user_id": "user_id2"
    },
    {
        "post_id": "post_id1",
        "user_id": "user_id5"
    },
    {
        "post_id": "post_id2",
        "user_id": "user_id4"
    },
    {
        "post_id": "post_id3",
        "user_id": "user_id6"
    },
    {
        "post_id": "post_id4",
        "user_id": "user_id7"
    },
    {
        "post_id": "post_id5",
        "user_id": "user_id3"
    },
    {
        "post_id": "post_id6",
        "user_id": "user_id1"
    },
    {
        "post_id": "post_id7",
        "user_id": "user_id9"
    },
    {
        "post_id": "post_id8",
        "user_id": "user_id10"
    },
    {
        "post_id": "post_id9",
        "user_id": "user_id8"
    }
]);

db.likes.insertMany([
    {
        "post_id": "post_id7",
        "user_id": "user_id4" 
    },
    {
        "post_id": "post_id7",
        "user_id": "user_id1" 
    },
]);

// Adding postnumber field in posts.

db.posts.updateOne({ _id: ObjectId("6502b0ff2731ee3580eb11ef")}, {$set: {postnumber: 'post_id1'}});

db.posts.updateOne({ _id: ObjectId("6502b0ff2731ee3580eb11f0")}, {$set: {postnumber: 'post_id2'}});
db.posts.updateOne({ _id: ObjectId("6502b0ff2731ee3580eb11f1")}, {$set: {postnumber: 'post_id3'}});
db.posts.updateOne({ _id: ObjectId("6502b0ff2731ee3580eb11ef2")}, {$set: {postnumber: 'post_id4'}});
db.posts.updateOne({ _id: ObjectId("6502b0ff2731ee3580eb11ef3")}, {$set: {postnumber: 'post_id5'}});
db.posts.updateOne({ _id: ObjectId("6502b0ff2731ee3580eb11ef4")}, {$set: {postnumber: 'post_id6'}});
db.posts.updateOne({ _id: ObjectId("6502b0ff2731ee3580eb11ef5")}, {$set: {postnumber: 'post_id7'}});
db.posts.updateOne({ _id: ObjectId("6502b0ff2731ee3580eb11ef6")}, {$set: {postnumber: 'post_id8'}});
db.posts.updateOne({ _id: ObjectId("6502b0ff2731ee3580eb11ef7")}, {$set: {postnumber: 'post_id9'}});
db.posts.updateOne({ _id: ObjectId("6502b0ff2731ee3580eb11ef8")}, {$set: {postnumber: 'post_id10'}});







