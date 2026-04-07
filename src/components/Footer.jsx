import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import logo from '../assets/logo.png'
import { FaTiktok } from "react-icons/fa";


export default function Footer() {
  return (
    <footer
      className="mx-6 rounded-3xl"
      style={{
        background: 'linear-gradient(135deg, #1a3a10 0%, #2B4E1F 60%, #3D6B2C 100%)',
        padding: '48px 40px 24px 40px',
        marginBottom: '16px',
      }}
    >
      {/* gap-8 en móvil, gap desktop con style */}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-12 md:gap-[200px]">

        {/* Columna 1 — Logo + descripción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start gap-6 w-full"
        >
          <div className="relative" style={{ width: '140px', height: '140px', marginLeft: 'auto', marginRight: 'auto' }}>
            <svg viewBox="0 0 140 140" className="absolute inset-0 w-full h-full">
              <circle cx="70" cy="70" r="68" fill="#F5A623" />
              <defs>
                <path id="circulo" d="M 70,70 m -54,0 a 54,54 0 1,1 108,0 a 54,54 0 1,1 -108,0"/>
              </defs>
              <text style={{ fontFamily: 'Fredoka', fontWeight: 700, fontSize: '11.5px', fill: 'white', letterSpacing: '1.5px' }}>
                <textPath href="#circulo" startOffset="5%">
                  AREPAS DOÑA AMPARO • AREPAS DOÑA AMPARO •
                </textPath>
              </text>
            </svg>
            <img
              src={logo}
              alt="Arepas de la Abuela"
              className="absolute"
              style={{ width: '90px', height: '90px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', objectFit: 'contain' }}
            />
          </div>

          <p className="font-body text-white text-center md:text-center" style={{ fontSize: '14px', opacity: 0.85, maxWidth: '400px' }}>
            Felicidad en una mordida. Arepas artesanales 100% orgánicas elaboradas con amor en San Vicente del Caguán.
          </p>
        </motion.div>

        {/* Columna 2 — Contacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center md:items-start gap-4 w-full"
        >
          <h3 className="font-fredoka font-bold text-naranja" style={{ fontSize: '20px' }}>
            CONTACTO
          </h3>

          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex flex-col gap-3 text-left">
              <a href="https://wa.me/573208859070" className="flex items-center gap-3 text-white hover:text-naranja transition-colors" style={{ fontSize: '15px' }}>
                <Phone size={18} color="#F5A623" />
                320 885 9070 (San Vicente del Cagúan)
              </a>
              <a href="https://wa.me/57 " className="flex items-center gap-3 text-white hover:text-naranja transition-colors" style={{ fontSize: '15px' }}>
                <Phone size={18} color="#F5A623" />
                312 406 7757 (Bogotá)
              </a>
              <a href="mailto:arepasdonaamparo@gmail.com" className="flex items-center gap-3 text-white hover:text-naranja transition-colors" style={{ fontSize: '15px' }}>
                <Mail size={18} color="#F5A623" />
                arepasdonaamparo@gmail.com
              </a>
              <div className="flex items-center gap-3 text-white" style={{ fontSize: '15px' }}>
                <MapPin size={18} color="#F5A623" className="flex-shrink-0" />
                San Vicente del Caguán, Caquetá, Colombia
              </div>
            </div>
          </div>
        </motion.div>

        {/* Columna 3 — Redes sociales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center md:items-start gap-4 w-full"
        >
          <h3 className="font-fredoka font-bold text-naranja" style={{ fontSize: '20px' }}>
            SÍGUENOS
          </h3>
          <p className="font-body text-white text-center md:text-left" style={{ fontSize: '14px', opacity: 0.85 }}>
            Conecta con nosotros en redes sociales
          </p>

          <div className="flex gap-4 mt-2">
            <a 
              href="https://www.tiktok.com/@arepasamparo?_r=1&_t=ZS-95JyKHYwgLd" 
              target="_blank" 
              rel="noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center rounded-full"
                style={{ 
                  width: '48px', 
                  height: '48px', 
                  background: 'linear-gradient(135deg, #E8820C 0%, #F5A623 100%)' 
                }}
              >
                <FaTiktok size={22} color="white" />
              </motion.div>
            </a>

            <a href="https://www.instagram.com/arepasdelaabuela24?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center rounded-full"
                style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #E8820C 0%, #F5A623 100%)' }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
                </svg>
              </motion.div>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Línea divisora */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', marginTop: '36px', paddingTop: '20px' }}>
        <p className="font-body text-center text-white" style={{ fontSize: '13px', opacity: 0.6 }}>
          © 2026 Arepas Doña Amparo. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}