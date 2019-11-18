# Broadcaster-A Solution for Corruption
Broadcaster is a platform where every citizen can bring any form of corruption to the notice of appropriate authorities and the general public.

## Table of Content
- Getting Started
- Technologies Used
- Installation
- Testing
- Features
- API Documentation
- Questions
- License

## Getting Started

This is a javascript application written in `ECMASCRIPT 6` and built with `Express` framework on the `NodeJS` platform. Codes are written in accordance with `Airbnb` JavaScript style guide. Authentication of users is done via `JSON Web Tokens`.

## Technologies Used

###### UI & Templates

1. HTML & CSS
2. Javascript

###### Server Side

1. NodeJS
2. Express

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




View UI Template: https://richaanand94.github.io/Broadcaster/UI/
