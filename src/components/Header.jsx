import { useState } from 'react'
import logo from '../assets/logo.png'
import { contact, URL_ADMISSION } from '../data'
import { PhoneIcon, MailIcon, MenuIcon, CloseIcon } from './Icons'

const liens = [
  ['Accueil', '#accueil'],
  ['Filières', '#filieres'],
  ['Parcours', '#parcours'],
  ['Campus', '#campus'],
  ['Contact', '#contact'],
]

export default function Header() {
  const [ouvert, setOuvert] = useState(false)

  return (
    <>
      <div className="topbar">
        <div className="container">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <PhoneIcon /> {contact.telephone}
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <MailIcon /> {contact.email}
          </span>
        </div>
      </div>
      <header className="header">
        <div className="container">
          <a href="#accueil" target="_self" className="brand" onClick={() => setOuvert(false)}>
            <img src={logo} alt="Logo UATM GASA Formation" />
            <div>
              <strong>UATM-<span>GASA</span></strong>
              <small>FORMATION</small>
            </div>
          </a>
          <button
            className="burger"
            onClick={() => setOuvert(!ouvert)}
            aria-label={ouvert ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={ouvert}
          >
            {ouvert ? <CloseIcon /> : <MenuIcon />}
          </button>
          <nav className={`nav ${ouvert ? 'open' : ''}`}>
            {liens.map(([nom, href]) => (
              <a key={href} href={href} target="_self" onClick={() => setOuvert(false)}>{nom}</a>
            ))}
            <a className="btn btn-accent" href={URL_ADMISSION} target="_self">
              S'inscrire
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
