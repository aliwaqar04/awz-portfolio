import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'
import { useState } from 'react'

// ─── Animation variants (used only for enhancement, never for visibility) ───
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}
const fadeLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}
const viewportOpts = { once: false, amount: 0.2 }

// ─── Reusable code snippet (used on both mobile and desktop) ────────────────
function CodeSnippet() {
  return (
    <div
      style={{
        background: 'rgba(30,54,15,0.96)',
        borderRadius: 4,
        padding: '14px 16px',
        border: '1px solid rgba(145,185,120,0.12)',
      }}
    >
      {/* Traffic lights */}
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="font-mono text-[10px] text-white/25 ml-2">developer.js</span>
      </div>
      <pre
        className="font-mono leading-relaxed whitespace-pre-wrap m-0"
        style={{ fontSize: 11 }}
      >
        <span style={{ color: '#7fb069' }}>const </span>
        <span style={{ color: '#e8e0cc' }}>developer</span>
        <span style={{ color: 'rgba(255,255,255,0.45)' }}>{' = {'}</span>{'\n'}
        <span style={{ color: 'rgba(255,255,255,0.38)' }}>{'  '}name: </span>
        <span style={{ color: '#d4c5a0' }}>"Ali Waqar Zafar"</span>
        <span style={{ color: 'rgba(255,255,255,0.3)' }}>,</span>{'\n'}
        <span style={{ color: 'rgba(255,255,255,0.38)' }}>{'  '}stack: </span>
        <span style={{ color: '#8ec07c' }}>['React','Node','Mongo']</span>
        <span style={{ color: 'rgba(255,255,255,0.3)' }}>,</span>{'\n'}
        <span style={{ color: 'rgba(255,255,255,0.38)' }}>{'  '}status: </span>
        <span style={{ color: '#d4c5a0' }}>"open_to_work"</span>{'\n'}
        <span style={{ color: 'rgba(255,255,255,0.3)' }}>{'}'}</span>
      </pre>
    </div>
  )
}

// ─── Hero image with fallback placeholder ────────────────────────────────────
function HeroImage({ style = {}, className = '' }) {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    return (
      <div
        className={className}
        style={{
          ...style,
          background: 'linear-gradient(135deg, #2d4a1e 0%, #5a8f42 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#e8f5e0',
        }}
      >
        <span style={{ fontSize: 48, marginBottom: 12 }}>👤</span>
        <span style={{ fontFamily: 'monospace', fontSize: 12, opacity: 0.7 }}>
          hero.jpg — image not found
        </span>
        <span style={{ fontFamily: 'monospace', fontSize: 11, opacity: 0.5, marginTop: 4 }}>
          /images/hero.jpg
        </span>
      </div>
    )
  }

  return (
    <img
      src="/images/hero.jpg"
      alt="Ali Waqar Zafar"
      className={className}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center top',
        display: 'block',
        ...style,
      }}
      onError={(e) => {
        console.error('[Hero] hero.jpg failed to load. Showing placeholder.')
        setImgError(true)
      }}
      onLoad={() => console.log('[Hero] hero.jpg loaded successfully.')}
    />
  )
}

