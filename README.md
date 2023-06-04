Node.js Blog App

Description:
This is a blog application built using Node.js and Express.js, with MongoDB as the database. It allows users to create, read, update, and delete blog posts. The application provides a user-friendly interface for managing blog content and interacting with readers.
<br>
<br>
Features:
User Registration and Authentication: Users can create an account and log in to manage their blog posts.
Create and Publish Blog Posts: Authenticated users can write new blog posts and publish them for others to read.
Read Blog Posts: Users can browse and read blog posts published by other users.
Update and Delete Blog Posts: Authors can edit or delete their own blog posts.
Commenting System: Users can leave comments on blog posts to engage in discussions and provide feedback.
User Profiles: Users have their own profiles where they can view and manage their published blog posts.
<br>
<br>
Installation:
Clone the repository: git clone https://github.com/Sundaresan25/blog-backend.git
Install dependencies: npm install
Set up the MongoDB database connection by providing the URI in the .env file.
Start the server: npm start
Access the application in your browser at http://localhost:3000
<br>
<br>

Api End points

### Register a User

- **URL:** `/auth/register`
- **Method:** `POST`
- **Description:** Register a new user.
- **Request Body:**
  - `name` (string, required): User's name.
  - `email` (string, required): User's email.
  - `password` (string, required): User's password.

### Login

- **URL:** `/auth/login`
- **Method:** `POST`
- **Description:** Authenticate and login a user.
- **Request Body:**
  - `email` (string, required): User's email.
  - `password` (string, required): User's password.

### Update User

- **URL:** `/auth/updateuser`
- **Method:** `PUT`
- **Description:** Update user details.
- **Authentication:** Required.
- **Request Body:**

  - `userId` (string, required): User's ID.
  - `name` (string): User's new name.

  ### Add a Blog

- **URL:** `/blogs/add`
- **Method:** `POST`
- **Description:** Add a new blog.
- **Authentication:** Required.
- **Request Body:**
  - `title` (string, required): Blog title.
  - `description` (string, required): Blog description.
  - `image` (string): URL of the blog image.

### Update a Blog

- **URL:** `/blogs/update`
- **Method:** `PUT`
- **Description:** Update an existing blog.
- **Authentication:** Required.
- **Request Body:**
  - `blogId` (string, required): ID of the blog to update.
  - `title` (string): New title for the blog.
  - `description` (string): New description for the blog.
  - `image` (string): New URL of the blog image.

### Get All Blogs

- **URL:** `/blogs/get`
- **Method:** `GET`
- **Description:** Get all blogs.
- **Authentication:** Required.

### Delete a Blog

- **URL:** `/blogs/delete`
- **Method:** `DELETE`
- **Description:** Delete a blog.
- **Authentication:** Required.
- **Request Body:**
  - `blogId` (string, required): ID of the blog to delete.

### Get User's Blogs

- **URL:** `/blogs/my-blogs`
- **Method:** `GET`
- **Description:** Get blogs created by the authenticated user.
- **Authentication:** Required.

### Add a Comment

- **URL:** `/blogs/comment`
- **Method:** `POST`
- **Description:** Add a comment to a blog.
- **Authentication:** Required.
- **Request Body:**
  - `content` (string, required): Comment content.
  - `author` (string, required): Author's name.
  - `authorMail` (string, required): Author's email.
  - `blogId` (string, required): ID of the blog to add the comment to.

### Get Comments for a Blog

- **URL:** `/blogs/comment/:blogId`
- **Method:** `GET`
- **Description:** Get all comments for a specific blog.
- **Authentication:** Required.
- **Parameters:**
  - `blogId` (string, required): ID of the blog to retrieve comments for.

Contributing:
Fork the repository and create a new branch for your contributions.
Make your changes and submit a pull request, explaining the purpose and scope of your changes.

<br>
Contact:
For any questions or inquiries, feel free to contact the project maintainer at sundarbgm98@gmail.com
