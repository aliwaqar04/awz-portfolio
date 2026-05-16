import express              from 'express'
import nodemailer           from 'nodemailer'
import rateLimit            from 'express-rate-limit'
import { body, validationResult } from 'express-validator'
import Message              from '../models/Message.js'

const router = express.Router()

// Rate limiting: max 5 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs:  15 * 60 * 1000,
  max:        5,
  message:   { success: false, message: 'Too many messages sent. Please try again in 15 minutes.' },
  standardHeaders: true,
  legacyHeaders:   false,
})

// Validation rules
const validateContact = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ max: 100 }).withMessage('Name too long'),
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email address')
    .normalizeEmail(),
  body('subject')
    .trim()
    .notEmpty().withMessage('Subject is required')
    .isLength({ max: 200 }).withMessage('Subject too long'),
  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 20 }).withMessage('Message must be at least 20 characters')
    .isLength({ max: 2000 }).withMessage('Message too long'),
]

// Create Nodemailer transporter
const createTransporter = () =>
  nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Gmail App Password
    },
  })

// POST /api/contact
router.post('/', limiter, validateContact, async (req, res) => {
  // Check validation errors
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: errors.array()[0].msg,
      errors:  errors.array(),
    })
  }

  const { name, email, subject, message } = req.body
  const ip = req.ip || req.connection.remoteAddress

  try {
    // 1. Save to MongoDB
    const saved = await Message.create({ name, email, subject, message, ip })

    // 2. Send email notification to Ali
    const transporter = createTransporter()
    await transporter.sendMail({
      from:    `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to:      process.env.EMAIL_USER,
      subject: `[Portfolio] New message: ${subject}`,
      html: `
        <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fdf9ed; padding: 32px; border-radius: 4px;">
          <div style="background: #2d4a1e; padding: 20px; margin-bottom: 24px; border-radius: 2px;">
            <h1 style="color: #fdf9ed; font-size: 20px; margin: 0;">📬 New Portfolio Message</h1>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #4a6741; font-size: 12px; font-family: monospace; width: 80px;">FROM</td><td style="padding: 8px 0; color: #2d4a1e; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #4a6741; font-size: 12px; font-family: monospace;">EMAIL</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #5a8f42;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #4a6741; font-size: 12px; font-family: monospace;">SUBJECT</td><td style="padding: 8px 0; color: #2d4a1e;">${subject}</td></tr>
          </table>
          <div style="background: #fff; border: 1px solid #cddfc0; padding: 16px; margin-top: 16px; border-radius: 2px;">
            <p style="color: #4a6741; font-size: 12px; font-family: monospace; margin-bottom: 8px;">MESSAGE</p>
            <p style="color: #1a2e13; line-height: 1.7; margin: 0;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="color: #a8c792; font-size: 11px; font-family: monospace; margin-top: 16px;">Received at ${new Date().toLocaleString()} · ID: ${saved._id}</p>
        </div>
      `,
    })

    // 3. Send auto-reply to sender
    await transporter.sendMail({
      from:    `"Ali Waqar Zafar" <${process.env.EMAIL_USER}>`,
      to:      email,
      subject: `Got your message, ${name}! 🌿`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fdf9ed; padding: 32px;">
          <div style="background: #2d4a1e; padding: 20px; margin-bottom: 24px;">
            <h1 style="color: #fdf9ed; font-size: 20px; margin: 0;">Ali Waqar Zafar</h1>
            <p style="color: #a8c792; font-size: 12px; margin: 4px 0 0; font-family: monospace;">Full-Stack Developer</p>
          </div>
          <p style="color: #2d4a1e; font-size: 16px;">Hi ${name},</p>
          <p style="color: #4a6741; line-height: 1.7;">Thanks for reaching out! I've received your message about <strong>"${subject}"</strong> and will get back to you as soon as possible — usually within 24–48 hours.</p>
          <p style="color: #4a6741; line-height: 1.7;">In the meantime, feel free to check out my work on <a href="https://github.com/aliwaqar04" style="color: #5a8f42;">GitHub</a> or connect on <a href="https://www.linkedin.com/in/ali-waqar-zafar-a45964324/" style="color: #5a8f42;">LinkedIn</a>.</p>
          <p style="color: #2d4a1e;">Best,<br/><strong>Ali Waqar Zafar</strong></p>
          <hr style="border: none; border-top: 1px solid #cddfc0; margin: 24px 0;" />
          <p style="color: #a8c792; font-size: 11px; font-family: monospace;">aliwaqarzafar04@gmail.com · Rawalpindi, Pakistan</p>
        </div>
      `,
    })

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully!',
      id:      saved._id,
    })

  } catch (err) {
    console.error('Contact route error:', err)
    return res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    })
  }
})

export default router
