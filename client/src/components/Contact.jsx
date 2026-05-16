import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal, fadeUpVariants, slideInLeftVariants, slideInRightVariants } from '../hooks/useScrollReveal'
import { personalInfo } from '../data/portfolioData'
import axios from 'axios'
import toast from 'react-hot-toast'
import { FiSend, FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const { ref: headRef, isInView: headInView } = useScrollReveal()
  const { ref: leftRef, isInView: leftInView } = useScrollReveal()
  const { ref: rightRef, isInView: rightInView } = useScrollReveal()

  const [form,    setForm]    = useState(initialForm)
  const [errors,  setErrors]  = useState({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim())                              e.name    = 'Name is required'
    if (!form.email.trim())                             e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email))         e.email   = 'Invalid email address'
    if (!form.subject.trim())                           e.subject = 'Subject is required'
    if (!form.message.trim())                           e.message = 'Message is required'
    else if (form.message.trim().length < 20)           e.message = 'Message must be at least 20 characters'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setLoading(true)
    try {
      await axios.post('/api/contact', form)
      toast.success('Message sent! I\'ll get back to you soon 🌿')
      setForm(initialForm)
    } catch (err) {
      const msg = err.response?.data?.message || 'Something went wrong. Please try again.'
      toast.error(msg)
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (field) =>
    `w-full bg-sage-900/40 border ${errors[field] ? 'border-red-400/60' : 'border-sage-700/50'} text-cream-100 font-body text-sm px-4 py-3 placeholder-sage-600 focus:outline-none focus:border-sage-500 transition-colors duration-200`

  return (
    <section id="contact" className="section-padding bg-forest relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(90,143,66,0.4) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(90,143,66,0.2) 0%, transparent 50%)`
        }}
      />

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          ref={headRef}
          variants={fadeUpVariants}
          initial="hidden"
          animate={headInView ? 'visible' : 'hidden'}
          className="mb-16 text-center"
        >
          <span className="section-label text-sage-400">✦ Let's Talk</span>
          <h2 className="font-display font-black text-cream-100" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Get in <span className="text-sage-400 italic">Touch.</span>
          </h2>
          <p className="font-body text-sage-300/80 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Whether you have a project in mind, need a collaborator, or just want to say hello — my inbox is open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left info panel */}
          <motion.div
            ref={leftRef}
            variants={slideInLeftVariants}
            initial="hidden"
            animate={leftInView ? 'visible' : 'hidden'}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact details */}
            <div className="space-y-5">
              {[
                { icon: <FiMail  size={15} />, label: 'Email',    value: personalInfo.email,    href: `mailto:${personalInfo.email}` },
                { icon: <FiPhone size={15} />, label: 'Phone',    value: personalInfo.phone,    href: `tel:${personalInfo.phone}` },
                { icon: <FiMapPin size={15} />, label: 'Location', value: personalInfo.location, href: null },
              ].map(({ icon, label, value, href }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={leftInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.15 + 0.3 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-9 h-9 bg-sage-700/40 border border-sage-600/40 flex items-center justify-center flex-shrink-0 text-sage-400" style={{ borderRadius: 2 }}>
                    {icon}
                  </div>
                  <div>
                    <p className="font-mono text-xs text-sage-500 mb-0.5">{label}</p>
                    {href
                      ? <a href={href} className="font-body text-sm text-cream-200 hover:text-sage-400 transition-colors flex items-center gap-1 group/link">
                          {value}
                          <FiArrowRight size={12} className="opacity-0 group-hover/link:opacity-100 transform group-hover/link:translate-x-1 transition-all" />
                        </a>
                      : <p className="font-body text-sm text-cream-200">{value}</p>
                    }
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={leftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <p className="font-mono text-xs text-sage-500 mb-4">Find me on</p>
              <div className="flex gap-3">
                {[
                  { icon: <FiGithub   size={18} />, href: personalInfo.github,   label: 'GitHub' },
                  { icon: <FiLinkedin size={18} />, href: personalInfo.linkedin, label: 'LinkedIn' },
                  { icon: <FiMail     size={18} />, href: `mailto:${personalInfo.email}`, label: 'Email' },
                ].map(({ icon, href, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    aria-label={label}
                    className="w-10 h-10 bg-sage-800/60 border border-sage-700/50 flex items-center justify-center text-sage-400 hover:text-cream-100 hover:bg-sage-600 hover:border-sage-500 transition-all duration-200"
                    style={{ borderRadius: 2 }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Availability block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={leftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="bg-sage-800/50 border border-sage-700/40 p-5"
              style={{ borderRadius: 2 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-mono text-xs text-sage-400">Currently available</span>
              </div>
              <p className="font-body text-sm text-cream-200/80 leading-relaxed">
                Open to full-time roles, freelance gigs, and interesting collaborations.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            ref={rightRef}
            variants={slideInRightVariants}
            initial="hidden"
            animate={rightInView ? 'visible' : 'hidden'}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="font-mono text-xs text-sage-400 mb-2 block">Your name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass('name')}
                    style={{ borderRadius: 2 }}
                  />
                  {errors.name && <p className="font-mono text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>
                {/* Email */}
                <div>
                  <label className="font-mono text-xs text-sage-400 mb-2 block">Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClass('email')}
                    style={{ borderRadius: 2 }}
                  />
                  {errors.email && <p className="font-mono text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="font-mono text-xs text-sage-400 mb-2 block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project collaboration / Job opportunity"
                  className={inputClass('subject')}
                  style={{ borderRadius: 2 }}
                />
                {errors.subject && <p className="font-mono text-xs text-red-400 mt-1">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="font-mono text-xs text-sage-400 mb-2 block">Your message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className={inputClass('message') + ' resize-none'}
                  style={{ borderRadius: 2 }}
                />
                {errors.message && <p className="font-mono text-xs text-red-400 mt-1">{errors.message}</p>}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.01 }}
                whileTap={{ scale: loading ? 1 : 0.99 }}
                className={`w-full flex items-center justify-center gap-3 py-4 font-body font-medium text-sm tracking-wide transition-all duration-300 ${
                  loading
                    ? 'bg-sage-700 cursor-not-allowed text-sage-300'
                    : 'bg-sage-600 hover:bg-sage-500 text-white cursor-pointer'
                }`}
                style={{ borderRadius: 2 }}
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-sage-300/50 border-t-sage-300 rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={15} />
                    Send Message
                    <FiArrowRight size={14} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
