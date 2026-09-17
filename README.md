# ZEUS — Guardian of the Purrlight 🐾✨

> An interactive superhero help portal built around **ZEUS**, a magical adult cat who brings comfort, calm, and hope to those facing difficult moments.

---

## 📖 Experience Overview

ZEUS is not a conventional landing page—it is a living, illustrated storybook where visitors discover a guardian cat living in a warm twilight village.

### The Chapters
* **Chapter I: The Arrival** — ZEUS enters from the left edge of the twilight world, leaves glowing golden pawprints, touches a wayside lantern to illuminate it, bounds toward the crescent moon, curls in its cradle, and reveals the sanctuary.
* **Chapter II: The Night Zeus Awoke** — An illustrated 4-scene origin story describing how an ordinary cat's purr brought warmth, slowed hurried breathing, and birthed the first Purrlight.
* **Chapter III: The Purrlight** — Interactive purr experience. Clicking **"HEAR ZEUS PURR"** triggers concentric golden waves, lantern illumination, eye-closing states, and realistic acoustic purr frequencies (25-50 Hz) synthesized via the Web Audio API.
* **Chapter IV: The Nine Gifts** — Interactive cards revealing the nine powers of Zeus (*Calm, Comfort, Courage, Hope, Listen, Protect, Dreamwalk, Guidance, Purrlight*).
* **Chapter V: Ask Zeus** — A full conversational chatbot that gently collects the user's name, age, location, email, and grievance. Submitting initiates a full magical payoff sequence (*"I heard you... You don't have to carry everything alone... REQUEST RECEIVED ✓"*).

---

## 🎨 Design System & Visual Signature

* **Aesthetic**: Warm Golden + Deep Maroon + Storybook Parchment.
* **Color Palette**:
  - Deep Maroon: `#451522`
  - Rich Burgundy: `#641E31`
  - Warm Maroon: `#7D3042`
  - Antique Gold: `#D5A642`
  - Bright Warm Gold: `#F0C968`
  - Cream: `#FFF4DC`
  - Warm Parchment: `#F3E2BD`
  - Soft Peach: `#E9A878`
  - Dark Brown: `#352019`
  - Very Dark Burgundy: `#241017`
* **Typography**: Google Fonts `Cinzel` (storybook serif) + `Plus Jakarta Sans`.
* **Character Fidelity**: Polished 2D character consistent with the master reference (*adult white/cream cat with orange/peach markings, navy crescent sweater, and fluffy tail*).

---

## ⚡ Tech Stack

* **Framework**: Next.js 16 (App Router) + TypeScript
* **Styling**: Tailwind CSS v4 + Vanilla CSS animations
* **Motion & Animation**: Motion (`motion/react`)
* **Audio**: Custom Web Audio API purr synthesizer & magical chime generator (with Sound On/Off control)
* **Database**: Supabase (`help_requests` table) with resilient runtime memory fallback
* **Email Dispatch**: Resend API with fallback server logger

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables (Optional)
Copy `.env.example` to `.env.local`:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Resend Email Notifications
RESEND_API_KEY=re_your_api_key
PURRSE_NOTIFICATION_EMAIL=zeus@purrlight.sanctuary
ZEUS_NOTIFICATION_EMAIL=zeus@purrlight.sanctuary
```
> *Note: If credentials are not provided, the application runs in self-contained mode, recording help requests in memory and printing structured notification emails directly to the server console.*

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
```bash
npm run build
npm start
```

---

## 🧪 Testing the Help API Directly

```bash
curl -X POST http://localhost:3000/api/help \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Alex",
    "age": 24,
    "location": "Sanctuary Valley",
    "email": "alex@example.com",
    "grievance": "I have been feeling overwhelmed by finals and could really use some calm."
  }'
```

---

## 🌙 Accessibility & Responsiveness

* Fully responsive across 320px, 375px, 768px, 1024px, 1440px+.
* Zero horizontal overflow.
* Full keyboard and screen-reader accessibility with ARIA landmarks.
* `prefers-reduced-motion` compliance built into animations.
* Audio does not autoplay; toggle switch provided in navigation.
