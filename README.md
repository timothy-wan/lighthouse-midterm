# Restaurant Pickup
Midterm Project for Lighthouse Lab's Web Development Bootcamp

!["Home Page"]()
!["Menu]()
!["Checkout"]()
!["Pending/Accepting Orders"]()

A web app for a fictious restaurant that provides an order pickup service. Users will be able to view the restaurant's menu and create their order. Restaurant will be able choose to accept or decline an order. Upon confirmation of the order, users will be notified of their order status and receive an ETA.

## Features
- Users can view the restaurant's menu
- Users can build their own cart
- Each cart can contain one or more items with mulitple quantities
- Users can start a place an order with the restaurant
- Restaurant can choose to accept an order and provide the user with an ETA
- Users will be notified of their order status via browser and SMS text

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
6. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
7. Run the server: `npm run local`
8. Visit `http://localhost:8080/`

## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above
- body-parser
- dotenv
- ejs
- express
- knex
- morgan
- Sass
- Postgre SQL
- Twilio