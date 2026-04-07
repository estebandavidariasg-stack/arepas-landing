import { motion } from 'framer-motion'
import { MapPin, Phone, Clock } from 'lucide-react'
import Footer from '../components/Footer'

const ubicaciones = [
  {
    titulo: 'Punto de Producción Principal',
    direccion: 'San Vicente del Caguán, Zona Rural\nCaquetá, Colombia',
    telefono: '320 885 9070',
    horario: 'Lunes a Sábado: 6:00 AM – 4:00 PM',
    maps: 'https://maps.google.com/?q=San+Vicente+del+Caguan,+Caqueta,+Colombia',
  },
  {
    titulo: 'Distribución Bogotá',
    direccion: 'Bogotá',
    telefono: '312 406 7757',
    horario: 'Lunes a Viernes: 8:00 AM – 6:00 PM',
    maps: 'https://maps.google.com/?q=Av+Boyaca+con+Calle+80,+Bogota,+Colombia',
  },
]

export default function UbicacionesPage() {
  return (
    <main>
      <section id="ubicaciones">

        {/* Bloque superior — degradado amarillo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-6 rounded-t-3xl text-center"
          style={{
            background: 'linear-gradient(135deg, #E8820C 0%, #F5A623 50%, #FFBE3D 100%)',
            padding: '56px 40px 48px 40px',
            marginTop: "15px",
          }}
        >
          <h2
            className="font-fredoka font-bold text-white"
            style={{ fontSize: 'clamp(35px, 5vw, 72px)', marginBottom: '16px' }}
          >
            NUESTRAS UBICACIONES
          </h2>
          <p
            className="font-body font-semibold text-verde mx-auto text-[15px] md:text-[25px]"
            style={{  maxWidth: '600px' }}
          >
            Encuéntranos en diferentes puntos del país para llevarte nuestras deliciosas arepas
          </p>
        </motion.div>

        {/* Bloque inferior */}
        <div
          className="mx-6 rounded-b-3xl bg-white px-3 md:px-[40px]"
          style={{ paddingTop: '48px', paddingBottom: '56px', marginBottom: '24px' }}
        >
          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden"
            style={{ border: '1.5px solid #F5A623', marginBottom: '48px' }}
          >
            <iframe
              title="Mapa San Vicente del Caguán"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15957.123456789!2d-74.7667!3d2.1167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b6f1234567890%3A0xabcdef1234567890!2sSan%20Vicente%20del%20Cagu%C3%A1n%2C%20Caquet%C3%A1!5e0!3m2!1ses!2sco!4v1234567890"
              width="100%"
              height="600"
              className="h-[300px] md:h-[600px]"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto" style={{ maxWidth: '1080px'}}>
            {ubicaciones.map((u, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl flex flex-col gap-5 items-center md:items-start text-center md:text-left"
                style={{
                  border: '2px solid #F5A623',
                  background: '#FFFFFF',
                  padding: '32px 28px',
                  boxShadow: '0 8px 24px rgba(232, 130, 12, 0.15)',
                }}
              >
                {/* Ícono */}
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: '56px',
                    height: '56px',
                    background: 'linear-gradient(135deg, #E8820C 0%, #F5A623 100%)',
                  }}
                >
                  <MapPin color="white" size={26} />
                </div>

                {/* Título */}
                <h3
                  className="font-fredoka font-bold text-[23px] md:text-[28px]"
                  style={{ color: '#3D6B2C' }}
                >
                  {u.titulo}
                </h3>

                {/* Info */}
                <div className="flex justify-center md:justify-start w-full">
                  <div className="inline-flex flex-col gap-3 text-left">
                    <div className="flex items-start gap-3 text-gray-600 font-body" style={{ fontSize: '15px' }}>
                      <MapPin size={16} color="#F5A623" className="mt-1 flex-shrink-0" />
                      <span style={{ whiteSpace: 'pre-line' }}>{u.direccion}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 font-body" style={{ fontSize: '15px' }}>
                      <Phone size={16} color="#F5A623" className="flex-shrink-0" />
                      <span>{u.telefono}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 font-body" style={{ fontSize: '15px' }}>
                      <Clock size={16} color="#F5A623" className="flex-shrink-0" />
                      <span>{u.horario}</span>
                    </div>
                  </div>
                </div>

                {/* Botón */}
                <motion.a
                  href={u.maps}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="font-fredoka font-semibold text-white rounded-full flex items-center justify-center gap-3 mt-2 w-full"
                  style={{
                    fontSize: '22px',
                    padding: '14px',
                    background: 'linear-gradient(135deg, #E8820C 0%, #F5A623 50%, #FFBE3D 100%)',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  Cómo Llegar
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>

      </section>

      <Footer />
    </main>
  )
}
