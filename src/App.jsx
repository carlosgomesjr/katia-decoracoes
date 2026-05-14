import { useEffect, useRef, useState } from 'react'

const whatsappUrl =
  'https://wa.me/5521980870051?text=Ola%2C%20vim%20pelo%20site%20da%20Katia%20Decoracoes%20e%20quero%20solicitar%20um%20orcamento.'

const instagramUrl = 'https://www.instagram.com/lojakatiadecoracoes/'
const facebookUrl = 'https://www.facebook.com/lojakatiadecoracoes'

const products = [
  {
    id: 'cortinas',
    title: 'Cortinas e persianas',
    meta: 'Sob medida / Fabricação própria / Manutenção',
    image: '/assets/katia/asset-02.jpg',
    gallery: ['/assets/katia/asset-09.jpg', '/assets/katia/asset-05.jpg', '/assets/katia/asset-02.jpg'],
    copy:
      'Cortinas feitas à mão por costureiras, persianas sob medida e orientação para controlar luz, privacidade e acabamento com elegância.',
    bullets: ['fabricação própria', 'medição no ambiente', 'manutenção e limpeza de persianas'],
  },
  {
    id: 'papeis',
    title: 'Papel de parede',
    meta: 'Estampas / Texturas / Aplicação',
    image: '/assets/katia/asset-24.jpg',
    gallery: ['/assets/katia/asset-24.jpg', '/assets/katia/asset-26.jpg', '/assets/katia/asset-28.jpg'],
    copy:
      'Revestimentos e estampas para dar personalidade a paredes de salas, quartos, lavabos e áreas comerciais sem uma reforma pesada.',
    bullets: ['texturas e estampas', 'aplicação especializada', 'transformação rápida'],
  },
  {
    id: 'tapetes',
    title: 'Tapetes',
    meta: 'Textura / Medida / Composição',
    image: '/assets/katia/asset-18.jpg',
    gallery: ['/assets/katia/asset-18.jpg', '/assets/katia/asset-20.jpg', '/assets/katia/asset-22.jpg'],
    copy:
      'Tapetes escolhidos para conectar móveis, cores e texturas do ambiente, com suporte consultivo para encontrar tamanho e composição ideais.',
    bullets: ['variedade de modelos', 'consultoria na escolha', 'ambientes mais confortáveis'],
  },
  {
    id: 'pisos',
    title: 'Pisos laminados',
    meta: 'Conforto / Acabamento / Renovação',
    image: '/assets/katia/asset-06.jpg',
    gallery: ['/assets/katia/asset-13.jpg', '/assets/katia/asset-15.jpg', '/assets/katia/asset-06.jpg'],
    copy:
      'Pisos para renovar salas, quartos e áreas internas com visual acolhedor, montagem cuidadosa e acabamento preparado para uso diário.',
    bullets: ['visual de madeira', 'obra mais limpa', 'acabamento durável'],
  },
  {
    id: 'vinilico',
    title: 'Piso vinílico',
    meta: 'PVC / Conforto térmico / Resistência à água',
    image: '/assets/katia/piso-vinilico-01.jpg',
    gallery: [
      '/assets/katia/piso-vinilico-01.jpg',
      '/assets/katia/piso-vinilico-02.jpg',
      '/assets/katia/piso-vinilico-03.jpg',
    ],
    copy:
      'Revestimento versátil e durável, ideal para reformas rápidas em ambientes internos, com conforto térmico e acústico, limpeza simples e visual que imita madeira ou pedra.',
    bullets: ['réguas, placas ou mantas', 'colado, clicado ou autocolante', 'indicado para áreas secas ou úmidas'],
  },
  {
    id: 'toldos',
    title: 'Toldos motorizados',
    meta: 'Proteção / Sombra / Motorização',
    image: '/assets/katia/asset-30.jpg',
    gallery: ['/assets/katia/asset-30.jpg', '/assets/katia/asset-32.jpg', '/assets/katia/asset-34.jpg'],
    copy:
      'Soluções para proteger, sombrear e valorizar áreas externas, com possibilidade de motorização para mais praticidade no dia a dia.',
    bullets: ['motorização', 'proteção solar', 'uso residencial e comercial'],
  },
]

