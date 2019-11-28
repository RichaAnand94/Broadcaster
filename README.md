# Broadcaster-A Solution for Corruption
Broadcaster is a platform where every citizen can bring any form of corruption to the notice of appropriate authorities and the general public.

[![Build Status](https://travis-ci.org/RichaAnand94/Broadcaster.svg?branch=develop)](https://travis-ci.org/RichaAnand94/Broadcaster)

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

## Questions
For more details contact richamee@gmail.com





View UI Template: https://richaanand94.github.io/Broadcaster/UI/
