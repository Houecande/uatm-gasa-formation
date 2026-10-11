import { SITE_OFFICIEL, contact } from '../data'

export default function Inscription() {
  return (
    <section className="inscription" id="admission">
      <div className="container">
        <h2>Rejoignez l'UATM-GASA Formation</h2>
        <p>Les inscriptions se font sur le site officiel de l'université.</p>
        <div className="actions">
          <a className="btn btn-accent" href={SITE_OFFICIEL} target="_blank" rel="noreferrer">
            S'inscrire sur le site officiel
          </a>
          <a className="btn btn-outline" href={contact.telephoneLien}>Nous appeler</a>
        </div>
      </div>
    </section>
  )
}
