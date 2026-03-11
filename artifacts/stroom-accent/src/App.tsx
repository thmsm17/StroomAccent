import { useState, useEffect } from "react";

const reviews = [
  {
    name: "Thomas V.",
    rating: 5,
    text: "Zeer vakkundig en vriendelijk geholpen. Snel ter plaatse en het werk was netjes afgewerkt. Absoluut een aanrader!",
  },
  {
    name: "Lisa M.",
    rating: 5,
    text: "Prima service, duidelijke communicatie en een eerlijke prijs. Ik ga zeker terug!",
  },
  {
    name: "Mark B.",
    rating: 5,
    text: "Heel professioneel en snel geregeld. De monteur legde alles goed uit en liet alles netjes achter.",
  },
  {
    name: "Sandra K.",
    rating: 5,
    text: "Uitstekende ervaring! Probleem snel opgelost, vriendelijk personeel en scherpe prijs.",
  },
  {
    name: "Jan de V.",
    rating: 5,
    text: "Fijn bedrijf, kwamen snel langs bij een storing. Vakkundig werk voor een goede prijs.",
  },
];

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Elektrische installaties",
    desc: "Complete elektrische installaties voor nieuwbouw en bestaande woningen, vakkundig uitgevoerd.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Groepenkast vervangen",
    desc: "Verouderde zekeringkast vervangen of uitbreiden? Wij zorgen voor een veilige en moderne installatie.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: "Stopcontacten & schakelaars",
    desc: "Plaatsen en vervangen van stopcontacten, schakelaars en randapparatuur op elke gewenste locatie.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "LED-verlichting",
    desc: "Energiezuinige LED-verlichting installeren voor woning, kantoor of bedrijfsruimte. Mooi en duurzaam.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Storingsservice",
    desc: "Elektrische storing? Wij reageren snel en lossen het probleem deskundig op, ook bij spoedgevallen.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Nieuwbouw & renovatie",
    desc: "Van nieuwbouw tot volledige renovatie: wij begeleiden uw project van begin tot eind.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ naam: "", email: "", telefoon: "", bericht: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ naam: "", email: "", telefoon: "", bericht: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Diensten", href: "#diensten" },
    { label: "Over Ons", href: "#over-ons" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className={`font-bold text-lg transition-colors ${scrolled ? "text-foreground" : "text-white"}`}>
                Stroom Accent
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    scrolled ? "text-foreground" : "text-white/90"
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="tel:0681775168"
                className="ml-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Bel ons
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-b border-border shadow-lg">
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 px-3 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="tel:0681775168"
                className="mt-2 py-2 px-3 rounded-lg bg-primary text-white text-sm font-semibold text-center"
              >
                Bel ons: 0681775168
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Hero background image */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/50" />
        {/* Orange accent overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: "linear-gradient(135deg, hsl(215 50% 20% / 0.6) 0%, transparent 60%)" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-orange-300">Erkend elektricien</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Uw betrouwbare{" "}
            <span style={{ color: "hsl(28 90% 60%)" }}>elektricien</span>
            <br />
            in Grubbenvorst en omgeving
          </h1>

          <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Van groepenkast tot volledige installatie — Stroom Accent staat voor u klaar. Vakkundig, snel en met oog voor detail.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0681775168"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-white font-semibold text-base hover:opacity-90 transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Bel ons: 0681775168
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 text-white font-semibold text-base hover:bg-white/15 transition-all border border-white/20"
            >
              Stuur een bericht
            </a>
          </div>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Snel en betrouwbaar
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Eerlijke prijzen
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Netjes achtergelaten
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* DIENSTEN */}
      <section id="diensten" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Wat wij doen</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Onze diensten</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Stroom Accent biedt een breed scala aan elektrotechnische diensten voor particulieren en bedrijven.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-card border border-card-border hover:border-primary/40 hover:shadow-md transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVER ONS */}
      <section id="over-ons" className="py-20 bg-muted/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Over ons</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
                Uw lokale elektricien met ervaring
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Stroom Accent is uw vertrouwde elektrotechnisch vakbedrijf in Grubbenvorst en de regio. Wij zijn gespecialiseerd in zowel particuliere als zakelijke elektrotechnische werkzaamheden.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Of het nu gaat om het vervangen van een verouderde groepenkast, het aanleggen van een complete elektrische installatie of het oplossen van een storing — wij staan voor u klaar. Kwaliteit, veiligheid en klanttevredenheid staan bij ons altijd voorop.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Vakkundig", sub: "Erkend installateur" },
                  { label: "Snel", sub: "Spoedservice mogelijk" },
                  { label: "Betrouwbaar", sub: "Transparante prijzen" },
                  { label: "Netjes", sub: "Schone oplevering" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-primary/15 text-primary flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{item.label}</div>
                      <div className="text-muted-foreground text-xs">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden h-80 lg:h-96 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, hsl(215 40% 18%), hsl(215 35% 12%))" }}
              >
                <div className="text-center text-white/80 p-8">
                  <div className="w-20 h-20 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-white">Stroom Accent</div>
                  <div className="text-white/60 mt-1">Grubbenvorst & omgeving</div>
                  <div className="mt-6 flex flex-col gap-2 text-sm text-white/60">
                    <div className="flex items-center gap-2 justify-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Monseigneur Moorslaan 16, Grubbenvorst
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      0681775168
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">5★</div>
                  <div className="text-xs opacity-80">Google</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Google Reviews</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Wat onze klanten zeggen</h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <Stars count={5} />
              <span className="text-muted-foreground text-sm">5,0 op Google</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-card border border-card-border flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <Stars count={r.rating} />
                  <svg className="w-6 h-6 text-muted-foreground/30" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" />
                  </svg>
                </div>
                <p className="text-foreground text-sm leading-relaxed flex-1">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-primary font-semibold text-sm">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{r.name}</div>
                    <div className="text-xs text-muted-foreground">Google recensie</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-muted/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Neem contact op</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Contact</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Heeft u een vraag of wilt u een offerte? Neem gerust contact met ons op.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact info */}
            <div className="flex flex-col gap-6">
              <div className="p-6 rounded-2xl bg-card border border-card-border">
                <h3 className="font-semibold text-foreground mb-5">Contactgegevens</h3>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      icon: (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      ),
                      label: "Adres",
                      value: "Monseigneur Moorslaan 16\n5971 VJ Grubbenvorst",
                    },
                    {
                      icon: (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      ),
                      label: "Telefoon",
                      value: "0681775168",
                      href: "tel:0681775168",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {item.icon}
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-foreground font-medium hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-foreground font-medium whitespace-pre-line">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-card-border">
                <h3 className="font-semibold text-foreground mb-5">Openingstijden</h3>
                <div className="flex flex-col gap-2">
                  {[
                    { dag: "Maandag – Vrijdag", tijd: "08:00 – 18:00" },
                    { dag: "Zaterdag", tijd: "09:00 – 13:00" },
                    { dag: "Zondag", tijd: "Gesloten" },
                  ].map((t) => (
                    <div key={t.dag} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="text-sm text-foreground">{t.dag}</span>
                      <span className={`text-sm font-medium ${t.tijd === "Gesloten" ? "text-muted-foreground" : "text-primary"}`}>
                        {t.tijd}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="p-6 rounded-2xl bg-card border border-card-border">
              <h3 className="font-semibold text-foreground mb-5">Stuur een bericht</h3>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-foreground">Bericht verzonden!</h4>
                  <p className="text-muted-foreground text-sm">We nemen zo snel mogelijk contact met u op.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Naam *</label>
                      <input
                        type="text"
                        required
                        value={formData.naam}
                        onChange={(e) => setFormData({ ...formData, naam: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="Uw naam"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Telefoon</label>
                      <input
                        type="tel"
                        value={formData.telefoon}
                        onChange={(e) => setFormData({ ...formData, telefoon: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="Uw telefoonnummer"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">E-mailadres *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="uw@email.nl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Bericht *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.bericht}
                      onChange={(e) => setFormData({ ...formData, bericht: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                      placeholder="Beschrijf uw vraag of verzoek..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    Verzenden
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-10 text-white/70"
        style={{ background: "linear-gradient(135deg, hsl(215 40% 15%), hsl(215 35% 10%))" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-bold text-white">Stroom Accent</span>
            </div>
            <div className="text-sm text-center">
              Monseigneur Moorslaan 16, 5971 VJ Grubbenvorst &nbsp;·&nbsp;{" "}
              <a href="tel:0681775168" className="hover:text-primary transition-colors">0681775168</a>
            </div>
            <div className="text-xs text-white/40">
              © {new Date().getFullYear()} Stroom Accent. Alle rechten voorbehouden.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
