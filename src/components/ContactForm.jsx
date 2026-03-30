import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: '', empresa: '', email: '', telefono: '', ciudad: '', mensaje: ''
  })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ nombre: '', empresa: '', email: '', telefono: '', ciudad: '', mensaje: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1.5px solid #F5A623',
    background: '#FAFAFA',
    fontFamily: 'Poppins',
    fontSize: '15px',
    outline: 'none',
  }

  const labelStyle = {
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontWeight: 600,
    color: '#2C1810',
    marginBottom: '6px',
    display: 'block',
  }

  return (
    <section
      className="mx-6 rounded-3xl"
      style={{ background: '#FFF8EC', padding: '48px 40px', marginBottom: '24px' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl mx-auto w-full md:w-auto px-[20px] md:px-[40px] py-[32px] md:py-[48px]"
        style={{ maxWidth: '800px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
      >
        {status === 'success' ? (
          /* Mensaje de gracias */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center gap-6 py-10"
          >
            <span style={{ fontSize: '72px' }}>🫓</span>
            <h2
              className="font-fredoka font-bold text-verde"
              style={{ fontSize: 'clamp(24px, 4vw, 42px)' }}
            >
              ¡Gracias por tu solicitud!
            </h2>
            <p
              className="font-body text-gray-600"
              style={{ fontSize: '18px', maxWidth: '400px' }}
            >
              Hemos recibido tu información y te responderemos lo antes posible.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setStatus(null)}
              className="font-fredoka font-semibold text-white rounded-full"
              style={{
                fontSize: '18px',
                padding: '12px 40px',
                background: 'linear-gradient(135deg, #E8820C 0%, #F5A623 50%, #FFBE3D 100%)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Enviar otra solicitud
            </motion.button>
          </motion.div>
        ) : (
          <>
            <h2
              className="font-fredoka font-bold text-verde text-center"
              style={{ fontSize: 'clamp(30px, 4vw, 42px)', marginBottom: '8px' }}
            >
              SOLICITA INFORMACIÓN
            </h2>
            <p
              className="font-body text-center text-gray-600"
              style={{ fontSize: '15px', marginBottom: '32px' }}
            >
              Completa el formulario y nos pondremos en contacto contigo lo más pronto posible
            </p>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                  <label style={labelStyle}>Nombre Completo *</label>
                  <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Juan Pérez" required style={inputStyle} />
                </div>

                <div>
                  <label style={labelStyle}>Empresa</label>
                  <input name="empresa" value={form.empresa} onChange={handleChange} placeholder="Mi Negocio S.A.S" style={inputStyle} />
                </div>

                <div>
                  <label style={labelStyle}>Email *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="correo@ejemplo.com" required style={inputStyle} />
                </div>

                <div>
                  <label style={labelStyle}>Teléfono *</label>
                  <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="321 123 4567" required style={inputStyle} />
                </div>

                <div className="md:col-span-2">
                  <label style={labelStyle}>Ciudad *</label>
                  <input name="ciudad" value={form.ciudad} onChange={handleChange} placeholder="Bogotá, Colombia" required style={inputStyle} />
                </div>

                <div className="md:col-span-2">
                  <label style={labelStyle}>Mensaje / Consulta</label>
                  <textarea name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Cuéntanos sobre tu negocio y cómo podemos trabajar juntos..." rows={4} style={{ ...inputStyle, resize: 'none' }} />
                </div>

              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full font-fredoka font-semibold text-white rounded-xl mt-6"
                style={{
                  fontSize: '22px',
                  padding: '16px',
                  background: status === 'loading' ? '#ccc' : 'linear-gradient(135deg, #E8820C 0%, #F5A623 50%, #FFBE3D 100%)',
                  border: 'none',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                }}
              >
                {status === 'loading' ? 'Enviando...' : 'Enviar Solicitud'}
              </motion.button>

              {status === 'error' && (
                <p className="text-center mt-4 font-body text-red-500 font-semibold">
                  ❌ Hubo un error. Intenta de nuevo o escríbenos por WhatsApp.
                </p>
              )}

              <p className="text-center font-body text-gray-400 mt-4" style={{ fontSize: '13px' }}>
                * Campos obligatorios
              </p>
            </form>
          </>
        )}
      </motion.div>
    </section>
  )
}
