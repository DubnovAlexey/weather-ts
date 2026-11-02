# Weather

**English** · [עברית](README.he.md) · [Русский](README.ru.md)

A small weather app in React and TypeScript: type a city and get the current temperature, the pressure and today's sunset in the city's local time.

**Live demo:** https://dubnovalexey.github.io/weather-ts/

## Features

- Search by city name in any language; the first match is used.
- Current temperature (°C) and sea-level pressure (hPa).
- Sunset shown in the city's own time zone.
- Clear messages while loading and when a city is not found.
- No API key: the data comes from [Open-Meteo](https://open-meteo.com/), which is free for non-commercial use.
- Fits a phone screen: on a narrow screen the two halves of the card stack one above the other.

## How it works

Two requests with `fetch`: the Open-Meteo geocoding API turns the city name into coordinates, then the forecast API returns the current weather and the sunset for those coordinates.

## Tech stack

React 19 · TypeScript · Vite · Bootstrap · Open-Meteo API · GitHub Actions · GitHub Pages

## What I practised

- Function components, `useState` and lifting state up (form → data → view).
- Typing API data with TypeScript interfaces.
- Chaining two async requests with `async/await` and handling errors.
- A relative `base` in Vite so the build works on GitHub Pages and inside an iframe.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Every push to `main` builds the app and publishes it to GitHub Pages (`.github/workflows/deploy.yml`). One-time setup on GitHub: **Settings → Pages → Source: GitHub Actions**.

## Roadmap

- A 7-day forecast with weather icons.
- The last searched cities saved in `localStorage`.
- Units switch (°C / °F).
