# Phase 3: React Frontend Plan

This phase turns TaskFlow Pro into a real frontend application.

Time required:

- 5 days
- 4 to 5 focused hours/day
- Main project: TaskFlow Pro Web

Frontend stack:

- Vite
- React
- React Router
- CSS modules or plain CSS
- Vitest
- React Testing Library

Reference docs:

- React Learn: https://react.dev/learn
- React Router docs: https://reactrouter.com/
- Vite guide: https://vite.dev/guide/
- Vitest docs: https://vitest.dev/
- Testing Library React: https://testing-library.com/docs/react-testing-library/intro/

---

## Frontend Goal

By the end of Day 16, your React app should support:

- Vite project setup
- reusable layout components
- login and register screens
- Google OAuth button
- protected dashboard routes
- auth context
- project list
- task list
- task create/edit form
- task search/filter/sort
- status updates
- dashboard summary
- loading, error, and empty states
- API client with token refresh
- basic React tests

The React app should be useful even before integration. On Days 12 to 14, use temporary local state and mock data. On Day 15, connect the API client shape. On Day 17, wire it fully to the Express backend.

---

## Daily React Routine

Use this routine every day:

1. Read docs for 45 minutes.
2. Build components for 2.5 to 3 hours.
3. Test in the browser for 30 minutes.
4. Write notes for 15 minutes.
5. Explain one component tree out loud.

Always ask:

- What state does this component own?
- What data comes from props?
- What data comes from context?
- What side effect runs here?
- What happens while loading?
- What happens when the API fails?

---

## Project Setup

Create this folder beside `api/`:

```txt
taskflow-pro/
  web/
    src/
      api/
        client.js
        auth.api.js
        projects.api.js
        tasks.api.js
      components/
        AppShell.jsx
        Button.jsx
        EmptyState.jsx
        FieldError.jsx
        LoadingState.jsx
        ProjectCard.jsx
        TaskCard.jsx
        TaskForm.jsx
      context/
        AuthContext.jsx
      hooks/
        useAuth.js
        useTasks.js
        useProjects.js
      layouts/
        DashboardLayout.jsx
      pages/
        AuthCallbackPage.jsx
        DashboardPage.jsx
        LoginPage.jsx
        ProjectsPage.jsx
        RegisterPage.jsx
        TasksPage.jsx
      routes/
        AppRoutes.jsx
        ProtectedRoute.jsx
      styles/
        base.css
        layout.css
        components.css
      tests/
        LoginPage.test.jsx
        TaskForm.test.jsx
    package.json
    .env.example
```

Create app:

```bash
npm create vite@latest web -- --template react
cd web
npm install
npm install react-router-dom
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

Use these scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest"
  }
}
```

Environment variable:

```txt
VITE_API_URL=http://localhost:5000/api
```

---

## Frontend API Contract

The React app should expect this backend response shape:

Success:

```json
{
  "success": true,
  "data": {}
}
```

Error:

```json
{
  "success": false,
  "message": "Something went wrong.",
  "errors": []
}
```

Auth behavior:

- Access token is stored in React memory through `AuthContext`.
- Refresh token lives in httpOnly cookie from the backend.
- On page refresh, React calls `POST /api/auth/refresh`.
- If refresh succeeds, user remains logged in.
- If refresh fails, user goes to login.
- Do not store JWTs in localStorage.

---

# Day 12: Vite, Components, Layout

## Goal

Create the React app shell and understand component thinking.

## Learn

Study:

- JSX
- components
- props
- events
- conditional rendering
- lists and keys
- CSS organization
- Vite dev server

## Build

Create:

- app routes placeholder
- dashboard layout
- sidebar or top navigation
- reusable `Button`
- reusable `EmptyState`
- reusable `LoadingState`
- sample dashboard page using mock data

Pages:

```txt
/login
/register
/dashboard
/projects
/tasks
```

For now, these pages can render static mock content.

Design direction:

- Keep it clean and practical.
- Make it feel like a developer productivity tool.
- Avoid a landing page.
- First screen after login should be the dashboard.

## Deliverable

You should be able to run:

```bash
npm run dev
```

Then open:

```txt
http://localhost:5173
```

## Self-Check

Explain:

- What JSX is.
- Why React components must return one tree.
- Why list items need keys.
- Difference between props and local variables.

---

# Day 13: State, Forms, Search, Filter, Sort

## Goal

Rebuild the core TaskFlow behavior in React using state.

## Learn

Study:

- `useState`
- controlled inputs
- form submit handling
- derived state
- lifting state up
- array updates
- component composition

## Build

Use mock state first.

Create:

- `TaskForm`
- `TaskCard`
- `TasksPage`
- `ProjectCard`
- `ProjectsPage`
- `useTasks`
- `useProjects`

Task features:

- Add task
- Edit task
- Delete task
- Toggle complete
- Change status
- Search by title, description, tags
- Filter by status and priority
- Sort by newest, priority, due date

Project features:

