# Phase 1: 7-Day Professional JavaScript Foundation Plan

This is the first phase of the full-stack roadmap. Finish this before starting:

- [Node + Express Backend Plan](node-express.md)
- [React Frontend Plan](react.md)
- [Full-Stack Integration Plan](integration.md)

## Goal

Build one complete vanilla JavaScript project while learning the most important JavaScript concepts practically.

The project will be:

# TaskFlow — Vanilla JavaScript Productivity Dashboard

By the end of 7 days, you will build a browser-based productivity dashboard using only:

- HTML
- CSS
- Vanilla JavaScript

No React.  
No Vue.  
No Angular.  
No jQuery.  
No backend.  
No external JavaScript libraries.

---

## Final Project Features

By the end of the week, TaskFlow should include these core features:

- Add tasks
- Edit tasks
- Delete tasks
- Mark tasks as complete/incomplete
- Search tasks
- Filter tasks
- Sort tasks
- Priority levels
- Due dates
- Tags
- LocalStorage persistence
- Pomodoro timer
- Notes section
- Dashboard statistics
- Async fake API loading
- Error handling
- ES module-based code structure
- Basic testing functions
- Clean final README

These are stretch features. Build them only after the core features work and you can explain the code:

- Drag-and-drop Kanban board
- Canvas chart
- Import/export JSON

---

## Time Commitment

Recommended daily time:

- Realistic target: 4 to 5 hours/day
- Minimum: 3 focused hours/day
- Bonus pace: 6+ hours/day

Daily split:

- 25% learning from docs
- 60% building TaskFlow
- 15% debugging, notes, and explaining your code

Do not spend most of your time watching tutorials.  
Learn a concept, immediately apply it in the project.

Daily rule:

- Finish the core deliverable first.
- Commit or save your work.
- Then attempt stretch work only if you still have energy.

---

## Main Resources

Use these throughout the week.

### 1. MDN JavaScript Guide

Use for official JavaScript concepts.

URL:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

Use for:

- Variables
- Data types
- Functions
- Objects
- Arrays
- Loops
- Error handling
- Classes
- Modules
- Promises
- Async JavaScript

---

### 2. MDN JavaScript Reference

Use when you want exact syntax or behavior.

URL:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

Use for:

- Array methods
- String methods
- Date
- JSON
- Promise
- Map
- Set
- Classes
- Operators
- Built-in objects

---

### 3. JavaScript.info

Use for clear explanations and practice tasks.

URL:

https://javascript.info/

Use for:

- Fundamentals
- Objects
- Arrays
- Functions
- Closures
- Prototypes
- Classes
- Promises
- Async/await
- DOM
- Events
- Forms
- Modules
- LocalStorage
- Fetch

---

### 4. MDN DOM Documentation

Use for DOM manipulation.

URL:

https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

Use for:

- DOM tree
- Selecting elements
- Creating elements
- Updating content
- Events
- Forms
- Browser APIs

---

### 5. MDN DOM Scripting Introduction

Use when learning how JavaScript changes web pages.

URL:

https://developer.mozilla.org/docs/Learn_web_development/Core/Scripting/DOM_scripting

Use for:

- DOM scripting basics
- Manipulating HTML with JavaScript
- Event-driven UI behavior

---

### 6. MDN LocalStorage Documentation

Use for browser storage.

URL:

https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

Use for:

- Saving data in the browser
- Loading saved data after refresh
- JSON.stringify
- JSON.parse

---

### 7. MDN Fetch API

Use on Day 4 for async JavaScript.

URL:

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

Use for:

- Fetching data
- Working with promises
- Handling async operations
- Handling network errors

---

### 8. MDN Drag and Drop API

Use on Day 6.

URL:

https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API

Use for:

- Dragging tasks
- Dropping tasks into Kanban columns
- Browser drag events

---

### 9. MDN Canvas API

Use on Day 6 for dashboard charts.

URL:

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

Use for:

- Drawing simple charts
- Visualizing task statistics

---

### 10. Chrome DevTools Documentation

Use every day for debugging.

URL:

https://developer.chrome.com/docs/devtools

Use for:

- Console debugging
- Inspecting elements
- Breakpoints
- Watching variables
- Checking localStorage
- Debugging events

---

## Tools Required

Install these before starting.

### Code Editor

Use Visual Studio Code.

URL:

https://code.visualstudio.com/

Recommended VS Code extensions:

- Live Server
- Prettier
- ESLint
- JavaScript ES6 code snippets

---

### Browser

Use Google Chrome or any Chromium-based browser.

Required tools:

- DevTools console
- Elements tab
- Sources tab
- Application tab
- LocalStorage inspector

