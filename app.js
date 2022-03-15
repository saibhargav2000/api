const EXPRESS = require('express');
const SWAGGERJSDOC = require('swagger-jsdoc');
const SWAGGERUI = require('swagger-ui-express');
const MONGOOSE = require('mongoose');
const APP = EXPRESS();
APP.use(EXPRESS.json())
const URL = 'mongodb://0.0.0.0:27017/Users';
const USERROUTER = require('./routers/users');
MONGOOSE.connect(URL);
const CONNECTION = MONGOOSE.connection
const SWAGGEROPTIONS = {
swaggerDefinition: {
info: {
title: 'Crud API',
version: '1.0.0',
}
},
apis: ['app.js'],
}
const SWAGGERDOCS = SWAGGERJSDOC(SWAGGEROPTIONS);
/**
* @swagger
* /users/:
* get:
* description: Get All users
* responses:
* 200:
* description: Success Getting Users
*
*/
/**
* @swagger
* /users/{id}:
* get:
* parameters:
* - in: path
* name: id
* required: true
* type: string
* description: The particular User.
* description: Get A particular user
* responses:
* 200:
* description: Success in getting user
* 400:
* description: Error in Getting User
*/
/**
* @swagger
* /users:
* post:
* parameters:
* - in: body
* name: Create New User
* description: Create a New User
* schema:
* type: object
* properties:
* name:
* type: string
* age:
* type: number
* gender:
* type: string
* city:
* type: string
* state:
* type: string
* country:
* type: string
* birthday:
* type: string
* mobNumber:
* type: number
* email:
* type: string
* address1:
* type: string
* address2:
* type: string
*
* responses:
* 200:
* description: User Created successfully
* 400:
* description: Error in User Creating
*
*/
/**
* @swagger
* /users/{id}:
* patch:
* parameters:
* - in: path
* name: id
* required: true
* type: string
* description: The User ID.
* - in: body
* name: ID
* description: Update User
* schema:
* type: object
* properties:
* name:
* type: string
* age:
* type: number
* gender:
* type: string
* city:
* type: string
* state:
* type: string
* country:
* type: string
* birthday:
* type: string
* mobNumber:
* type: number
* email:
* type: string
* address1:
* type: string
* address2:
* type: string
*
* responses:
* 200:
* description: User Updated successfully
* 400:
* description: Error in Updating User
*
*/
/**
* @swagger
* /users/{id}:
* delete:
* parameters:
* - in: path
* name: id
* required: true
* type: string
* description: The User ID.
* description: Delete a User by id
* responses:
* 200:
* description: User is Deleted Successfully
* 400:
* description: Error in deleting the User
*/
CONNECTION.on('open', () => {
console.log('Connected to database');
})
APP.use('/users', USERROUTER)
APP.use('/docs', SWAGGERUI.serve, SWAGGERUI.setup(SWAGGERDOCS))
APP.listen(9000, () => {
console.log('Server is listening on port 9000');
})