
---

## `Reflection.md`

```md
# Reflection - Practical 1: TikTok Clone Using Next.js

## a) Documentation

In this practical, I worked on building a TikTok-style web app using **Next.js**, **Tailwind CSS**, and **React Hook Form**. I learned how to:

- Set up a clean Next.js app with Tailwind and App Router.
- Structure a project using components and folders (`layout`, `ui`, `app/profile`, etc.).
- Build a sidebar layout similar to TikTok's web UI.
- Create dynamic page components (`Home`, `Explore`, `Live`, `Profile`, `Upload`).
- Implement form validation using `react-hook-form`.

We also focused on managing layouts globally through `MainLayout.jsx`, and I learned how to reuse components like `VideoCard` and `VideoFeed` for scalability.

## b) Reflection

I learned how to use the **new App Router** structure in Next.js, which was quite different from the traditional pages/ directory. The use of `layout.js` and routing between multiple pages helped me better understand how large-scale React applications are structured.

**Challenges I faced:**
- One challenge was integrating `react-hook-form` correctly. Initially, I forgot to register the inputs which caused form values not to appear.
- Another issue was styling the layout responsively with Tailwind; my sidebar wasn't sticking properly on smaller screens. I referred to Tailwind docs and used Flexbox properly to fix it.

To overcome validation issues, I tested each form case: empty fields, wrong email formats, and mismatched passwords. This helped me understand how detailed form handling works in real-world apps.

Overall, this practical gave me a strong foundation in combining **frontend structure** with **form validation** — two critical aspects of real web development.