---

### Optional

Use Git and GitHub.

Git:

https://git-scm.com/

GitHub:

https://github.com/

Use Git to save progress every day.

Suggested commit format:

```bash
git add .
git commit -m "Day 1: basic task CRUD"
```

---

## Project Folder Structure

Start with this structure on Day 1:

```txt
taskflow/
  index.html
  style.css
  app.js
```

By Day 5, refactor into this structure:

```txt
taskflow/
  index.html
  style.css
  src/
    main.js
    store.js
    tasks.js
    ui.js
    filters.js
    storage.js
    timer.js
    stats.js
    api.js
    utils.js
```

---

## Weekly Overview

| Day | Focus | Main Outcome |
|---|---|---|
| Day 1 | Fast basics + DOM + CRUD | Add, render, complete, delete tasks |
| Day 2 | Arrays, objects, forms, state | Search, filter, sort, edit tasks |
| Day 3 | Browser storage + events | Save tasks permanently |
| Day 4 | Async JavaScript | Fake API, promises, async/await |
| Day 5 | Modules, classes, architecture | Refactor into clean files |
| Day 6 | Advanced browser features | Drag/drop, stats, canvas, import/export |
| Day 7 | Polish + revision | Final project, README, mastery review |

---

## Day 1 — JavaScript Basics + DOM + CRUD

## Goal

Build the first working version of TaskFlow.

By the end of Day 1, you should be able to:

- Create variables
- Use arrays and objects
- Write functions
- Select DOM elements
- Listen to form events
- Add tasks
- Render tasks
- Complete tasks
- Delete tasks

---

## Concepts to Learn

Do not spend too much time here. Learn only enough to build.

Study:

- `let`
- `const`
- strings
- numbers
- booleans
- arrays
- objects
- functions
- conditionals
- loops
- DOM selection
- DOM events
- form submission
- `event.preventDefault()`

---

## Resources for Day 1

### JavaScript basics

MDN JavaScript Guide:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

Read these sections:

- Grammar and types
- Control flow and error handling
- Loops and iteration
- Functions
- Expressions and operators

---

### JavaScript.info basics

URL:

https://javascript.info/first-steps

Read:

- Variables
- Data types
- Type conversions
- Operators
- Comparisons
- Conditional branching
- Logical operators
- Loops
- Functions
- Arrow functions

---

### DOM basics

MDN DOM scripting:

https://developer.mozilla.org/docs/Learn_web_development/Core/Scripting/DOM_scripting

Read:

- What is the DOM?
- Selecting elements
- Creating and placing new nodes
- Manipulating styles/classes

---

## Build Tasks

Create:

```txt
taskflow/
  index.html
  style.css
  app.js
```

Your first task object should look like this:

```js
{
  id: "task-123",
  title: "Learn DOM events",
  completed: false,
  priority: "medium",
  createdAt: "2026-05-31T10:00:00.000Z"
}
```

Implement:

- Add task form
- Task list
- Complete button
- Delete button
- Empty state message
- Basic validation

---

## Day 1 Required Features

### Feature 1: Add Task

User should type a task and click “Add Task”.

Required behavior:

- Empty task should not be added
- Task should appear immediately
- Input should clear after adding

---

### Feature 2: Render Tasks

Every task should display:

- Title
- Priority
- Complete/Undo button
- Delete button

---

### Feature 3: Complete Task

User should be able to mark a task complete.

Required behavior:

- Completed task should look visually different
- Button should change from “Done” to “Undo”

---

### Feature 4: Delete Task

User should be able to delete a task.

---

### Feature 5: Counters

Add:

- Total task count
- Completed task count
- Active task count

Example:

```txt
Total: 5
Completed: 2
Active: 3
```

---

## Day 1 Practice Problems

Solve these inside your project:

1. Prevent tasks with only spaces.
2. Prevent duplicate task titles.
3. Add a high-priority counter.
4. Add a “Clear Completed” button.
5. Show “No tasks yet” when the list is empty.

---

## Day 1 Deliverable

Your app should be able to:

- Add a task
- Show all tasks
- Complete a task
- Undo a completed task
- Delete a task
- Show basic counters

---

## Day 1 Self-Check

You should be able to explain:

- Why `const` is used for DOM elements
- Why the task list is an array
- Why each task needs an `id`
- What `event.preventDefault()` does
- What `renderTasks()` does
- Why the UI must be re-rendered after changing data

---

# Day 2 — Arrays, Objects, Forms, Search, Filter, Sort

## Goal

Turn the basic task app into a useful task manager.

By the end of Day 2, you should be comfortable using:

- Array methods
- Object updates
- Search
- Filtering
- Sorting
- Editing
- Form validation

