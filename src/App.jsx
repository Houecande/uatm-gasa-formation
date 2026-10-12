import { Analytics } from '@vercel/analytics/react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Fondateur from './components/Fondateur'
import Filieres from './components/Filieres'
import Parcours from './components/Parcours'
import Campus from './components/Campus'
import Inscription from './components/Inscription'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Fondateur />
        <Filieres />
        <Parcours />
        <Campus />
        <Inscription />
      </main>
      <Footer />
      <Analytics />
    </>
  )
}
