# 🌿 GramHealth | ग्राम स्वास्थ्य

> **AI-Assisted Rural Healthcare Access, Symptom Screening & Facility Finder**  
> An open-source, mobile-first hackathon prototype designed for low-bandwidth rural environments, patient privacy, and transparent community guidance.

---

## 📖 Table of Contents
1. [Overview & Mission](#-overview--mission)
2. [Key Features](#-key-features)
3. [Tech Stack](#-tech-stack)
4. [How to Run on Windows (Beginner-Friendly)](#-how-to-run-on-windows)
5. [Feature Walkthrough](#-feature-walkthrough)
6. [Ethical Safeguards & Limitations](#-ethical-safeguards--limitations)
7. [Git Review & Commit Instructions](#-git-review--commit-instructions)
8. [License](#-license)

---

## 🎯 Overview & Mission

In many rural villages across India, access to qualified medical practitioners is hours away. Families often face two critical dilemmas:
1. **Unnecessary delay** in recognizing dangerous emergency symptoms (such as pneumonia in infants or acute dehydration from diarrhea).
2. **Harmful self-medication** with over-the-counter antibiotics or unverified steroid injections from informal medicine shops.

**GramHealth** addresses this challenge with a lightweight, low-bandwidth web prototype that:
- Provides **transparent, conservative, rule-based symptom screening** in simple English and Hindi.
- Guides families on **when to visit a PHC/CHC** and when to **immediately dial 108**.
- Locates nearby government healthcare infrastructure using **OpenStreetMap**.
- Educates communities on life-saving first-aid (such as the standard WHO Oral Rehydration Solution ratio).
- Keeps check-up reminders private on the user's phone using browser `localStorage` without tracking or external servers.

---

## ✨ Key Features

| Module | Purpose | Highlights |
|---|---|---|
| **1. Bilingual Dashboard** | Central navigation & emergency hotlines | English & हिंदी toggle, low-bandwidth design, prominent 108/102 emergency call banner. |
| **2. Symptom Screener** | Rule-based early triage | Red / Amber / Green triage logic, transparent explanations, safe supportive home care, what NOT to do, printable doctor summary. |
| **3. Facility Finder** | Locate rural health infrastructure | Search by town/PIN code or GPS; connects to public OpenStreetMap; sample fallback facilities explicitly labeled as unverified demo entries. |
| **4. Health Education** | Preventive first-aid & wellness | Interactive WHO ORS water calculator, maternal nutrition, clean water safety, blood pressure/sugar awareness, Tele-MANAS mental health. |
| **5. Reminders & Camps** | Track checkups & village drives | Create/delete reminders in browser `localStorage` (100% private to device); schedule of rural health camps with demo labeling. |
| **6. Emergency Helplines** | Direct click-to-call directory | 108 (Ambulance), 102 (Janani Shishu Suraksha), 1075 (Health Ministry), 14416 (Tele-MANAS), 112 (Unified), 1098 (Childline). |

---

## 🛠 Tech Stack

- **Frontend**: HTML5 (Semantic & Accessible), CSS3 (Custom properties, mobile-first responsive grid, print styles), Vanilla JavaScript (ES6+).
- **External Dependencies**: **Zero**. No npm packages required to run, no external CSS frameworks, no tracking scripts.
- **APIs**:
  - OpenStreetMap Nominatim (Free public geocoding, restricted to India).
  - OpenStreetMap Overpass (Public amenity search for hospitals and clinics).
  - Browser Geolocation API (Strictly optional; activated only with explicit user permission).
- **Data Persistence**: HTML5 `localStorage` (device-only storage for language preference and check-up reminders).
- **Cost**: **100% Free** — No paid APIs, no API keys, no mandatory backend server.

---

## 🚀 How to Run on Windows

Because GramHealth is built with pure HTML, CSS, and Vanilla JavaScript, you can run it on Windows in seconds using any of the following beginner-friendly methods:

### Method 1: Using Python (Recommended)
Python is already installed on most Windows development machines.

1. Open **Windows PowerShell** or **Command Prompt (CMD)**.
2. Navigate to your project folder:
   ```powershell
   cd "C:\Users\Nidhi Yadav\OneDrive\Documents\GitHub\Gram_Health"
   ```
3. Start Python's built-in lightweight local web server:
   ```powershell
   python -m http.server 8000
   ```
4. Open your web browser (Chrome, Edge, Firefox, Brave) and visit:
   ```
   http://localhost:8000
   ```
5. Press `Ctrl + C` in PowerShell whenever you wish to stop the server.

---

### Method 2: Using Node.js
If you have Node.js installed on Windows:

1. Open PowerShell in the project directory:
   ```powershell
   cd "C:\Users\Nidhi Yadav\OneDrive\Documents\GitHub\Gram_Health"
   ```
2. Run `npx serve`:
   ```powershell
   npx serve .
   ```
3. Open the URL shown in the terminal (usually `http://localhost:3000`).

---

### Method 3: Using VS Code "Live Server"
1. Open the `Gram_Health` folder in **Visual Studio Code**.
2. Install the free **Live Server** extension (by Ritwick Dey) from the Extensions tab (`Ctrl + Shift + X`).
3. Right-click `index.html` in the file explorer and click **"Open with Live Server"**.

---

### Method 4: Direct Double-Click (No Terminal Required)
1. Open File Explorer and navigate to `C:\Users\Nidhi Yadav\OneDrive\Documents\GitHub\Gram_Health`.
2. Double-click **`index.html`**.
3. It will open directly in your default browser (`file:///.../index.html`).
   > *Note: All core features (Bilingual toggle, Symptom Screener, Education, ORS calculator, Reminders) work offline. For live OpenStreetMap searches or GPS location, a local server (Method 1 or 2) is recommended due to browser security restrictions on `file://` origins.*

---

## 🔍 Feature Walkthrough

### 1. English / हिंदी Language Toggle
- Located in the top-right header.
- Instantly translates all headings, form options, emergency guidelines, and educational cards.
- Remembers your language choice between visits using `localStorage`.

### 2. Transparent Rule-Based Symptom Screener
- **No black-box claims**: GramHealth avoids deceptive AI claims. Instead, it uses transparent clinical rules based on community health protocols.
- **Red Tier (Urgent Emergency)**: Triggered immediately if life-threatening signs are detected (such as gasping for breath, persistent chest pain, drowsiness, or high fever in infants). Advises calling **108** immediately.
- **Amber Tier (Doctor Evaluation Needed)**: For symptoms persisting over 3 days, vulnerable groups (infants/elderly), or suspected infections. Advises consulting an ASHA worker, ANM, or block PHC within 24-48 hours.
- **Green Tier (Mild Care)**: For short-duration mild symptoms. Advises clean hydration, rest, and watchful waiting.
- **Print / Save Summary**: Generates a clean medical assessment slip that rural patients can print or show to their local ASHA worker or doctor.

### 3. OpenStreetMap Facility Finder
- Type an Indian town (e.g., `Varanasi`, `Sitapur`) or a 6-digit PIN code.
- Optionally click **"Use My Current Location"** (prompts for GPS access).
- Shows direct links to view the facility on **OpenStreetMap** or get driving/walking directions.
- **Transparency Safeguard**: Real OpenStreetMap records are labeled `✓ Live OSM Record`. Sample placeholder clinics are explicitly labeled `⚠️ Unverified Sample Demo Entry`.

### 4. Interactive ORS Rehydration Calculator
- Enter clean boiled water in liters (1 to 10).
- Calculates the exact WHO-standard ratio of clean sugar (6 level teaspoons per liter) and common salt (1/2 level teaspoon per liter).

### 5. Check-Up Reminders & Camps
- Save upcoming child vaccinations (BCG, Polio, Measles), maternal ANC checkups, or BP screenings.
- Stored exclusively in your phone's browser (`localStorage`). GramHealth never sends personal medical data to any remote server.
- Shows demo health camp dates with an explicit disclaimer advising users to confirm with their local Gram Panchayat.

---

## 🛡 Ethical Safeguards & Limitations

1. **Medical Disclaimer**: GramHealth is an educational screening prototype. It **does not diagnose diseases, prescribe medication, or replace a licensed physician**.
2. **No Prescription Drugs**: The prototype strictly avoids recommending prescription antibiotics, steroids, or dosage adjustments.
3. **Public API Rate Limits & Offline Fallback**: OpenStreetMap Nominatim and Overpass are public community services subject to network availability and rate limits. If offline or if the service takes longer than 7 seconds to respond, GramHealth automatically presents fallback sample facilities with an explicit **Unverified Demo Data** label.
4. **Local Device Storage**: Reminders are stored locally on the user's browser. They do not trigger background operating system push notifications when the browser tab is closed.

---

## 📦 File Structure

```
Gram_Health/
│
├── index.html        # Semantic HTML5 layout, ARIA labels, vector SVG icons
├── style.css         # Responsive, mobile-first styling, print styles, CSS tokens
├── app.js            # Translation dictionary, triage logic, OSM finder, localStorage manager
└── README.md         # Documentation, setup guide, ethical safeguards
```

---

## 💻 Git Review & Commit Instructions

To inspect, stage, and commit your new files to Git on Windows, run the following commands in PowerShell:

```powershell
# 1. Check which files were created and modified
git status

# 2. Review the changes made
git diff

# 3. Stage all new and modified files
git add index.html style.css app.js README.md

# 4. Commit with a clear, descriptive message
git commit -m "feat: build GramHealth rural healthcare portal prototype with bilingual support, symptom screener, OSM facility finder, and reminders"

# 5. Push changes to your GitHub repository
git push origin main
```
*(If your default branch is `master`, replace `main` with `master` in step 5).*

---

## 📄 License
This project is open-source under the [MIT License](https://opensource.org/licenses/MIT). Created for hackathon demonstration and rural community health empowerment.
