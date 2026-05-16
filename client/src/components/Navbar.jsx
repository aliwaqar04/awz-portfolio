import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { personalInfo, navLinks } from '../data/portfolioData'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream-100/95 backdrop-blur-md border-b border-sage-200/50 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="hero" smooth duration={600} className="cursor-pointer">
            <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-2">
              <div className="w-8 h-8 bg-sage-600 flex items-center justify-center">
                <span className="text-cream-100 font-mono text-xs font-bold">AW</span>
              </div>
              <span className="font-display text-forest font-bold text-lg hidden sm:block">
                Ali Waqar
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth
                  duration={600}
                  spy
                  onSetActive={() => setActiveSection(link.to)}
                  className={`animated-underline font-body text-sm font-medium cursor-pointer transition-colors duration-200 ${
                    activeSection === link.to
                      ? 'text-sage-600'
                      : 'text-forest/70 hover:text-forest'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Resume Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn-primary flex items-center gap-2 text-xs py-2 px-4"
            >
              <FiDownload size={13} />
              Resume
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-forest p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream-100/98 backdrop-blur-lg md:hidden flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-3xl text-forest font-bold cursor-pointer hover:text-sage-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
              >
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="btn-primary flex items-center gap-2 mt-4"
                  onClick={() => setMenuOpen(false)}
                >
                  <FiDownload size={14} />
                  Download Resume
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
