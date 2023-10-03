# Tech Blog

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![Walkthrough GIF](assets/tech_walkthrough.gif)

## Description
Tech Blog is a blog site where developers can publish their blog posts and comment on other posts. The application follows the MVC paradigm in its file structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Installation
To run the Tech Blog locally, you will need to have Node.js and MySQL installed on your machine.

1. Clone the repository to your local machine.
2. Run npm install to install the required dependencies.
3. Create a .env file in the root directory with the following environment variables:
```DB_NAME=your_database_name
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
SECRET=your_session_secret
```
4. Set up your MySQL database by running the provided schema.sql file in the db folder.
5. Run npm start to start the application.
## Usage
Visit the deployed application to use Tech Blog. The homepage displays existing blog posts (if any), navigation links for the homepage and dashboard, and the option to log in or sign up. Once logged in, you can create new blog posts, view existing posts, add comments, update or delete your own posts, and log out.

[Deployed Link](https://tech-blog-2023-07-31-cd0117d1e184.herokuapp.com/dashboard)

## Features
- User authentication (sign up, log in, log out) with session management.
- Create, read, update, and delete blog posts.
- Add and view comments on blog posts.
## Technologies
- Front-end: HTML, CSS, JavaScript, Handlebars.js
- Back-end: Node.js, Express.js, Sequelize (MySQL)
- Authentication: express-session, bcrypt
- Deployment: Heroku


## Contributing
Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
