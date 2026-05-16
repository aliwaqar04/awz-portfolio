import { motion } from 'framer-motion'
import { useScrollReveal, fadeUpVariants, slideInLeftVariants, slideInRightVariants } from '../hooks/useScrollReveal'
import { experience, education } from '../data/portfolioData'
import { FiBriefcase, FiBook, FiCheckCircle, FiCalendar, FiMapPin } from 'react-icons/fi'

export default function Experience() {
  const { ref: headRef, isInView: headInView } = useScrollReveal()
  const { ref: expRef,  isInView: expInView  } = useScrollReveal()
  const { ref: eduRef,  isInView: eduInView  } = useScrollReveal()

  return (
    <section id="experience" className="section-padding bg-cream-100 relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={headRef}
          variants={fadeUpVariants}
          initial="hidden"
          animate={headInView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <span className="section-label">✦ My Journey</span>
          <h2 className="font-display font-black text-forest" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Experience &amp; <span className="text-sage-600 italic">Education.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience column */}
          <motion.div
            ref={expRef}
            variants={slideInLeftVariants}
            initial="hidden"
            animate={expInView ? 'visible' : 'hidden'}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-sage-600 flex items-center justify-center" style={{ borderRadius: 2 }}>
                <FiBriefcase size={14} className="text-white" />
              </div>
              <h3 className="font-display font-bold text-forest text-xl">Work Experience</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-sage-200" />

              {experience.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={expInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.2 + 0.3, duration: 0.7 }}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-8 h-8 bg-sage-600 border-4 border-cream-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>

                  {/* Card */}
                  <div className="bg-white border border-sage-200/60 p-5" style={{ borderRadius: 2 }}>
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                      <div>
                        <span className="font-mono text-xs text-sage-500 px-2 py-0.5 bg-sage-50 border border-sage-200" style={{ borderRadius: 2 }}>
                          {exp.type}
                        </span>
                        <h4 className="font-display font-bold text-forest text-lg mt-2">{exp.role}</h4>
                        <p className="font-body text-sage-600 font-medium">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-4 text-forest/50">
                      <span className="flex items-center gap-1 font-mono text-xs">
                        <FiCalendar size={11} /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-xs">
                        <FiMapPin size={11} /> {exp.location}
                      </span>
                    </div>

                    {/* Bullet points */}
                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2 text-sm text-forest/70">
                          <FiCheckCircle size={13} className="text-sage-500 mt-0.5 flex-shrink-0" />
                          <span className="font-body leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech used */}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-sage-100">
                      {exp.tech.map((t, ti) => (
                        <span key={ti} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education column */}
          <motion.div
            ref={eduRef}
            variants={slideInRightVariants}
            initial="hidden"
            animate={eduInView ? 'visible' : 'hidden'}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-forest flex items-center justify-center" style={{ borderRadius: 2 }}>
                <FiBook size={14} className="text-white" />
              </div>
              <h3 className="font-display font-bold text-forest text-xl">Education</h3>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-sage-200" />

              {education.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={eduInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.2 + 0.3, duration: 0.7 }}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  <div className="absolute left-0 top-1 w-8 h-8 bg-forest border-4 border-cream-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>

                  <div className="bg-white border border-sage-200/60 p-5" style={{ borderRadius: 2 }}>
                    <p className="font-display font-bold text-forest text-lg leading-tight">{edu.degree}</p>
                    <p className="font-body text-sage-600 font-medium mt-1">{edu.institution}</p>
                    <div className="flex items-center gap-4 mt-3 text-forest/50">
                      <span className="flex items-center gap-1 font-mono text-xs">
                        <FiCalendar size={11} /> {edu.period}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-xs">
                        <FiMapPin size={11} /> {edu.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Currently block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={eduInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-8 bg-sage-600 text-white p-6 relative overflow-hidden"
              style={{ borderRadius: 2 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-sage-500/50 -translate-y-1/2 translate-x-1/2 rounded-full" />
              <span className="font-mono text-xs text-sage-300 block mb-2">Currently</span>
              <p className="font-display font-bold text-xl text-cream-100">
                Open to Full-Time Roles &amp; Freelance Projects
              </p>
              <p className="font-body text-sage-200 text-sm mt-2 leading-relaxed">
                Actively seeking opportunities in Full-Stack or Frontend development.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-mono text-xs text-sage-300">Available for hire</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
