# Reflection – Practical 2: Weather API Application

## a) Documentation

In this practical, I created a small front-end application that interacts with two REST APIs using **GET**, **POST**, **PUT**, and **DELETE** requests.

- I used **OpenWeatherMap** to retrieve live weather data.
- For simulated POST/PUT/DELETE operations, I used **JSONPlaceholder**.
- The app was built entirely using vanilla JavaScript and structured with a simple `index.html` file.
- I implemented API interactions, DOM updates, and a modal UI for editing locations.

The JavaScript part was split into separate functions for each operation, which made the code more readable and modular.

## b) Reflection

This practical helped me understand the full **CRUD cycle** in a real-world RESTful API environment. Although `JSONPlaceholder` is fake, it still mimics real responses, which was very useful for testing logic.

**What I Learned:**
- How to work with external APIs using `fetch()`
- Understanding HTTP methods and when to use each (GET for retrieving, POST for creating, etc.)
- Dynamically updating the DOM based on API responses
- How to handle JSON data and display it to users

**Challenges I Faced:**
- Initially, I was confused about handling the `PUT` operation because `JSONPlaceholder` doesn’t persist changes. It seemed like nothing was updating.
  - I solved this by using console logs and displaying the response in the UI to confirm that the request was being made correctly.
- Another challenge was error handling — I had to add checks for invalid city names, API key issues, and empty form inputs.

This practical was a great hands-on exercise in **API integration** and showed me how powerful even basic front-end projects can be when connected to real-time data.
