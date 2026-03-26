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
        padding: '-00px 40px 56px 40px' }}
    >
      <div className="text-center relative">

        {/* Fila: Felicidad [arepa] en una */}
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

          {/* Arepa — flota y sobresale hacia abajo sobre Mordida */}
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

        {/* Mordida — z-10 para que la arepa la tape */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-modak text-white leading-none relative z-10 w-full"
          style={{ fontSize: 'clamp(80px, 19vw, 300px)', marginTop: '60px' }}
        >
          Mordida
        </motion.h1>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body font-medium text-verde mx-auto"
          style={{ fontSize: '25px', marginTop: '-10px', maxWidth: '800px', fontWeight: '700', marginBottom: '50px' }}
        >
          Arepas artesanales 100% orgánicas hechas con amor por madres cabeza de hogar y campesinos.
        </motion.p>

        {/* Botones */}
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
    </section>
  )
}
