# Wedding Website Setup Guide

## 1. Add Your Photos

Place your photos in the `images/` folder. High-resolution originals go in `images/` and optimized versions for the site go in `images/large/`:

- **`images/large/cover.jpg`** - Hero background image (engagement photo or venue photo). Use a high-quality landscape image, ideally 1920x1080 or larger.
- **`images/large/backdrop.jpg`** - RSVP section background image.

Timeline photos (also in `images/large/`):
- `how-we-met.jpeg` - How We Met (2018)
- `first-date.jpg` - First Date
- `adventures-together.jpg` - Adventures Together
- `game-day.jpeg` - Game Day
- `graduation.jpg` - Graduation
- `proposal.jpeg` - The Proposal
- `celebration.jpg` - Registration / Celebration (2025)

## 2. Add Your Video

The site uses a local video file. Place your video in the `videos/` folder:

- **`videos/then_and_now_final_v2.mp4`** - "Then & Now" video shown in the Our Story section.

To use a YouTube embed instead, replace the `<video>` tag in `index.html` with:

```html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
    title="Our Story"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>
```

## 3. Personalize Content

In `index.html`, you can update:
- **Page title** - Currently "R ❤ B" in the `<title>` tag
- **Hero section** - Couple names ("Ri Xin" & "Beryl"), date, venue
- **Nav logo** - Currently "R & B"
- **Timeline** - Story milestones, dates, descriptions, and photos
- **RSVP deadline** - Currently set to November 19, 2026
- **Footer** - Names, date, and hashtag

In `script.js`, update:
- **`WEDDING_DATE`** - The countdown target date (currently December 19, 2026 at 12:00 PM SGT)
- **`GOOGLE_SCRIPT_URL`** - Your Google Apps Script URL (see step 4)

## 4. Connect RSVP to Google Sheets

### Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "Wedding RSVPs" (or whatever you like)

### Step 2: Add the Apps Script
1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any default code in the editor
3. Copy the entire contents of `google-apps-script.js` and paste it
4. Click the save icon (or Ctrl+S)
5. Name the project "Wedding RSVP Handler"

### Step 3: Authorize the Script
1. In the Apps Script editor, select `doPost` from the function dropdown
2. Click the **Run** button (play icon)
3. A permissions dialog will appear — click **Review permissions**
4. Choose your Google account
5. If you see **"Google hasn't verified this app"**:
   - Click **Advanced** (small text at bottom left)
   - Click **Go to Wedding RSVP Handler (unsafe)**
   - Click **Allow**

### Step 4: Deploy as Web App
1. Click **Deploy > New deployment**
2. Click the gear icon next to "Select type" and choose **Web app**
3. Set these options:
   - Description: "Wedding RSVP"
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. Copy the **Web app URL** (it looks like `https://script.google.com/macros/s/XXXX.../exec`)

### Step 5: Add the URL to Your Website
1. Open `script.js`
2. Find the line: `const GOOGLE_SCRIPT_URL = '...';`
3. Paste your Web app URL between the quotes
4. Save the file

### Step 6: Test It
1. Open `index.html` in your browser
2. Fill out the RSVP form and submit
3. Check your Google Sheet — a new row should appear with the submission data

### Updating the Script
If you modify `google-apps-script.js` after deploying, you must redeploy:
1. Go to **Deploy > Manage deployments**
2. Click the **pencil icon** (edit)
3. Set version to **New version**
4. Click **Deploy**

### RSVP Data Collected
The Google Sheet will have these columns:
| Timestamp | Name | Email | Attending | Plus One | Plus One Name | Dietary Restrictions | Dietary Details | Plus One Dietary | Message |

## 5. Hosting

To put your site online, you can use any of these free options:

### GitHub Pages (Free)
1. Create a GitHub repository
2. Push all files to the repo
3. Go to Settings > Pages > set source to "main" branch
4. Your site will be live at `https://yourusername.github.io/reponame`

### Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site is live instantly with a custom URL

### Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Import your project
3. Deploy with one click

## 6. Custom Domain (Optional)

If you want a custom domain like `rixinandberyl.com`:
1. Purchase a domain from Namecheap, Google Domains, etc.
2. Point DNS to your hosting provider
3. Each host above has guides for custom domains
