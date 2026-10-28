import { info, whatsappLink } from '../data/menu'
import useReveal from '../hooks/useReveal'
import WhatsAppIcon from './WhatsAppIcon'

export default function Footer() {
  const [ref, visible] = useReveal()
  return (
    <>
      <section ref={ref} className={`info container reveal ${visible ? 'in' : ''}`}>
        <div className="timings" id="timings">
          <h3>🕒 Opening Hours</h3>
          {info.timings.map((t) => (
            <div className="time-row" key={t.days}>
              <span>{t.days}</span>
              <strong>{t.hours}</strong>
            </div>
          ))}
        </div>

        <div className="order" id="order">
          <p className="script">Hungry? Order Now</p>
          <a className="phone" href={`tel:${info.phone}`}>📞 {info.phone}</a>
          <div className="order-actions">
            <a className="btn wa" href={whatsappLink()} target="_blank" rel="noreferrer">
              <WhatsAppIcon /> WhatsApp Us
            </a>
            <a className="btn swiggy" href={info.swiggyUrl} target="_blank" rel="noreferrer">
              Order on Swiggy
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <img className="footer-logo" src="/logo-large.png" alt={`${info.name} logo`} loading="lazy" />
        <p className="script">Thank you for your support ♥</p>
        <small>© {new Date().getFullYear()} {info.name}. All rights reserved.</small>
      </footer>
    </>
  )
}