---

## Concepts to Learn

Study:

- `map`
- `filter`
- `find`
- `some`
- `every`
- `reduce`
- spread operator
- destructuring
- object references
- immutable updates
- form inputs
- select inputs
- date inputs

---

## Resources for Day 2

### Arrays

JavaScript.info arrays:

https://javascript.info/array

JavaScript.info array methods:

https://javascript.info/array-methods

MDN Array reference:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Focus on:

- `push`
- `map`
- `filter`
- `find`
- `some`
- `every`
- `reduce`
- `sort`

---

### Objects

JavaScript.info objects:

https://javascript.info/object

MDN object basics:

https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics

Focus on:

- Creating objects
- Reading properties
- Updating properties
- Copying objects
- Nested data

---

### Forms

MDN web forms:

https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms

Focus on:

- Input fields
- Select fields
- Date input
- Form validation

---

## Build Tasks

Improve each task object:

```js
{
  id: "task-123",
  title: "Practice array methods",
  description: "Use map, filter, reduce in TaskFlow",
  completed: false,
  priority: "high",
  dueDate: "2026-06-02",
  tags: ["javascript", "arrays"],
  createdAt: "2026-05-31T10:00:00.000Z",
  updatedAt: "2026-05-31T11:00:00.000Z"
}
```

---

## Day 2 Required Features

### Feature 1: Search Tasks

Add a search input.

Search should match:

- Task title
- Task description
- Tags

Example:

```txt
Search: javascript
```

Should show tasks containing “javascript”.

---

### Feature 2: Filter Tasks

Add filters:

- All
- Active
- Completed
- High priority
- Due today
- Overdue

---

### Feature 3: Sort Tasks

Add sorting options:

- Newest first
- Oldest first
- Priority high to low
- Due date nearest first
- Alphabetical

---

### Feature 4: Edit Task

User should be able to edit:

- Title
- Description
- Priority
- Due date
- Tags

---

### Feature 5: Better Validation

Validation rules:

- Title is required
- Title must be at least 3 characters
- Duplicate titles are not allowed
- Due date cannot be invalid
- Tags should be separated by commas

---

## Important Code Pattern

Use immutable updates:

```js
tasks = tasks.map(task => {
  if (task.id === id) {
    return {
      ...task,
      completed: !task.completed,
      updatedAt: new Date().toISOString()
    };
  }

  return task;
});
```

---

## Day 2 Practice Problems

1. Use `some()` to prevent duplicate task titles.
2. Use `filter()` to show only completed tasks.
3. Use `map()` to update one task.
4. Use `reduce()` to count completed tasks.
5. Use `sort()` to order tasks by priority.

---

## Day 2 Deliverable

Your app should now support:

- Search
- Filter
- Sort
- Edit
- Priority
- Due date
- Tags
- Better validation

---

## Day 2 Self-Check

You should be able to explain:

- Difference between `map()` and `forEach()`
- Difference between `filter()` and `find()`
- Why `some()` is useful for validation
- Why directly mutating objects can become risky
- How search and filter work together
- How to update one object inside an array

---

# Day 3 — Events, Event Delegation, LocalStorage, JSON

## Goal

Make the app persistent and more professional.

By the end of Day 3, refreshing the browser should not erase tasks.

---

## Concepts to Learn

Study:

- event delegation
- `event.target`
- `closest()`
- `dataset`
- keyboard events
- `localStorage`
- `JSON.stringify`
- `JSON.parse`
- try/catch basics
- browser Application tab
- state synchronization

---

## Resources for Day 3

### Events

JavaScript.info events:

https://javascript.info/introduction-browser-events

JavaScript.info event delegation:

https://javascript.info/event-delegation

MDN EventTarget.addEventListener:

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

---

### LocalStorage

MDN localStorage:

https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

JavaScript.info LocalStorage:

https://javascript.info/localstorage

---

### JSON

MDN JSON:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

JavaScript.info JSON:

https://javascript.info/json

---

## Day 3 Required Features

### Feature 1: Save Tasks

Whenever tasks change, save them to localStorage.

Use key:

```js
"taskflow_tasks"
```

Example:

```js
localStorage.setItem("taskflow_tasks", JSON.stringify(tasks));
```

---

### Feature 2: Load Tasks

When the page opens, load tasks from localStorage.

Example:

```js
const savedTasks = localStorage.getItem("taskflow_tasks");

if (savedTasks) {
  tasks = JSON.parse(savedTasks);
}
```

---

### Feature 3: Event Delegation

Instead of adding separate click listeners to every button, use one listener on the task list.

Example:

