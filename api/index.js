import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import contactRouter from '../server/routes/contact.js'

dotenv.config()

const app = express()

// CORS — allow your Vercel frontend URL and localhost for dev
const allowedOrigins = [
  process.env.CLIENT_URL,
  'http://localhost:5173',
  'http://localhost:3000',
].filter(Boolean)

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true)
    if (allowedOrigins.includes(origin)) return callback(null, true)
    callback(new Error('Not allowed by CORS'))
  },
  credentials: true,
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/contact', contactRouter)

// Health check
app.get('/api/health', (_, res) =>
  res.json({ status: 'ok', message: 'Portfolio API running 🌿' })
)

// Connect MongoDB once and cache the connection
let isConnected = false
const connectDB = async () => {
  if (isConnected) return
  await mongoose.connect(process.env.MONGODB_URI)
  isConnected = true
  console.log('✅ MongoDB connected')
}

// Serverless handler — Vercel calls this for every /api/* request
export default async function handler(req, res) {
  await connectDB()
  return app(req, res)
}
