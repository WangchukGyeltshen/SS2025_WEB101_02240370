
---

## `Reflection.md`

```md
# Reflection – Practical 6: State Management with Zustand

## a) Documentation

This practical involved building a Todo List application using **React** and **Zustand** to handle state management. Zustand allowed me to avoid the complexities of prop drilling or over-relying on React Context for simple state logic.

The store was structured to contain the `todos` array and actions such as `addTodo`, `toggleTodo`, `removeTodo`, and `clearCompleted`. Each action modified the state immutably using the `set` method provided by Zustand. Additionally, I added persistence to the store using Zustand's built-in `persist` middleware, which allowed the app to store todos in `localStorage`.

## b) Reflection

Through this task, I learned how simple and effective Zustand can be for state management in small to medium-scale React applications. Compared to other tools like Redux or Context, Zustand required far less boilerplate and was easier to scale.

I especially liked how components could subscribe only to the specific parts of state they needed, which improved performance and kept the code clean.

One challenge I encountered was adding persistence. At first, the state was resetting on page reload because I didn’t wrap the store with the `persist` middleware correctly. After revisiting the documentation, I fixed it by importing `persist` from Zustand middleware and properly configuring the store.

This practical gave me a clear understanding of Zustand’s architecture, and I can now confidently use it in future projects that require efficient global state handling.
