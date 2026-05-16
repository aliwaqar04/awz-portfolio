import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { personalInfo, navLinks } from '../data/portfolioData'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-sage-950 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-sage-800/50">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-sage-600 flex items-center justify-center" style={{ borderRadius: 2 }}>
                <span className="text-white font-mono text-xs font-bold">AW</span>
              </div>
              <span className="font-display text-lg font-bold text-cream-100">Ali Waqar Zafar</span>
            </div>
            <p className="font-body text-sm text-sage-400 leading-relaxed max-w-xs">
              Full-Stack Developer passionate about building clean, scalable web applications.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-mono text-xs text-sage-500 uppercase tracking-widest mb-4">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    className="font-body text-sm text-sage-400 hover:text-sage-300 cursor-pointer transition-colors animated-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs text-sage-500 uppercase tracking-widest mb-4">Get in Touch</p>
            <div className="space-y-2 mb-5">
              <a href={`mailto:${personalInfo.email}`} className="font-body text-sm text-sage-400 hover:text-sage-300 transition-colors block animated-underline">
                {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className="font-body text-sm text-sage-400 hover:text-sage-300 transition-colors block animated-underline">
                {personalInfo.phone}
              </a>
            </div>
            <div className="flex gap-3">
              {[
                { icon: <FiGithub   size={15} />, href: personalInfo.github },
                { icon: <FiLinkedin size={15} />, href: personalInfo.linkedin },
                { icon: <FiMail     size={15} />, href: `mailto:${personalInfo.email}` },
              ].map(({ icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="w-8 h-8 bg-sage-800 flex items-center justify-center text-sage-500 hover:text-sage-300 hover:bg-sage-700 transition-all duration-200"
                  style={{ borderRadius: 2 }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-sage-600">
            © {year} Ali Waqar Zafar. Built with React + Node.js.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 font-mono text-xs text-sage-500 hover:text-sage-400 transition-colors"
          >
            Back to top <FiArrowUp size={12} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
