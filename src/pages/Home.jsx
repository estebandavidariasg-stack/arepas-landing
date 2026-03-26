import Hero from '../components/Hero'
import Features from '../components/Features'
import About from '../components/About'
import MayoristaCallout from '../components/MayoristaCallout'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <MayoristaCallout />
      <Footer />
    </main>
  )
}