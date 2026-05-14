# 🐌 Cosmic Soul Maps — Editing Guide
### For Big Dog — no code skills needed

---

## How to Edit

1. Go to **github.com/bmcgarybot/bmcgarybot.github.io**
2. Click the file you want to edit
3. Click the **pencil icon** ✏️ (top right of the file)
4. Use **Ctrl+F** (or Cmd+F on Mac) to search for the text below
5. Change the words, leave the code alone
6. Click **"Commit changes"** → site updates in ~1 minute

**Golden rule:** Only change words between `>` and `<`. Don't touch code, classes, or anything in `<style>` or `<script>`.

---

## 📄 index.html — Main Homepage

### 🔹 Hero (top of page)
- **Badge:** Search for `Real Astronomical Calculations`
- **Title:** Search for `Cosmic Soul Maps`
- **Subtitle:** Search for `Your birth chart is the most personal map`
- **Button 1:** Search for `Explore Readings`
- **Button 2:** Search for `Free Daily Horoscope`
- **Trust badges:** Search for `Swiss Ephemeris Data` / `Same-Day Delivery` / `20+ Page Reports` / `Individually Crafted`

### 🔹 Readings Section (6 product cards)
- **Section title:** Search for `Choose Your Reading`
- **Section subtitle:** Search for `Every reading uses your exact birth data`

Each card has a name, description, feature list, price, and page count:

| Reading | Search for... |
|---------|--------------|
| The Soul Map | `The Soul Map` (under `<h3>`) |
| Love & Compatibility | `Love &amp; Compatibility` |
| Career Path | `Career Path` (under `<h3>`) |
| Year Ahead Forecast | `Year Ahead Forecast` |
| Numerology Deep Dive | `Numerology Deep Dive` |
| Quick Cosmic Snapshot | `Quick Cosmic Snapshot` |

- **Prices:** Search for `$24.99`, `$29.99`, `$19.99`, `$9.99`
- **Page counts:** Search for `20+ pages`, `15-25 pages`, etc.
- **Badges:** Search for `Most Popular`, `Couples`, `New for 2026`, `Best Value`

### 🔹 How It Works (3 steps)
- **Step 1:** Search for `Pay Securely`
- **Step 2:** Search for `Submit Your Birth Data`
- **Step 3:** Search for `Receive Your Reading via Email`

### 🔹 Sample Excerpts (reading previews)
- Search for `THE SOUL MAP` / `LOVE & COMPATIBILITY` / `CAREER PATH` / `YEAR AHEAD FORECAST` / `NUMEROLOGY DEEP DIVE` / `QUICK SNAPSHOT`
- The sample text is in `testimonial-text` paragraphs right below each label

### 🔹 "Why Different" Section
- **Section title:** Search for `Why These Readings Are Different`
- **Card 1:** Search for `Real Astronomical Data`
- **Card 2:** Search for `Narrative, Not Checklist`
- **Card 3:** Search for `Beautiful PDF Design`

### 🔹 Free Horoscope Signup
- **Title:** Search for `Free Daily Horoscope`
- **Description:** Search for `Get your personalized daily horoscope`
- **Success message:** Search for `You are in!`
- **Perks:** Search for `100% Free` / `Real Transit Data` / `All 12 Signs Daily`

### 🔹 CTA Section
- **Title:** Search for `Ready to See Your Chart?`
- **Etsy link:** Search for `etsy.com/shop/CosmicSoulMaps`

### 🔹 Contact Email
- Search for `bmc.garybot@gmail.com` — appears **multiple times** in this file. Change ALL of them if you change email.

### 🔹 Footer
- **Copyright:** Search for `2026 Cosmic Soul Maps`
- **Disclaimer:** Search for `All readings are for entertainment`

---

## 📄 order.html — Order Form Page

### 🔹 Hero
- **Badge:** Search for `Step 1 of 2`
- **Title:** Search for `Order Your Reading`
- **Description:** Search for `Fill in your birth details below`

### 🔹 Reading Options (dropdown)
- Search for `Select a reading` — the 6 options are listed below it
- To change a price, find the line like `The Soul Map (Birth Chart) - $24.99`

### 🔹 Form Labels
- Search for `Full birth name` / `Email address` / `Date of birth` / `Time of birth` / `City and country of birth`
- Helper text is right below each label

### 🔹 Partner Section (Love readings)
- Search for `Partner's Birth Details`

### 🔹 Auto-Response Email
- Search for `Thank you for your order from Cosmic Soul Maps` — this is the auto-reply customers get

### 🔹 PayPal Link
- Search for `paypal.me/BrettCoon` — update if you change PayPal

---

## 📄 horoscope-signup.html — Free Horoscope Page

### 🔹 Hero
- **Badge:** Search for `100% Free`
- **Title:** Search for `Daily Horoscope`
- **Description:** Search for `Start every morning with cosmic insight`

### 🔹 "What You Get" Cards
- **Card 1:** Search for `Real Planetary Transits`
- **Card 2:** Search for `6 AM MST Delivery`
- **Card 3:** Search for `No Strings Attached`

### 🔹 Upsell Section
- Search for `Want to Go Deeper?`

---

## 📄 thank-you.html — Payment/Thank You Page

### 🔹 Title
- Search for `Order Received!`

### 🔹 Reading Prices
- Search for the price grid: `Quick Snapshot` / `Numerology` / `Soul Map / Career` / `Love / Forecast`
- PayPal link: Search for `paypal.me/BrettCoon`

---

## ⚠️ Don't Touch

- The `style.css` file (that's all the design)
- Anything inside `<style>` or `<script>` tags
- Class names like `class="hero"` or `class="pc natal"`
- The `<svg>` icon code
- FormSubmit configuration (`formsubmit.co` lines)
- `google-apps-script.js` (backend logic)
- `sitemap.xml` and `robots.txt` (SEO files)

## 💡 Tips

- **Use Ctrl+F** to find any text on the page
- **Preview before committing** — GitHub shows changes in green/red
- **Broke something?** Click the clock icon on the file → revert to previous version
- **Prices appear in multiple places** — if you change a price, search the WHOLE file for the old price and update all occurrences
- **`&amp;` means `&`** in HTML — so `Love &amp; Compatibility` shows as `Love & Compatibility` on the site. Keep the `&amp;` in the code.

---

*Made by Obsidian Slug 🐌 so Big Dog can update his own sites*