const testimonials = [
  {
    name: 'Ronilce Motta',
    quote:
      'Loja linda. Ambiente sofisticado e de extremo bom gosto. Atendimento fabuloso, voltado a atender todas as expectativas e necessidades dos clientes.',
  },
  {
    name: 'Maria de Fátima Ribeiro Oliveira',
    quote:
      'Fui muito bem atendida pela Laura e pelo Sr. Augusto. Me deram toda a consultoria e suporte para que eu fizesse a escolha certa do tapete para minha sala.',
  },
  {
    name: 'Regina Perez',
    quote:
      'O atendimento na loja foi exemplar. A entrega e colocação do material foram feitas bem antes da data prevista.',
  },
  {
    name: 'Roberta Leite',
    quote:
      'Amei o design moderno e a combinação de cores do tapete. A loja tem produtos de ótima qualidade e atendimento impecável.',
  },
  {
    name: 'Verônica Barbalho',
    quote:
      'Atendimento espetacular! Prazo de entrega cumprido! Educação e gentileza dos entregadores e qualidade perfeita.',
  },
  {
    name: 'Hugo Lucas',
    quote:
      'Excelente atendimento. Minha família é cliente há anos e a qualidade dos materiais fornecidos são de alto nível e bom gosto.',
  },
  {
    name: 'Laina Gabriela Diniz',
    quote:
      'Atendimento incrível, muito atenciosos, educados, e recebi meu produto bem embalado, rápido e com muito carinho.',
  },
  {
    name: 'Natalia Marinho',
    quote: 'Loja maravilhosa, ótimo atendimento!',
  },
  {
    name: 'Tiago Moreira',
    quote:
      'Atendimento excelente! Equipe super atenciosa, prestativa e rápida nas respostas. Recomendo de olhos fechados!',
  },
  {
    name: 'Marcia Castro',
    quote:
      'Fui muito bem recebida e atendida pela vendedora, que me ajudou a escolher a cortina que ficaria melhor para o meu ambiente.',
  },
  {
    name: 'Gisele Baptista',
    quote:
      'Excelente trabalho de toda a equipe, pessoal da loja de Icaraí, colocador do piso e pessoal do setor de compras.',
  },
  {
    name: 'Eliane Liberal',
    quote:
      'Muito bem atendida e com muita presteza. A vendedora Juliana se prontificou a trazer a mercadoria pessoalmente na minha casa.',
  },
]

const stores = [
  {
    title: 'Loja Icaraí',
    address: 'R. Ator Paulo Gustavo, 217 - loja 103, Icaraí, Niterói - RJ',
    phone: '(21) 98087-0051',
    reviewUrl: 'https://share.google/VadGo4FGERlxaJJxk',
  },
  {
    title: 'Loja Icaraí',
    address: 'R. Gavião Peixoto, 71 - loja 2, Icaraí, Niterói - RJ',
    phone: '(21) 2717-2159',
    reviewUrl: 'https://share.google/RMK80tyjCM7RPVPvv',
  },
  {
    title: 'Loja Centro',
    address: 'R. José Clemente, 31, Centro, Niterói - RJ',
    phone: '(21) 2717-0062',
    reviewUrl: 'https://share.google/iZSee0riIRzASL6NI',
  },
]

const instagramPosts = [
  'https://www.instagram.com/p/DXE8e9rkTlr/',
  'https://www.instagram.com/p/DXxaAQvRFOf/',
  'https://www.instagram.com/p/DWzVhniEUxo/',
]

const heroImages = [
  '/assets/katia/asset-02.jpg',
  '/assets/katia/asset-15.jpg',
  '/assets/katia/asset-18.jpg',
]

