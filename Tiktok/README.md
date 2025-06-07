# Practical 1: TikTok Web Clone with Next.js and Tailwind CSS

## Instructions

### Part 1: Project Setup

1. Navigate to your GitHub project directory using the terminal.
2. Create a new Next.js app:
   ```bash
   npx create-next-app@latest
   ```
   - Use JSX
   - Enable ESLint and Tailwind CSS
   - Use `src/` directory and App Router

3. Clean up the default structure:
   - Replace `page.js` in `src/app` with a simple component.
   - Clean `globals.css` to keep only Tailwind imports:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

4. Create project structure:
   ```bash
   mkdir -p src/components/layout src/components/ui src/lib src/app/profile src/app/upload
   ```

### Part 2: Interface and Layout

- Install icons:
  ```bash
  npm install react-icons
  ```
- Build main layout in `src/components/layout/MainLayout.jsx`.
- Create basic pages:
  - Home (`src/app/page.js`)
  - Profile (`/profile`)
  - Upload (`/upload`)
  - Following, Explore, Live pages
- Create video components:
  - `VideoCard.jsx`
  - `VideoFeed.jsx`

### Part 3: Login and Registration Forms

- Install react-hook-form:
  ```bash
  npm install react-hook-form
  ```
- Create:
  - Login Page (`src/app/login/page.jsx`)
  - Signup Page (`src/app/signup/page.jsx`)
- Add form validation:
  - Required fields
  - Regex for email
  - Password length and match confirmation
- Link Login/Signup in `MainLayout.jsx`.

### Final Step: Run Your App

```bash
npm run dev
```
Visit: [http://localhost:3000](http://localhost:3000)