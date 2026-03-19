# Workshop 05 - Building a REST API with Express and MongoDB

## Overview
In this workshop, you will extend the web server from the previous workshops into a simple REST API application.

You will keep the familiar page routes from earlier workshops:
- `/`
- `/about`
- `/contact`

Then you will add a new `/blog` route and build a REST API for blog posts using Express and MongoDB.

The goal is to help you understand the difference between:
- browser-facing page routes such as `/blog`
- resource endpoints such as `/api/posts`

---

## Learning Objectives
By the end of this workshop, you should be able to:
- Build an Express.js server that serves static pages and API responses
- Connect a Node.js application to MongoDB using Mongoose
- Create a Mongoose schema and model for blog posts
- Build REST API endpoints for create, read, update, and delete operations
- Return proper HTTP status codes and JSON responses
- Organize page routes and API routes into separate Express Router files
- Handle 404 and server errors in an Express application

---

## Topics Covered
- Express.js application setup
- Static file serving with `express.static()`
- Page routing with `res.sendFile()`
- MongoDB and Mongoose basics
- REST API design
- CRUD operations
- JSON request and response handling
- Error handling middleware
- Environment variables with `dotenv`

---

## Prerequisites
Before starting this workshop, make sure you have:
- Basic JavaScript knowledge
- Completed Workshop 02 and Workshop 03, or equivalent understanding
- Basic familiarity with MongoDB concepts from Workshop 04
- Installed:
  - Node.js
  - npm
  - Git
  - MongoDB Atlas account or local MongoDB instance

---

## Project Description
You will build:
> A small Express and MongoDB application that serves web pages and exposes a REST API for blog posts

Your application will:
- Serve the existing page routes `/`, `/about`, and `/contact`
- Add a new `/blog` page route
- Create API endpoints under `/api/posts`
- Store blog post data in MongoDB
- Support create, read, update, and delete operations for blog posts
- Return JSON responses for API requests

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Laurea-FullStack-2026/WS05_Rest_Api.git
cd WS05_Rest_Api
```

### 2. Navigate to the starter folder
```bash
cd starter
```

### 3. Install dependencies
```bash
npm install
```

### 4. Create your environment file
Copy `.env.example` into `.env` and update the values.

Example:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/blog
PORT=3000
```

Atlas target for this workshop:
- Database: `blog`
- Collection: `posts`

### 5. Start working on the tasks
Open `server.js`, `routes/pages.js`, `models/Post.js`, and `routes/posts.js` and follow the TODO comments.

The repository also includes a `Solution/` folder with a complete reference implementation.

---

## Project Structure

```text
WS05_Rest_Api/
├── README.md
├── requirements.md
├── Solution/
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   ├── server.js
│   ├── models/
│   │   └── Post.js
│   ├── routes/
│   │   ├── pages.js
│   │   └── posts.js
│   └── public/
│       ├── index.html
│       ├── about.html
│       ├── contact.html
│       ├── blog.html
│       ├── 404.html
│       ├── 500.html
│       └── styles/
│           └── style.css
└── starter/
    ├── .env.example
    ├── .gitignore
    ├── README.md
    ├── package.json
    ├── server.js
    ├── models/
    │   └── Post.js
    ├── routes/
   │   ├── pages.js
    │   └── posts.js
    └── public/
        ├── index.html
        ├── about.html
        ├── contact.html
        ├── blog.html
        ├── 404.html
        ├── 500.html
        └── styles/
            └── style.css
```

---

## Tasks Overview

### Task 1 - Setup the Application
- Install the required packages
- Load environment variables
- Create the Express app
- Enable JSON body parsing
- Connect to MongoDB

### Task 2 - Add Page Routes
- Serve the existing routes `/`, `/about`, and `/contact`
- Add a new route `/blog`
- Define those routes in `routes/pages.js`
- Use `res.sendFile()` for page responses

### Task 3 - Create the Post Model
- Define a Mongoose schema for blog posts
- Add required fields such as title and content
- Export the model

### Task 4 - Create Posts
- Implement `POST /api/posts`
- Save a new blog post to MongoDB
- Return the created document as JSON

### Task 5 - Read Posts
- Implement `GET /api/posts`
- Implement `GET /api/posts/:id`
- Return proper status codes for missing or invalid IDs

### Task 6 - Update and Delete Posts
- Implement `PUT /api/posts/:id`
- Implement `DELETE /api/posts/:id`

### Task 7 - Error Handling and Startup
- Add 404 handling
- Add server error handling
- Start the application with `app.listen()`

---

## Running Your Server

1. Make sure you are in the `starter` directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```
   Or:
   ```bash
   npm start
   ```
4. Test these browser routes:
   - `http://localhost:3000/`
   - `http://localhost:3000/about`
   - `http://localhost:3000/contact`
   - `http://localhost:3000/blog`
5. Test the API endpoints with Postman or curl:
   - `POST /api/posts`
   - `GET /api/posts`
   - `GET /api/posts/:id`
   - `PUT /api/posts/:id`
   - `DELETE /api/posts/:id`

---

## Manual Testing Checklist
- [ ] Server starts without syntax errors
- [ ] MongoDB connection is successful
- [ ] Home page loads at `/`
- [ ] About page loads at `/about`
- [ ] Contact page loads at `/contact`
- [ ] Blog page loads at `/blog`
- [ ] `POST /api/posts` creates a new post
- [ ] `GET /api/posts` returns all posts
- [ ] `GET /api/posts/:id` returns one post
- [ ] `PUT /api/posts/:id` updates a post
- [ ] `DELETE /api/posts/:id` deletes a post
- [ ] Invalid URLs return a 404 response

---

## Learning Resources
- [Express.js Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [REST API Tutorial](https://restfulapi.net/)

---

## Submission
After completing the workshop:
1. Test your routes and API endpoints
2. Commit your work with meaningful messages
3. Push your repository to GitHub

---

## Next Steps
After this workshop, you will be ready to:
- Add query filters and pagination to APIs
- Build frontend pages that consume your API
- Add validation and improved error handling
- Explore authentication and protected routes