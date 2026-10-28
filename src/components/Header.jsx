import { useEffect, useState } from 'react'
import { info, whatsappLink } from '../data/menu'
import WhatsAppIcon from './WhatsAppIcon'

export default function Header() {
  const [logoOk, setLogoOk] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="brand">
          {logoOk && (
            <img src="/logo.png" alt={`${info.name} logo`} onError={() => setLogoOk(false)} />
          )}
          <span>{info.name}</span>
        </a>
        <nav>
          <a href="#menu">Menu</a>
          <a href="#timings">Timings</a>
          <a href="#order">Contact</a>
        </nav>
        <a className="btn wa small" href={whatsappLink()} target="_blank" rel="noreferrer">
          <WhatsAppIcon size={18} /> <span>Order Now</span>
        </a>
      </div>
    </header>
  )
}