```js
taskList.addEventListener("click", function (event) {
  const button = event.target.closest("button");

  if (!button) {
    return;
  }

  const action = button.dataset.action;
  const id = button.dataset.id;

  if (action === "delete") {
    deleteTask(id);
  }
});
```

---

### Feature 4: Keyboard Shortcuts

Add these shortcuts:

| Shortcut | Action |
|---|---|
| `/` | Focus search input |
| `Escape` | Clear search input |
| `Ctrl + Enter` | Submit task form |
| `Ctrl + Shift + C` | Clear completed tasks |

---

### Feature 5: Confirm Dangerous Actions

Ask for confirmation before:

- Deleting one task
- Clearing completed tasks
- Clearing all tasks

---

## Day 3 Practice Problems

1. Save tasks after adding.
2. Save tasks after editing.
3. Save tasks after deleting.
4. Save tasks after marking complete.
5. Load saved tasks on page load.
6. Handle broken JSON safely using `try/catch`.
7. Add a “Reset App” button.

---

## Day 3 Deliverable

Your app should now:

- Save tasks permanently
- Load tasks after refresh
- Use event delegation
- Support keyboard shortcuts
- Handle empty/broken storage safely

---

## Day 3 Self-Check

You should be able to explain:

- Why localStorage stores strings only
- Why JSON is needed
- Difference between `JSON.stringify()` and `JSON.parse()`
- What event delegation is
- Why `dataset` is useful
- What happens when localStorage contains invalid JSON

---

# Day 4 — Async JavaScript, Promises, Fetch, Error Handling

## Goal

Understand asynchronous JavaScript deeply enough to use it in real apps.

You will simulate a real API and optionally load starter tasks from a JSON file.

---

## Concepts to Learn

Study:

- call stack
- event loop
- callbacks
- promises
- promise states
- `.then()`
- `.catch()`
- `async`
- `await`
- `try/catch`
- `finally`
- `setTimeout`
- `fetch`
- loading states
- error states

---

## Resources for Day 4

### JavaScript.info async

Start here:

https://javascript.info/async

Read:

- Callbacks
- Promise
- Promises chaining
- Error handling with promises
- Async/await

---

### MDN Promises

URL:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

---

### MDN async function

URL:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

---

### MDN Fetch API

URL:

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

---

### Event loop

JavaScript.info event loop:

https://javascript.info/event-loop

---

## Day 4 Required Features

### Feature 1: Fake API Delay

Create a fake API function:

```js
function fakeApiDelay(data, shouldFail = false, delay = 800) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Fake API request failed."));
      } else {
        resolve(data);
      }
    }, delay);
  });
}
```

---

### Feature 2: Load Starter Tasks Asynchronously

Add a button:

```txt
Load Starter Tasks
```

When clicked:

- Show loading message
- Wait for fake API
- Add starter tasks
- Save to localStorage
- Re-render UI
- Hide loading message

---

### Feature 3: Error State

Add visible error handling.

Example:

```txt
Could not load starter tasks. Please try again.
```

---

### Feature 4: Use async/await

Use this pattern:

```js
async function loadStarterTasks() {
  try {
    showLoading(true);

    const starterTasks = await fakeApiDelay([
      {
        id: crypto.randomUUID(),
        title: "Practice async/await",
        description: "Understand promises and async functions",
        completed: false,
        priority: "high",
        dueDate: "",
        tags: ["javascript", "async"],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ]);

    tasks = [...tasks, ...starterTasks];
    saveTasks();
    renderTasks();
  } catch (error) {
    showError(error.message);
  } finally {
    showLoading(false);
  }
}
```

---

### Feature 5: Optional Local JSON Fetch

Create:

```txt
data/starter-tasks.json
```

Then fetch it:

```js
async function fetchStarterTasks() {
  const response = await fetch("./data/starter-tasks.json");

  if (!response.ok) {
    throw new Error("Could not fetch starter tasks.");
  }

  return response.json();
}
```

---

## Day 4 Practice Problems

1. Rewrite a `.then()` chain using `async/await`.
2. Show loading while waiting.
3. Show error if fake API fails.
4. Disable button while loading.
5. Use `finally` to clean up UI state.
6. Simulate slow loading with `setTimeout`.
7. Fetch from a local JSON file.

---

## Day 4 Deliverable

Your app should now include:

- Fake API
- Async loading
- Loading UI
- Error UI
- `async/await`
- Optional JSON fetch

---

## Day 4 Self-Check

You should be able to explain:

- Why JavaScript does not wait for `setTimeout`
- What a Promise is
- Difference between resolved and rejected promises
- Why `await` only works inside async functions
- Why `try/catch` is used with async/await
- What `finally` is used for
- What `response.ok` means in fetch

