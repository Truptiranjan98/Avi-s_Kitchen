import { info, floatingDishes, whatsappLink } from '../data/menu'
import FloatingDish from './FloatingDish'
import WhatsAppIcon from './WhatsAppIcon'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <span className="blob b1" />
      <span className="blob b2" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="badge">🏠 Homemade · Fresh · Made with love</span>
          <p className="script">Good Food, Good Mood ♡</p>
          <h1>
            Avi's <span>Home Kitchen</span>
          </h1>
          <p className="lead">
            Comfort food cooked fresh every day — from soft bhakari and shev bhaji to
            rich chicken handi. Just like ghar ka khana.
          </p>
          <div className="hero-actions">
            <a className="btn wa" href={whatsappLink()} target="_blank" rel="noreferrer">
              <WhatsAppIcon /> Order on WhatsApp
            </a>
            <a className="btn ghost" href="#menu">
              View Menu
            </a>
          </div>
          <ul className="hero-stats">
            <li><strong>100%</strong> Homemade</li>
            <li><strong>Fresh</strong> Daily</li>
            <li><strong>Swiggy</strong> Available</li>
          </ul>
        </div>

        <div className="stage" aria-label="Popular dishes">
          {floatingDishes.map((d, i) => (
            <FloatingDish key={d.name} dish={d} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
