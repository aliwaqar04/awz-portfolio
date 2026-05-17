import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollReveal, fadeUpVariants, staggerContainerVariants, staggerItemVariants } from '../hooks/useScrollReveal'
import { projects } from '../data/portfolioData'
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi'

export default function Projects() {
  const { ref: headRef, isInView: headInView } = useScrollReveal()
  const { ref: gridRef, isInView: gridInView } = useScrollReveal()
  const [filter, setFilter] = useState('all')
  const [hovered, setHovered] = useState(null)

  const filters = ['all', 'MERN', 'Blazor', 'Node.js']
  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.tech.some(t => t.includes(filter)))

  return (
    <section id="projects" className="section-padding bg-sage-800 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg, transparent, transparent 40px,
            rgba(255,255,255,0.1) 40px, rgba(255,255,255,0.1) 41px
          ), repeating-linear-gradient(
            90deg, transparent, transparent 40px,
            rgba(255,255,255,0.1) 40px, rgba(255,255,255,0.1) 41px
          )`
        }}
      />

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          ref={headRef}
          variants={fadeUpVariants}
          initial="hidden"
          animate={headInView ? 'visible' : 'hidden'}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="section-label text-sage-400">✦ What I've Built</span>
            <h2 className="font-display font-black text-cream-100" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Featured <span className="text-sage-400 italic">Projects.</span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 flex-wrap">
            {filters.map(f => (
              <motion.button
                key={f}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setFilter(f)}
                className={`font-mono text-xs px-4 py-2 border transition-all duration-200 ${
                  filter === f
                    ? 'bg-sage-500 border-sage-500 text-white'
                    : 'bg-transparent border-sage-600 text-sage-400 hover:border-sage-400'
                }`}
                style={{ borderRadius: 2 }}
              >
                {f}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          ref={gridRef}
          variants={staggerContainerVariants}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                variants={staggerItemVariants}
                layout
                exit={{ opacity: 0, scale: 0.9 }}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                className="relative bg-sage-900/60 border border-sage-700/50 p-6 group overflow-hidden cursor-pointer"
                style={{ borderRadius: 2 }}
              >
                {/* Hover gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${project.color}15, transparent)` }}
                />

                {/* Top bar */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="font-mono text-xs text-sage-500 mb-1 block">
                      {String(i + 1).padStart(2, '0')} · {project.date}
                    </span>
                    <h3 className="font-display font-bold text-cream-100 text-xl leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-body text-sage-400 text-sm mt-0.5">{project.subtitle}</p>
                  </div>
                  {project.featured && (
                    <span className="font-mono text-xs px-2 py-1 bg-sage-600/40 text-sage-300 border border-sage-600/50" style={{ borderRadius: 2 }}>
                      Featured
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="font-body text-sage-300/80 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, ti) => (
                    <span
                      key={ti}
                      className="font-mono text-xs px-2 py-1 border border-sage-600/40 text-sage-400"
                      style={{ borderRadius: 2 }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 border-t border-sage-700/40 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 font-mono text-xs text-sage-400 hover:text-sage-300 transition-colors group/link"
                    >
                      <FiGithub size={14} />
                      <span>View Code</span>
                      <FiArrowRight
                        size={12}
                        className="transform group-hover/link:translate-x-1 transition-transform"
                      />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 font-mono text-xs text-sage-400 hover:text-sage-300 transition-colors"
                    >
                      <FiExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {!project.live && (
                    <span className="font-mono text-xs text-sage-600">Live demo coming soon</span>
                  )}
                </div>

                {/* Animated left border */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-0.5"
                  style={{ background: project.color, originY: 0 }}
                  animate={{ scaleY: hovered === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  initial={{ scaleY: 0 }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/aliwaqar04"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 font-mono text-sm text-sage-400 hover:text-sage-300 border border-sage-600 hover:border-sage-400 px-6 py-3 transition-all duration-200"
            style={{ borderRadius: 2 }}
          >
            <FiGithub size={16} />
            See all projects on GitHub
            <FiArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
