WeatherWise – Weather Dashboard (Phase 2)

WeatherWise is a weather dashboard built with Next.js (App Router) that allows users to search for cities, view live weather data, and manage favourite cities. This project is part of CPAN144 – Group Project.

Phase 1 Features

✔ Project Setup & Routing

Next.js project initialized using the App Router.

Pages created:

Home Page (/)

Favourites Page (/favourites)

City Dynamic Route (/city/[cityName])

Clean and organized folder structure.

✔ Components

NavBar for navigation.

Footer for layout.

WeatherCard for displaying city information.

SearchBar for user input.

✔ State & Props

Implemented React state for search handling.

Lifted state to parent component.

Passed props cleanly to child components.

✔ Basic UI

Simple responsive styling.

Clean layout using CSS/Tailwind.

Phase 2 Features / Updates

✔ API Integration

Integrated OpenWeatherMap API to fetch live weather data.

Dynamic city weather details displayed on both Home and City pages.

✔ Favourites Management

Users can add/remove favourite cities.

Favourite cities stored in LocalStorage, ensuring persistence across sessions.

✔ Loading & Error Handling

Loading state displayed while fetching data.

Error messages displayed for invalid searches or failed API requests.

✔ Enhanced UI / UX

Improved responsive layout for mobile and desktop.

WeatherCard now displays additional data (e.g., temperature, weather conditions, humidity, wind speed).

SearchBar enhanced for better user experience.

✔ State Management Enhancements

Centralized state for handling search and favourites.

Props and state shared efficiently between components.

Folder Structure
weatherwise/
│ app/
│   ├ layout.tsx
│   ├ page.tsx
│   ├ favourites/
│   │   └ page.tsx
│   ├ city/
│   │   └ page.tsx
│   └ global.css
│ components/
│   ├ NavBar.jsx
│   ├ Footer.jsx
│   ├ WeatherCard.jsx
│   └ SearchBar.jsx
│ public/
│ README.md

Team Members

Bibi Narisa Alleyne – Frontend UI + Component Logic

Dawattie Kissoon – Styling + Setup

Great – Documentation + Support

How to Run Locally

Clone the repository:

git clone https://github.com/narisaalleyne/weatherwise.git


Install dependencies:

npm install


Start the development server:

npm run dev

Next Steps

Further enhance error handling (e.g., network errors).

Add weather forecasts for multiple days.

Include additional visualizations (e.g., graphs for temperature trends).

Deploy project for public access.

Replace API PlaceHolder

Project Status

Phase 2 completed

WeatherWise now supports live weather data, favourites management, and improved UI/UX.