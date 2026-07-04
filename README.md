# Little Lemon Restaurant Capstone

Production-quality React application built for the Meta Front-End Developer Professional Certificate capstone.

## Project Overview

Little Lemon is a responsive restaurant website with a complete reservation workflow. It includes:

- Branded landing page with reusable sections
- Reservation form with full validation and accessibility support
- Reducer-driven available booking times
- Confirmation flow after successful submission
- Route handling for core pages and 404 states

## Features

- Home page: hero, specials, testimonials, about, footer
- Booking page with controlled form fields and inline validation
- Confirmation page with reservation summary
- Friendly API failure and fallback messages
- Sticky responsive navigation with mobile menu
- Smooth scrolling for anchored sections
- WCAG-aware focus states, labels, and semantic structure
- Lazy loaded routes for improved performance

## Screenshots

- Home: `docs/screenshots/home.png`
- Booking: `docs/screenshots/booking.png`
- Confirmation: `docs/screenshots/confirmed.png`

## Tech Stack

- React 19
- Vite
- React Router
- JavaScript
- Custom CSS (no UI framework)
- Jest + React Testing Library

## Installation

```bash
npm install
```

## Running Locally

```bash
npm run dev
```

## Running Tests

```bash
npx jest --coverage
```

## Build

```bash
npm run build
```

## Project Structure

```text
src/
  components/
    booking/
    layout/
    sections/
  constants/
  hooks/
  pages/
  tests/
  utils/
```

## Accessibility

- Semantic landmarks: header, nav, main, section, footer
- Inputs bound to labels with aria-invalid and described errors
- Skip link and visible keyboard focus states
- Alt text for images and accessible ratings text

## Responsive Design

Tested breakpoints include 320, 375, 425, 768, 1024, and 1440 pixels.

## Future Improvements

- Integrate real backend reservation API
- Add account authentication and booking history
- Add i18n support and locale-specific formatting

## License

For educational use in Coursera peer-review submissions.
