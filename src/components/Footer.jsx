import logo from '../assets/logo.png'
import { contact, SITE_OFFICIEL } from '../data'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div>
            <img src={logo} alt="Logo UATM GASA Formation" />
            <p>
              Université Africaine de Technologie et de Management.
              Première université privée du Bénin, depuis 1992.
            </p>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>📍 {contact.adresse}</li>
              <li>📞 <a href={contact.telephoneLien}>{contact.telephone}</a></li>
              <li>✉️ <a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            </ul>
          </div>
          <div>
            <h4>Horaires</h4>
            <ul>
              <li>{contact.horaires}</li>
              <li style={{ marginTop: 10 }}>
                <a href={SITE_OFFICIEL} target="_blank" rel="noreferrer">uatm-gasa.com ↗</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="copy">© {new Date().getFullYear()} UATM-GASA Formation. Tous droits réservés.</p>
      </div>
    </footer>
  )
}
