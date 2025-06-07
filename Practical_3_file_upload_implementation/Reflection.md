
---

## `Reflection.md`

```md
# Reflection – Practical 3: File Upload Implementation

## a) Documentation

This practical focused on building a file upload feature in a React application using Next.js. The main concepts I implemented were:

- **Multipart form handling** using `formidable` in the backend API route.
- **Form state management and validation** using `react-hook-form`.
- **Drag-and-drop upload interface** built with `react-dropzone`.
- **Upload progress tracking** using `axios` to give users feedback during file upload.

The application included both frontend and backend code under the Next.js framework, making it easy to manage everything in a single project.

## b) Reflection

Through this practical, I learned how to build a complete file upload system with proper validation and user experience in mind. I previously only knew basic form submissions, but this practical helped me understand:

- How to handle file uploads on the server using Node.js libraries like `formidable`.
- How to validate files based on size and MIME type on the client side.
- How to enhance the UI with drag-and-drop and upload progress bars.

One challenge I faced was properly configuring `formidable` to parse form data inside the Next.js API route. Initially, I was getting undefined file data because I forgot to disable the default body parser. After checking the documentation, I added the required configuration to disable the body parser for the upload route.

Another issue I ran into was displaying upload progress correctly. It took some debugging to correctly integrate `axios` with the progress callback, but eventually I managed to get it working.

Overall, this practical helped me gain hands-on experience with file uploads in full-stack React applications, and I now feel more confident implementing similar features in real-world projects.
