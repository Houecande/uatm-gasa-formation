import { useState } from 'react'
import batiment from '../assets/batiment.webp'
import { campus } from '../data'
import { MapPinIcon, PhoneIcon } from './Icons'

export default function Campus() {
  const [actif, setActif] = useState(0)
  const c = campus[actif]
  const requete = c.lat != null && c.lng != null ? `${c.lat},${c.lng}` : c.recherche
  const q = encodeURIComponent(requete)
  const srcCarte = c.carte ?? `https://www.google.com/maps?q=${q}&z=17&output=embed`

  return (
    <section className="section alt" id="campus">
      <div className="container">
        <div className="center">
          <span className="eyebrow">Nos campus</span>
          <h2 className="section-title">5 sites pour vous accueillir</h2>
          <p className="lead">Choisissez un campus pour l'afficher sur la carte.</p>
        </div>

        <div className="campus-layout">
          <div className="campus-list">
            {campus.map((site, i) => (
              <button
                key={site.nom}
                className={`campus-item ${i === actif ? 'active' : ''}`}
                onClick={() => setActif(i)}
              >
                <h3>
                  <MapPinIcon aria-hidden="true" /> Site de {site.nom}
                  {site.principal && <span className="principal">Campus principal</span>}
                </h3>
                <p>{site.ville}, {site.adresse}</p>
                <p className="tel"><PhoneIcon aria-hidden="true" /> {site.telephone}</p>
              </button>
            ))}
          </div>

          <div className="map-box">
            <iframe
              key={c.nom}
              title={`Carte du site de ${c.nom}`}
              src={srcCarte}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              className="map-link"
              href={`https://www.google.com/maps/search/?api=1&query=${q}`}
              target="_self"
            >
              Ouvrir / obtenir l'itinéraire dans Google Maps →
            </a>
          </div>
        </div>

        <div className="batiment">
          <img src={batiment} alt="Bâtiment du campus de l'UATM" />
        </div>
      </div>
    </section>
  )
}
