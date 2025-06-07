
---

## `Reflection.md`

```md
# Reflection – Practical 5: Infinite Scroll Implementation

## a) Documentation

In this practical, I added infinite scrolling functionality to the TikTok clone using **TanStack Query** and **cursor-based pagination**.

- On the backend, I updated both the general and following video endpoints to use Prisma's cursor-based pagination.
- On the frontend, I replaced static video loads with `useInfiniteQuery` from TanStack Query.
- I also created a custom `useIntersectionObserver` hook to trigger loading more videos when the last video card becomes visible in the viewport.
- This allowed the app to provide a seamless user experience, even as more content is dynamically loaded.

## b) Reflection

This practical helped me clearly understand how **cursor-based pagination** differs from the simpler offset-based approach, and why it's a better choice for infinite scroll.

I learned:

- How to manage paginated data efficiently using `useInfiniteQuery`.
- How to use the Intersection Observer API to detect scroll position without relying on performance-heavy scroll events.
- How to pass and manage cursors on both the backend and frontend to maintain pagination consistency.

The most challenging part was correctly implementing the "n+1" pattern on the backend. At first, I was mistakenly loading one extra video and displaying it, which caused a duplication issue in the feed. I resolved it by properly slicing the result and ensuring that only the intended videos were rendered.

Another issue was managing state between pages. TanStack Query handled this quite well once I configured the `getNextPageParam` function correctly to extract the `nextCursor` from each API response.

Overall, this practical taught me how to build a scalable, user-friendly infinite scrolling system that would work well even with large video datasets.
