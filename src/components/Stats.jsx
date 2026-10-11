import { stats, ANNEE_CREATION } from '../data'

export default function Stats() {
  const anneesExp = new Date().getFullYear() - ANNEE_CREATION

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <strong>{s.valeur ?? `${anneesExp}+`}</strong>
              <span>{s.label}</span>
              <small>{s.detail}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
