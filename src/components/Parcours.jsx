import { jalons } from '../data'

export default function Parcours() {
  return (
    <section className="section" id="parcours">
      <div className="container center">
        <span className="eyebrow">Notre parcours</span>
        <h2 className="section-title">30 ans au service de l'excellence</h2>
        <p className="lead">
          De GASA-FORMATION / SUPELEC BÉNIN à l'Université Africaine de Technologie et de
          Management, une croissance continue.
        </p>
        <div className="jalons">
          {jalons.map((j, i) => (
            <div className={`jalon ${i === jalons.length - 1 ? 'actuel' : ''}`} key={j.annee}>
              <span className="annee">{j.annee}</span>
              <h3>{j.titre}</h3>
              <p>{j.texte}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