function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal')
    const revealGroups = document.querySelectorAll('[data-reveal-group]')

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
      revealGroups.forEach((group) => {
        group.querySelectorAll('.product-card-reveal, .process-card-reveal, .testimonial-card-reveal').forEach((item) => {
          item.classList.add('is-visible')
        })
      })
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )

    revealItems.forEach((item) => observer.observe(item))

    const groupObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll('.product-card-reveal, .process-card-reveal, .testimonial-card-reveal')
              .forEach((item) => item.classList.add('is-visible'))
            groupObserver.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -16% 0px', threshold: 0.08 },
    )

    revealGroups.forEach((group) => groupObserver.observe(group))

    return () => {
      observer.disconnect()
      groupObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    const scriptId = 'instagram-embed-script'
    const instagramSection = document.getElementById('instagram')
    if (!instagramSection) return undefined

    const processEmbeds = () => window.instgrm?.Embeds?.process()

    const loadInstagramEmbeds = () => {
      if (window.instgrm?.Embeds) {
        processEmbeds()
        return
      }

      let script = document.getElementById(scriptId)

      if (!script) {
        script = document.createElement('script')
        script.id = scriptId
        script.src = 'https://www.instagram.com/embed.js'
        script.async = true
        script.addEventListener('load', processEmbeds, { once: true })
        document.body.appendChild(script)
        return
      }

      script.addEventListener('load', processEmbeds, { once: true })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadInstagramEmbeds()
          observer.disconnect()
        }
      },
      { rootMargin: '500px 0px', threshold: 0 },
    )

    observer.observe(instagramSection)

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Products />
        <Process />
        <Testimonials />
        <InstagramSection />
        <About />
        <Contact />
      </main>
      <Footer />
      <a className="floating-whatsapp" href={whatsappUrl} aria-label="Chamar a Katia Decorações no WhatsApp">
        <Icon name="whatsapp" />
      </a>
    </>
  )
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Katia Decorações">
        <img src="/assets/katia/logo-katia.png" alt="Katia Decorações" width="150" height="60" />
      </a>
      <nav className="main-nav" aria-label="Navegação principal">
        <a className="mobile-nav-brand" href="#inicio" aria-label="Início">
          <img src="/assets/katia/logo-katia.png" alt="" width="72" height="29" />
        </a>
        <a className="nav-link nav-link-products" href="#produtos">Produtos</a>
        <a className="nav-link nav-link-process" href="#processo">Processo</a>
        <a className="nav-link nav-link-testimonials" href="#depoimentos">Depoimentos</a>
        <a className="nav-link nav-link-instagram" href="#instagram">Instagram</a>
        <a className="nav-link nav-link-addresses" href="#contato">Endereços</a>
      </nav>
      <div className="header-actions">
        <a className="icon-link" href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook da Katia Decorações">
          <Icon name="facebook" />
        </a>
        <a className="icon-link" href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram da Katia Decorações">
          <Icon name="instagram" />
        </a>
        <a className="button button-small" href={whatsappUrl}>
          WhatsApp
        </a>
      </div>
    </header>
  )
}

function Hero() {
  const [activeHeroImage, setActiveHeroImage] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHeroImage((current) => (current + 1) % heroImages.length)
    }, 8000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-media" aria-hidden="true">
        {heroImages.map((image, index) => (
          <img
            className={activeHeroImage === index ? 'is-active' : ''}
            src={image}
            alt=""
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding={index === 0 ? 'sync' : 'async'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
            key={image}
          />
        ))}
      </div>
      <div className="hero-overlay" />
      <div className="hero-content reveal">
        <p className="eyebrow">Mais de 50 anos em decoração</p>
        <h1 className="hero-title">
          <span className="hero-title-main">KATIA</span>
          <span className="hero-title-sub">DECORAÇÕES</span>
        </h1>
        <p className="hero-copy">
          Cortinas, persianas, pisos, tapetes, papéis de parede e toldos sob medida para ambientes mais elegantes,
          confortáveis e bem acabados em Niterói.
        </p>
        <div className="hero-actions">
          <a className="button" href={whatsappUrl}>
            Solicitar orçamento
          </a>
          <a className="button button-ghost" href="#produtos">
            Ver produtos
          </a>
        </div>
      </div>
    </section>
  )
}

