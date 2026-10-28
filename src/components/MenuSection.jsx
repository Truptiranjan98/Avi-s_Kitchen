import useReveal from '../hooks/useReveal'
import { whatsappLink } from '../data/menu'
import WhatsAppIcon from './WhatsAppIcon'

export default function MenuSection({ section, index }) {
  const { title, emoji, color, diet, image, items } = section
  const [ref, visible] = useReveal()

  return (
    <article
      ref={ref}
      className={`card ${color} reveal ${visible ? 'in' : ''}`}
      style={{ '--d': `${(index % 2) * 90}ms` }}
    >
      <div className="card-head">
        <h3><span className="card-emoji">{emoji}</span> {title}</h3>
        {diet && <i className={`diet ${diet}`} title={diet === 'veg' ? 'Vegetarian' : 'Non-vegetarian'} />}
      </div>

      {image && (
        <div className="card-photo">
          <img
            src={image}
            alt={title}
            loading="lazy"
            onError={(e) => (e.currentTarget.parentElement.style.display = 'none')}
          />
        </div>
      )}

      <ul>
        {items.map((it) => (
          <li key={it.name}>
            <span className="item-name">
              {it.isNew && <b className="new">NEW</b>}
              {it.name}
              {it.note && <small> ({it.note})</small>}
            </span>
            <span className="dots" />
            <span className="price">₹{it.price}</span>
            <a
              className="order-mini"
              href={whatsappLink(`${it.name} (₹${it.price})`)}
              target="_blank"
              rel="noreferrer"
              aria-label={`Order ${it.name} on WhatsApp`}
              title="Order on WhatsApp"
            >
              <WhatsAppIcon size={16} />
            </a>
          </li>
        ))}
      </ul>
    </article>
  )
}
