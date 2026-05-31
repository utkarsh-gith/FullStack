# Full-Stack JavaScript Developer Roadmap

This roadmap teaches JavaScript by building projects. The goal is not to watch tutorials passively. The goal is to build, debug, explain, and improve one project until it becomes a full-stack portfolio app.

Main project:

# TaskFlow Pro

TaskFlow Pro starts as a vanilla JavaScript task dashboard and grows into a full-stack productivity app with users, auth, projects, tasks, tags, filters, dashboard views, protected routes, and API integration.

---

## Roadmap Files

Follow the files in this order:

1. [JavaScript Foundation](javaScript.md)
2. [Node + Express Backend](node-express.md)
3. [React Frontend](react.md)
4. [Full-Stack Integration](integration.md)

Timeline:

- Days 1 to 7: JavaScript foundation
- Days 8 to 11: Node.js, Express, MongoDB, auth, tests
- Days 12 to 16: React frontend
- Days 17 to 18: full-stack integration and final polish

The post-JavaScript phase is 11 days, which is the 1.5-week full-stack stretch.

---

## Daily Study System

Use this daily loop:

1. Learn for 45 to 60 minutes from documentation.
2. Build for 2.5 to 3 hours.
3. Debug for 30 minutes.
4. Write notes for 15 minutes.
5. Explain what you built out loud for 10 minutes.

Daily rule:

- Build first.
- Refactor after it works.
- Test after refactoring.
- Write notes after testing.

Do not copy full project code from tutorials. You can read examples, but your final project must be written by you.

---

## Day-Wise Roadmap

| Day | Plan | Main Outcome |
|---|---|---|
| 1 | JavaScript | Basic task CRUD with DOM |
| 2 | JavaScript | Search, filter, sort, edit |
| 3 | JavaScript | localStorage, JSON, event delegation |
| 4 | JavaScript | async/await, fake API, loading/error states |
| 5 | JavaScript | modules, architecture, Pomodoro |
| 6 | JavaScript | stats, tests, optional advanced browser APIs |
| 7 | JavaScript | polish, README, revision notes |
| 8 | Backend | Node, npm, Express, middleware, health route |
| 9 | Backend | MongoDB, Mongoose schemas, REST CRUD |
| 10 | Backend | email/password auth, JWT, refresh cookie |
| 11 | Backend | Google OAuth, roles, tests, Prisma comparison |
| 12 | React | Vite app, components, layout |
| 13 | React | state, forms, filters, task UI |
| 14 | React | routing, auth pages, protected routes |
| 15 | React | API client, loading/error states, token refresh |
| 16 | React | dashboard, tests, frontend polish |
| 17 | Integration | connect frontend and backend |
| 18 | Integration | final QA, GitHub, README, demo script |

---

## Final Project Stack

Use this stack unless a plan file says otherwise:

- JavaScript
- Node.js
- Express
- MongoDB
- Mongoose
- JWT auth
- Google OAuth basic flow
- Vite
- React
- React Router
- Vitest
- React Testing Library
- Node test runner
- Supertest

SQLite + Prisma is included as a backend comparison lab, not as the main project database.

---

## Folder Structure Target

Final full-stack structure:

```txt
taskflow-pro/
  api/
    src/
      app.js
      server.js
      config/
      models/
      controllers/
      routes/
      middleware/
      services/
      utils/
      tests/
    package.json
    .env.example
  web/
    src/
      api/
      components/
      context/
      hooks/
      layouts/
      pages/
      routes/
      styles/
      tests/
    package.json
    .env.example
  README.md
```

---

## Definition of Done

You are done when you can:

- Register and log in with email/password.
- Log in with basic Google OAuth.
- Stay logged in after refresh using refresh token flow.
- Create, edit, filter, and delete projects and tasks.
- Protect dashboard routes from logged-out users.
- Show loading, empty, and error states.
- Run backend and frontend tests.
- Explain the request flow from React form to Express route to MongoDB and back.
- Push clean code and a useful README to GitHub.

The real final exam:

Open your project and explain every major file without reading from notes.
