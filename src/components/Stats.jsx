import { useEffect, useRef, useState } from 'react'
import { stats, ANNEE_CREATION } from '../data'

export default function Stats() {
  const anneesExp = new Date().getFullYear() - ANNEE_CREATION
  const sectionRef = useRef(null)
  const [valeurs, setValeurs] = useState(() => stats.map(() => 0))
  const finales = stats.map((stat) => {
    const valeur = stat.valeur ?? `${anneesExp}+`
    const nombre = Number.parseInt(valeur, 10)
    return { nombre, suffixe: valeur.slice(String(nombre).length) }
  })

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const afficherValeursFinales = () => {
      setValeurs(finales.map(({ nombre }) => nombre))
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      afficherValeursFinales()
      return undefined
    }

    let animationFrame
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return

      observer.disconnect()
      const debut = performance.now()
      const duree = 1400

      const animer = (maintenant) => {
        const progression = Math.min((maintenant - debut) / duree, 1)
        const progressionLisse = 1 - (1 - progression) ** 4
        setValeurs(finales.map(({ nombre }) => Math.floor(nombre * progressionLisse)))
        if (progression < 1) animationFrame = requestAnimationFrame(animer)
      }

      animationFrame = requestAnimationFrame(animer)
    }, { threshold: 0.35 })

    observer.observe(section)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(animationFrame)
    }
  }, [anneesExp])

  return (
    <section className="stats" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, index) => (
            <div className="stat" key={s.label}>
              <strong>{valeurs[index]}{finales[index].suffixe}</strong>
              <span>{s.label}</span>
              <small>{s.detail}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
