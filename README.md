# eliftech_delivery-service-backend
App Delivery Backend
This repository contains the back-end for the App Delivery service. It provides APIs to manage shops and orders.

After Node.js is installed, clone this repository to your local machine:

(https://github.com/Ra4kovi4/eliftech_delivery-service-backend.git)
Navigate to the project directory:

cd app-delivery-backend
Install project dependencies:

npm install
Configuration
The app uses two environment variables: DB_HOST and PORT. These can be set in a .env file in the config directory.

Here is an example .env file:

DB_HOST=mongodb://localhost:27017/mydatabase
PORT=3000


Usage
You can start the server using the following command:

npm start
The server will start in production mode.

For development mode, use:

npm run dev
Endpoints
Here is a list of available endpoints:
auth:
GET /api/current: Fetch current user
POST /api/register: Add a new user
POST /api/login: Login user and take token

orders:
POST /api/orders: Add a new order
GET /api/orders: Fetch all user's orders 

shops:
GET /api/orders: Fetch all shops with menu
GET /api/orders:id:  Fetch one shop by id with menu
