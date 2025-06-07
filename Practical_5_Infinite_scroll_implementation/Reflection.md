# Practical 5: Infinite Scroll with TanStack Query

## Instructions

### Overview

In this practical, I implemented infinite scroll functionality using **TanStack Query (React Query)** and cursor-based pagination in the TikTok web application. Both the backend and frontend were updated to support smooth, endless video loading as the user scrolls.

---

## Part 1: Backend Implementation – Cursor-Based Pagination

### Step 1: Update `getAllVideos`

- Modified `src/controllers/videoController.js` to accept `cursor` and `limit` query parameters.
- Implemented cursor logic using Prisma's `cursor`, `skip`, and `take`.

### Step 2: Update `getFollowingVideos`

- Updated `src/controllers/videoController.js` to use cursor pagination for followed users’ videos as well.

---

## Part 2: Frontend Implementation – TanStack Query

### Step 1: Install Dependencies

```bash
npm install @tanstack/react-query @tanstack/react-query-devtools
```

### Step 2: Configure Query Client

- Wrapped the app with `QueryClientProvider` inside `src/app/layout.js`.

### Step 3: Update Video Service

- Edited `src/services/videoService.js` to return data using cursor pagination format, including `nextCursor` and `hasNextPage`.

### Step 4: Create Intersection Observer

- Created `src/hooks/useIntersectionObserver.js` to track when the user reaches the bottom of the feed using the browser’s Intersection Observer API.

### Step 5: Update `VideoFeed.jsx`

- Replaced `useQuery` with `useInfiniteQuery`.
- Hooked up the intersection observer to automatically fetch the next batch of videos when the end of the list comes into view.

---

## Key Implementation Notes

- Switched from offset-based pagination (page/limit) to cursor-based (cursor/limit).
- Follows the n+1 pattern to determine if more data is available.
- TanStack Query manages loading states, caching, and pagination logic automatically.

---

## Resources

- TanStack Query: https://tanstack.com/query/latest/docs/react/overview
- Infinite Queries Guide: https://tanstack.com/query/latest/docs/react/guides/infinite-queries
- Intersection Observer API: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
- Prisma Cursor Pagination: https://www.prisma.io/docs/orm/prisma-client/queries/pagination#cursor-based-pagination
- Next.js App Router: https://nextjs.org/docs/app

### GitHub Repos

- Frontend: https://github.com/syangche/TikTok_Frontend.git
- Backend: https://github.com/syangche/TikTok_Server.git