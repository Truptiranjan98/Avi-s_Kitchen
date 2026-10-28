import { useState } from 'react'
import { whatsappLink } from '../data/menu'

export default function FloatingDish({ dish, index }) {
  const [photoOk, setPhotoOk] = useState(true)
  return (
    <a
      className="dish"
      style={{ '--i': index }}
      href={whatsappLink(`${dish.name} (₹${dish.price})`)}
      target="_blank"
      rel="noreferrer"
      aria-label={`Order ${dish.name} on WhatsApp`}
    >
      <div className="dish-float">
        <div className="dish-plate">
          {photoOk && (
            <img src={dish.photo} alt={dish.name} onError={() => setPhotoOk(false)} />
          )}
          {!photoOk && <span className="dish-emoji">{dish.emoji}</span>}
        </div>
        {dish.isNew && <b className="new dish-new">NEW</b>}
        <div className="dish-tag">
          <strong>{dish.name}</strong>
          <span>₹{dish.price}</span>
        </div>
      </div>
    </a>
  )
}
