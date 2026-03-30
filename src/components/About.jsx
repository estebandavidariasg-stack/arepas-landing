import { motion } from 'framer-motion'
import mapa from '../assets/mapa_colombia.png'
import abuela from '../assets/abuela_ingredientes.png'

export default function About() {
  return (
    <>
      {/* BLOQUE 1 — Dónde son elaboradas */}
      <section
        className="mx-6 rounded-3xl overflow-hidden"
        style={{ background: '#FFF3DC', marginBottom: '24px' }}
      >
        <div className="grid md:grid-cols-2 items-center">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center px-6 py-8 md:px-10 md:py-12 order-1 md:order-2 text-center md:text-left"
          >
            <h2
              className="font-fredoka font-bold text-espresso leading-tight"
              style={{ fontSize: 'clamp(22px, 5.5vw, 58px)' }}
            >
              ¿DÓNDE SON ELABORADAS
            </h2>
            <h2
              className="font-modak text-verde leading-tight"
              style={{ fontSize: 'clamp(42px, 11vw, 90px)', marginBottom: '16px' }}
            >
              NUESTRAS AREPAS?
            </h2>
            <p className="font-body text-espresso" style={{ fontSize: 'clamp(14px, 3.5vw, 22px)', marginBottom: '12px' }}>
              Nuestras arepas son elaboradas en el municipio de{' '}
              <span className="text-naranja font-bold">San Vicente del Caguán</span>
              , en la zona rural empleando madres cabeza de hogar y campesinos.
            </p>
            <p className="font-body text-espresso" style={{ fontSize: 'clamp(14px, 3.5vw, 22px)' }}>
              Cada arepa que produces apoya directamente a familias colombianas y contribuye al desarrollo de nuestra comunidad rural.
            </p>
          </motion.div>

          {/* Imagen mapa — sin padding top para que quede pegada al texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center px-6 pb-6 pt-0 md:p-10 order-2 md:order-1"
          >
            <img
              src={mapa}
              alt="Mapa Colombia"
              style={{ width: '100%', maxWidth: '800px' }}
            />
          </motion.div>

        </div>
      </section>

      {/* BLOQUE 2 — De qué están hechas */}
      {/* overflow-visible para que la abuela sobresalga hacia arriba en desktop */}
      <section
        className="mx-6 rounded-3xl overflow-visible bg-white"
        style={{ marginBottom: '24px' }}
      >
        <div className="grid md:grid-cols-2 items-center">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center px-6 py-8 md:px-10 md:py-12 order-1 text-center md:text-left"
          >
            <h2
              className="font-fredoka font-bold text-espresso leading-tight"
              style={{ fontSize: 'clamp(22px, 5.5vw, 58px)' }}
            >
              ¿DE QUÉ ESTÁN HECHAS
            </h2>
            <h2
              className="font-modak text-verde leading-tight"
              style={{ fontSize: 'clamp(42px, 11vw, 90px)', marginBottom: '16px' }}
            >
              NUESTRAS AREPAS?
            </h2>

            <ul className="font-body font-bold text-espresso space-y-3 text-left inline-block mx-auto md:mx-0" style={{ fontSize: 'clamp(14px, 3.5vw, 22px)' }}>
              {['Maíz 100% orgánico', 'Quesillo artesanal', 'Mantequilla natural', 'Queso campesino'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span
                    className="rounded-full flex-shrink-0"
                    style={{
                      width: '10px', height: '10px',
                      background: 'linear-gradient(135deg, #E8820C, #F5A623)',
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <p
              className="font-modak text-naranja text-[40px] md:text-[62px]"
              style={{ marginTop: '32px' }}
            >
              PRODUCTOS 100% ORGÁNICOS
            </p>
          </motion.div>

          {/* Imagen abuela — sobresale en desktop, normal en móvil */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-end justify-center px-6 pb-0 order-2 pt-12 md:pt-0"
            style={{ marginTop: '-120px' }}  // solo afecta desktop, en móvil hay espacio de sobra
          >
            <img
              src={abuela}
              alt="Abuela con ingredientes"
              style={{ width: '100%', maxWidth: '650px' }}
            />
          </motion.div>

        </div>
      </section>
    </>
  )
}