---

# Day 5 — Modules, Classes, Closures, Architecture

## Goal

Refactor your app from one big file into a clean professional structure.

This is the day where your JavaScript starts looking like real project code.

---

## Concepts to Learn

Study:

- ES modules
- `export`
- `import`
- named exports
- default exports
- classes
- constructor
- methods
- `this`
- private state
- closures
- separation of concerns
- pure functions
- side effects

---

## Resources for Day 5

### Modules

JavaScript.info modules:

https://javascript.info/modules-intro

MDN modules:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

---

### Classes

JavaScript.info classes:

https://javascript.info/classes

MDN classes:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

---

### Closures

JavaScript.info closure:

https://javascript.info/closure

MDN closures:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures

---

### this

JavaScript.info object methods and this:

https://javascript.info/object-methods

MDN this:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

---

## Refactor Folder Structure

Change your project to:

```txt
taskflow/
  index.html
  style.css
  src/
    main.js
    store.js
    tasks.js
    ui.js
    filters.js
    storage.js
    timer.js
    stats.js
    api.js
    utils.js
```

Update your script tag:

```html
<script type="module" src="./src/main.js"></script>
```

---

## Suggested File Responsibilities

### main.js

Responsible for:

- App initialization
- Connecting UI events to logic
- Calling render functions
- Calling storage functions

---

### store.js

Responsible for:

- Holding application state
- Getting tasks
- Setting tasks
- Updating tasks
- Notifying UI when state changes

---

### tasks.js

Responsible for:

- Creating tasks
- Updating tasks
- Deleting tasks
- Toggling completion
- Validating task data

---

### ui.js

Responsible for:

- Rendering task list
- Rendering counters
- Showing errors
- Showing loading state
- Reading form values
- Clearing forms

---

### filters.js

Responsible for:

- Search logic
- Filter logic
- Sort logic

---

### storage.js

Responsible for:

- Saving to localStorage
- Loading from localStorage
- Handling broken JSON

---

### timer.js

Responsible for:

- Pomodoro timer class
- Starting timer
- Pausing timer
- Resetting timer

---

### stats.js

Responsible for:

- Total tasks
- Completed tasks
- Active tasks
- Overdue tasks
- Priority breakdown

---

### api.js

Responsible for:

- Fake API delay
- Fetch starter tasks
- Simulated save/load

---

### utils.js

Responsible for:

- Generate ID
- Format date
- Debounce
- Common helper functions

---

## Day 5 Required Features

### Feature 1: ES Modules

Split code into files and use imports/exports.

Example:

```js
// utils.js
export function generateId() {
  return crypto.randomUUID();
}
```

```js
// tasks.js
import { generateId } from "./utils.js";
```

---

### Feature 2: Task Factory Function

Create a function that generates a task.

```js
export function createTask({ title, description, priority, dueDate, tags }) {
  const now = new Date().toISOString();

  return {
    id: crypto.randomUUID(),
    title,
    description,
    completed: false,
    priority,
    dueDate,
    tags,
    status: "todo",
    createdAt: now,
    updatedAt: now
  };
}
```

---

### Feature 3: Pomodoro Timer Class

Create:

```js
export class PomodoroTimer {
  constructor(minutes = 25) {
    this.initialSeconds = minutes * 60;
    this.remainingSeconds = this.initialSeconds;
    this.intervalId = null;
  }

  start(onTick, onComplete) {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.remainingSeconds--;

      onTick(this.remainingSeconds);

      if (this.remainingSeconds <= 0) {
        this.stop();
        onComplete();
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.stop();
    this.remainingSeconds = this.initialSeconds;
  }
}
```

---

### Feature 4: Use Closures

Create a simple state store using closure.

Example:

```js
export function createStore(initialState) {
  let state = initialState;
  const listeners = [];

  function getState() {
    return state;
  }

  function setState(nextState) {
    state = nextState;
    listeners.forEach(listener => listener(state));
  }

  function subscribe(listener) {
    listeners.push(listener);
  }

  return {
    getState,
    setState,
    subscribe
  };
}
```

---

## Day 5 Practice Problems

1. Move localStorage logic into `storage.js`.
2. Move rendering logic into `ui.js`.
3. Move task creation into `tasks.js`.
4. Move filter logic into `filters.js`.
5. Create and use one class.
6. Create and use one closure.
7. Explain why modules are useful.

---

## Day 5 Deliverable

Your project should now have:

- Multiple JavaScript files
- Clean imports/exports
- Pomodoro timer class
- Better organized state
- Cleaner function names
- Less duplicated code

---

## Day 5 Self-Check

You should be able to explain:

