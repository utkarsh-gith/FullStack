# Phase 2: Node + Express Backend Plan

This phase turns TaskFlow from a browser-only JavaScript project into a real backend API.

Time required:

- 4 days
- 4 to 5 focused hours/day
- Main project: TaskFlow Pro API

Primary backend database:

- MongoDB
- Mongoose

Comparison lab:

- SQLite
- Prisma

Do not build two full backends. Build TaskFlow Pro with MongoDB/Mongoose, then use SQLite/Prisma only to understand how relational modeling feels different.

---

## Backend Goal

By the end of Day 11, your backend should support:

- Health check route
- Express route structure
- MongoDB connection
- User, Project, Task, and Session models
- Project CRUD
- Task CRUD
- Email/password register and login
- Password hashing
- Access token and refresh token flow
- Logout
- Protected routes
- Basic role checks
- Profile route
- Password change
- Basic Google OAuth
- Centralized error handling
- Backend tests with `node:test` and `supertest`

Reference docs:

- Node.js Learn: https://nodejs.org/learn/getting-started/introduction-to-nodejs
- Express routing: https://expressjs.com/en/guide/routing.html
- Express middleware: https://expressjs.com/en/guide/using-middleware.html
- Mongoose docs: https://mongoosejs.com/docs/
- MongoDB Node driver docs: https://www.mongodb.com/docs/drivers/node/current/
- JSON Web Tokens: https://jwt.io/introduction
- OWASP password storage: https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Password_Storage_Cheat_Sheet.md
- Prisma SQLite quickstart: https://www.prisma.io/docs/getting-started/prisma-orm/quickstart/sqlite

---

## Daily Backend Routine

Use this routine every day:

1. Read docs for 45 minutes.
2. Build one backend feature for 2.5 to 3 hours.
3. Test routes with Thunder Client, Postman, curl, or an `.http` file.
4. Write notes for 15 minutes.
5. Explain one request lifecycle out loud.

Always ask:

- What route is being called?
- What middleware runs first?
- What controller handles the request?
- What model touches the database?
- What response shape comes back?
- What error happens if input is bad?

---

## Project Setup

Create this folder after finishing the JavaScript phase:

```txt
taskflow-pro/
  api/
    src/
      app.js
      server.js
      config/
        db.js
        env.js
      controllers/
        auth.controller.js
        project.controller.js
        task.controller.js
        user.controller.js
      middleware/
        auth.middleware.js
        error.middleware.js
        validate.middleware.js
      models/
        User.js
        Project.js
        Task.js
        Session.js
      routes/
        auth.routes.js
        project.routes.js
        task.routes.js
        user.routes.js
      services/
        auth.service.js
        token.service.js
        oauth.service.js
      tests/
        auth.test.js
        task.test.js
      utils/
        asyncHandler.js
        AppError.js
        sendResponse.js
    package.json
    .env.example
```

Use ES modules:

```json
{
  "type": "module"
}
```

Install packages:

```bash
npm init -y
npm install express mongoose dotenv cors cookie-parser jsonwebtoken argon2 passport passport-google-oauth20 express-session
npm install -D nodemon supertest
```

If `argon2` gives install trouble on your machine, use `bcryptjs` as a temporary learning fallback and write a note explaining the tradeoff.

---

## API Contract

Backend API prefix:

```txt
/api
```

Standard success response:

```json
{
  "success": true,
  "data": {}
}
```

Standard error response:

```json
{
  "success": false,
  "message": "Something went wrong.",
  "errors": []
}
```

Auth endpoints:

```txt
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
POST   /api/auth/refresh
GET    /api/auth/me
PATCH  /api/auth/password
GET    /api/auth/google
GET    /api/auth/google/callback
```

Project endpoints:

```txt
GET     /api/projects
POST    /api/projects
PATCH   /api/projects/:id
DELETE  /api/projects/:id
```

Task endpoints:

```txt
GET     /api/tasks
POST    /api/tasks
PATCH   /api/tasks/:id
PATCH   /api/tasks/:id/status
DELETE  /api/tasks/:id
```

---

## Data Models

### User

Fields:

- `name`
- `email`
- `passwordHash`
- `provider`: `"local"` or `"google"`
- `googleId`
- `role`: `"user"` or `"admin"`
- `avatarUrl`
- `createdAt`
- `updatedAt`

Rules:

- Email must be unique and lowercase.
- Local users must have `passwordHash`.
- Google users can have no password.
- Never return `passwordHash` in API responses.

### Session

Fields:

- `userId`
- `refreshTokenHash`
- `expiresAt`
- `revokedAt`
- `createdAt`

Rules:

