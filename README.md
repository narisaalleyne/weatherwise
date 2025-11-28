WeatherWise – Weather Dashboard (Phase 1)

WeatherWise is a simple weather dashboard built with Next.js (App Router).
This project is part of CPAN144 – Group Project (Phase 1) and focuses on project setup, routing, components, and UI structure before API integration.

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

Clean layout (CSS or Tailwind).

Folder Structure
weatherwise/
│ app/
│   |-layout.tsx
│   |- page.tsx
│   |- favourites/
│   │   └ page.tsx
│   |- city/
│   │   └ page.tsx
|   |- global.css
│ components/
│   |- NavBar.jsx
│   |- Footer.jsx
│   |- WeatherCard.jsx
│   |- SearchBar.jsx
|   |-Loading
│ public/
| README.md

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

Next Steps (Phase 2)

Integrate OpenWeatherMap API

Display live weather data

Add LocalStorage for favourite cities

Add error handling + loading states

Improve UI layout

Project Status

Phase 1 completed
Project is fully prepared for Phase 2 API integration.