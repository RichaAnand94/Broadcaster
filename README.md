# Broadcaster-A Solution for Corruption
Broadcaster is a platform where every citizen can bring any form of corruption to the notice of appropriate authorities and the general public.

[![Build Status](https://travis-ci.org/RichaAnand94/Broadcaster.svg?branch=develop)](https://travis-ci.org/RichaAnand94/Broadcaster)
[![Coverage Status](https://coveralls.io/repos/github/RichaAnand94/Broadcaster/badge.svg?branch=bug-fix-in-chore)](https://coveralls.io/github/RichaAnand94/Broadcaster?branch=bug-fix-in-chore)
## Table of Content

 * [Getting Started](#getting-started)
 * [Technologies Used](#technologies-used)
 * [Installation](#installation)
 * [Testing](#testing)
 * [Features](#features)
 * [Questions](#questions)

## Getting Started

This is a javascript application written in [ECMASCRIPT 6](https://en.wikipedia.org/wiki/ECMAScript) and built with [**Express**](https://expressjs.com/) framework on the [**NodeJS**](https://nodejs.org/en/) platform. Codes are written in accordance with [Airbnb](https://github.com/airbnb/javascript) JavaScript style guide. Authentication of users is done via [**JSON Web Tokens**](https://jwt.io/).

## Technologies Used

**UI & Templates**

1. HTML & CSS
2. Javascript

**Server Side**

1. NodeJS
2. Express

**Dependencies**
* Postgres
* Node

## Testing
Sever side tests - npm run test on the terminal while within the project root directory.

Server side testing is achieved through use of chai-http, mocha and chai packages. chai-http is used to make requests to the api and mocha is the testing framework and chai is the exception library. They will both be installed when you run npm install and the tests will run when you do npm run test.

## Features
Broadcaster App consists of the following features:

## Authentication

- It uses JSON Web Token (JWT) for authentication.
- Token is generated on user login or when a new user signup
- Token is perpetually verified to check the state of the user if logged in or not.

## Unauthenticated Users

- Unauthenticated Users can view the landing and see how the app works
- Unauthenticated Users can register

## Authenticated Users

- Authenticated Users can log in
- Authenticated Users can create a new request
- Authenticated Users can view all their requests
- Authenticated Users can view a specific request
- Authenticated Users can delete a specific request
- Authenticated Users can view their account details
- Authenticated Users can edit their account details

## Admin Users
- Admins can view all requests
- Admins can approve a new/pending/disapproved request
- Admins can disapprove a new/pending/ request
- Admins can resolve a pending/disapproved request

## Broadcaster Available endpoints

| URL | HTTP Methohds | Description |
| --- | --- | --- |
| /api/v2/auth/signup | POST | Create new User |
| /api/v2/auth/signin | POST | Login a user |
| /api/v2/red-flags | POST | Create new red-flag record |
| /api/v2/red-flags | GET | Can get all red-flags |
| /api/v2/red-flags/:id | GET | Can get all red-flags by id |
| /api/v2/red-flags/:id/location | PATCH | Can update red-flag location by id |
| /api/v2/red-flags/:id/comment | PATCH | Can update red-flag comment by id |
| /api/v2/red-flags/:id | DELETE | User can delete record by id |
| /api/v2/interventions | POST | Create new intervention record |
| /api/v2/interventions | GET | Can get all intervention |
| /api/v2/inteventions/:id | GET | Can get all interventions by id |
| /api/v2/interventions/:id/location | PATCH | Can update intervention location by id |
| /api/v2/interventions/:id/comment | PATCH | Can update intervention comment by id |
| /api/v2/interventions/:id | DELETE | User can delete record by id |
| /api/v2/admin/red-flags | GET | Admin can get all red-flags |
| /api/v2/admin/interventions | GET | Admin can get all interventions |
| /api/v2/admin/red-flags/:id/status | PUT | Admin can change status of red-flags |
| /api/v2/admin/interventions/:id/status | PUT | Admin can change status of interventions |



## Questions
For more details contact richameo@gmail.com





View UI Template: https://richaanand94.github.io/Broadcaster/UI/
