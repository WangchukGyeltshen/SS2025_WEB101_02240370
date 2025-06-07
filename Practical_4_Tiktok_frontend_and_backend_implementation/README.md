# Practical 4: Connecting TikTok Frontend to Backend

## Instructions

### Overview

In this practical, I connected the frontend of the TikTok clone built with Next.js to a backend API developed using Express.js. The core focus was implementing authentication, integrating real video data, and enabling social features such as follow/unfollow and personalized feeds.

---

## Part 1: API Configuration and Authentication

### Step 1: API Client Setup

- Installed necessary dependencies:
  ```bash
  npm install axios jwt-decode react-hot-toast
  ```
- Created `src/lib/api-config.js` for centralized Axios configuration.
- Added interceptors to handle authentication tokens.

### Step 2: Authentication Context

- Created `src/contexts/authContext.jsx` to manage login state.
- Updated `src/app/layout.js` to wrap the app in `AuthProvider`.

### Step 3: Authentication UI

- Built `Modal.jsx`, `AuthForms.jsx`, and `AuthModal.jsx` components.
- Integrated login and registration into the layout.

---

## Part 2: Video Feed and Interaction

### Step 4: Layout Updates

- Updated `MainLayout.jsx` to show login/logout states based on user session.

### Step 5: Video Service

- Created `videoService.js` to handle API requests for videos (fetching, liking, commenting).

### Step 6: User Service

- Created `userService.js` to manage user-related API interactions (follow, profile).

### Step 7: Component Integration

- Updated `VideoCard.jsx` to use real backend data.
- Updated `VideoFeed.jsx` to load video data dynamically.

---

## Part 3: Social Features

### Step 8: Following Feed

- Created `src/app/following/page.jsx` to show videos from followed users.

### Step 9: User Discovery

- Built `src/app/explore-users/page.jsx` for browsing and following other users.

### Step 10: Dynamic Profile Page

- Implemented `src/app/profile/[userId]/page.jsx` to display user-specific profiles.

### Step 11: Video Upload

- Updated `src/app/upload/page.jsx` to allow authenticated users to upload videos.

---

## Testing

- Registered multiple users and tested uploading, liking, and following features.
- Verified JWT-based authentication by logging in/out across different users.
- Checked that the "Following" feed dynamically displays videos based on follows.

---

## References

- Next.js: https://nextjs.org/docs
- React Hook Form: https://react-hook-form.com/
- Axios: https://axios-http.com/docs/intro
- JWT Authentication: https://jwt.io/introduction
- Express.js: https://expressjs.com/
- Prisma ORM: https://www.prisma.io/docs/

### Project Repos

- Frontend: https://github.com/syangche/TikTok_Frontend.git
- Backend: https://github.com/syangche/TikTok_Server.git