function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Diferenciais da Katia Decorações">
      <Metric value="50+" label="anos de mercado" delay="0ms" />
      <Metric value="3" label="lojas em Niterói" delay="90ms" />
      <Metric value="Sob medida" label="projetos com medição" delay="180ms" />
      <Metric value="Própria" label="fabricação de cortinas" delay="270ms" />
    </section>
  )
}

function Metric({ value, label, delay }) {
  return (
    <div className="metric reveal" style={{ '--reveal-delay': delay }}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  )
}

function About() {
  return (
    <section className="section about-section">
      <div className="about-lifestyle-grid">
        <div className="about-lifestyle-copy reveal" style={{ '--reveal-delay': '80ms' }}>
          <p className="eyebrow about-lifestyle-eyebrow">Sobre a Katia Decorações</p>
          <h2 className="section-title-split about-lifestyle-title">
            Tradição e elegância<br />
            <span>no acabamento.</span>
          </h2>
          <div className="about-lifestyle-text">
            <p>
              Há mais de 50 anos, a Katia Decorações ajuda clientes a transformar ambientes com cortinas, persianas,
              tapetes, pisos, papéis de parede e toldos, sempre com atenção à escolha certa para cada casa ou empresa.
            </p>
            <p>
              A marca combina variedade de materiais, atendimento próximo e fabricação própria de cortinas, feitas com
              cuidado artesanal por costureiras e pensadas para entregar beleza, conforto e funcionalidade.
            </p>
            <p>
              O compromisso está nos detalhes: orientar bem, respeitar o estilo de cada ambiente e entregar soluções com
              bom gosto, durabilidade e acabamento à altura da expectativa do cliente.
            </p>
          </div>
        </div>
        <div className="about-lifestyle-visual reveal" style={{ '--reveal-delay': '160ms' }}>
          <img src="/assets/katia/fachada.webp" alt="Fachada da loja Katia Decorações" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  )
}

