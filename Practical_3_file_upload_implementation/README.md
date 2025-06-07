# Practical 3: File Upload Implementation with Next.js

## Instructions

### Project Setup

1. Create a new Next.js project:
   ```bash
   npx create-next-app file-upload
   cd file-upload
   ```
2. Install the required dependencies:
   ```bash
   npm install react-hook-form formidable axios react-dropzone
   ```

### Implementation Steps

#### Part 1: File Upload Form

- In `pages/index.js`, build a file upload form using `react-hook-form`.
- Add form validations for:
  - File type (e.g., only images or PDFs)
  - File size limits

#### Part 2: API Route and Drag & Drop

- In `pages/api/upload.js`, set up the API route to handle file uploads.
- Use `formidable` to handle multipart form data.
- Implement upload progress tracking using `axios`.
- Add a drag-and-drop interface using `react-dropzone`.

### Features Implemented

- Uploads files through a React form.
- Supports drag-and-drop functionality.
- Validates file type and size before submission.
- Shows real-time upload progress.

### References

- GitHub Project: https://github.com/syangche/React_Practicals.git
- Next.js Documentation: https://nextjs.org/docs
- React Hook Form: https://react-hook-form.com
- Formidable: https://www.npmjs.com/package/formidable
- React Dropzone: https://react-dropzone.js.org