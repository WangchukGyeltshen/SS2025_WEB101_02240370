# Practical 2: Weather API App – RESTful API Integration

## Instructions

### Project Setup

1. **Create Folder Structure**  
   - Make a new folder and inside it create:
     - `index.html` – the UI
     - `script.js` – the logic and API handling

2. **APIs Used**
   - **GET Requests**: [OpenWeatherMap API](https://openweathermap.org/)
   - **POST, PUT, DELETE**: [JSONPlaceholder Fake API](https://jsonplaceholder.typicode.com/)

---

## Implementation Steps

### Step 1: HTML Structure (`index.html`)
- Tabbed interface for switching between operations (GET, POST, PUT, DELETE)
- Forms for weather lookups and saving locations
- Modal form for editing saved locations
- Display sections for:
  - Weather data
  - Saved locations
  - API responses

### Step 2: JavaScript Functionality (`script.js`)
- Added event listeners for button clicks and form submissions
- Implemented API requests:
  - `getWeather()`: fetches weather data for a city
  - `saveLocation()`: adds a new location using POST
  - `updateLocation()`: updates an entry via PUT
  - `deleteLocation()`: removes a location via DELETE

---

### Running the App

1. Replace `YOUR_OPENWEATHERMAP_API_KEY` in `script.js` with your real API key from:
   [https://openweathermap.org/api](https://openweathermap.org/api)
2. Open `index.html` in any browser — no server required.
3. Test functionality:
   - GET: Type a city and hit “Get Weather”
   - POST: Add a location and click “Save Location”
   - PUT: Edit a location, click “Update”
   - DELETE: Remove any location

---

## Resources

- OpenWeatherMap Docs: https://openweathermap.org/api
- JSONPlaceholder Docs: https://jsonplaceholder.typicode.com/
