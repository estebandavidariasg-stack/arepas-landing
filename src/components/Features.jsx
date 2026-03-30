import { motion } from 'framer-motion'
import { Leaf, Heart, Award, Sparkles } from 'lucide-react'

const items = [
  { icon: Leaf,     title: '100% ORGÁNICO',    desc: 'Productos naturales sin químicos ni preservantes' },
  { icon: Heart,    title: 'HECHO CON AMOR',   desc: 'Elaboradas artesanalmente por madres de familia' },
  { icon: Award,    title: 'CALIDAD PREMIUM',  desc: 'Los mejores ingredientes para un sabor auténtico' },
  { icon: Sparkles, title: 'TRADICIÓN',         desc: 'Receta tradicional colombiana de generación en generación' },
]

export default function Features() {
  return (
    <section className="mx-6 py-8 md:py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center text-center gap-2 md:gap-3"
          >
            {/* Círculo — más pequeño en móvil */}
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: 'clamp(64px, 16vw, 112px)',
                height: 'clamp(64px, 16vw, 112px)',
                background: 'linear-gradient(135deg, #E8820C 0%, #ffa514 40%, #f8d950 100%)',
              }}
            >
              <item.icon color="white" size="clamp(28px, 7vw, 46px)" />
            </div>

            {/* Título */}
            <p className="font-fredoka font-bold text-verde"
              style={{ fontSize: 'clamp(14px, 3.8vw, 28px)', lineHeight: 1.2 }}>
              {item.title}
            </p>

            {/* Descripción */}
            <p className="font-body text-gray-600"
              style={{ fontSize: 'clamp(11px, 3vw, 22px)', lineHeight: 1.4 }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}