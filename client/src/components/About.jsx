import { motion } from 'framer-motion'
import { personalInfo, education, strengths } from '../data/portfolioData'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'

const viewportOpts = { once: false, amount: 0.15 }

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
}

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function About() {
  const stats = [
    { number: '4+', label: 'Projects Built' },
    { number: '2+', label: 'Years Learning' },
    { number: '5+', label: 'Tech Stacks' },
    { number: '100%', label: 'Passion for Code' },
  ]

  const extraEducation = [
    {
      id: 'adcs',
      degree: 'Intermediate',
      subject: 'Pre-Engineering',
      institution: 'Lawrence College Ghora Gali',
      location: 'Murree',
      period: '2021 – 2023',
      dotColor: '#7aaa5a',
      borderOpacity: 0.45,
    },
    {
      id: 'matric',
      degree: 'Matriculation',
      subject: 'Computer Science',
      institution: 'Garrison Army Public School',
      location: 'Peshawar',
      period: '2019 – 2021',
      dotColor: '#9abf80',
      borderOpacity: 0.32,
    },
  ]

  return (
    <section id="about" className="relative overflow-hidden">

      {/* ═══════════════════════════════════════════════════
          BLOCK 1 — WHO I AM
      ═══════════════════════════════════════════════════ */}
      <div className="relative overflow-hidden bg-cream-100" style={{ minHeight: '90vh' }}>

        {/* Ghost text */}
        <div
          className="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden"
          style={{
            fontSize: 'clamp(80px, 13vw, 160px)',
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            color: 'rgba(90,143,66,0.06)',
            lineHeight: 1,
            letterSpacing: '-0.04em',
            paddingRight: '4%',
          }}
        >
          WHO<br />I AM
        </div>

        {/* Dot grid */}
        <div className="absolute bottom-16 left-8 grid grid-cols-5 gap-[10px] opacity-[0.18] pointer-events-none">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-sage-500" />
          ))}
        </div>

        {/* Geometric accent */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
          className="absolute top-24 right-[48%] w-12 h-12 border border-sage-300/30 pointer-events-none hidden lg:block"
        />

        <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-12 relative z-10 py-24">
          <div className="relative flex items-start min-h-[80vh]" style={{ paddingTop: '2vh' }}>

            {/* Left — text */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOpts}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-20 w-full lg:w-[52%] xl:w-[48%] pb-16"
            >
              {/* Section label */}
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOpts}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 mb-7 w-fit"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-500 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-500" />
                </span>
                <span className="font-mono text-xs text-sage-600 tracking-wide uppercase">Who I Am</span>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOpts}
                transition={{ duration: 0.75, delay: 0.15 }}
                className="font-display font-black text-forest leading-[0.92] mb-7 tracking-tight"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
              >
                About<br />
                <span className="text-sage-600 italic">Me.</span>
              </motion.h2>

              {/* Bio panel */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOpts}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="p-5 mb-6"
                style={{
                  background: 'rgba(45,74,30,0.055)',
                  borderLeft: '3px solid rgba(90,143,66,0.5)',
                  borderRadius: '0 3px 3px 0',
                }}
              >
                <p className="font-body text-forest/75 leading-relaxed text-[14px]">
                  {personalInfo.summary}
                </p>
              </motion.div>

              {/* Contact info */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOpts}
                transition={{ duration: 0.6, delay: 0.32 }}
                className="space-y-2.5 mb-8"
              >
                {[
                  { icon: <FiMapPin size={12} />, text: personalInfo.location },
                  { icon: <FiMail size={12} />, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: <FiPhone size={12} />, text: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                ].map(({ icon, text, href }, i) => (
                  <div key={i} className="flex items-center gap-3 text-forest/55">
                    <span className="text-sage-500 flex-shrink-0">{icon}</span>
                    {href
                      ? <a href={href} className="font-mono text-xs hover:text-sage-600 transition-colors duration-200">{text}</a>
                      : <span className="font-mono text-xs">{text}</span>
                    }
                  </div>
                ))}
              </motion.div>

              {/* ── Education Timeline ── */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOpts}
                transition={{ duration: 0.6, delay: 0.38 }}
              >
                <span className="font-mono text-[10px] text-sage-500 uppercase tracking-widest mb-4 block">
                  Education
                </span>

                <div className="relative">
                  <div
                    className="absolute left-[11px] top-4 bottom-4 w-px pointer-events-none"
                    style={{ background: 'linear-gradient(to bottom, rgba(90,143,66,0.4), rgba(90,143,66,0.1))' }}
                  />

                  <div className="space-y-3 pl-8 relative">
                    {education.map((edu, idx) => (
                      <motion.div
                        key={edu.id}
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOpts}
                        transition={{ delay: 0.1 + idx * 0.1, duration: 0.5 }}
                        className="relative bg-white p-4"
                        style={{
                          borderLeft: '3px solid rgba(90,143,66,0.65)',
                          borderRadius: '0 3px 3px 0',
                          boxShadow: '0 2px 16px rgba(45,74,30,0.08)',
                        }}
                      >
                        <div
                          className="absolute -left-[29px] top-[18px] w-[14px] h-[14px] rounded-full border-2 border-white"
                          style={{ background: '#5a8f42', boxShadow: '0 0 0 3px rgba(90,143,66,0.2)' }}
                        />
                        <p className="font-display font-bold text-forest text-[14px] leading-snug">{edu.degree}</p>
                        {edu.subject && (
                          <p className="font-mono text-[11px] text-sage-600 mt-0.5">{edu.subject}</p>
                        )}
                        <p className="font-body text-sage-700 text-[13px] mt-0.5">{edu.institution}</p>
                        <p className="font-mono text-[11px] text-forest/40 mt-0.5">{edu.location} · {edu.period}</p>
                      </motion.div>
                    ))}

                    {extraEducation.map((edu, idx) => (
                      <motion.div
                        key={edu.id}
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOpts}
                        transition={{ delay: 0.15 + (education.length + idx) * 0.12, duration: 0.5 }}
                        className="relative bg-white p-4"
                        style={{
                          borderLeft: `3px solid rgba(90,143,66,${edu.borderOpacity})`,
                          borderRadius: '0 3px 3px 0',
                          boxShadow: '0 1px 10px rgba(45,74,30,0.05)',
                        }}
                      >
                        <div
                          className="absolute -left-[29px] top-[18px] w-[14px] h-[14px] rounded-full border-2 border-white"
                          style={{
                            background: edu.dotColor,
                            boxShadow: `0 0 0 3px rgba(90,143,66,${edu.borderOpacity * 0.5})`,
                          }}
                        />
                        <p className="font-display font-bold text-forest text-[14px] leading-snug">{edu.degree}</p>
                        <p className="font-mono text-[11px] text-sage-600 mt-0.5">{edu.subject}</p>
                        <p className="font-body text-sage-700 text-[13px] mt-0.5">{edu.institution}</p>
                        <p className="font-mono text-[11px] text-forest/40 mt-0.5">{edu.location} · {edu.period}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* ── Mobile-only about image ── */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOpts}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="block lg:hidden mt-10"
              >
                <div
                  style={{
                    width: '100%',
                    maxWidth: 340,
                    margin: '0 auto',
                    aspectRatio: '3 / 4',
                    borderRadius: '4px 4px 0 0',
                    overflow: 'hidden',
                    border: '1px solid rgba(90,143,66,0.22)',
                    borderBottom: 'none',
                    boxShadow: '0 16px 48px rgba(45,74,30,0.15)',
                  }}
                >
                  <img
                    src="/images/about.jpg"
                    alt="Ali Waqar Zafar"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      display: 'block',
                    }}
                  />
                </div>
              </motion.div>

            </motion.div>

            {/* Right — full photo (desktop only) */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOpts}
              transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-6 z-10 hidden lg:block"
              style={{ width: '50%', maxWidth: 520 }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
                style={{
                  width: '100%',
                  aspectRatio: '3 / 4',
                  maxHeight: '80vh',
                  borderRadius: '4px 4px 0 0',
                  overflow: 'hidden',
                  border: '1px solid rgba(90,143,66,0.22)',
                  borderBottom: 'none',
                  boxShadow: '0 24px 64px rgba(45,74,30,0.18)',
                }}
              >
                <img
                  src="/images/about.jpg"
                  alt="Ali Waqar Zafar"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                  }}
                />
              </motion.div>

              {/* Name badge */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOpts}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap z-30"
                style={{
                  background: 'rgba(30,54,15,0.92)',
                  backdropFilter: 'blur(8px)',
                  padding: '8px 18px',
                  borderRadius: 3,
                  border: '1px solid rgba(145,185,120,0.15)',
                }}
              >
                <p className="font-mono text-[11px] text-sage-300 tracking-wide">
                  // developer · Rawalpindi, PK
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          BLOCK 2 — WHAT I BRING TO THE TABLE
      ═══════════════════════════════════════════════════ */}
      <div className="relative overflow-hidden" style={{ backgroundColor: '#3d5c2e', minHeight: '60vh' }}>

        {/*
          Ghost text — centered below content, not left-anchored.
          position: absolute, bottom-0, full width, text-align center.
        */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden text-center"
          style={{
            fontSize: 'clamp(48px, 8vw, 110px)',
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            color: 'rgba(30,54,15,0.35)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
            paddingBottom: '1%',
          }}
        >

        </div>

        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(168,199,146,0.12)' }} />

        <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-12 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOpts}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-300 opacity-50" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-300" />
                </span>
                <span className="font-mono text-xs text-sage-300 tracking-wide uppercase">What I Bring to the Table</span>
              </div>

              <h3
                className="font-display font-black text-cream-100 mb-9 leading-[0.92] tracking-tight"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                Personal<br />
                <span className="italic" style={{ color: 'rgba(168,199,146,0.9)' }}>Skills.</span>
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {strengths.map((s, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOpts}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                    className="flex items-center gap-3 p-3"
                    style={{
                      background: 'rgba(30,54,15,0.4)',
                      border: '1px solid rgba(168,199,146,0.18)',
                      borderRadius: 3,
                    }}
                  >
                    <span className="text-base flex-shrink-0">{s.icon}</span>
                    <span className="font-body text-sm text-cream-100/90 font-medium">{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOpts}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative"
            >
              <div
                className="relative overflow-hidden"
                style={{ borderRadius: 4, boxShadow: '0 20px 60px rgba(0,0,0,0.35)' }}
              >
                <img
                  src="/images/setup.png"
                  alt="Ali coding at his setup"
                  className="w-full object-cover block"
                  style={{ maxHeight: 320, objectFit: 'cover', objectPosition: 'left center' }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to left, rgba(61,92,46,0.65) 0%, transparent 55%)' }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(30,54,15,0.4) 0%, transparent 40%)' }}
                />
              </div>

              <div
                className="absolute bottom-3 right-3"
                style={{
                  background: 'rgba(30,54,15,0.85)',
                  backdropFilter: 'blur(6px)',
                  padding: '6px 12px',
                  borderRadius: 3,
                  border: '1px solid rgba(168,199,146,0.15)',
                }}
              >
                <p className="font-mono text-[10px] text-sage-300 tracking-wide">// my workspace</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          BLOCK 3 — STATS + QUOTE
      ═══════════════════════════════════════════════════ */}
      <div className="relative overflow-hidden bg-cream-100">
        <div className="absolute top-0 left-0 w-1 h-full bg-sage-500/20 pointer-events-none" />

        <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-12 py-24 relative">

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="relative overflow-hidden group cursor-default"
                style={{
                  background: 'white',
                  border: '1px solid rgba(90,143,66,0.15)',
                  borderRadius: 3,
                  padding: '20px 24px',
                }}
              >
                <div
                  className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-0"
                  style={{ background: '#2d4a1e' }}
                />
                <div className="relative z-10">
                  <p
                    className="font-display font-black text-3xl group-hover:text-cream-100 transition-colors duration-300"
                    style={{ color: '#5a8f42' }}
                  >
                    {stat.number}
                  </p>
                  <p className="font-body text-sm text-forest/55 group-hover:text-cream-200/80 transition-colors duration-300 mt-1">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOpts}
              transition={{ duration: 0.7 }}
            >
              <span className="font-mono text-[10px] text-sage-500 uppercase tracking-widest mb-5 block">
                Core Strengths
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                {strengths.map((s, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOpts}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.45 }}
                    className="flex items-center gap-3 bg-white p-3"
                    style={{ border: '1px solid rgba(90,143,66,0.13)', borderRadius: 3 }}
                  >
                    <span className="text-base flex-shrink-0">{s.icon}</span>
                    <span className="font-body text-sm text-forest font-medium">{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOpts}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="relative"
              style={{ background: '#2d4a1e', borderRadius: 4, padding: '28px 28px 24px' }}
            >
              <div
                className="absolute top-4 right-6 font-display font-black select-none pointer-events-none"
                style={{ fontSize: 80, color: 'rgba(168,199,146,0.12)', lineHeight: 1 }}
              >
                "
              </div>
              <p className="font-display text-cream-100 text-[17px] italic leading-relaxed relative z-10">
                "Clean code is not written by following a set of rules. You don't become a software craftsman by learning a list of heuristics."
              </p>
              <div
                className="mt-5 pt-4 flex items-center gap-3"
                style={{ borderTop: '1px solid rgba(168,199,146,0.15)' }}
              >
                <div className="w-6 h-px" style={{ background: 'rgba(168,199,146,0.4)' }} />
                <p className="font-mono text-[11px] text-sage-400">Robert C. Martin — Clean Code</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  )
}