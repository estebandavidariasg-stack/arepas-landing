import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  // Solo aceptar POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' })
  }

  const { nombre, empresa, email, telefono, ciudad, mensaje } = req.body

  // Configurar transporter con Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.VITE_EMAIL_USER,
      pass: process.env.VITE_EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Arepas de la Abuela" <${process.env.VITE_EMAIL_USER}>`,
      to: process.env.VITE_EMAIL_TO,
      subject: `Nueva solicitud de mayorista — ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2B4E1F;">Nueva Solicitud de Mayorista 🫓</h2>
          <hr style="border-color: #F5A623;" />
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Empresa:</strong> ${empresa || 'No especificada'}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <p><strong>Ciudad:</strong> ${ciudad}</p>
          <p><strong>Mensaje:</strong> ${mensaje || 'Sin mensaje'}</p>
          <hr style="border-color: #F5A623;" />
          <p style="color: #F5A623; font-size: 12px;">Arepas de la Abuela — San Vicente del Caguán</p>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Error al enviar el correo' })
  }
}