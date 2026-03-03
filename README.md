# R ❤ B — Wedding Website

A wedding website for Ri Xin & Beryl's celebration on December 19, 2026 at Minjiang at Dempsey, Singapore.

## Features

- **Countdown timer** to the wedding day
- **Our Story timeline** with photos and milestones
- **"Then & Now" video** section
- **RSVP form** connected to Google Sheets
  - Conditional fields for attendance, plus one, and dietary restrictions
  - Animated heart confirmation on submit
  - Different messages for attending vs declining guests
- **Lightbox** for viewing timeline photos
- **Responsive design** — works on desktop, tablet, and mobile
- **Smooth animations** — scroll reveals, parallax hero, fade-ins

## Project Structure

```
wedding/
├── index.html              # Main page
├── styles.css              # All styles
├── script.js               # Countdown, form handling, animations
├── google-apps-script.js   # Google Sheets RSVP backend
├── images/                 # Original photos
│   └── large/              # Optimized photos used by the site
├── videos/                 # Video files
├── SETUP.md                # Detailed setup instructions
└── README.md               # This file
```

## RSVP Responses

[Google Sheet](https://docs.google.com/spreadsheets/d/1628rJ0oQ3yX3OeQwXW8L5ViSdDwYH1zyIXR6U5WK2uc/edit?usp=sharing)

## Quick Start

1. Open `index.html` in your browser — no build step or server required
2. To connect the RSVP form, follow the Google Sheets setup in [SETUP.md](SETUP.md)

## Tech Stack

- **HTML / CSS / JavaScript** — no frameworks or dependencies
- **Google Fonts** — Cormorant Garamond (serif) + Jost (sans-serif)
- **Google Apps Script** — serverless RSVP backend writing to Google Sheets

## Setup

See [SETUP.md](SETUP.md) for full instructions on:
- Adding your photos and video
- Personalizing names, dates, and venue
- Connecting the RSVP form to Google Sheets
- Hosting and custom domains
