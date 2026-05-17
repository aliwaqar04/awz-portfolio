# Ali Waqar Zafar — Portfolio Website

A full-stack MERN portfolio with sage green editorial design, smooth Framer Motion animations, contact form with Nodemailer, and MongoDB message storage.

---

## 🗂 Project Structure

```
ali-portfolio/
├── client/          ← Vite + React + TailwindCSS + Framer Motion
├── server/          ← Express + MongoDB + Nodemailer
├── package.json     ← Root (concurrently runner)
└── vercel.json      ← Vercel deploy config
```

---

## ⚡ Quick Setup (5 Steps)

### Step 1 — Clone & Install

```bash
git clone https://github.com/aliwaqar04/portfolio.git
cd ali-portfolio

# Install everything at once
npm run install:all
```

### Step 2 — MongoDB Atlas Setup

1. Go to [https://cloud.mongodb.com](https://cloud.mongodb.com) → create free account
2. Create a **free M0 cluster**
3. Database Access → Add user with password
4. Network Access → Allow access from anywhere (0.0.0.0/0)
5. Connect → Drivers → copy the connection string

### Step 3 — Gmail App Password Setup

1. Go to your Google Account → Security
2. Enable **2-Step Verification** (required)
3. Search "App passwords" → Create one for "Mail"
4. Copy the 16-character password

### Step 4 — Environment Variables

```bash
# In /server, copy the example file
cp server/.env.example server/.env

# Edit server/.env with your values:
MONGODB_URI=mongodb+srv://youruser:yourpass@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
EMAIL_USER=aliwaqarzafar04@gmail.com
EMAIL_PASS=xxxx xxxx xxxx xxxx
CLIENT_URL=http://localhost:5173
PORT=5000
```

### Step 5 — Run Development Server

```bash
# From root directory — starts both client and server
npm run dev

# Client runs on: http://localhost:5173
# Server runs on: http://localhost:5000
```

---

## 🚀 Deployment

### Frontend → Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import repository
3. Root directory: leave as-is (vercel.json handles it)
4. Deploy! Your site will be live at `https://yourname.vercel.app`

### Backend → Render

1. Go to [render.com](https://render.com) → New Web Service
2. Connect your GitHub repo
3. Settings:
   - **Root directory:** `server`
   - **Build command:** `npm install`
   - **Start command:** `node index.js`
4. Environment Variables → add all from server/.env
5. Update `CLIENT_URL` in Render to your Vercel URL

### Update Frontend API URL for Production

In `client/.env` (create this file):
```
VITE_API_URL=https://your-backend-name.onrender.com
```

Then update `client/src/components/Contact.jsx`:
```js
// Change this line:
await axios.post('/api', form)

// To this for production:
await axios.post(`${import.meta.env.VITE_API_URL}/api`, form)
```

---

## 📦 Tech Stack

| Layer     | Technology                              |
|-----------|-----------------------------------------|
| Frontend  | React 18, Vite, TailwindCSS, Framer Motion |
| Backend   | Node.js, Express.js                     |
| Database  | MongoDB Atlas + Mongoose                |
| Email     | Nodemailer (Gmail SMTP)                 |
| Icons     | React Icons (Feather)                   |
| Animation | Framer Motion + TypeAnimation           |
| Deploy    | Vercel (FE) + Render (BE)              |

---

## 🎨 Design System

- **Primary font:** Playfair Display (display/headings)
- **Body font:** DM Sans
- **Mono font:** JetBrains Mono
- **Color palette:** Sage green + cream + forest dark
- **Animation:** Framer Motion scroll-triggered fade-ups

---

## 📁 Adding Your Resume

Place your CV PDF as:
```
client/public/Ali-Waqar-Zafar-CV.pdf
```

The download button in the Navbar will automatically link to it.

---

## 📧 Contact

- Email: aliwaqarzafar04@gmail.com
- GitHub: https://github.com/aliwaqar04
- LinkedIn: https://www.linkedin.com/in/ali-waqar-zafar-a45964324/