- What a module is
- Difference between named and default exports
- Why `type="module"` is needed
- What a class is
- What `this` refers to in a class method
- What a closure is
- Difference between pure functions and side effects
- Why separation of concerns matters

---

# Day 6 — Advanced Browser APIs, Stats, Drag and Drop, Import/Export

## Goal

Add advanced features that touch real-world JavaScript skills.

---

## Concepts to Learn

Study:

- drag and drop API
- canvas basics
- file import/export
- Blob
- URL.createObjectURL
- FileReader
- custom events
- debounce
- performance basics
- reduce-based statistics
- basic testing

---

## Resources for Day 6

### Drag and Drop

MDN Drag and Drop API:

https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API

---

### Canvas

MDN Canvas API:

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

---

### FileReader

MDN FileReader:

https://developer.mozilla.org/en-US/docs/Web/API/FileReader

---

### Blob

MDN Blob:

https://developer.mozilla.org/en-US/docs/Web/API/Blob

---

### Debounce concept

JavaScript.info scheduling:

https://javascript.info/settimeout-setinterval

Use this to understand delayed execution.

---

### Custom Events

MDN CustomEvent:

https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent

---

## Day 6 Required Features

Day 6 has the highest feature load. With a 4 to 5 hour schedule, treat stats and debounced search as required, then choose one advanced feature to finish well. Drag and drop, Canvas, and import/export are excellent stretch work, but they should not break the main app.

### Feature 1: Kanban Board

Create three columns:

- Todo
- Doing
- Done

Each task should have:

```js
status: "todo" | "doing" | "done"
```

Drag tasks between columns.

Required behavior:

- Drag task card
- Drop into another column
- Update task status
- Save to localStorage
- Re-render board

---

### Feature 2: Dashboard Stats

Show:

- Total tasks
- Completed tasks
- Active tasks
- Overdue tasks
- Tasks due today
- High priority tasks
- Completion percentage
- Priority breakdown

Use `reduce()`.

Example:

```js
export function getTaskStats(tasks) {
  return tasks.reduce(
    (stats, task) => {
      stats.total++;

      if (task.completed) {
        stats.completed++;
      }

      if (!task.completed) {
        stats.active++;
      }

      if (task.priority === "high") {
        stats.highPriority++;
      }

      return stats;
    },
    {
      total: 0,
      completed: 0,
      active: 0,
      highPriority: 0
    }
  );
}
```

---

### Feature 3: Canvas Chart

Use `<canvas>` to draw a simple priority bar chart.

Chart should show:

- Low priority count
- Medium priority count
- High priority count

---

### Feature 4: Debounced Search

Create a debounce utility:

```js
export function debounce(callback, delay = 300) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
```

Use it for search input.

---

### Feature 5: Export Tasks

Add button:

```txt
Export JSON
```

When clicked:

- Convert tasks to JSON
- Download a `.json` file

---

### Feature 6: Import Tasks

Add file input:

```txt
Import JSON
```

When selected:

- Read JSON file
- Validate data
- Replace or merge tasks
- Save to localStorage
- Re-render app
- Show error if invalid

---

### Feature 7: Basic Test Functions

Create a file:

```txt
src/tests.js
```

Write simple test helpers:

```js
function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    console.error(`Failed: ${message}`);
    console.error(`Expected: ${expected}`);
    console.error(`Actual: ${actual}`);
    return;
  }

  console.log(`Passed: ${message}`);
}
```

Test:

- Task creation
- Filter logic
- Stats calculation
- Validation logic

---

## Day 6 Practice Problems

1. Drag a task from Todo to Doing.
2. Drag a task from Doing to Done.
3. Count tasks by priority.
4. Draw a simple canvas bar chart.
5. Export all tasks as JSON.
6. Import tasks from JSON.
7. Reject invalid imported JSON.
8. Add debounce to search.
9. Create 5 test cases.

---

## Day 6 Deliverable

Your project should now include:

- Stats dashboard
- Debounced search
- Basic tests

Stretch deliverables:

- Kanban board
- Drag and drop
- Canvas chart
- JSON export
- JSON import

---

## Day 6 Self-Check

You should be able to explain:

- How drag and drop events work
- What `dataTransfer` does
- Why debounce improves performance
- How `reduce()` creates statistics
- What canvas is used for
- What Blob is used for
- How FileReader works
- Why imported data must be validated

---

# Day 7 — Final Polish, Revision, Debugging, README

## Goal

Finish the project professionally and revise all major JavaScript concepts.

---

## Concepts to Revise

Revise:

- variables
- data types
- arrays
- objects
- functions
- arrow functions
- callbacks
- scope
- closures
- hoisting
- `this`
- prototypes
- classes
- modules
- DOM
- events
- event delegation
- forms
- localStorage
- JSON
- Date
- Promises
- async/await
- try/catch
- browser APIs
- debugging

---

## Resources for Day 7

### JavaScript.info full map

URL:

https://javascript.info/

Use this as a checklist.

---

### MDN JavaScript Reference

URL:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

Use this to revise exact syntax.

---

### Chrome DevTools

URL:

https://developer.chrome.com/docs/devtools

Use this to debug your app.

---

## Day 7 Required Features

### Feature 1: Final UI Polish

Improve:

- spacing
- layout
- mobile responsiveness
- button states
- form errors
- empty states
- loading states
- completed task styling
- overdue task styling

---

### Feature 2: Accessibility Improvements

Add:

- proper labels
- button text
- keyboard focus styles
- semantic HTML
- useful placeholders
- `aria-live` for error/status messages

---

### Feature 3: Error Handling Review

Handle:

- empty task title
- duplicate task title
- invalid due date
- broken localStorage JSON
- failed fake API call
- invalid imported JSON
- missing task ID
- empty search results

---

### Feature 4: Final README

Create:

```txt
README.md
```

Include:

```md
# TaskFlow

TaskFlow is a vanilla JavaScript productivity dashboard built to practice core JavaScript concepts.

## Features

- Task CRUD
- Search/filter/sort
- LocalStorage persistence
- Kanban drag and drop
- Pomodoro timer
- Notes
- Stats dashboard
- Canvas chart
- Import/export JSON
- Async fake API
- Modular JavaScript

## Concepts Practiced

- Variables
- Arrays
- Objects
- Functions
- DOM
- Events
- Event delegation
- LocalStorage
- JSON
- Promises
- Async/await
- Modules
- Classes
- Closures
- Browser APIs

## How to Run

Open `index.html` with Live Server.

## Project Structure

```txt
taskflow/
  index.html
  style.css
  src/
    main.js
    store.js
    tasks.js
    ui.js
    filters.js
    storage.js
    timer.js
    stats.js
    api.js
    utils.js
```

## What I Learned

Write your own explanation here.
```

---

### Feature 5: Final Mastery Review

Create a file:

```txt
revision-notes.md
```

Answer these questions:

1. What is the difference between `let`, `const`, and `var`?
2. What is the difference between primitive and reference values?
3. What is the difference between `map`, `filter`, `find`, and `reduce`?
4. What is event delegation?
5. Why do we use localStorage?
6. Why do we need `JSON.stringify()`?
7. What is a Promise?
8. What does async/await do?
9. What is a closure?
10. What does this mean?
11. What is a class?
12. What are modules?
13. What is the DOM?
14. What is the event loop?
15. How does your project render data to the UI?

---

## Day 7 Practice Problems

1. Find and fix 3 bugs in your app.
2. Explain your `renderTasks()` function line by line.
3. Explain your async loading function line by line.
4. Explain your localStorage logic line by line.
5. Explain your drag and drop logic line by line.
6. Refactor one messy function.
7. Rename unclear variables.
8. Remove duplicated code.
9. Create final README.
10. Push project to GitHub.

---

## Day 7 Deliverable

Your final project should be:

- Working
- Clean
- Organized
- Responsive
- Documented
- Debugged
- Easy to explain

---

# Final Concept Checklist

By the end of the week, you should have used these concepts in your project.

## JavaScript Fundamentals

- `let`
- `const`
- strings
- numbers
- booleans
- `null`
- `undefined`
- arrays
- objects
- functions
- arrow functions
- conditionals
- loops
- template literals

---

## Arrays and Objects

- `push`
- `map`
- `filter`
- `find`
- `some`
- `every`
- `reduce`
- `sort`
- spread operator
- rest parameters
- destructuring
- object copying
- nested objects

---

## DOM and Events

- `querySelector`
- `querySelectorAll`
- `createElement`
- `appendChild`
- `innerHTML`
- `textContent`
- `classList`
- event listeners
- form submit events
- input events
- click events
- keyboard events
- event delegation
- `event.target`
- `dataset`

---

## Browser APIs

- localStorage
- JSON
- Date
- setTimeout
- setInterval
- fetch

Stretch browser APIs:

- drag and drop
- canvas
- FileReader
- Blob

---

## Advanced JavaScript

- scope
- closures
- hoisting
- callbacks
- promises
- async/await
- try/catch
- classes
- `this`
- prototypes
- modules
- imports
- exports

---

## Debugging

- console.log
- console.table
- breakpoints
- inspect element
- Application tab
- localStorage inspection
- Network tab
- reading error messages
- fixing syntax errors
- fixing logic errors