- Store only a hashed refresh token.
- Rotate refresh tokens on refresh.
- Revoke the session on logout.

### Project

Fields:

- `ownerId`
- `name`
- `description`
- `color`
- `createdAt`
- `updatedAt`

Rules:

- Project belongs to one user.
- A user can have many projects.
- Project name is required.

### Task

Fields:

- `ownerId`
- `projectId`
- `title`
- `description`
- `completed`
- `status`: `"todo"`, `"doing"`, `"done"`
- `priority`: `"low"`, `"medium"`, `"high"`
- `dueDate`
- `tags`
- `createdAt`
- `updatedAt`

Rules:

- Task belongs to one user.
- Task can belong to one project.
- Title is required.
- Only the owner can read or mutate the task.

---

# Day 8: Node.js, npm, Express, Routing

## Goal

Create the first working API server.

## Learn

Study:

- Node.js runtime
- npm scripts
- `package.json`
- ES modules in Node
- Express app vs server
- routes
- middleware
- environment variables
- status codes

## Build

Create:

- `api/package.json`
- `src/app.js`
- `src/server.js`
- `src/config/env.js`
- `src/utils/sendResponse.js`
- `src/utils/AppError.js`
- `src/middleware/error.middleware.js`

Required routes:

```txt
GET /api/health
GET /api/version
```

Expected response:

```json
{
  "success": true,
  "data": {
    "status": "ok"
  }
}
```

Add middleware:

- `express.json()`
- `cookie-parser`
- `cors`
- request logging in development
- not-found handler
- global error handler

Add scripts:

```json
{
  "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js",
    "test": "node --test"
  }
}
```

## Deliverable

You should be able to run:

```bash
npm run dev
```

Then open:

```txt
http://localhost:5000/api/health
```

## Self-Check

Explain:

- Why `app.js` and `server.js` are separate.
- What middleware is.
- Why environment variables should not be hard-coded.
- Why every API response should have a predictable shape.

---

# Day 9: MongoDB, Mongoose, Models, CRUD

## Goal

Connect Express to MongoDB and build real project/task CRUD.

## Learn

Study:

- MongoDB documents
- Mongoose schemas
- Mongoose models
- required fields
- enums
- indexes
- async controllers
- REST naming
- query parameters

## Build

Create:

- `src/config/db.js`
- `src/models/User.js`
- `src/models/Project.js`
- `src/models/Task.js`
- `src/routes/project.routes.js`
- `src/routes/task.routes.js`
- `src/controllers/project.controller.js`
- `src/controllers/task.controller.js`
- `src/utils/asyncHandler.js`

For now, use a temporary development user ID constant so you can build CRUD before auth:

```js
const DEV_USER_ID = "replace-after-auth";
```

Replace it on Day 10 with real authenticated `req.user.id`.

Project features:

- Create project
- List current user's projects
- Update project
- Delete project

Task features:

- Create task
- List tasks
- Filter by `status`, `priority`, `projectId`, and `search`
- Update task fields
- Update task status
- Delete task

Query examples:

```txt
GET /api/tasks?status=todo
GET /api/tasks?priority=high
GET /api/tasks?search=express
GET /api/tasks?projectId=PROJECT_ID
```

Validation rules:

- Project name is required.
- Task title is required.
- Priority must be `low`, `medium`, or `high`.
- Status must be `todo`, `doing`, or `done`.
- A user must not access another user's data.

## Deliverable

You should be able to create projects and tasks from an API client and see them saved in MongoDB.

## Self-Check

Explain:

- What a Mongoose schema does.
- What a Mongoose model does.
- Why controllers should not contain repeated error boilerplate.
- Why route names should describe resources, not actions.

---

# Day 10: Email/Password Auth, JWT, Refresh Cookie

## Goal

Build a serious auth foundation.

## Learn

Study:

- password hashing
- login flow
- JWT access tokens
- refresh tokens
- httpOnly cookies
- protected routes
- auth middleware
- logout
- token rotation

## Auth Rules

Use this policy:

- Access token lifetime: 15 minutes.
- Refresh token lifetime: 7 days.
- Access token is returned in the JSON response.
- Refresh token is stored in an httpOnly cookie.
- React stores the access token in memory, not localStorage.
- Refresh token is rotated on every refresh.
- Refresh token hashes are stored in the `Session` collection.

Local cookie settings:

```js
{
  httpOnly: true,
  sameSite: "lax",
  secure: false
}
```

Production note:

- Use `secure: true` on HTTPS.

## Build

Create:

- `src/models/Session.js`
- `src/routes/auth.routes.js`
- `src/controllers/auth.controller.js`
- `src/services/auth.service.js`
- `src/services/token.service.js`
- `src/middleware/auth.middleware.js`

