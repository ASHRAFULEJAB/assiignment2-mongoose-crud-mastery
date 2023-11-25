- Live-Link
  - https://assignmnet2-crud-mongoose.vercel.app/

Here we are doing a CRUD operation by using mongoose and typescript.For database storage we have used
Mongodb.Here are steps you should follow if you want to run it on locally:

\*\* Endpoint: POST /api/users

- http://localhost:5000/api/users
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

\*\* Endpoint: GET /api/users

- http://localhost:5000/api/users
  By using this end point whenever i trying to post any user i get the below on response:

and I am geeting this type reponse:

```
{
   "success": true,
   "message": "Users fetched successfully!",
   "data": [
       {
           "username": "jon_dwl",
           "fullName": {
               "firstName": "John",
               "lastName": "Doe",
               "_id": "655fab359a6ed055dffe1574"
           },
           "age": 30,
           "email": "john.doe@example.com",
           "address": {
               "street": "123 Main Street",
               "city": "Anytown",
               "country": "CountryName",
               "_id": "655fab359a6ed055dffe1575"
           }
       },
       {
           "username": "abc-66",
           "fullName": {
               "firstName": "John",
               "lastName": "Doe",
               "_id": "655fab9907da0770b12277c6"
           },
           "age": 88,
           "email": "john.doe@example.com",
           "address": {
               "street": "123 Main Street",
               "city": "Anytown",
               "country": "CountryName",
               "_id": "655fab9907da0770b12277c7"
           }
       },
       {
           "username": "jon_dwel",
           "fullName": {
               "firstName": "John",
               "lastName": "Doe",
               "_id": "6560cd74e91cdbb6e7a70694"
           },
           "age": 30,
           "email": "john.doe@example.com",
           "address": {
               "street": "123 Main Street",
               "city": "Anytown",
               "country": "CountryName",
               "_id": "6560cd74e91cdbb6e7a70695"
           }
       },
       {
           "username": "jon_dwell",
           "fullName": {
               "firstName": "John",
               "lastName": "Doe",
               "_id": "6561e2a92c6114786fe23728"
           },
           "age": 30,
           "email": "john.doe@example.com",
           "address": {
               "street": "123 Main Street",
               "city": "Anytown",
               "country": "CountryName",
               "_id": "6561e2a92c6114786fe23729"
           }
       },
       {
           "username": "jo_dwello",
           "fullName": {
               "firstName": "John",
               "lastName": "Doe",
               "_id": "656226a90c78a4da1720bbd3"
           },
           "age": 35,
           "email": "johndoe@example.com",
           "address": {
               "street": "123 Main Street",
               "city": "Anytown",
               "country": "CountryName",
               "_id": "656226a90c78a4da1720bbd4"
           }
       },
       {
           "username": "jon_dwellop",
           "fullName": {
               "firstName": "John",
               "lastName": "Doe",
               "_id": "656222c6b5a434328e486585"
           },
           "age": 30,
           "email": "johndoe@example.com",
           "address": {
               "street": "123 Main Street",
               "city": "Anytown",
               "country": "CountryName",
               "_id": "656222c6b5a434328e486586"
           }
       },
       {
           "username": "jon_dwelop",
           "fullName": {
               "firstName": "John",
               "lastName": "Doe",
               "_id": "6562322a0b2bd6f21a61ab6d"
           },
           "age": 30,
           "email": "johndoe@example.com",
           "address": {
               "street": "123 Main Street",
               "city": "Anytown",
               "country": "CountryName",
               "_id": "6562322a0b2bd6f21a61ab6e"
           }
       }
   ]
}

```


\*\* Endpoint:GET  /api/users/:userId

- http://localhost:5000/api/users/:userId
  By using this end point whenever i trying to get any user by userid i get the below on response:

and I am geeting this type reponse:

```
{
    "success": true,
    "message": "Users fetched successfully!",
    "data": {
        "userId": 1279,
        "username": "jo_dwello",
        "fullName": {
            "firstName": "John",
            "lastName": "Doe",
            "_id": "656226a90c78a4da1720bbd3"
        },
        "age": 35,
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
            "_id": "656226a90c78a4da1720bbd4"
        },
        "isDeleted": true,
        "orders": [
            {
                "productName": "testing",
                "price": "69.9",
                "quantity": "3",
                "_id": "656226eb0c78a4da1720bbd7"
            },
            {
                "productName": "testing",
                "price": "46.9",
                "quantity": "7",
                "_id": "6562288794fbffbc3729da41"
            }
        ]
    }
}

```

\*\* Endpoint:PUT  /api/users/:userId

- http://localhost:5000/api/users/:userId
  By using this end point whenever i trying to update any user by userid i get the below on response need to give the bwlow part on body:
  ```
  {
    "userId": 1279,
    "username": "jo_dwello",
    "password": "hhhehehehe",
    "fullName": {
        "firstName": "John",
        "lastName": "Doe",
        "_id": "65621bb12d0ac94663f28cfb"
    },
    "age": 35,
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
        "_id": "65621bb12d0ac94663f28cfc"
    },
    "isDeleted": true,
    "orders": []
}
  
  ```

and I am geeting this type reponse:

```
{
    "success": true,
    "message": "Users updated successfully!",
    "data": {
        "userId": 1279,
        "username": "jo_dwello",
        "fullName": {
            "firstName": "John",
            "lastName": "Doe",
            "_id": "656235a80b2bd6f21a61ab7a"
        },
        "age": 35,
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
            "_id": "656235a80b2bd6f21a61ab7b"
        },
        "isDeleted": true,
        "orders": []
    }
}

```


\*\* Endpoint:DELETE  /api/users/:userId

- http://localhost:5000/api/users/:userId
  By using this end point whenever i trying to delete any user by userid i get the below on response:

and I am geeting this type reponse:

```
{
    "success": true,
    "message": "Users deleted successfully!",
    "data": null
}
```