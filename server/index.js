import express    from 'express'
import cors       from 'cors'
import dotenv     from 'dotenv'
import mongoose   from 'mongoose'
import contactRouter from './routes/contact.js'

dotenv.config()

const app  = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/contact', contactRouter)

// Health check
app.get('/api/health', (_, res) => res.json({ status: 'ok', message: 'Portfolio API running 🌿' }))

// MongoDB connection + start server
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB connected')
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`))
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message)
    process.exit(1)
  })
