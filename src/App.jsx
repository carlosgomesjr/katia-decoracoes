import { useRef } from 'react'

const whatsappUrl =
  'https://wa.me/5521973232269?text=Ola%2C%20vim%20pelo%20site%20da%20Conceito%20Decor%20e%20quero%20solicitar%20um%20orcamento.'

const portfolio = [
  {
    image: '/assets/portfolio-6.png',
    title: 'Quartos com acabamento sob medida',
    label: 'Papel de parede',
  },
  {
    image: '/assets/portfolio-1.png',
    title: 'Ambientes elegantes e funcionais',
    label: 'Cortinas',
  },
  {
    image: '/assets/portfolio-4.png',
    title: 'Texturas para projetos autorais',
    label: 'Revestimentos',
  },
  {
    image: '/assets/portfolio-5.png',
    title: 'Conforto visual para alto padrão',
    label: 'Persianas',
  },
  {
    image: '/assets/portfolio-2.png',
    title: 'Composições acolhedoras para a casa',
    label: 'Ambientes',
  },
]

const services = [
  {
    title: 'Cortinas sob medida',
    copy: 'Tecidos, caimentos e soluções pensadas para valorizar salas, quartos e espaços integrados.',
  },
  {
    title: 'Persianas premium',
    copy: 'Controle de luz, privacidade e acabamento limpo para residências, escritórios e projetos de arquitetura.',
  },
  {
    title: 'Papéis de parede',
    copy: 'Curadoria de texturas, estampas e composições para transformar ambientes com personalidade.',
  },
]

const testimonials = [
  {
    name: 'Anna Paula Buy',
    quote:
      'Fiz todos os cômodos da minha casa com eles. A Cyndi é muito cuidadosa e traz todos os mostruários para o seu ambiente.',
  },
  {
    name: 'Rayana Lou',
    quote:
      'A Cyndi atende muito bem, com horário exclusivo e tecidos de altíssima qualidade. Recomendo!',
  },
  {
    name: 'Marcio Bressan',
    quote:
      'Excelente. Recomendo. Bom gosto e eficiência, inclusive no pós-venda.',
  },
  {
    name: 'Glaucia Pereira dos Santos Bueno',
    quote:
      'Atendimento de excelência, ambiente confortável, produtos de qualidade e pontualidade na entrega.',
  },
  {
    name: 'Mara Coimbra Ladeira Duayer',
    quote:
      'Atendimento excepcional. Nos ajudou muito. Material excelente, as cortinas ficaram lindas.',
  },
  {
    name: 'Henry Thompson',
    quote:
      'Excelente produto e qualidade de serviço, atendimento humanizado e muito ágil.',
  },
]

const faqs = [
  {
    question: 'A Conceito Decor atende projetos residenciais de alto padrão?',
    answer:
      'Sim. A proposta é conduzir a escolha dos materiais com curadoria, visita ao ambiente e orientação para cada detalhe do projeto.',
  },
  {
    question: 'O atendimento pode ser feito com mostruários no local?',
    answer:
      'Sim. A seleção pode ser apresentada no próprio ambiente para facilitar a escolha de tecidos, texturas, cores e acabamentos.',
  },
  {
    question: 'O site já pode receber pedidos de orçamento?',
    answer:
      'Sim. Os botões foram pensados para levar o cliente direto ao WhatsApp e podem ser ajustados com o número oficial da empresa.',
  },
]