// ─── CTA Buttons (shared between mobile / desktop) ───────────────────────────
function CTAButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link to="projects" smooth duration={700}>
        <motion.button
          whileHover={{ scale: 1.025, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="btn-primary"
        >
          View My Work
        </motion.button>
      </Link>
      <Link to="contact" smooth duration={700}>
        <motion.button
          whileHover={{ scale: 1.025, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="btn-outline"
        >
          Get in Touch
        </motion.button>
      </Link>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen relative bg-cream-100"
      /* NOTE: overflow-hidden removed from section — it was clipping mobile content */
    >
      {/* ── Background decorations ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Giant ghost letters */}
        <div
          className="absolute right-[-2%] top-0 bottom-0 flex items-center font-display font-black select-none"
          style={{
            fontSize: 'clamp(160px, 26vw, 360px)',
            color: 'rgba(90,143,66,0.055)',
            lineHeight: 1,
            letterSpacing: '-0.05em',
          }}
        >
          AWZ
        </div>

        {/* Floating geometric accents */}
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
          className="absolute top-28 right-16 w-16 h-16 border border-sage-300/40"
          style={{ background: 'rgba(145,185,120,0.08)' }}
        />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut', delay: 1.2 }}
          className="absolute top-52 right-36 w-6 h-6"
          style={{ background: 'rgba(90,143,66,0.18)' }}
        />
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 11, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-32 right-1/4 w-10 h-10 border border-sage-400/20"
        />

        {/* Dot grid bottom-left */}
        <div className="absolute bottom-16 left-6 grid grid-cols-5 gap-[10px] opacity-[0.18]">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-sage-500" />
          ))}
        </div>

        {/* Subtle horizontal rule top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage-300/30 to-transparent" />
      </div>

      {/* ══════════════════════════════════════════════════════════════
          MOBILE LAYOUT  (hidden on lg+)
          Stacks vertically: text → image → code snippet → buttons
      ══════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 block lg:hidden px-6 pt-28 pb-20">

        {/* — Availability badge — */}
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-500 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-500" />
          </span>
          <span className="font-mono text-xs text-sage-600 tracking-wide uppercase">
            Available for opportunities
          </span>
        </div>

        {/* — Name — */}
        <h1
          className="font-display font-black leading-[0.92] mb-5 tracking-tight"
          style={{ fontSize: 'clamp(3rem, 14vw, 4.5rem)' }}
        >
          <span className="text-forest block">Ali</span>
          <span className="text-forest block">Waqar</span>
          <span className="block italic" style={{ color: 'var(--color-sage-600, #5a8f42)' }}>
            Zafar.
          </span>
        </h1>

        {/* — Type animation — */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-sage-400 select-none">→</span>
          <span className="font-mono text-sm text-sage-600">
            <TypeAnimation
              sequence={[
                'Full-Stack Developer', 2000,
                'MERN Stack Specialist', 2000,
                'React & Node.js Engineer', 2000,
                'Problem Solver', 2000,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
            />
          </span>
          <span className="w-px h-4 bg-sage-500/70 animate-pulse" />
        </div>

        {/* — Tagline — */}
        <p className="font-body text-forest/60 text-[15px] leading-relaxed mb-8">
          {personalInfo.tagline}
        </p>

        {/* — MOBILE IMAGE — */}
        <div
          id="mobile-hero-image"
          style={{
            width: '100%',
            height: 380,
            borderRadius: 4,
            overflow: 'hidden',
            border: '1px solid rgba(90,143,66,0.22)',
            boxShadow: '0 16px 48px rgba(45,74,30,0.18)',
            marginBottom: 16,
            position: 'relative',
          }}
        >
          <HeroImage />

          {/* Name badge overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: 12,
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(30,54,15,0.92)',
              backdropFilter: 'blur(8px)',
              padding: '8px 18px',
              borderRadius: 3,
              border: '1px solid rgba(145,185,120,0.15)',
              whiteSpace: 'nowrap',
            }}
          >
            <p className="font-mono text-[11px] text-sage-300 tracking-wide">
              Full-Stack Developer · Rawalpindi, PK
            </p>
          </div>
        </div>

        {/* — MOBILE CODE SNIPPET — */}
        <div id="mobile-code-snippet" style={{ marginBottom: 28 }}>
          <CodeSnippet />
        </div>

        {/* — CTA Buttons — */}
        <div className="mb-8">
          <CTAButtons />
        </div>

        {/* — Social links + location — */}
        <div className="flex items-center gap-5">
          {[
            { href: personalInfo.github, icon: FiGithub, label: 'GitHub' },
            { href: personalInfo.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
            { href: `mailto:${personalInfo.email}`, icon: FiMail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              className="text-forest/40 hover:text-sage-600 transition-colors duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
          <div className="w-12 h-px bg-forest/15" />
          <span className="font-mono text-[11px] text-forest/35 tracking-wide">
            {personalInfo.location}
          </span>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          DESKTOP LAYOUT  (hidden below lg)
          Side-by-side: text left, photo right — original design
      ══════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 hidden lg:block w-full max-w-screen-xl mx-auto px-12 pt-24 pb-16">
        <div className="relative flex items-center min-h-[88vh]">

          {/* ── LEFT: Text Content ── */}
          <div className="relative z-20 w-[52%] xl:w-[48%] flex flex-col justify-center">

            {/* Availability badge */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOpts}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-8 w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-500" />
              </span>
              <span className="font-mono text-xs text-sage-600 tracking-wide uppercase">
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOpts}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-black leading-[0.92] mb-5 tracking-tight"
              style={{ fontSize: 'clamp(3.8rem, 7.5vw, 6.5rem)' }}
            >
              <span className="text-forest block">Ali</span>
              <span className="text-forest block">Waqar</span>
              <span
                className="block italic"
                style={{ color: 'var(--color-sage-600, #5a8f42)' }}
              >
                Zafar.
              </span>
            </motion.h1>

            {/* Type animation subtitle */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOpts}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="font-mono text-xs text-sage-400 select-none">→</span>
              <span className="font-mono text-sm text-sage-600">
                <TypeAnimation
                  sequence={[
                    'Full-Stack Developer', 2000,
                    'MERN Stack Specialist', 2000,
                    'React & Node.js Engineer', 2000,
                    'Problem Solver', 2000,
                  ]}
                  wrapper="span"
                  speed={55}
                  repeat={Infinity}
                />
              </span>
              <span className="w-px h-4 bg-sage-500/70 animate-pulse" />
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOpts}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="font-body text-forest/60 text-[15px] leading-relaxed mb-9 max-w-[360px]"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOpts}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <CTAButtons />
            </motion.div>

            {/* Social links + location */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOpts}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex items-center gap-5"
            >
              {[
                { href: personalInfo.github, icon: FiGithub, label: 'GitHub' },
                { href: personalInfo.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
                { href: `mailto:${personalInfo.email}`, icon: FiMail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="text-forest/40 hover:text-sage-600 transition-colors duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
              <div className="w-12 h-px bg-forest/15" />
              <span className="font-mono text-[11px] text-forest/35 tracking-wide">
                {personalInfo.location}
              </span>
            </motion.div>
          </div>

          {/* ── RIGHT: Photo + floating stats ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 bottom-0 z-10 flex items-end justify-end"
            style={{ width: '50%', maxWidth: 560 }}
          >
            {/* Stat — Projects */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.4 }}
              className="absolute top-20 left-0 z-30"
              style={{
                background: 'var(--cream-100, #f8f6f0)',
                border: '1px solid rgba(90,143,66,0.18)',
                padding: '12px 16px',
                borderRadius: 3,
                boxShadow: '0 8px 32px rgba(45,74,30,0.10)',
              }}
            >
              <p className="font-mono text-[11px] text-sage-500 mb-0.5 uppercase tracking-wider">Projects</p>
              <p className="font-display text-2xl font-black text-forest leading-none">4+</p>
            </motion.div>

            {/* Stat — Stack */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/3 -right-2 z-30"
              style={{
                background: '#2d4a1e',
                padding: '12px 16px',
                borderRadius: 3,
                boxShadow: '0 8px 32px rgba(45,74,30,0.22)',
              }}
            >
              <p className="font-mono text-[11px] text-sage-300 mb-0.5 uppercase tracking-wider">Stack</p>
              <p className="font-display text-lg font-black text-cream-100 leading-none">MERN</p>
            </motion.div>

            {/* Stat — Experience */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 2 }}
              className="absolute bottom-28 left-8 z-30"
              style={{
                background: 'rgba(90,143,66,0.12)',
                border: '1px solid rgba(90,143,66,0.22)',
                padding: '10px 14px',
                borderRadius: 3,
              }}
            >
              <p className="font-mono text-[11px] text-sage-600 mb-0.5 uppercase tracking-wider">Experience</p>
              <p className="font-display text-xl font-black text-forest leading-none">1+ yr</p>
            </motion.div>

            {/* Hero image — full photo */}
            <div className="relative w-full">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6.5, ease: 'easeInOut' }}
                style={{
                  width: '100%',
                  aspectRatio: '3 / 4',
                  maxHeight: '82vh',
                  borderRadius: '4px 4px 0 0',
                  overflow: 'hidden',
                  border: '1px solid rgba(90,143,66,0.22)',
                  borderBottom: 'none',
                  boxShadow: '0 24px 64px rgba(45,74,30,0.18)',
                }}
              >
                <HeroImage />
              </motion.div>

              {/* Name badge */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOpts}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap"
                style={{
                  background: 'rgba(30,54,15,0.92)',
                  backdropFilter: 'blur(8px)',
                  padding: '8px 18px',
                  borderRadius: 3,
                  border: '1px solid rgba(145,185,120,0.15)',
                }}
              >
                <p className="font-mono text-[11px] text-sage-300 tracking-wide">
                  Full-Stack Developer · Rawalpindi, PK
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Code snippet (xl only) ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="absolute bottom-2 left-0 z-20 hidden xl:block"
            style={{ maxWidth: 320 }}
          >
            <CodeSnippet />
          </motion.div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOpts}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-20"
      >
        <span className="font-mono text-[10px] text-forest/25 tracking-[0.2em] uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <FiArrowDown size={13} className="text-forest/25" />
        </motion.div>
      </motion.div>
    </section>
  )
}