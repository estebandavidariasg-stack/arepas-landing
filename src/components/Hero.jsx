import { motion } from 'framer-motion'
import arepaHero from '../assets/arepa_hero.png'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-amarillo mx-6 mt-3 rounded-3xl relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #E8820C 0%, #ffa514 40%, #f8d950 100%)',
        padding: '0px 40px 56px 40px'
      }}
    >
      <div className="text-center relative">

        {/* ══════════════════════════════════
            MÓVIL
        ══════════════════════════════════ */}
        <div className="md:hidden">

          {/* Fila: Felicidad [arepa] en una */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center relative z-10"
            style={{ gap: '6px', marginBottom: '-70px' }}
          >
            <span
              className="font-fredoka font-medium text-white"
              style={{ fontSize: 'clamp(26px, 6.5vw, 50px)', marginTop:"60px" , marginLeft: "10px"}}
            >
              Felicidad
            </span>

            <motion.img
              src={arepaHero}
              alt="Arepa"
              className="relative z-20"
              style={{ height: '35vw', marginBottom: '-50px', marginTop: '10px' }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />

            <span
              className="font-fredoka font-medium text-white whitespace-nowrap"
              style={{ fontSize: '27px', width: "100px", marginTop:"60px", marginRight:"5px" }}
            >
              en una
            </span>
          </motion.div>

          {/* Mordida */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-modak text-white leading-none relative z-10 w-full"
            style={{ fontSize: '80px', marginTop: '70px', marginLeft:"-5px" }}
          >
            Mordida
          </motion.h1>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body font-bold text-verde mx-auto"
            style={{ fontSize: 'clamp(14px, 3.8vw, 7px)', marginTop: '8px', maxWidth: '340px', marginBottom: '24px' }}
          >
            Arepas artesanales 100% orgánicas hechas con amor por madres cabeza de hogar y campesinos.
          </motion.p>

          {/* Botón */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center"
          >
            <Link
              to="/ubicaciones"
              className="font-fredoka font-semibold bg-white text-verde rounded-full hover:bg-verde hover:text-white transition-all duration-300 hover:scale-105"
              style={{ fontSize: 'clamp(16px, 4.5vw, 22px)', padding: '12px 28px' }}
            >
              Ver Ubicaciones
            </Link>
          </motion.div>
        </div>

        {/* ══════════════════════════════════
            ESCRITORIO — sin cambios
        ══════════════════════════════════ */}
        <div className="hidden md:block">

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center relative z-10"
            style={{ gap: '10px', marginBottom: '-180px' }}
          >
            <span
              className="font-fredoka font-medium text-white"
              style={{ fontSize: 'clamp(40px, 6.5vw, 120px)' }}
            >
              Felicidad
            </span>

            <motion.img
              src={arepaHero}
              alt="Arepa"
              className="relative z-20"
              style={{ height: '25vw', marginBottom: '-20px', marginTop: '-60px' }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />

            <span
              className="font-fredoka font-medium text-white"
              style={{ fontSize: 'clamp(40px, 6.5vw, 82px)' }}
            >
              en una
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-modak text-white leading-none relative z-10 w-full"
            style={{ fontSize: 'clamp(80px, 19vw, 300px)', marginTop: '60px' }}
          >
            Mordida
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body font-medium text-verde mx-auto"
            style={{ fontSize: '25px', marginTop: '-10px', maxWidth: '800px', fontWeight: '700', marginBottom: '50px' }}
          >
            Arepas artesanales 100% orgánicas hechas con amor por madres cabeza de hogar y campesinos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center mx-auto"
            style={{ marginTop: '28px' }}
          >
            <Link
              to="/ubicaciones"
              className="font-fredoka font-semibold bg-white text-verde rounded-full hover:bg-verde hover:text-white transition-all duration-300 hover:scale-105"
              style={{ fontSize: '30px', padding: '16px 40px' }}
            >
              Ver Ubicaciones
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  )
}