function App() {
  return (
    <main className="bg-[#f5f8fb] text-[#1f1a17]">
      <Hero />
      <section className="bg-[#eef1f6] px-5 py-4 text-center text-sm font-medium text-[#6e4b34] md:text-base">
        Desde 2017 vestindo casas de alto padrão no Rio de Janeiro com cortinas,
        persianas e papéis de parede.
      </section>
      <Services />
      <Portfolio />
      <CeoSection />
      <Process />
      <Testimonials />
      <Faq />
      <Contact />
    </main>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1f1a17] text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/hero-video-mobile.mp4" media="(max-width: 767px)" type="video/mp4" />
        <source src="/assets/hero-video-muted.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,13,10,0.90),rgba(18,13,10,0.54),rgba(18,13,10,0.20))]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(18,13,10,0.62),rgba(18,13,10,0.05)_42%,rgba(18,13,10,0.50))]" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        <a href="#inicio" aria-label="Conceito Decor">
          <img className="h-12 w-auto mix-blend-screen md:h-14" src="/assets/logo.png" alt="Conceito Decor" />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-white/82 md:flex">
          <a className="hover:text-[#cb9463]" href="#servicos">
            Serviços
          </a>
          <a className="hover:text-[#cb9463]" href="#portfolio">
            Portfólio
          </a>
          <a className="hover:text-[#cb9463]" href="#sobre">
            Sobre
          </a>
          <a className="hover:text-[#cb9463]" href="#depoimentos">
            Depoimentos
          </a>
        </nav>
        <a
          className="rounded-full bg-[#cb9463] px-5 py-3 text-sm font-semibold text-[#1f1a17] shadow-lg shadow-black/20 transition hover:bg-[#f0bb87]"
          href={whatsappUrl}
        >
          Orçamento
        </a>
      </header>

      <div id="inicio" className="relative z-10 mx-auto flex min-h-[calc(100vh-92px)] max-w-7xl items-end px-5 pb-16 pt-16 md:px-8 md:pb-20">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-white/22 bg-white/10 px-4 py-2 text-sm font-medium text-white/88 backdrop-blur">
            Cortinas, persianas e papéis de parede em Niterói e Rio de Janeiro
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Ambientes de alto padrão com acabamento sob medida.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
            A Conceito Decor combina curadoria de materiais, atendimento
            humanizado e instalação cuidadosa para vestir cada ambiente com
            conforto, elegância e personalidade.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="rounded-full bg-[#cb9463] px-7 py-4 text-center font-semibold text-[#1f1a17] shadow-xl shadow-black/20 transition hover:bg-[#f0bb87]"
              href={whatsappUrl}
            >
              Solicitar orçamento
            </a>
            <a
              className="rounded-full border border-white/34 bg-white/10 px-7 py-4 text-center font-semibold text-white backdrop-blur transition hover:bg-white/18"
              href="#portfolio"
            >
              Ver ambientes
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="servicos" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-[#904f20]">Serviços</p>
            <h2 className="mt-3 max-w-xl text-4xl font-semibold leading-tight text-[#1f1a17] md:text-5xl">
              Soluções completas para vestir o ambiente inteiro.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#665b54]">
            Da escolha do tecido à instalação, cada projeto recebe uma leitura
            técnica e estética para equilibrar luz, privacidade, textura e
            sofisticação.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <article
              className="border border-[#d9dfe8] bg-white p-7 shadow-sm"
              key={service.title}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef1f6] text-sm font-semibold text-[#904f20]">
                0{index + 1}
              </span>
              <h3 className="mt-8 text-2xl font-semibold text-[#1f1a17]">{service.title}</h3>
              <p className="mt-4 leading-7 text-[#665b54]">{service.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#1f1a17] px-5 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-[#cb9463]">Portfólio</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
              Projetos que mostram textura, conforto e bom gosto.
            </h2>
          </div>
          <a
            className="w-fit rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            href="https://www.instagram.com/conceitodecoroficial/"
            target="_blank"
            rel="noreferrer"
          >
            Ver Instagram
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {portfolio.map((item, index) => (
            <article
              className={`group relative min-h-[360px] overflow-hidden bg-[#2c241f] ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
              key={item.title}
            >
              <img
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                src={item.image}
                alt={item.title}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.74))]" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="mb-3 text-sm font-semibold text-[#f0bb87]">{item.label}</p>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CeoSection() {
  return (
    <section id="sobre" className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.92fr_1.08fr] md:items-center">
        <div className="relative">
          <div className="absolute -left-4 -top-4 hidden h-full w-full border border-[#cb9463]/40 md:block" />
          <img
            className="relative h-[620px] w-full object-cover"
            src="/assets/ceo.png"
            alt="Cyndi, CEO da Conceito Decor"
          />
        </div>
        <div className="md:pl-8">
          <p className="text-sm font-semibold uppercase text-[#904f20]">A frente da Conceito Decor</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight text-[#1f1a17] md:text-5xl">
            Cyndi conduz cada projeto com curadoria, cuidado e presença.
          </h2>
          <div className="mt-7 space-y-5 text-lg leading-8 text-[#665b54]">
            <p>
              A Conceito Decor nasceu em 2017 com uma proposta clara: transformar
              casas em ambientes mais acolhedores, elegantes e funcionais por
              meio de cortinas, persianas e papéis de parede escolhidos sob
              medida.
            </p>
            <p>
              A forma de trabalho da Cyndi valoriza o atendimento consultivo.
              Os mostruários podem ser levados ao próprio ambiente, permitindo
              comparar tecidos, texturas e tons com a luz real da casa antes da
              decisão final.
            </p>
            <p>
              Os depoimentos reforçam o que sustenta a marca: horário exclusivo,
              atenção aos detalhes, materiais de qualidade, cumprimento de prazo
              e acompanhamento no pós-venda.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Metric value="2017" label="início da trajetória" />
            <Metric value="RJ" label="projetos em Niterói e Rio" />
            <Metric value="360°" label="atendimento do projeto ao pós-venda" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Metric({ value, label }) {
  return (
    <div className="border border-[#e3d6cb] bg-[#f5f8fb] p-5">
      <strong className="block text-3xl font-semibold text-[#904f20]">{value}</strong>
      <span className="mt-2 block text-sm leading-5 text-[#665b54]">{label}</span>
    </div>
  )
}

function Process() {
  const steps = ['Briefing do ambiente', 'Curadoria de materiais', 'Medição e projeto', 'Instalação e pós-venda']

  return (
    <section className="bg-[#eef1f6] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-[#904f20]">Como funciona</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
            Um processo pensado para reduzir dúvidas e evitar escolhas no escuro.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <div className="bg-white p-6 shadow-sm" key={step}>
              <span className="text-sm font-semibold text-[#904f20]">Etapa {index + 1}</span>
              <h3 className="mt-6 text-2xl font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const carouselRef = useRef(null)
  const dragState = useRef({ active: false, startX: 0, scrollLeft: 0 })

  function handlePointerDown(event) {
    if (event.pointerType !== 'mouse' || !carouselRef.current) return

    event.preventDefault()
    dragState.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: carouselRef.current.scrollLeft,
    }
    carouselRef.current.setPointerCapture(event.pointerId)
  }

  function handlePointerMove(event) {
    if (!dragState.current.active || !carouselRef.current) return

    const dragDistance = event.clientX - dragState.current.startX
    carouselRef.current.scrollLeft = dragState.current.scrollLeft - dragDistance
  }

  function handlePointerUp(event) {
    if (!carouselRef.current) return

    dragState.current.active = false
    if (carouselRef.current.hasPointerCapture(event.pointerId)) {
      carouselRef.current.releasePointerCapture(event.pointerId)
    }
  }

  return (
    <section id="depoimentos" className="overflow-hidden bg-[#c7bdb7] px-5 py-20 text-[#1f1a17] md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-[#6e4b34]">Depoimentos</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
              Experiencias marcadas por cuidado, prazo e acabamento.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#3f3834]/78 md:text-lg">
            Avaliacoes reais reunidas em uma leitura mais fluida para mostrar o
            que aparece com frequencia no atendimento: presenca, bom gosto e
            atencao aos detalhes.
          </p>
        </div>

        <div
          ref={carouselRef}
          className="no-scrollbar mt-10 -mx-5 flex cursor-grab gap-6 overflow-x-auto px-5 pb-2 select-none active:cursor-grabbing md:-mx-8 md:gap-7 md:px-8"
          onPointerDown={handlePointerDown}
          onPointerLeave={handlePointerUp}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          {testimonials.map((testimonial) => (
            <article
              className="flex min-h-[250px] w-[72vw] shrink-0 flex-col rounded-[36px] border border-white/60 bg-[#e6dfdc] px-6 py-5 text-center shadow-md shadow-[#4d403a]/8 sm:w-[330px] md:w-[350px]"
              key={testimonial.name}
            >
              <div className="flex justify-center">
                <span className="text-4xl leading-none text-white/72">"</span>
              </div>
              <p className="mt-5 flex-1 text-[15px] leading-7 text-[#2f2926]/86">"{testimonial.quote}"</p>
              <div className="mt-4 flex justify-center gap-1.5 text-white" aria-label="5 estrelas">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span className="text-base drop-shadow-sm" key={index}>
                    {'\u2605'}
                  </span>
                ))}
              </div>
              <div className="mt-5 border-t border-white/34 pt-4">
                <h3 className="font-semibold text-[#1f1a17]">{testimonial.name}</h3>
                <p className="mt-1 text-sm text-[#4d403a]/58">Cliente Conceito Decor</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-sm font-semibold uppercase text-[#904f20]">FAQ</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight">Perguntas frequentes</h2>
        </div>
        <div className="divide-y divide-[#d9dfe8] border-y border-[#d9dfe8]">
          {faqs.map((faq) => (
            <details className="group py-6" key={faq.question}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-semibold">
                {faq.question}
                <span className="text-3xl font-light text-[#904f20] group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-3xl leading-7 text-[#665b54]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contato" className="bg-[#1f1a17] px-5 py-14 text-white md:px-8 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase text-[#cb9463]">Contato</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Quer transformar seu ambiente com uma escolha mais segura?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/76 md:text-lg">
            Solicite um atendimento e receba orientação para escolher cortinas,
            persianas ou papéis de parede alinhados ao seu projeto.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              className="rounded-full bg-[#cb9463] px-7 py-4 text-center font-semibold text-[#1f1a17] transition hover:bg-[#f0bb87]"
              href={whatsappUrl}
            >
              Chamar no WhatsApp
            </a>
            <a
              className="rounded-full border border-white/25 px-7 py-4 text-center font-semibold transition hover:bg-white/10"
              href="https://maps.app.goo.gl/eMqV1uYUCpJgKTVq9"
              target="_blank"
              rel="noreferrer"
            >
              Ver no Google Maps
            </a>
          </div>
        </div>
        <div className="border border-white/14 bg-white/8 p-5 backdrop-blur md:p-6">
          <img className="h-12 w-auto mix-blend-screen md:h-14" src="/assets/logo.png" alt="Conceito Decor" />
          <div className="mt-6 space-y-4 text-sm leading-6 text-white/78 md:text-base">
            <p>R. Dr. Oliveira Botelho, 9 - Sala 509 - São Francisco, Niterói - RJ, 24360-500</p>
            <iframe
              className="h-48 w-full border-0 md:h-56"
              title="Mapa da Conceito Decor em Niterói"
              src="https://www.google.com/maps?q=R.%20Dr.%20Oliveira%20Botelho%2C%209%20-%20Sala%20509%20-%20S%C3%A3o%20Francisco%2C%20Niter%C3%B3i%20-%20RJ%2C%2024360-500&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <p>Cortinas, persianas e papéis de parede para ambientes residenciais e comerciais.</p>
            <a
              className="inline-flex items-center gap-2 font-semibold text-[#f0bb87]"
              href="https://www.instagram.com/conceitodecoroficial/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="18" height="18" x="3" y="3" rx="5" />
                <circle cx="12" cy="12" r="3.5" />
                <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" stroke="none" />
              </svg>
              @conceitodecoroficial
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
