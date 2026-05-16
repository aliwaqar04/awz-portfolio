import { motion } from 'framer-motion'
import { useScrollReveal, fadeUpVariants, staggerContainerVariants, staggerItemVariants } from '../hooks/useScrollReveal'
import { skills } from '../data/portfolioData'
import { FiCode, FiMonitor, FiServer, FiDatabase, FiTool, FiCpu } from 'react-icons/fi'

const iconMap = {
  code: <FiCode size={20} />,
  monitor: <FiMonitor size={20} />,
  server: <FiServer size={20} />,
  database: <FiDatabase size={20} />,
  tools: <FiTool size={20} />,
}

const skillBarColors = [
  'bg-sage-600', 'bg-sage-500', 'bg-sage-400',
  'bg-forest', 'bg-moss',
]

export default function Skills() {
  const { ref: headRef, isInView: headInView } = useScrollReveal()
  const { ref: gridRef, isInView: gridInView } = useScrollReveal()

  return (
    <section id="skills" className="section-padding bg-cream-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-sage-100/60 -translate-y-1/2 pointer-events-none" style={{ borderRadius: '50% 0 0 50%' }} />

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          ref={headRef}
          variants={fadeUpVariants}
          initial="hidden"
          animate={headInView ? 'visible' : 'hidden'}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="section-label">✦ What I Know</span>
            <h2 className="font-display font-black text-forest" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              My <span className="text-sage-600 italic">Skills.</span>
            </h2>
          </div>
          <p className="font-body text-forest/60 max-w-sm text-sm leading-relaxed">
            A curated toolkit built through real projects and a genuine obsession with the craft.
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          ref={gridRef}
          variants={staggerContainerVariants}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, si) => (
            <motion.div
              key={si}
              variants={staggerItemVariants}
              className="bg-white border border-sage-200/60 p-6 group card-hover relative overflow-hidden"
              style={{ borderRadius: 2 }}
            >
              {/* Color accent top bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 ${skillBarColors[si % skillBarColors.length]}`} />

              {/* Icon + Category */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-9 h-9 flex items-center justify-center ${skillBarColors[si % skillBarColors.length]} text-white`} style={{ borderRadius: 2 }}>
                  {iconMap[skill.icon] || <FiCode size={18} />}
                </div>
                <h3 className="font-display font-bold text-forest text-base">{skill.category}</h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, ii) => (
                  <motion.span
                    key={ii}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(90,143,66,0.2)' }}
                    className="tech-tag cursor-default transition-colors duration-200"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* ── 6th card: Currently Exploring ── */}
          <motion.div
            variants={staggerItemVariants}
            className="bg-white border border-sage-200/60 p-6 group card-hover relative overflow-hidden"
            style={{ borderRadius: 2 }}
          >
            {/* Futuristic accent bar — teal/sage gradient */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: 'linear-gradient(to right, #5a8f42, #3bbfad)' }}
            />

            {/* Decorative radial glow */}
            <div
              className="absolute -top-8 -right-8 w-32 h-32 rounded-full pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              style={{ background: 'radial-gradient(circle, rgba(59,191,173,0.12) 0%, transparent 70%)' }}
            />

            {/* Icon + Category */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 flex items-center justify-center text-white flex-shrink-0"
                style={{ borderRadius: 2, background: 'linear-gradient(135deg, #5a8f42, #3bbfad)' }}
              >
                <FiCpu size={20} />
              </div>
              <h3 className="font-display font-bold text-forest text-base">Currently Exploring</h3>
            </div>

            {/* Description */}


            {/* Skill tags — same tech-tag style as other cards */}
            <div className="flex flex-wrap gap-2">
              {[

                'OpenAI & Third-party APIs',
                'REST APIs & Real-time Data',
                'Secure API Architecture',



                'Automation & Dev Tooling',
              ].map((item, ii) => (
                <motion.span
                  key={ii}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(59,191,173,0.15)' }}
                  className="tech-tag cursor-default transition-colors duration-200"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Marquee skills strip */}
        <div className="mt-16 overflow-hidden border-y border-sage-200/50 py-4 bg-sage-50">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, dupeIdx) => (
              <span key={dupeIdx} className="flex items-center">
                {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'TailwindCSS', 'JavaScript', 'JWT', 'REST API', 'Git', 'C#', 'Blazor', 'Firebase', 'Vercel', 'Figma', 'Agile'].map((s, i) => (
                  <span key={i} className="inline-flex items-center gap-3 mx-6">
                    <span className="text-sage-400 text-xs">✦</span>
                    <span className="font-mono text-sm text-forest/50 font-medium">{s}</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
