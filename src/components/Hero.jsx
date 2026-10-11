import etudiants from '../assets/etudiants.jpg'
import { SITE_OFFICIEL } from '../data'
import { GraduationCapIcon } from './Icons'

export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="container">
        <div>
          <span className="badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <GraduationCapIcon /> Depuis 1992
          </span>
          <h1>
            La première université privée du <span>Bénin</span>
          </h1>
          <p>
            Depuis plus de 30 ans, l'UATM-GASA Formation forme les meilleurs ingénieurs,
            entrepreneurs, comptables, agronomes et juristes.
          </p>
          <div className="actions">
            <a className="btn btn-accent" href={SITE_OFFICIEL} target="_blank" rel="noreferrer">
              S'inscrire maintenant
            </a>
            <a className="btn btn-outline" href="#filieres">Découvrir les filières</a>
          </div>
        </div>
        <div className="hero-photo">
          <img src={etudiants} alt="Étudiants de l'UATM en uniforme" />
          <div className="tag">
            <b>Bourses d'excellence</b>
            jusqu'à 100 % des frais
          </div>
        </div>
      </div>
    </section>
  )
}
