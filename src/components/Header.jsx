import { useState } from 'react'
import logo from '../assets/logo.png'
import { contact, SITE_OFFICIEL } from '../data'
import { PhoneIcon, MailIcon } from './Icons'

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
          <a href="#accueil" className="brand">
            <img src={logo} alt="Logo UATM GASA Formation" />
            <div>
              <strong>UATM-<span>GASA</span></strong>
              <small>FORMATION</small>
            </div>
          </a>
          <button className="burger" onClick={() => setOuvert(!ouvert)} aria-label="Menu">
            {ouvert ? '✕' : '☰'}
          </button>
          <nav className={`nav ${ouvert ? 'open' : ''}`}>
            {liens.map(([nom, href]) => (
              <a key={href} href={href} onClick={() => setOuvert(false)}>{nom}</a>
            ))}
            <a className="btn btn-accent" href={SITE_OFFICIEL} target="_blank" rel="noreferrer">
              S'inscrire
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
