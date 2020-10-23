# BRIDGEGOOD

BridgeGood is an organization that mentors aspiring designers in Oakland. They recently received a workspace for students to work in. We will be building a reservation and donation system for that workspace. Web students will focus on two user types: users and admin. You will be given hi-fi wireframes and be expected to ship to spec.

You can find the deployed project at [BRIDGEGOOD.dev](https://bridgegood.dev).

## Contributors

|                                                                [Ana Carrillo](https://github.com/acarrillo3)                                                                |                                                              [Alexander Besse](https://github.com/AlexJoeb)                                                               |                                                             [Anthony Koharian](https://github.com/antonyk)                                                              |                                                                 [Drake Alia](https://github.com/DrakeAlia)                                                                 |                                                               [Gregory Hawman](https://github.com/Gregory-Hawman)                                                               |                                                                 [Yasir Haymm](https://github.com/YasirHasn9)                                                                 |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars2.githubusercontent.com/u/50473626?s=460&amp;u=07109007eb1bc4adfa296a718c87157ff9e950df&amp;v=4" width = "200" />](https://github.com/acarrillo3) | [<img src="https://avatars0.githubusercontent.com/u/44859433?s=460&amp;u=c331ffc2bf0878ed7cd0f83d5deb17dba9a42053&amp;v=4" width = "200" />](https://github.com/AlexJoeb) | [<img src="https://avatars3.githubusercontent.com/u/2497571?s=460&amp;u=871c77d98deed2e84da52a8154649ede5301068f&amp;v=4" width = "200" />](https://github.com/antonyk) | [<img src="https://avatars3.githubusercontent.com/u/52472741?s=460&amp;u=19257a3af0b3b29cd1cf85982d8d97c38402d6f8&amp;v=4" width = "200" />](https://github.com/DrakeAlia) | [<img src="https://avatars0.githubusercontent.com/u/55816177?s=460&amp;u=3c1b33955c81040d6a54f2f6000948da24d06622&amp;v=4" width = "200" />](https://github.com/Gregory-Hawman) | [<img src="https://avatars0.githubusercontent.com/u/50093004?s=400&amp;u=eba9dd56e75848e1e5c13814380e6c243a30e1c5&amp;v=4" width = "200" /> ](https://github.com/YasirHasn9) |
|                                           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/acarrillo3)                                           |                                           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/AlexJoeb)                                           |                                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/antonyk)                                           |                                           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/DrakeAlia)                                           |                                           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Gregory-Hawman)                                           |                                           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/YasirHasn9)                                            |
|                         [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/acarrillo3/)                         |                     [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/alexander-besse/)                      |                       [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/akoharian/)                        |                        [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/drake-alia/)                         |                         [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/gregory-hawman/)                         |                         [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/yasirhasn9/)                          |

<br>
<br>

## Project Overview

[Product Demo Video on Youtube](https://youtu.be/6rptqTJ-36o)

[Labs 26 Trello Board](https://trello.com/b/nW5Qz4yT/bridgegood-ana)

### [Key Features](https://www.notion.so/Bridgegood-Roadmap-42978540fee14397a27189f5d815949c)

- Authentication
- Reservation system
- Donation
- Admin dashboard

### Tech Stack

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

`🚫 more info on using badges [here](https://github.com/badges/shields)`

#### Front end deployed to `AWS Amplify` built using:

- React
- Redux
- Ant Design
- Venmo

#### [Back end](https://github.com/Lambda-School-Labs/Labs26-Bridgegood-BE) built using:

- Node.js
- Knex/Express
- PostgreSQL
- Swagger-UI

#### Product Diagram and Engineering Architecture: [click here](https://whimsical.com/QHZNGNapWnCyYxEUHL2P87)

#### Database Schema: [click here](https://app.dbdesigner.net/designer/schema/0-untitled-225e23af-0314-4e21-8781-5852abb5b9dd)

### APIs

#### Okta Authentication API

- Okta is the only approved identity and access management company per the Lambda School Engineering Standards
- Okta is a trusted service that has been in buisness since 2009
- Okta allows developers to build identity controls into applications, website web services and devices

#### Venmo Payment API

- Venmo is a mobile payment service owned by PayPal. Venmo account holders can transfer funds to others via a mobile phone app; both the sender and receiver have to live in the U.S.

## Installation Instructions

- Fork and clone the repo to install it as your own remote.
- Set you environment variables
- run: `npm install` to download all dependencies.
- run: `npm start` to start your local development server.

> When using Okta for authentication, the app will need to run locally on port 3000.

### Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    *  REACT_APP_CLIENT_ID=example
    *  REACT_APP_OKTA_ISSUER_URI="https://example-882474.okta.com"
    *  REACT_APP_API_URI=http://localhost:3000

### Other Scripts

    * build - creates a build of the application
    * start - starts the production server after a build is created
    * test - runs tests in **tests** directory \* eject - copy the configuration files and dependencies into the project so you have full control over them

# Basic SPA

For steps on how to work with this repository [please see here](https://docs.labs.lambdaschool.com/labs-spa-starter/)

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Documentation

See [Backend Documentation](https://bridgegood-api.herokuapp.com/api-docs/) for details on the backend of our project.
