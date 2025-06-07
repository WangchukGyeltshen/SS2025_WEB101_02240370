# Practical 6: Todo List Application Using Zustand

## Instructions

### Introduction

In this practical, I built a simple Todo List application using React and Zustand for global state management. The focus was to avoid prop drilling and explore Zustand's minimal and efficient approach to managing state and actions.

---

## Project Setup

### Step 1: Create React Project

```bash
npx create-vite@latest todo-zustand
cd todo-zustand
npm install
```

### Step 2: Install Zustand

```bash
npm install zustand
```

### Step 3: Set Up Folder Structure

In the `src/` folder:

```
src/
├── components/
│   ├── TodoInput.jsx
│   ├── TodoItem.jsx
│   └── TodoList.jsx
├── store/
│   └── todoStore.js
├── App.js
├── index.js
```

---

## Creating the Store

### Step 4: Zustand Store (`src/store/todoStore.js`)

Used Zustand's `create` method to set up state and actions:

- `todos`: main state array
- `addTodo`: adds a new item
- `toggleTodo`: marks an item as complete/incomplete
- `removeTodo`: deletes an item
- `clearCompleted`: removes completed items

---

## Building the Components

### Step 5: `TodoInput.jsx`

- Input field for adding new todos.

### Step 6: `TodoItem.jsx`

- Displays individual todo items.
- Supports toggling and deleting items.

### Step 7: `TodoList.jsx`

- Renders the full list of todos using data from the Zustand store.

### Step 8: `App.js`

- Combines all components into one page.

---

## Adding Persistence

- Used Zustand's `persist` middleware to store todos in `localStorage`.
- This ensures todos are saved across browser sessions.

---

## Key Concepts

- Zustand simplifies state management by combining state and actions in a single store.
- Each component only subscribes to the data it needs.
- State updates trigger re-renders only where necessary.
- Local storage persistence helps maintain state across refreshes.

---

## References

- Zustand Docs: https://docs.pmnd.rs/zustand/getting-started/introduction
- Vite Docs: https://vitejs.dev/guide/
- React Docs: https://reactjs.org/docs/getting-started.html