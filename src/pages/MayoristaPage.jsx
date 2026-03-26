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
            marginTop: "13px"
          }}
        >
          <h2
            className="font-fredoka font-bold text-white"
            style={{ fontSize: 'clamp(28px, 5vw, 80px)', marginBottom: '16px' }}
          >
            CONVIÉRTETE EN MAYORISTA
          </h2>
          <p
            className="font-body font-semibold text-verde mx-auto"
            style={{ fontSize: '25px', maxWidth: '800px' }}
          >
            Únete a nuestra red de distribuidores y lleva las mejores arepas artesanales a tu comunidad
          </p>
        </motion.div>

        {/* Bloque inferior — beneficios */}
        <div
          className="mx-6 rounded-b-3xl bg-white"
          style={{ padding: '48px 40px 56px 40px', marginBottom: '24px' }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-fredoka font-bold text-verde text-center"
            style={{ fontSize: 'clamp(20px, 3vw,40px)', marginBottom: '60px' }}
          >
            BENEFICIOS DE SER MAYORISTA
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {beneficios.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col gap-3 rounded-2xl p-6"
                style={{ background: '#FFF8EC', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
              >
                <div
                  className="flex items-center justify-center rounded-xl"
                  style={{
                    width: '72px',
                    height: '72px',
                    background: 'linear-gradient(135deg, #E8820C 0%, #F5A623 100%)',
                  }}
                >
                  <item.icon color="white" size={46} />
                </div>
                <p className="font-fredoka font-bold text-verde" style={{ fontSize: '24px', marginTop: "15px" }}>
                  {item.title}
                </p>
                <p className="font-body text-gray-600" style={{ fontSize: '18px' }}>
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
