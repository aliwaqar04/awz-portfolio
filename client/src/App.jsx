import { Toaster } from 'react-hot-toast'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Skills     from './components/Skills'
import Projects   from './components/Projects'
import Experience from './components/Experience'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#2d4a1e',
            color: '#fdf9ed',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            borderRadius: '2px',
            border: '1px solid rgba(90,143,66,0.4)',
          },
          success: { iconTheme: { primary: '#7aaa61', secondary: '#fdf9ed' } },
          error:   { iconTheme: { primary: '#f87171', secondary: '#fdf9ed' } },
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
