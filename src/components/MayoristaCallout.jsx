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
        padding: 'clamp(32px, 6vw, 60px) clamp(20px, 5vw, 40px)',
        marginBottom: '24px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Título — cambia solo el [28px] para móvil */}
        <h2 className="font-fredoka font-bold text-amarillo text-[40px] md:text-[80px] mb-4">
          ¿QUIERES SER MAYORISTA?
        </h2>

        {/* Descripción — cambia solo el [14px] para móvil */}
        <p className="font-body font-bold text-white mx-auto max-w-[750px] mb-7 text-[14px] md:text-[25px]">
          Únete a nuestra red de distribuidores y lleva la felicidad de nuestras arepas a más personas
        </p>

        {/* Botón — cambia solo el [20px] para móvil */}
        <MotionLink
          to="/mayorista"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="font-fredoka font-semibold text-verde inline-block rounded-full
                     text-[20px] md:text-[30px]
                     px-[32px] py-[14px] md:px-[40px] md:py-[16px]"
          style={{
            background: 'linear-gradient(135deg, #E8820C 0%, #F5A623 50%, #FFBE3D 100%)',
          }}
        >
          Contáctanos Ahora
        </MotionLink>
      </motion.div>
    </section>
  )
}