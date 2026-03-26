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
    <section className="mx-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center text-center gap-3"
          >
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: '112px',
                height: '112px',
                background: 'linear-gradient(135deg, #E8820C 0%, #ffa514 40%, #f8d950 100%',
              }}
            >
              <item.icon color="white" size={46} />
            </div>
            <p className="font-fredoka font-bold text-verde" style={{ fontSize: '28px' }}>
              {item.title}
            </p>
            <p className="font-body text-gray-600" style={{ fontSize: '22px' }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
