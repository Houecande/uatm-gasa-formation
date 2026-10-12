import { URL_ADMISSION, URL_CONTACT } from '../data'

export default function Inscription() {
  return (
    <section className="inscription" id="admission">
      <div className="container">
        <h2>Rejoignez l'UATM-GASA Formation</h2>
        <p>Les inscriptions se font sur le site officiel de l'université.</p>
        <div className="actions">
          <a className="btn btn-accent" href={URL_ADMISSION} target="_self">
            S'inscrire sur le site officiel
          </a>
          <a className="btn btn-outline" href={URL_CONTACT} target="_self">
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  )
}
