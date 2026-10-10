import photo from '../assets/fondateur.webp'
import { fondateur } from '../data'

export default function Fondateur() {
  return (
    <section className="section" id="apropos">
      <div className="container fondateur-grid">
        <div className="fondateur-photo">
          <img src={photo} alt={fondateur.nom} />
          <div className="tag"><b>Fondateur</b>Depuis 1992</div>
        </div>
        <div>
          <span className="eyebrow">Le fondateur</span>
          <h2 className="section-title">{fondateur.nom}</h2>
          <p className="role">{fondateur.titre}</p>
          <p className="lead">{fondateur.texte}</p>
          <blockquote>
            « {fondateur.citation} »
            <cite>— {fondateur.nom}</cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