- Add project
- Edit project
- Delete project
- Select project filter

Rules:

- Use controlled forms.
- Do not mutate arrays directly.
- Keep search/filter/sort as derived values.
- Keep validation messages visible near fields.

## Deliverable

Tasks and projects should work in React using local state, even without the backend.

## Self-Check

Explain:

- What controlled inputs are.
- Why state updates must be immutable.
- What derived state means.
- Why search results should not be stored as separate permanent state.

---

# Day 14: Routing, Auth Pages, Protected Routes

## Goal

Create the frontend auth structure.

## Learn

Study:

- React Router
- nested routes
- redirects
- context
- custom hooks
- protected routes
- form validation

## Build

Create:

- `AuthContext`
- `useAuth`
- `ProtectedRoute`
- `LoginPage`
- `RegisterPage`
- `AuthCallbackPage`
- logout button

Auth context state:

```js
{
  user: null,
  accessToken: null,
  isLoading: true,
  error: null
}
```

Auth context actions:

- `register`
- `login`
- `logout`
- `refreshSession`
- `setAccessToken`

Protected route behavior:

- If loading, show loading state.
- If logged out, redirect to `/login`.
- If logged in, render the page.

Google OAuth button:

```txt
Continue with Google
```

Click behavior:

```js
window.location.href = `${API_BASE_URL}/auth/google`;
```

Auth callback behavior:

- Backend redirects to `/auth/callback`.
- React calls `refreshSession`.
- On success, redirect to `/dashboard`.
- On failure, redirect to `/login`.

## Deliverable

You should be able to navigate through auth screens and protected pages using mocked auth functions.

## Self-Check

Explain:

- Why auth belongs in context.
- Why protected routes need a loading state.
- Why OAuth redirects away from React.
- Why auth state should survive refresh through the backend, not localStorage tokens.

---

# Day 15: API Client, Loading, Errors, Token Refresh

## Goal

Prepare the React app to talk to the Express backend.

## Learn

Study:

- `fetch`
- request headers
- cookies with `credentials: "include"`
- API error handling
- loading states
- retry after refresh
- `useEffect`

## Build

Create API files:

- `api/client.js`
- `api/auth.api.js`
- `api/projects.api.js`
- `api/tasks.api.js`

Client rules:

- Base URL comes from `VITE_API_URL`.
- Every request parses the standard response shape.
- Protected requests include `Authorization: Bearer ACCESS_TOKEN`.
- Requests include `credentials: "include"` so refresh cookie works.
- If protected request returns `401`, call refresh once, then retry once.
- If retry fails, log out the user.

API functions:

Auth:

- `registerUser`
- `loginUser`
- `logoutUser`
- `refreshSession`
- `getMe`
- `changePassword`

Projects:

- `getProjects`
- `createProject`
- `updateProject`
- `deleteProject`

Tasks:

- `getTasks`
- `createTask`
- `updateTask`
- `updateTaskStatus`
- `deleteTask`

UI states:

- show loading while fetching
- show empty state when no projects/tasks
- show field errors for validation failures
- show banner error for API failures

## Deliverable

React app should have a complete API layer ready for Day 17 integration.

## Self-Check

Explain:

- Why `credentials: "include"` is needed.
- Why API code should not be scattered across components.
- Why retrying refresh forever would be a bug.
- What a component should render while waiting for data.

---

# Day 16: Dashboard, Polish, React Tests

## Goal

Make the frontend feel complete before full integration.

## Learn

Study:

- basic component testing
- user-event testing
- accessibility basics
- focus states
- dashboard calculations
- optimistic vs pessimistic updates

## Build

Dashboard should show:

- total tasks
- completed tasks
- active tasks
- overdue tasks
- tasks due today
- high priority tasks
- recent tasks
- project count

Task board should show:

- Todo
- Doing
- Done

This board does not need drag and drop yet. Use buttons or selects to move status. Drag and drop is future polish after the full-stack app works.

Add tests:

- login form renders
- login validation works
- task form validates required title
- protected route redirects when logged out
- dashboard renders summary values from mock data

Polish:

- mobile layout
- focus styles
- useful empty states
- disabled loading buttons
- readable errors
- consistent spacing

## Deliverable

Frontend should be ready for real backend integration.

## Self-Check

Explain:

- What you tested and why.
- What state lives in auth context.
- What state lives in page components.
- What state is fetched from the API.
- What happens when the backend is offline.

---

# React Final Checklist

Before starting integration, verify:

- Vite dev server runs.
- Routes work.
- Auth context exists.
- Login/register pages exist.
- Google OAuth button opens backend OAuth URL.
- Protected routes redirect logged-out users.
- Dashboard layout works.
- Project UI works with mock/local data.
- Task UI works with mock/local data.
- API files match backend endpoints.
- Loading, empty, and error states exist.
- Tests run with `npm test`.

Commit message:

```bash
git add .
git commit -m "Build TaskFlow Pro React frontend"
```
