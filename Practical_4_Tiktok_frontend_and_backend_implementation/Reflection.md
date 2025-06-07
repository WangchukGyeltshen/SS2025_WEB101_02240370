
---

## `Reflection.md`

```md
# Reflection – Practical 4: Connecting TikTok Frontend to Backend

## a) Documentation

In this practical, I integrated the frontend of a TikTok clone built in Next.js with a backend server developed using Express.js. This included:

- Configuring Axios to communicate with the backend and manage authentication tokens using interceptors.
- Implementing JWT-based authentication with a global React context to manage user state.
- Creating reusable UI components for modals, login, and registration.
- Integrating real-time data from the backend into the video feed, comments, and like features.
- Implementing social features like following/unfollowing users and viewing a personalized feed of followed users' videos.

All services were abstracted using `videoService.js` and `userService.js` for modularity and reuse.

## b) Reflection

This was one of the most complete full-stack integrations I have worked on. It gave me hands-on experience with connecting a real frontend to a backend via secure API requests.

I learned how to:

- Use Axios interceptors effectively to attach JWT tokens to requests.
- Manage authentication state across an entire application using React context.
- Display real-time video data and interactions based on authenticated users.
- Create protected pages and conditionally render UI elements based on authentication.

The most challenging part was managing authentication state and ensuring protected routes and buttons only appeared for logged-in users. Initially, my app would display protected components even when no user was logged in. I resolved this by ensuring the entire app was wrapped in the AuthProvider and checking `user !== null` before rendering certain components.

Another challenge was properly configuring video and user services so that their functions remained reusable and didn't conflict. Breaking up the logic into small service files helped manage the complexity.

This practical helped me clearly understand what it takes to build a social media-style platform from front to back. It tied together concepts like authentication, video streaming, and user interaction in a meaningful and practical way.