Implement:

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `POST /api/auth/refresh`
- `GET /api/auth/me`

Register request:

```json
{
  "name": "Utkarsh",
  "email": "utkarsh@example.com",
  "password": "StrongPass123!"
}
```

Login request:

```json
{
  "email": "utkarsh@example.com",
  "password": "StrongPass123!"
}
```

Auth response:

```json
{
  "success": true,
  "data": {
    "user": {
      "id": "USER_ID",
      "name": "Utkarsh",
      "email": "utkarsh@example.com",
      "role": "user"
    },
    "accessToken": "JWT_ACCESS_TOKEN"
  }
}
```

Protect these routes:

- all project routes
- all task routes
- `GET /api/auth/me`

Replace the Day 9 temporary user ID with `req.user.id`.

## Deliverable

You should be able to:

- Register a user.
- Log in.
- Call protected routes with `Authorization: Bearer ACCESS_TOKEN`.
- Refresh the access token using the refresh cookie.
- Log out and make refresh fail afterward.

## Self-Check

Explain:

- Why passwords are hashed.
- Why refresh tokens are stored in httpOnly cookies.
- Why access tokens should be short-lived.
- Why refresh tokens should be rotated.
- Why localStorage is a poor place for auth tokens.

---

# Day 11: OAuth, Roles, Profile, Tests, Prisma Lab

## Goal

Finish the backend as a portfolio-ready API.

## Learn

Study:

- OAuth login flow
- Passport Google strategy
- role-based authorization
- test runner basics
- Supertest
- Prisma schema basics
- relational modeling

## Build: Google OAuth Basic Flow

Install was already included:

```bash
npm install passport passport-google-oauth20 express-session
```

Add environment variables:

```txt
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback
WEB_ORIGIN=http://localhost:5173
SESSION_SECRET=
```

Implement:

```txt
GET /api/auth/google
GET /api/auth/google/callback
```

Flow:

1. User clicks "Continue with Google" in React.
2. Browser opens `/api/auth/google`.
3. Google redirects to `/api/auth/google/callback`.
4. Backend finds or creates the user.
5. Backend sets refresh token cookie.
6. Backend redirects to `http://localhost:5173/auth/callback`.
7. React calls `/api/auth/refresh` to receive an access token.

Rules:

- Match users by verified email when possible.
- Store `googleId`.
- Do not create a password hash for Google-only users.
- Keep this as basic OAuth. Email verification and forgot-password emails are future upgrades.

## Build: Roles and Profile

Add:

- `PATCH /api/auth/password`
- `GET /api/auth/me`
- `PATCH /api/users/me`
- `requireRole("admin")` middleware

Password change rules:

- Local users must provide current password.
- New password must be hashed.
- Google-only users should receive a clear error unless they set a password in a future upgrade.

## Build: Backend Tests

Use:

- `node:test`
- `assert`
- `supertest`

Test:

- health route
- register validation
- duplicate email rejection
- login success
- login failure
- protected route without token
- protected route with token
- create project
- create task
- task ownership protection
- refresh token success
- logout revokes refresh

## Build: SQLite + Prisma Comparison Lab

Create a separate scratch folder:

```txt
api/prisma-lab/
```

Do not connect it to the main app.

Practice:

- Install Prisma.
- Create SQLite database.
- Model `User`, `Project`, and `Task`.
- Run one migration.
- Create one user and one task using Prisma Client.

Write a short note:

```txt
MongoDB/Mongoose feels good for flexible documents.
SQLite/Prisma feels good for relational data, migrations, and strict schema thinking.
```

## Deliverable

Backend should now be ready for the React frontend.

Minimum finished state:

- Auth works.
- Protected CRUD works.
- MongoDB data is user-scoped.
- OAuth basic flow is wired.
- Tests cover core happy paths and failure paths.
- `.env.example` exists.

## Self-Check

Explain:

- What OAuth solves.
- What Passport does.
- Why user ownership checks matter.
- Why tests should cover both success and failure.
- What you liked and disliked about Prisma compared to Mongoose.

---

# Backend Final Checklist

Before starting React, verify:

- `npm run dev` starts the API.
- MongoDB connects successfully.
- `/api/health` returns success.
- Register works.
- Login works.
- Refresh works.
- Logout works.
- Google OAuth reaches the callback.
- Project CRUD works for logged-in users.
- Task CRUD works for logged-in users.
- Logged-out users cannot access protected routes.
- User A cannot access User B's tasks.
- `.env.example` is complete.
- Tests run with `npm test`.

Commit message:

```bash
git add .
git commit -m "Build TaskFlow Pro Express API with auth and MongoDB"
```
