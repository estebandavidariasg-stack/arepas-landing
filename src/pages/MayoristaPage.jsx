import { motion } from 'framer-motion'
import { Store, Package, TrendingUp, Users } from 'lucide-react'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const beneficios = [
  { icon: Store,      title: 'PRECIOS ESPECIALES', desc: 'Descuentos exclusivos por volumen de compra' },
  { icon: Package,    title: 'PRODUCTO FRESCO',    desc: 'Entregas programadas con producto recién elaborado' },
  { icon: TrendingUp, title: 'ALTA DEMANDA',       desc: 'Producto con alta rotación y aceptación en el mercado' },
  { icon: Users,      title: 'SOPORTE CONTINUO',   desc: 'Acompañamiento comercial y material publicitario' },
]

export default function MayoristaPage() {
  return (
    <main>
      <section id="mayorista">

        {/* Bloque superior — degradado amarillo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-6 rounded-t-3xl text-center"
          style={{
            background: 'linear-gradient(135deg, #E8820C 0%, #F5A623 50%, #FFBE3D 100%)',
            padding: '56px 40px',
            marginTop: '13px',
          }}
        >
          <h2
            className="font-fredoka font-bold text-white"
            style={{ fontSize: 'clamp(35px, 5vw, 80px)', marginBottom: '16px' }}
          >
            CONVIÉRTETE EN MAYORISTA
          </h2>
          {/* ↓ Solo cambia fontSize en móvil, desktop queda en 25px */}
          <p
            className="font-body font-semibold text-verde mx-auto text-[15px] md:text-[25px]"
            style={{ maxWidth: '800px' }}
          >
            Únete a nuestra red de distribuidores y lleva las mejores arepas artesanales a tu comunidad
          </p>
        </motion.div>

        {/* Bloque inferior — beneficios */}
        <div
          className="mx-6 rounded-b-3xl bg-white px-3 md:px-[40px]"
          style={{ paddingTop: '48px', paddingBottom: '-50px', marginBottom: '24px' }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-fredoka font-bold text-verde text-center"
            style={{ fontSize: 'clamp(25px, 3vw, 40px)', marginBottom: '40px' }} // ← desktop intacto
          >
            BENEFICIOS DE SER MAYORISTA
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mb-12">
            {beneficios.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col gap-2 md:gap-3 rounded-2xl p-3 md:p-6 items-center md:items-start text-center md:text-left"
                style={{ background: '#FFF8EC', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
              >
                {/* Ícono */}
                <div
                  className="flex items-center justify-center rounded-xl w-[56px] h-[56px] md:w-[72px] md:h-[72px]"
                  style={{ background: 'linear-gradient(135deg, #E8820C 0%, #F5A623 100%)' }}
                >
                  <item.icon color="white" className="w-[28px] h-[28px] md:w-[46px] md:h-[46px]" />
                </div>

                {/* Título */}
                <p className="font-fredoka font-bold text-verde text-[16px] md:text-[24px] max-w-[80px] md:max-w-none"
                  style={{ marginTop: '8px', lineHeight: 1.2 }}>
                  {item.title}
                </p>

                {/* Descripción */}
                <p className="font-body text-gray-600 text-[13px] md:text-[18px]"
                  style={{ lineHeight: 1.4 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </section>
      <ContactForm />
      <Footer />
    </main>
  )
}