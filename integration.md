# Phase 4: Full-Stack Integration Plan

This phase connects the Express backend and React frontend into one working full-stack app.

Time required:

- 2 days
- 4 to 5 focused hours/day
- Final delivery: local project + GitHub

Main project:

# TaskFlow Pro

By the end of Day 18, TaskFlow Pro should be ready to show as a serious learning portfolio project.

---

## Integration Goal

The finished app should support:

- email/password register
- email/password login
- Google OAuth basic login
- refresh-session on page reload
- logout
- protected dashboard
- project CRUD
- task CRUD
- task status updates
- search, filter, and sort
- dashboard summary
- loading, empty, and error states
- backend tests
- frontend tests
- final README
- GitHub-ready project structure

Deployment is not required for this plan. Local + GitHub is the delivery target.

---

## Local Ports

Use:

```txt
Backend: http://localhost:5000
Frontend: http://localhost:5173
```

Backend env:

```txt
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://127.0.0.1:27017/taskflow_pro
JWT_ACCESS_SECRET=
JWT_REFRESH_SECRET=
ACCESS_TOKEN_TTL=15m
REFRESH_TOKEN_TTL=7d
COOKIE_NAME=taskflow_refresh
WEB_ORIGIN=http://localhost:5173
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback
SESSION_SECRET=
```

Frontend env:

```txt
VITE_API_URL=http://localhost:5000/api
```

---

# Day 17: Connect React to Express

## Goal

Replace mock/local frontend data with real API calls.

## Build Order

Use this exact order:

1. Start MongoDB.
2. Start Express API.
3. Confirm `/api/health`.
4. Start React app.
5. Confirm React can call `/api/health` or an auth endpoint.
6. Connect register.
7. Connect login.
8. Connect refresh on page reload.
9. Connect logout.
10. Connect projects.
11. Connect tasks.
12. Connect filters and query params.
13. Connect task status updates.
14. Connect dashboard stats.
15. Connect Google OAuth.

Do not start with Google OAuth. First make email/password auth and CRUD reliable.

## Backend Integration Requirements

CORS must allow:

```js
{
  origin: "http://localhost:5173",
  credentials: true
}
```

Refresh cookie must use:

```js
{
  httpOnly: true,
  sameSite: "lax",
  secure: false
}
```

Protected requests must receive:

```txt
Authorization: Bearer ACCESS_TOKEN
```

## Frontend Integration Requirements

API requests must include:

```js
credentials: "include"
```

On app load:

1. Set auth loading to true.
2. Call `/api/auth/refresh`.
3. If success, store access token in memory and fetch `/api/auth/me`.
4. If failure, clear user and show logged-out state.
5. Set auth loading to false.

On `401` from a protected API call:

1. Try refresh once.
2. Retry original request once.
3. If still failing, log out and redirect to `/login`.

## Manual Integration Checklist

Run this checklist slowly:

- Register a new user.
- Confirm user appears in MongoDB.
- Log out.
- Log in.
- Refresh the browser.
- Confirm user stays logged in.
- Create a project.
- Edit the project.
- Create three tasks.
- Set one task to Doing.
- Set one task to Done.
- Filter by status.
- Filter by priority.
- Search by title.
- Edit a task.
- Delete a task.
- Log out.
- Confirm dashboard is blocked.
- Try an invalid login.
- Try creating a task with an empty title.
- Stop the backend and confirm React shows an error.
- Restart backend and confirm app recovers.
- Test Google OAuth.

## Debugging Rules

If auth fails, check in this order:

1. Backend console error.
2. Browser Network tab.
3. Response status code.
4. Response JSON message.
5. Request headers.
6. Cookie exists or not.
7. CORS settings.
8. Access token exists in React memory.
9. Backend auth middleware.

If data fails, check:

- Is the request URL correct?
- Is the method correct?
- Is JSON body being sent?
- Is `Content-Type: application/json` set?
- Is the user authenticated?
- Is the database connected?
- Is owner filtering hiding the data?

## Deliverable

By the end of Day 17:

- Email/password auth works end to end.
- Protected dashboard works.
- Projects and tasks persist in MongoDB.
- React no longer depends on mock data.
- Main errors are visible in the UI.

Commit message:

```bash
git add .
git commit -m "Connect React frontend to Express API"
```

---

# Day 18: Final QA, README, GitHub, Demo Script

## Goal

Finish TaskFlow Pro like a portfolio project.

## Final QA Pass

Run:

```bash
cd api
npm test
```

Run:

```bash
cd web
npm test
npm run build
```

Manual browser checks:

- desktop layout
- mobile layout
- keyboard navigation basics
- focus states
- form validation
- loading states
- empty states
- error states
- auth refresh after browser reload
- logout after refresh
- Google OAuth path

## Final README

Create `taskflow-pro/README.md`.

Include:

- project name
- short description
- screenshots
- features
- tech stack
- folder structure
- local setup steps
- environment variable examples
- API summary
- auth explanation
- testing commands
- what you learned
- future improvements

Suggested README outline:

```md
# TaskFlow Pro

TaskFlow Pro is a full-stack productivity app built with React, Express, MongoDB, and JWT auth.

## Features

- Email/password auth
- Google OAuth basic login
- Protected dashboard
- Projects
- Tasks
- Search/filter/sort
- Status board
- Dashboard stats

## Tech Stack

- React
- Vite
- Node.js
- Express
- MongoDB
- Mongoose
- JWT

## Local Setup

Explain backend and frontend setup.

## API Overview

List major endpoints.

## What I Learned

Write this in your own words.
```

## Explanation Notes

Create:

```txt
taskflow-pro/explanation-notes.md
```

Answer:

1. What happens when a user registers?
2. What happens when a user logs in?
3. Why is the refresh token in an httpOnly cookie?
4. How does React stay logged in after refresh?
5. How does a task get created from the UI?
6. How does the backend protect user data?
7. What does Mongoose do?
8. What does React Router do?
9. What did you test?
10. What would you improve next?

## Portfolio Demo Script

Prepare a 2-minute explanation:

```txt
TaskFlow Pro is a full-stack productivity app I built to practice JavaScript, Node, Express, MongoDB, and React.

The backend has REST APIs, MongoDB models, email/password auth, refresh tokens, protected routes, and basic Google OAuth.

The frontend is built in React with protected routes, auth context, dashboard views, project and task management, loading states, and error handling.

The most important thing I learned was how data moves from a React form to an Express route, into MongoDB, and back to the UI.
```

## GitHub Checklist

Before pushing:

- Remove real `.env` files.
- Keep `.env.example`.
- Confirm `node_modules` is ignored.
- Confirm tests pass.
- Confirm README setup steps are accurate.
- Add screenshots.
- Make final commit.

Final commit:

```bash
git add .
git commit -m "Finalize TaskFlow Pro full-stack project"
```

## Final Success Criteria

You have completed the roadmap when you can:

- Run backend and frontend locally.
- Register, log in, refresh, and log out.
- Use Google OAuth basic login.
- Create and manage projects.
- Create and manage tasks.
- Explain the auth flow.
- Explain the API flow.
- Explain the React component flow.
- Explain your database models.
- Run tests.
- Show the project from GitHub.

The final test:

Open the app, create a task, trace the request in the Network tab, find the document in MongoDB, and explain every step.
