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
      className="sticky top-0 z-50 mx-6 rounded-b-3xl shadow-lg"
      style={{ background: 'linear-gradient(135deg, #E8820C 0%, #F5A623 50%, #FFBE3D 100%)' }}
    >
      <div className="w-full px-6 py-3 grid grid-cols-3 items-center">

        {/* Columna izquierda — Logo */}
        <Link to="/">
          <div className="relative" style={{ width: '110px', height: '110px', marginLeft: '90px' }}>
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
              style={{ width: '75px', height: '75px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', objectFit: 'contain' }}
            />
          </div>
        </Link>

        {/* Columna central — Links */}
        <div className="hidden md:flex items-center justify-center gap-8" style={{ marginLeft: '120px' }}>
          <Link
            to="/"
            className="hover:text-white transition-colors text-verde"
            style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: '25px', marginRight: '60px' }}
          >
            Inicio
          </Link>

          <button
            onClick={irAMayorista}
            className="hover:text-white transition-colors text-verde"
            style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: '25px', marginRight: '40px', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Mayorista
          </button>

          <a
            href="https://wa.me/573124067757"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-verde rounded-full hover:bg-verde hover:text-white transition-all duration-300 whitespace-nowrap"
            style={{ fontFamily: 'Fredoka', fontWeight: 700, fontSize: '25px', padding: '10px 40px' }}
          >
            Pedir Ahora
          </a>
        </div>

        {/* Columna derecha — Hamburguesa móvil */}
        <div className="flex justify-end">
          <button
            className="md:hidden text-white font-bold text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? 'X' : 'Menu'}
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
            className="md:hidden flex flex-col items-center gap-4 pt-2 pb-4"
            style={{ fontFamily: 'Fredoka', fontWeight: 700 }}
          >
            <Link to="/" className="text-white" onClick={() => setOpen(false)}>
              Inicio
            </Link>
            <button
              onClick={() => { irAMayorista(); setOpen(false) }}
              className="text-white"
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Fredoka', fontWeight: 700, fontSize: '16px' }}
            >
              Mayorista
            </button>
            <a
              href="https://wa.me/573124067757"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-verde px-6 py-2 rounded-full"
            >
              Pedir Ahora
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
