
---

## `Reflection.md`

```md
# Reflection – Practical 7: Data Visualization

## a) Documentation

This practical focused on building a simple analytics dashboard using React and popular charting libraries. I created and integrated the following visualizations:

- A **line chart** to track monthly sales
- A **pie chart** to visualize product category distribution
- A **bar chart** to display customer acquisition statistics
- An **area chart** to represent weekly website visitors

I used **Recharts** for the line and pie charts and **react-chartjs-2** for the bar and area charts. Each component was created in a separate file and then imported into the main `App.jsx`.

These charts received static or mock data, and were designed to be responsive and informative. I also ensured basic interactivity such as hover effects and tooltips where applicable.

## b) Reflection

This practical helped me gain a solid understanding of how to use third-party libraries for rendering visual data in React. It was my first time using both Recharts and react-chartjs-2, and I appreciated how straightforward both libraries were once set up.

One challenge I faced was choosing the right chart type for the data I had. At first, I used a bar chart for monthly sales, but it made more sense visually to switch it to a line chart to better represent trends.

Another minor issue was with integrating Chart.js via `react-chartjs-2`. I had to make sure Chart.js components like `BarElement` and `CategoryScale` were registered properly before use. After reading the documentation, I resolved it by explicitly registering the required components.

Overall, this practical taught me how to choose appropriate visualizations for different types of data, and how to integrate them cleanly into a React project. I now feel more confident in using charting libraries to present analytical data in web applications.
