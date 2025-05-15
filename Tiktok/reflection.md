# Reflection.md

## Documentation

### Main Concepts Applied

For this practical, I worked on updating and improving the UI of a React/Next.js layout using TailwindCSS. Specifically, I:
- Applied component-based development by structuring reusable UI parts with `Link` and `button` components.
- Used **Next.js `Link`** for client-side navigation to enhance page transitions.
- Implemented **TailwindCSS utility classes** to style buttons consistently, such as `bg-red-500`, `hover:bg-red-600`, and `rounded-md`.
- Focused on **consistent hover states and styling**, ensuring a smooth and unified user experience.
- Practiced **fixed sidebar layout** and **responsive header design** within a flexbox structure.

## Reflection

### What I Learned

- I improved my skills in **handling nested JSX structures** inside a Next.js project.
- I learned how **important consistent styling is across different parts of an app** (e.g., sidebar vs. header buttons).
- I gained more practice in using **TailwindCSS for rapid UI development** without writing custom CSS.
- I understood better how **fixed positioning combined with flex layouts** can control page structure cleanly.

### Challenges Faced and How I Overcame Them

**1. Button Wrapping with Link**
- **Challenge:** Initially, I had just a `<button>` without wrapping it in `<Link>`, causing navigation not to work as expected.
- **Solution:** I wrapped the button inside a `<Link>` component and made sure all navigation-related buttons use `Link` instead of just `<button>`.

**2. TailwindCSS Class Organization**
- **Challenge:** When copying classes from the provided image, it was tricky to spot missing classes or typos because of spacing.
- **Solution:** I carefully typed out the classes manually and cross-verified with the image to ensure no missing or incorrect classes.

**3. Sidebar Layout Breaking on Fix**
- **Challenge:** After adjusting the sidebar login section, the spacing between sections initially broke.
- **Solution:** I debugged by inspecting using DevTools and realized I needed extra `px-3 py-4` padding to match the design properly.
---

Overall, this practical helped me gain confidence in **small UI updates, proper layout structuring, and attention to detail** when working with Next.js and TailwindCSS.

