# Starter Notes

Work only inside this `starter/` folder.

## Quick Start
1. Install dependencies with `npm install`
2. Create `.env` from `.env.example`
3. Start the server with `npm run dev`
4. Open `server.js`, `routes/pages.js`, `models/Post.js`, and `routes/posts.js`
5. Complete the TODO comments in order

The `Solution/` folder in the repository root contains a complete reference implementation.

## Browser Routes
- `GET /`
- `GET /about`
- `GET /contact`
- `GET /blog`

## API Routes
- `POST /api/posts`
- `GET /api/posts`
- `GET /api/posts/:id`
- `PUT /api/posts/:id`
- `DELETE /api/posts/:id`

## Suggested Test Body
```json
{
  "title": "My First Blog Post",
  "content": "This API stores blog posts in MongoDB.",
  "author": "Student"
}
```