---

# Final Project Requirements

Your final TaskFlow app must have:

- Add task
- Edit task
- Delete task
- Complete task
- Search tasks
- Filter tasks
- Sort tasks
- Priority
- Due date
- Tags
- LocalStorage save/load
- Keyboard shortcuts
- Async starter task loading
- Loading state
- Error state
- Modular code
- Pomodoro timer
- Stats dashboard
- README
- Revision notes

Stretch requirements:

- Kanban board
- Drag and drop
- Canvas chart
- Import JSON
- Export JSON

Do not move to backend until the required items are working and you can explain the data flow from form input to state, from state to UI, and from state to localStorage.

---

# Handoff to TaskFlow Pro Backend

The full-stack project will be called TaskFlow Pro. The backend will reuse the same domain ideas from this vanilla JavaScript project, but the data will move from localStorage to MongoDB.

## API-Ready Task Shape

Use this shape as your mental bridge from browser-only JavaScript to backend APIs:

```js
{
  id: "task-123",
  projectId: "project-123",
  ownerId: "user-123",
  title: "Practice Express routes",
  description: "Build CRUD routes for TaskFlow Pro",
  completed: false,
  status: "todo",
  priority: "high",
  dueDate: "2026-06-02",
  tags: ["backend", "express"],
  createdAt: "2026-05-31T10:00:00.000Z",
  updatedAt: "2026-05-31T11:00:00.000Z"
}
```

## Concepts You Must Understand Before Backend

Before opening the backend plan, make sure you can explain:

- How a form creates a task object
- Why every task needs a unique ID
- How validation protects bad data
- How search, filter, and sort transform arrays
- Why localStorage needs JSON
- How async/await handles loading and errors
- How modules keep code organized
- What should become an API request in a full-stack app

## Backend Readiness Test

You are ready for [Node + Express Backend Plan](node-express.md) when you can add a new field to the task object, render it in the UI, save it to localStorage, and explain every changed function.

---

# Daily Git Commit Plan

Use Git if possible.

## Day 1

```bash
git add .
git commit -m "Day 1: build basic task CRUD"
```

## Day 2

```bash
git add .
git commit -m "Day 2: add search filter sort and edit features"
```

## Day 3

```bash
git add .
git commit -m "Day 3: add localStorage and event delegation"
```

## Day 4

```bash
git add .
git commit -m "Day 4: add async fake API and error states"
```

## Day 5

```bash
git add .
git commit -m "Day 5: refactor app into ES modules"
```

## Day 6

```bash
git add .
git commit -m "Day 6: add stats debounced search and tests"
```

## Day 7

```bash
git add .
git commit -m "Day 7: polish project and add documentation"
```

---

# Rules for the Week

1. Do not use frameworks.
2. Do not copy full project code from tutorials.
3. Use documentation first, videos second.
4. Build every day.
5. Use the browser console daily.
6. Write notes in your own words.
7. Do not skip debugging.
8. Do not refactor before the feature works.
9. Explain every feature after building it.
10. Keep the project small but complete.

---

# What Not to Waste Time On This Week

Avoid these until after the 1-week plan:

- React
- TypeScript
- Node.js
- Express
- MongoDB
- Next.js
- Complex build tools
- Webpack
- Vite
- npm packages
- Advanced animations
- Authentication
- Backend APIs

Focus only on JavaScript fundamentals and browser JavaScript.

---

# After This Week

After completing this project, continue the full-stack roadmap in separate files:

## Days 8 to 11

Use [Node + Express Backend Plan](node-express.md).

You will learn:

- Node.js
- npm
- Express
- REST APIs
- MongoDB and Mongoose
- Email/password auth
- Google OAuth basics
- Protected routes
- Backend tests
- SQLite + Prisma comparison lab

## Days 12 to 16

Use [React Frontend Plan](react.md).

You will learn:

- Vite
- React components
- Props
- State
- Effects
- Forms
- React Router
- Auth context
- API calls
- Loading and error states
- React tests

## Days 17 to 18

Use [Full-Stack Integration Plan](integration.md).

You will connect the React app to the Express API, finish the auth flow, test the full app, write the README, prepare screenshots, and push the project to GitHub.

---

# Final Success Criteria

You have successfully completed this plan if you can:

- Build the TaskFlow project without copying full code
- Explain how data flows from form input to UI
- Explain how events update state
- Explain how localStorage saves data
- Explain how async/await works in your app
- Explain why modules make the project cleaner
- Debug basic JavaScript errors
- Read MDN documentation without feeling lost
- Add one new feature without help

The most important final test:

You should be able to open your own project and explain every major function line by line.
