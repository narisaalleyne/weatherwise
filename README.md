🌦️WeatherWise – Weather Dashboard (Phase 3)

WeatherWise is a responsive weather dashboard built with Next.js (App Router) that allows users to search for cities, view real-time weather data, and manage a list of favourite cities. This project was developed as part of CPAN144 – Group Project and completed through multiple phases, with Phase 3 focusing on performance optimization and final presentation readiness.


---

Project Objectives

Provide real-time weather information for cities worldwide

Allow users to save and manage favourite cities

Apply modern React and Next.js best practices

Optimize application performance and user experience

Prepare the application for demonstration and presentation



---

Phase 1 Features

✔ Project Setup & Routing

Next.js project initialized using the App Router

Pages created:

Home Page (/)

Favourites Page (/favourites)

City Page (/city)


Clean and organized folder structure


✔ Components

NavBar for navigation

Footer for layout consistency

WeatherCard for displaying weather details

SearchBar for city search input


✔ State & Props

React state used for search handling

State lifted to parent components

Props passed cleanly between components


✔ Basic UI

Responsive layout using Tailwind CSS

Clean and simple user interface



---

Phase 2 Features / Updates

✔ API Integration

Integrated OpenWeatherMap API

Displays live weather data for searched cities

Dynamic city weather details shown on both Home and City pages


✔ Favourites Management

Users can add and remove favourite cities

Favourite cities stored in LocalStorage

Data persists even after browser refresh or restart


✔ Loading & Error Handling

Loading indicators displayed during API requests

Error messages shown for invalid searches or failed API calls


✔ Enhanced UI / UX

Improved responsiveness for mobile and desktop

WeatherCard displays:

Temperature

Weather condition

Weather icon


SearchBar enhanced for better usability


✔ State Management Enhancements

Centralized handling of search and favourites state

Efficient sharing of data across components



---

Phase 3 Features / Performance Optimization

✔ Lazy Loading & Code Splitting

Implemented dynamic imports using next/dynamic

WeatherCard component is lazy-loaded to reduce initial bundle size

Improves page load performance and responsiveness


✔ Image Optimization

Replaced standard <img> tags with Next.js <Image />

External weather icons securely configured using remotePatterns

Optimized image loading and performance


✔ Improved User Experience

Faster initial page load

Reduced unnecessary rendering

Smooth transitions when loading weather data


✔ Presentation Readiness

Application fully functional and stable

Optimized features demonstrated during presentation

Clear explanation of technologies and challenges prepared



---

📁 Folder Structure

weatherwise/
│ app/
│   ├ layout.tsx
│   ├ page.tsx
│   ├ favourites/
│   │   └ page.tsx
│   ├ city/
│   │   └ page.tsx
│   └ global.css
│
│ components/
│   ├ NavBar.tsx
│   ├ Footer.tsx
│   ├ WeatherCard.tsx
│   └ SearchBar.tsx
│
│ public/
│
│ next.config.js
│ README.md


---

👥 Team Members & Contributions

Bibi Narisa Alleyne – Frontend UI, component logic, state management, performance optimization

Dawattie Kissoon – Styling, layout, project setup

Great Opiti – Documentation and support



---

🛠 How to Run Locally

1️⃣ Clone the repository

git clone https://github.com/narisaalleyne/weatherwise.git

2️⃣ Install dependencies

npm install

3️⃣ Start the development server

npm run dev

Open your browser at:
👉 http://localhost:3000


---

📊 Project Status

✅ Phase 1 completed
✅ Phase 2 completed
✅ Phase 3 completed

WeatherWise now includes performance optimizations, persistent favourites, live API integration, and is fully prepared for presentation and evaluation