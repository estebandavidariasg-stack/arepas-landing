import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const irAMayorista = () => {
    navigate('/')
    setTimeout(() => {
      document.getElementById('mayorista')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 mx-2 md:mx-6 rounded-b-3xl shadow-lg"
      style={{ background: 'linear-gradient(135deg, #E8820C 0%, #F5A623 50%, #FFBE3D 100%)' }}
    >
      <div className="w-full px-4 md:px-6 py-2 md:py-3 grid grid-cols-3 items-center">

        {/* Columna izquierda — Logo */}
        <Link to="/">
          <div className="relative" style={{ width: '70px', height: '70px' }}>
            <svg viewBox="0 0 140 140" className="absolute inset-0 w-full h-full">
              <circle cx="70" cy="70" r="68" fill="rgba(255,255,255,0.15)" />
              <defs>
                <path id="circulo-nav" d="M 70,70 m -54,0 a 54,54 0 1,1 108,0 a 54,54 0 1,1 -108,0" />
              </defs>
              <text style={{ fontFamily: 'Fredoka', fontWeight: 700, fontSize: '11.5px', fill: 'white', letterSpacing: '1.5px' }}>
                <textPath href="#circulo-nav" startOffset="5%">
                  AREPAS DE LA ABUELA • AREPAS DE LA ABUELA •
                </textPath>
              </text>
            </svg>
            <img
              src={logo}
              alt="Logo"
              className="absolute"
              style={{ width: '48px', height: '48px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', objectFit: 'contain' }}
            />
          </div>
        </Link>

        {/* Columna central — Links escritorio */}
        <div className="hidden md:flex items-center justify-center gap-6">
          <Link
            to="/"
            className="hover:text-white transition-colors text-verde"
            style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: '20px' }}
          >
            Inicio
          </Link>
          <button
            onClick={irAMayorista}
            className="hover:text-white transition-colors text-verde"
            style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: '20px', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Mayorista
          </button>
          <a
            href="https://wa.me/573124067757"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-verde rounded-full hover:bg-verde hover:text-white transition-all duration-300 whitespace-nowrap"
            style={{ fontFamily: 'Fredoka', fontWeight: 700, fontSize: '18px', padding: '8px 28px' }}
          >
            Pedir Ahora
          </a>
        </div>

        {/* Columna derecha — Hamburguesa móvil */}
        <div className="flex justify-end">
          <button
            className="md:hidden text-white px-2"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center gap-4 pt-4 pb-6 rounded-b-3xl"
            style={{ 
              fontFamily: 'Fredoka', 
              fontWeight: 700, 
              background: 'linear-gradient(135deg, #E8820C 0%, #F5A623 50%, #FFBE3D 100%)'
            }}
          >
            <Link to="/" className="text-white text-xl py-2" onClick={() => setOpen(false)}>
              Inicio
            </Link>
            <button
              onClick={() => { irAMayorista(); setOpen(false) }}
              className="text-white text-xl py-2"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Mayorista
            </button>
            <a
              href="https://wa.me/573124067757"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-verde px-10 py-3 rounded-full text-xl font-bold"
            >
              Pedir Ahora
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
