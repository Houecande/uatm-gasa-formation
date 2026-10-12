import logo from '../assets/logo.png'
import { contact, SITE_OFFICIEL } from '../data'
import { ExternalLinkIcon, MailIcon, MapPinIcon, PhoneIcon } from './Icons'

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
              <li><MapPinIcon aria-hidden="true" /> {contact.adresse}</li>
              <li><PhoneIcon aria-hidden="true" /> <a href={contact.telephoneLien} target="_self">{contact.telephone}</a></li>
              <li><MailIcon aria-hidden="true" /> <a href={`mailto:${contact.email}`} target="_self">{contact.email}</a></li>
            </ul>
          </div>
          <div>
            <h4>Horaires</h4>
            <ul>
              <li>{contact.horaires}</li>
              <li style={{ marginTop: 10 }}>
                <a href={SITE_OFFICIEL} target="_self">
                  uatm-gasa.com <ExternalLinkIcon aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="copy">© {new Date().getFullYear()} UATM-GASA Formation. Tous droits réservés.</p>
      </div>
    </footer>
  )
}
