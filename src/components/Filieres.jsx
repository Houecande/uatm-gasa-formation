import { poles, URL_FILIERES } from '../data'

export default function Filieres() {
  return (
    <section className="section alt" id="filieres">
      <div className="container center">
        <span className="eyebrow">Nos formations</span>
        <h2 className="section-title">23 filières agréées par l'État</h2>
        <p className="lead">
          Licence, Master et formations de courte durée, dans quatre grands pôles.
        </p>
        <div className="poles">
          {poles.map((p) => (
            <article className={`pole ${p.couleur}`} key={p.titre}>
              <h3>{p.titre}</h3>
              <ul>
                {p.filieres.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="cta-row">
          <a className="btn btn-blue" href={URL_FILIERES} target="_self">
            Voir toutes les filières sur le site officiel
          </a>
        </div>
      </div>
    </section>
  )
}
