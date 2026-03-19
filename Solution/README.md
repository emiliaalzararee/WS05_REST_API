# Workshop 05 Solution

This folder contains a complete reference implementation for Workshop 05.

Use it as an instructor reference, a verification target, or a comparison point after students have attempted the tasks in the `starter/` folder.

## Purpose
The `starter/` folder is the student workspace and contains incomplete CRUD route handlers with TODO comments.

The `Solution/` folder contains:
- complete page routing with Express Router
- complete REST API CRUD routing with Express Router
- working MongoDB model integration with Mongoose
- the same page assets used in the starter

## Folder Structure

```text
Solution/
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

## What This Solution Includes

### Page Routes
- `GET /`
- `GET /about`
- `GET /contact`
- `GET /blog`

These routes are defined in `routes/pages.js`.

### API Routes
- `POST /api/posts`
- `GET /api/posts`
- `GET /api/posts/:id`
- `PUT /api/posts/:id`
- `DELETE /api/posts/:id`

These routes are defined in `routes/posts.js`.

### Data Model
The solution uses a `Post` model with these fields:
- `title`
- `content`
- `author`

The model is defined in `models/Post.js`.

## Setup

### 1. Install dependencies
```bash
cd Solution
npm install
```

### 2. Create environment variables
Create a `.env` file in this folder based on `.env.example`.

Example:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/blog
PORT=3000
```

Atlas target for this workshop:
- Database: `blog`
- Collection: `posts`

### 3. Start the solution
```bash
npm run dev
```

Or:

```bash
npm start
```

## Testing

### Browser Routes
Open these in the browser:
- `http://localhost:3000/`
- `http://localhost:3000/about`
- `http://localhost:3000/contact`
- `http://localhost:3000/blog`

### Example API Tests

Create:
```bash
curl -X POST http://localhost:3000/api/posts \
  -H "Content-Type: application/json" \
  -d '{"title":"First Post","content":"Hello REST API","author":"Teacher"}'
```

Get all:
```bash
curl http://localhost:3000/api/posts
```

Get one:
```bash
curl http://localhost:3000/api/posts/<post-id>
```

Update:
```bash
curl -X PUT http://localhost:3000/api/posts/<post-id> \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Post","content":"Updated content","author":"Teacher"}'
```

Delete:
```bash
curl -X DELETE http://localhost:3000/api/posts/<post-id>
```

## Notes for Teaching
- The starter and solution use the same overall structure to make comparison easy.
- All routes are mounted from `server.js` and defined in the `routes/` folder.
- The page route `/blog` is intentionally separate from the REST resource route `/api/posts`.
- The `Post` model maps to the MongoDB `posts` collection by default.
- This solution is intended as a reference, not the primary student workspace.