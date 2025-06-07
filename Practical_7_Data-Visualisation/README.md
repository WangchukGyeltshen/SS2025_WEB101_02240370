# Practical 7: Data Visualization with Charting Libraries

## Instructions

### Overview

In this practical, I implemented several data visualizations using charting libraries within a React application. The goal was to build an interactive analytics dashboard that displays trends, categories, and patterns using different types of charts.

---

## Setup

1. Clone the starter project repository:
   ```bash
   git clone https://github.com/syangche/Data-Visualisation.git
   cd Data-Visualisation
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

---

## Chart Components

1. **Monthly Sales Chart (Line Chart using Recharts)**
   - File: `components/MonthlySalesChart.jsx`
   - Displays sales trends across months.
   - Useful for analyzing revenue growth or decline over time.

2. **Product Category Chart (Pie Chart using Recharts)**
   - File: `components/ProductCategoryChart.jsx`
   - Shows the distribution of sales by product category.
   - Ideal for identifying top-performing categories.

3. **Customer Acquisition Chart (Bar Chart using react-chartjs-2)**
   - File: `components/CustomerAcquisitionChart.jsx`
   - Represents the number of customers acquired over time.
   - Helps in tracking marketing campaign effectiveness.

4. **Weekly Visitors Chart (Area Chart using react-chartjs-2)**
   - File: `components/WeeklyVisitorsChart.jsx`
   - Displays daily visitor count trends for a week.
   - Useful for identifying peak usage periods.

---

## Integration

- Updated `App.jsx` to render all four chart components in the main dashboard view.
- Ensured responsiveness and interactivity using default configurations and props from each charting library.

---

## Tools and Libraries

- **Recharts:** For pie and line charts.
- **react-chartjs-2:** For bar and area charts.
- **React:** Core frontend framework.
- **Chart.js:** Underlying chart rendering engine used by react-chartjs-2.

---

## References

- Project Repo: https://github.com/syangche/Data-Visualisation.git
- Recharts: https://recharts.org/en-US/
- Chart.js Docs: https://www.chartjs.org/docs/latest/
- React Chart.js 2: https://react-chartjs-2.js.org/