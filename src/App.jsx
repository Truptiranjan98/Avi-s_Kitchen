import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import Footer from './components/Footer'
import WhatsAppIcon from './components/WhatsAppIcon'
import { sections, whatsappLink } from './data/menu'

export default function App() {
  const [active, setActive] = useState('all')
  const shown = active === 'all' ? sections : sections.filter((s) => s.id === active)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="menu" className="container menu">
          <p className="eyebrow">Fresh every day</p>
          <h2>Our Menu</h2>

          <div className="tabs" role="tablist">
            {[{ id: 'all', title: 'All', emoji: '✨' }, ...sections].map((s) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={active === s.id}
                className={active === s.id ? 'tab active' : 'tab'}
                onClick={() => setActive(s.id)}
              >
                {s.emoji} {s.title}
              </button>
            ))}
          </div>

          <div className="grid" key={active}>
            {shown.map((s, i) => (
              <MenuSection key={s.id} section={s} index={i} />
            ))}
          </div>
        </section>
      </main>
      <Footer />

      <a
        className="wa-fab"
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={30} />
      </a>
    </>
  )
}
