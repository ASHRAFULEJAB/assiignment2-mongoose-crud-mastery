* Live-Link 
    
     * https://assignmnet2-crud-mongoose.vercel.app/



Here we are doing a CRUD operation by using mongoose and typescript.For database storage we have used
Mongodb.Here are steps you should follow if you want to run it on locally:

** Endpoint: POST /api/users
* http://localhost:5000/api/users 
By using this end point whenever i trying to post any user i need to give the below on body part:
 ```
 
 {
    "userId": 1271,
    "username": "jon_dwelop",
    "password": "hellotheee",
    "fullName": {
        "firstName": "John",
        "lastName": "Doe"
    },
    "age": 30,
    "email": "johndoe@example.com",
    "isActive": true,
    "hobbies": [
        "Gaming",
        "reading"
    ],
    "address": {
        "street": "123 Main Street",
        "city": "Anytown",
        "country": "CountryName"
    },
    "isDeleted": false
}
 
 ```

 and I am geeting this type reponse:


 ```
 {
    "success": true,
    "message": "User created successfully!",
    "data": {
        "userId": 1271,
        "username": "jon_dwelop",
        "fullName": {
            "firstName": "John",
            "lastName": "Doe",
            "_id": "6562322a0b2bd6f21a61ab6d"
        },
        "age": 30,
        "email": "johndoe@example.com",
        "isActive": true,
        "hobbies": [
            "Gaming",
            "reading"
        ],
        "address": {
            "street": "123 Main Street",
            "city": "Anytown",
            "country": "CountryName",
            "_id": "6562322a0b2bd6f21a61ab6e"
        },
        "isDeleted": false,
        "_id": "6562322a0b2bd6f21a61ab6c",
        "orders": [],
        "__v": 0
    }
}
 
 ```