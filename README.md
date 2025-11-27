# 🌤️ Personal Dashboard

- A simple personal dashboard that displays:
- A random background photo from Unsplash
- Cryptocurrency info (Dogecoin)
- Current local time (updates every second)
- Local weather based on your geolocation
- Fallbacks if APIs fail

This project uses HTML + CSS + JavaScript and multiple APIs to create a dynamic homepage-like dashboard.

# Demo Link
https://chisu-kawahara.github.io/dashboard/

# 🚀 Features

## 🖼️ Random Background Image
- Fetches a random landscape image from Unsplash through Scrimba’s proxy.
- If the request fails, a fallback image and author name are displayed.
- Uses the CoinGecko API.
- Includes error handling.

## ⏰ Live Digital Clock
- Updates every second using setInterval().
- Displays time in short format (e.g., 5:43 PM).

## 🌡️ Local Weather
- Uses the browser’s geolocation to get the user's coordinates.
- Requests weather data from OpenWeatherMap (via Scrimba API).

## Shows:
- Weather icon
- Temperature in Celsius

## 🧰 Technologies Used
- JavaScript (ES6)
- Fetch API
- Navigator.geolocation
- HTML / CSS
- APIs
- CoinGecko
- OpenWeatherMap