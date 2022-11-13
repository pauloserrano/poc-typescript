## About
A simple CRUD to-do list application I created while learning typescript.
___
## Deploy
https://todo-ts-poc.herokuapp.com/items
___
## Routes
All routes are prefixed with **/items**, so a **GET /** route described below stands for **GET /items**, and a **GET /:id** route stands for **GET /items/:id** and so on.
___
### **GET /**
Returns all items.

Example:
```json
[
    {
        "id": 1,
        "name": "Learn Typescript",
        "finished": true,
        "notes": "Can definely see why it exists now.",
        "summary": "Javascript's brother who went to law school"
    },
    {
        "id": 2,
        "name": "Learn Prisma",
        "finished": false,
        "notes": null,
        "summary": null
    }
]
```
___

### **GET /:id**
Returns an item by id

Example:
```json
{
    "id": 1,
    "name": "Learn Typescript",
    "finished": true,
    "notes": "Can definely see why it exists now.",
    "summary": "Javascript's brother who went to law school"
}
```
___

### **GET /finished**
Returns the total amount of tasks finished

Example:
```json
{
  "itemsFinished": "1"
}
```
___

### **POST /**
Creates a new item.

Body:
```json
{
    "name": "Finish this README.md"
}
```
___

### **PATCH /:id**
Updates an item by id. Not all properties need to be sent.

Body:
```json
{
    "name": "Learn More Typescript",
    "finished": false,
    "notes": "To infinity and beyond",
    "summary": "We don't do that here"
}
```
___

### **DELETE /:id**
Removes an item by id