function Products() {
  const [lightbox, setLightbox] = useState(null)
  const productRows = [
    [0, 1, 2],
    [3, 4, 5],
  ]

  return (
    <section id="produtos" className="section products-section">
      <div className="products-shell">
        <div className="products-head reveal">
          <h2 className="section-title-split">
            Excelência, capricho e bom gosto:<br />
            <span>beleza sob medida para sua casa.</span>
          </h2>
          <p>
            Uma curadoria completa de acabamentos para vestir ambientes com conforto, textura e beleza no uso de todos
            os dias.
          </p>
        </div>

        <div className="products-catalog-grid">
          {productRows.map((row) => (
            <div className="products-catalog-row" data-reveal-group key={row.join('-')}>
              {row.map((productIndex, rowIndex) => (
                <ProductCard
                  product={products[productIndex]}
                  index={productIndex + 1}
                  revealDelay={`${rowIndex * 140}ms`}
                  variant={rowIndex === 1 ? 'middle' : 'outer'}
                  onOpenLightbox={(slide) => setLightbox({ productIndex, slide })}
                  key={products[productIndex].id}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      {lightbox && (
        <ProductLightbox
          product={products[lightbox.productIndex]}
          slide={lightbox.slide}
          onChangeSlide={(slide) => setLightbox((current) => ({ ...current, slide }))}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  )
}

function ProductCard({ product, index, revealDelay, variant, onOpenLightbox }) {
  const productWhatsapp = `${whatsappUrl}&produto=${encodeURIComponent(product.title)}`
  const [slide, setSlide] = useState(0)
  const gallery = product.gallery ?? [product.image]

  function changeSlide(direction) {
    setSlide((current) => {
      const next = current + direction
      if (next < 0) return gallery.length - 1
      if (next >= gallery.length) return 0
      return next
    })
  }

  return (
    <article
      className={`product-catalog-card product-card-reveal ${variant === 'middle' ? 'is-middle' : 'is-outer'}`}
      style={{ '--reveal-delay': revealDelay }}
    >
      <div className="product-catalog-media">
        <button
          className="product-image-open"
          type="button"
          onClick={() => onOpenLightbox(slide)}
          aria-label={`Ampliar foto ${slide + 1} de ${product.title}`}
        >
          <img src={gallery[slide]} alt={`${product.title} - foto ${slide + 1}`} loading="lazy" decoding="async" />
        </button>
        <button
          className="product-carousel-control previous"
          type="button"
          onClick={() => changeSlide(-1)}
          aria-label={`Foto anterior de ${product.title}`}
        >
          <Icon name="arrowLeft" />
        </button>
        <button
          className="product-carousel-control next"
          type="button"
          onClick={() => changeSlide(1)}
          aria-label={`Próxima foto de ${product.title}`}
        >
          <Icon name="arrowRight" />
        </button>
        <div className="product-carousel-dots" aria-label={`Fotos de ${product.title}`}>
          {gallery.map((image, imageIndex) => (
            <button
              className={slide === imageIndex ? 'is-active' : ''}
              type="button"
              onClick={() => setSlide(imageIndex)}
              aria-label={`Ver foto ${imageIndex + 1} de ${product.title}`}
              key={image}
            />
          ))}
        </div>
      </div>
      <div className="product-catalog-body">
        <span className="product-catalog-index">{String(index).padStart(2, '0')}</span>
        <h3>{product.title}</h3>
        <p className="product-catalog-meta">{product.meta}</p>
        <p className="product-catalog-copy">{product.copy}</p>
        <ul>
          {product.bullets.map((bullet) => (
            <li key={bullet}>
              <Icon name="check" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <a className="product-catalog-link" href={productWhatsapp}>
          Conversar sobre {product.title.toLowerCase()}
          <Icon name="arrowRight" />
        </a>
      </div>
    </article>
  )
}

function ProductLightbox({ product, slide, onChangeSlide, onClose }) {
  const gallery = product.gallery ?? [product.image]

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') changeSlide(-1)
      if (event.key === 'ArrowRight') changeSlide(1)
    }

    document.body.classList.add('is-lightbox-open')
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('is-lightbox-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  })

  function changeSlide(direction) {
    const next = slide + direction
    if (next < 0) {
      onChangeSlide(gallery.length - 1)
      return
    }
    if (next >= gallery.length) {
      onChangeSlide(0)
      return
    }
    onChangeSlide(next)
  }

  return (
    <div className="product-lightbox" role="dialog" aria-modal="true" aria-label={`Galeria ampliada de ${product.title}`}>
      <button className="product-lightbox-backdrop" type="button" onClick={onClose} aria-label="Fechar galeria" />
      <div className="product-lightbox-panel">
        <div className="product-lightbox-top">
          <div>
            <span>{product.title}</span>
            <strong>
              {slide + 1} / {gallery.length}
            </strong>
          </div>
          <button className="product-lightbox-close" type="button" onClick={onClose} aria-label="Fechar galeria">
            <Icon name="close" />
          </button>
        </div>
        <div className="product-lightbox-media">
          <img src={gallery[slide]} alt={`${product.title} ampliado - foto ${slide + 1}`} />
          <button className="product-lightbox-nav previous" type="button" onClick={() => changeSlide(-1)} aria-label="Foto anterior">
            <Icon name="arrowLeft" />
          </button>
          <button className="product-lightbox-nav next" type="button" onClick={() => changeSlide(1)} aria-label="Próxima foto">
            <Icon name="arrowRight" />
          </button>
        </div>
        <div className="product-lightbox-dots">
          {gallery.map((image, imageIndex) => (
            <button
              className={slide === imageIndex ? 'is-active' : ''}
              type="button"
              onClick={() => onChangeSlide(imageIndex)}
              aria-label={`Ver foto ${imageIndex + 1} ampliada`}
              key={image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function Process() {
  const steps = [
    ['01', 'Atendimento', 'Conversa inicial para entender o ambiente, o estilo desejado e a necessidade do cliente.'],
    ['02', 'Escolha dos materiais', 'Apresentação de modelos, tecidos, cores, texturas e acabamentos para orientar a decisão.'],
    ['03', 'Produção sob medida', 'Cortinas, persianas e soluções preparadas com cuidado, conforme o produto escolhido.'],
    ['04', 'Entrega e instalação', 'Finalização do ambiente com atenção ao acabamento, ao prazo combinado e aos detalhes.'],
  ]

  return (
    <section id="processo" className="section process-section">
      <div className="section-heading reveal">
        <p className="eyebrow">Como funciona</p>
        <h2 className="section-title-split is-dark contact-title">
          Um processo direto para transformar a casa<br />
          <span>sem complicar a escolha.</span>
        </h2>
      </div>
      <div className="process-grid" data-reveal-group>
        {steps.map(([number, title, copy], index) => (
          <article className="process-step process-card-reveal" style={{ '--reveal-delay': `${index * 150}ms` }} key={title}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Testimonials() {
  const carouselRef = useRef(null)
  const dragState = useRef({ isDragging: false, startX: 0, scrollLeft: 0 })

  function scrollTestimonials(direction) {
    const carousel = carouselRef.current
    if (!carousel) return

    const firstCard = carousel.querySelector('.testimonial-card')
    const gap = Number.parseFloat(window.getComputedStyle(carousel).columnGap) || 0
    const distance = firstCard ? firstCard.getBoundingClientRect().width + gap : carousel.clientWidth * 0.8

    carousel.scrollBy({ left: direction * distance, behavior: 'smooth' })
  }

  function handlePointerDown(event) {
    const carousel = carouselRef.current
    if (!carousel) return

    dragState.current = {
      isDragging: true,
      startX: event.clientX,
      scrollLeft: carousel.scrollLeft,
    }
    carousel.classList.add('is-dragging')
    carousel.setPointerCapture(event.pointerId)
  }

  function handlePointerMove(event) {
    const carousel = carouselRef.current
    if (!carousel || !dragState.current.isDragging) return

    const distance = event.clientX - dragState.current.startX
    carousel.scrollLeft = dragState.current.scrollLeft - distance
  }

  function endDrag(event) {
    const carousel = carouselRef.current
    if (!carousel || !dragState.current.isDragging) return

    dragState.current.isDragging = false
    carousel.classList.remove('is-dragging')
    if (carousel.hasPointerCapture(event.pointerId)) {
      carousel.releasePointerCapture(event.pointerId)
    }
  }

  return (
    <section id="depoimentos" className="section testimonials-section">
      <div className="section-heading reveal">
        <p className="eyebrow">Depoimentos</p>
        <h2 className="section-title-split">
          Clientes destacam atendimento,<br />
          <span>prazo, qualidade e bom gosto.</span>
        </h2>
      </div>
      <div className="testimonial-carousel-shell">
        <button
          className="testimonial-carousel-arrow previous"
          type="button"
          onClick={() => scrollTestimonials(-1)}
          aria-label="Ver depoimentos anteriores"
        >
          <Icon name="arrowLeft" />
        </button>
        <div
          className="testimonial-carousel"
          data-reveal-group
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
          ref={carouselRef}
        >
          {testimonials.map((testimonial, index) => (
            <article
              className="testimonial-card testimonial-card-reveal"
              style={{ '--reveal-delay': `${index * 120}ms` }}
              key={testimonial.name}
            >
              <RatingStars />
              <p>"{testimonial.quote}"</p>
              <strong>{testimonial.name}</strong>
            </article>
          ))}
        </div>
        <button
          className="testimonial-carousel-arrow next"
          type="button"
          onClick={() => scrollTestimonials(1)}
          aria-label="Ver mais depoimentos"
        >
          <Icon name="arrowRight" />
        </button>
      </div>
    </section>
  )
}

function InstagramSection() {
  return (
    <section id="instagram" className="section instagram-section">
      <div className="section-heading reveal">
        <p className="eyebrow">Antes de pedir orçamento</p>
        <h2 className="section-title-split">
          Veja alguns detalhes<br />
          <span>que podem inspirar o seu projeto.</span>
        </h2>
        <p>
          Esses vídeos mostram possibilidades de produtos, estilos e acabamentos. Depois, a equipe ajuda você a adaptar
          a escolha para sua casa, medida e necessidade.
        </p>
      </div>
      <div className="instagram-grid">
        {instagramPosts.map((post, index) => (
          <div className="instagram-embed reveal" style={{ '--reveal-delay': `${index * 110}ms` }} key={post}>
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={post}
              data-instgrm-version="14"
            >
              <a href={post} target="_blank" rel="noreferrer">
                Ver video no Instagram
              </a>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contato" className="section contact-section">
      <div className="contact-cta reveal">
        <p className="eyebrow contact-eyebrow">Atendimento</p>
        <h2 className="section-title-split is-dark">
          Fale com a Katia Decorações<br />
          <span>
            e escolha o melhor<br />
            para o seu ambiente.
          </span>
        </h2>
        <div className="contact-actions">
          <a className="button" href={whatsappUrl}>
            Chamar no WhatsApp
          </a>
          <a className="button button-ghost-dark" href={instagramUrl} target="_blank" rel="noreferrer">
            Ver Instagram
          </a>
        </div>
      </div>
      <div className="stores-grid">
        {stores.map((store, index) => (
          <article className="store-card reveal" style={{ '--reveal-delay': `${index * 90}ms` }} key={`${store.title}-${store.address}`}>
            <div className="store-card-head">
              <h3>{store.title}</h3>
              <a className="google-review-link" href={store.reviewUrl} target="_blank" rel="noreferrer">
                <span>Avaliar no</span>
                <GoogleMark />
              </a>
            </div>
            <p>{store.address}</p>
            <div className="store-card-actions">
              <a href={`tel:${store.phone.replace(/\D/g, '')}`}>{store.phone}</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <img src="/assets/katia/logo-katia.png" alt="Katia Decorações" width="150" height="60" loading="lazy" decoding="async" />
      <div className="footer-links">
        <a href={facebookUrl} target="_blank" rel="noreferrer">
          Facebook
        </a>
        <a href={instagramUrl} target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href={whatsappUrl}>WhatsApp</a>
      </div>
    </footer>
  )
}

function RatingStars() {
  return (
    <div className="testimonial-rating" aria-label="Avaliação 5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, index) => (
        <Icon name="star" key={index} />
      ))}
    </div>
  )
}

function GoogleMark() {
  return (
    <svg className="google-mark" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 12.2h-8.1v3.05h4.6a4.76 4.76 0 0 1-1.93 2.28 5.78 5.78 0 0 1-3.07.79 6.32 6.32 0 1 1 4.37-10.9l2.18-2.1A9.28 9.28 0 1 0 21.2 12c0-.64-.06-1.13-.18-1.66Z" />
    </svg>
  )
}

function Icon({ name }) {
  const icons = {
    instagram: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.4" />
        <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
      </>
    ),
    facebook: (
      <path d="M14 8h2V4h-3c-3 0-5 2-5 5v2H6v4h2v5h4v-5h3l1-4h-4V9c0-.6.4-1 1-1h1Z" />
    ),
    whatsapp: (
      <path
        fill="currentColor"
        stroke="none"
        d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35ZM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88ZM20.89 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.05-8.42Z"
      />
    ),
    arrowLeft: <path d="m15 18-6-6 6-6" />,
    arrowRight: <path d="m9 6 6 6-6 6" />,
    check: <path d="m5 12 4 4L19 6" />,
    close: <path d="M18 6 6 18M6 6l12 12" />,
    star: (
      <path
        fill="currentColor"
        stroke="none"
        d="m12 2.2 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5L2.6 9l6.5-.9L12 2.2Z"
      />
    ),
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

export default App
