import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const MotionLink = motion(Link)


export default function MayoristaCallout() {
  return (
    <section
      id="mayorista"
      className="mx-6 rounded-3xl text-center"
      style={{
        background: 'linear-gradient(135deg, #1a3a10 0%, #2B4E1F 50%, #3D6B2C 100%)',
        padding: '60px 40px',
        marginBottom: '24px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Título */}
        <h2
          className="font-fredoka font-bold text-amarillo"
          style={{ fontSize: 'clamp(32px, 5vw, 80px)', marginBottom: '16px' }}
        >
          ¿QUIERES SER MAYORISTA?
        </h2>

        {/* Descripción */}
        <p
          className="font-body font-bold text-white mx-auto"
          style={{ fontSize: '25px', maxWidth: '750px', marginBottom: '36px'}}
        >
          Únete a nuestra red de distribuidores y lleva la felicidad de nuestras arepas a más personas
        </p>

        {/* Botón con degradado */}
        <MotionLink
          to="/mayorista"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="font-fredoka font-semibold text-verde inline-block rounded-full"
          style={{
            fontSize: '30px',
            padding: '16px 40px',
            background: 'linear-gradient(135deg, #E8820C 0%, #F5A623 50%, #FFBE3D 100%)',
          }}
        >
          Contáctanos Ahora
        </MotionLink>
      </motion.div>
    </section>
  )
}
