# WeatherWise – Real-Time Weather Dashboard

WeatherWise is a simple and responsive weather application built using Next.js.  
It allows users to search for a city and view real-time weather information such as  
temperature, humidity, wind speed, and weather conditions.

This project is part of CPAN144 – Group Project (Phase 1).


## 🌤️ Project Features (Phase 1)

### ✅ Project Setup & Structure
- Created a Next.js project using the App Router.
- Added pages: **Home**, **Favourites**, **City Page (dynamic)**.
- Added components: **NavBar**, **Footer**, **WeatherCard**.
- Set up clean folder structure.

### ✅ Components & State
- Implemented React state for search input.
- Passed props between components.
- Lifted state to the main page.

### ✅ Routing
- Home page (`/`)
- Favourites page (`/favourites`)
- City dynamic page (`/city/[id]`)
- Navigation using the NavBar component.

### ✅ Basic Styling
- Simple responsive layout using CSS/Tailwind (basic).
- Clean and readable UI.


## 📁 Folder Structure

weatherwise/
| |app/
│ -layout.tsx
|_ page.tsx
│ - favourites/
│ - page.tsx
│ - city/
│ - page.tsx
├─ components/
│ - NavBar.jsx
│ - Footer.jsx
│ - WeatherCard.jsx
| -SearchBar
├─ public/
├─ README.md



## 👥 Team Members
- **Bibi Narisa Alleyne** – Frontend + Component Logic  
- **Dawattie Kissoon** – Styling + API Handling
- **Great** - Assist with both


##  How to Run This Project

1. Clone the repo  

2. Install dependencies  

3. Run the development server  


## 📚 Next Steps (Phase 2)
- Integrate OpenWeatherMap API.
- Add auto-suggestions search.
- Add LocalStorage for favourite cities.
- Implement Dark/Light mode.


## ✔ Project Status
**Completed Phase 1**  
Ready for Phase 2.

