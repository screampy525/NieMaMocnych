"use client";
import { useState, useEffect, useRef } from "react";

export default function NieMaMocnychRestaurant() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in-section").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Dziękujemy za rezerwację! Skontaktujemy się z Tobą wkrótce.");
    setFormData({ name: "", phone: "", date: "", guests: "", message: "" });
  };

  const menuItems = {
    zupy: [
      {
        name: "Kwaśnica na baraninie",
        price: "28 zł",
        desc: "Tradycyjna beskidzka kwaśnica z delikatną baraniną",
      },
      {
        name: "Rosół domowy",
        price: "18 zł",
        desc: "Klarowny rosół z makaronem i warzywami",
      },
    ],
    główne: [
      {
        name: "Gnocchi z kozim serem i truflą",
        price: "48 zł",
        desc: "Włoskie kluski ziemniaczane z aromatyczną truflą",
      },
      {
        name: "Golonka w marynacie BBQ",
        price: "52 zł",
        desc: "Z opiekanymi ziemniakami i kapustą",
      },
      {
        name: "Pstrąg z grilla",
        price: "45 zł",
        desc: "Świeży pstrąg z ziołami i cytrynąpolską",
      },
      {
        name: "Makaron z kaczką",
        price: "42 zł",
        desc: "Domowy makaron z confit z kaczki",
      },
    ],
    desery: [
      {
        name: "Szarlotka domowa",
        price: "16 zł",
        desc: "Z bitą śmietaną i lodami waniliowymi",
      },
      {
        name: "Sernik na zimno",
        price: "18 zł",
        desc: "Klasyczny sernik z polewą owocową",
      },
    ],
  };

  const reviews = [
    {
      name: "Anna K.",
      rating: 5,
      text: "Wspaniałe miejsce! Kwaśnica najlepsza jaką jadłam. Obsługa super miła, a ceny bardzo przystępne.",
    },
    {
      name: "Marek W.",
      rating: 5,
      text: "Niepozorna z zewnątrz, ale jedzenie i atmosfera rewelacyjne. Golonka rozpływa się w ustach!",
    },
    {
      name: "Katarzyna M.",
      rating: 5,
      text: "Idealne na rodzinny obiad. Dzieci zachwycone, my też! Wrócmy na pewno.",
    },
  ];

  return (
    <div className="font-inter">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#111111] shadow-lg" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="font-playfair text-2xl sm:text-3xl font-bold text-[#D4A017]">
              Nie ma mocnych
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#o-nas"
                className="text-white hover:text-[#D4A017] transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('o-nas').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                O nas
              </a>
              <a
                href="#menu"
                className="text-white hover:text-[#D4A017] transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Menu
              </a>
              <a
                href="#imprezy"
                className="text-white hover:text-[#D4A017] transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('imprezy').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Imprezy
              </a>
              <a
                href="#opinie"
                className="text-white hover:text-[#D4A017] transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('opinie').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Opinie
              </a>
              <a
                href="#kontakt"
                className="bg-[#D4A017] text-[#111111] px-6 py-3 rounded-full font-semibold hover:bg-[#f5c842] transition-all hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('kontakt').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Kontakt
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <a
                href="#o-nas"
                className="block py-2 text-white hover:text-[#D4A017]"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('o-nas').scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                O nas
              </a>
              <a
                href="#menu"
                className="block py-2 text-white hover:text-[#D4A017]"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                Menu
              </a>
              <a
                href="#imprezy"
                className="block py-2 text-white hover:text-[#D4A017]"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('imprezy').scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                Imprezy
              </a>
              <a
                href="#opinie"
                className="block py-2 text-white hover:text-[#D4A017]"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('opinie').scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                Opinie
              </a>
              <a
                href="#kontakt"
                className="block py-2 text-white hover:text-[#D4A017]"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('kontakt').scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                Kontakt
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
            alt="Beskidy mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Nie ma mocnych
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-[#D4A017] mb-8 font-light">
            Gdzie góry smakują najlepiej
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="bg-[#D4A017] text-[#111111] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#f5c842] transition-all hover:scale-105 inline-block"
            >
              Zobacz menu
            </a>
            <a
              href="#kontakt"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#111111] transition-all hover:scale-105 inline-block"
            >
              Zarezerwuj stolik
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* O nas */}
      <section id="o-nas" className="py-20 bg-[#F5F0E8] fade-in-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#111111] mb-6">
                Klimat Beskidów na Twoim talerzu
              </h2>
              <p className="text-lg text-[#111111]/80 mb-4 leading-relaxed">
                Restauracja „Nie ma mocnych” to prawdziwa kulinarna perełka. 
                Wyjątkowy klimat wnętrza i doskonałe smaki naszych dań zachwycą każdego gościa od pierwszego kęsa.
              </p>
              <p className="text-lg text-[#111111]/80 mb-4 leading-relaxed">
                Znajdujemy się w sercu Kurort Kozubnik w Porąbce, otoczeni
                pięknem Beskidów. Łączymy beskidzką tradycję z nowoczesnymi
                smakami, tworząc dania, które zapamiętasz na długo.
              </p>
              <p className="text-lg text-[#111111]/80 mb-6 leading-relaxed">
                Nasza restauracja to ciepła atmosfera, autentyczna obsługa i
                jakość, która przemawiaja sama za siebie – 4,9/5 w opiniach
                naszych gości!
              </p>
              <div className="flex items-center gap-2 text-[#D4A017]">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <span className="ml-2 text-[#111111] font-semibold">
                  4,9/5 • 200+ opinii
                </span>
              </div>
            </div>
            <div className="relative h-96 md:h-full min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                alt="Wnętrze restauracji"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-20 bg-[#111111] fade-in-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
              Nasze specjalności
            </h2>
            <p className="text-xl text-white/70">
              Dania, które pokochali nasi goście
            </p>
          </div>

          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category} className="mb-12">
              <h3 className="font-playfair text-3xl font-bold text-[#D4A017] mb-6 capitalize">
                {category}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#1a1a1a] p-6 rounded-lg hover:bg-[#222] transition-all hover:scale-105 cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-xl text-white">
                        {item.name}
                      </h4>
                      <span className="text-[#D4A017] font-bold text-lg ml-4">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-white/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center mt-12">
            <p className="text-white/70 text-lg">
              Ceny orientacyjne: 40–60 zł na osobę • Akceptujemy karty kredytowe
            </p>
          </div>
        </div>
      </section>

      {/* Imprezy */}
      <section id="imprezy" className="py-20 bg-[#F5F0E8] fade-in-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#111111] mb-4">
              Imprezy okolicznościowe
            </h2>
            <p className="text-xl text-[#111111]/70">
              Świętuj z nami najważniejsze chwile
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {([
              {
                icon: "🎂",
                title: "Urodziny",
                desc: "Roczki, osiemnastki i każdy jubileusz",
              },
              {
                icon: "👶",
                title: "Chrzciny",
                desc: "Pierwsze święto Twojego dziecka",
              },
              {
                icon: "💍",
                title: "Rocznice",
                desc: "Śluby i inne ważne daty",
              },
              {
                icon: "🍽️",
                title: "Catering",
                desc: "Wyjazdowa obsługa imprez",
              },
            ]).map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg text-center hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-playfair text-2xl font-bold text-[#111111] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#111111]/70">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-[#111111]/80 mb-6">
              Zadbamy o każdy detal Twojego święta. Skontaktuj się z nami, aby
              omówić szczegóły.
            </p>
            <a
              href="#kontakt"
              className="bg-[#D4A017] text-[#111111] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#f5c842] transition-all hover:scale-105 inline-block"
            >
              Zapytaj o ofertę
            </a>
          </div>
        </div>
      </section>

      {/* Opinie */}
      <section id="opinie" className="py-20 bg-[#111111] fade-in-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
              Co mówią nasi goście
            </h2>
            <div className="flex items-center justify-center gap-2 text-[#D4A017]">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
              <span className="ml-3 text-white text-xl">4,9/5</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-[#1a1a1a] p-8 rounded-lg hover:bg-[#222] transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current text-[#D4A017]"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 mb-4 italic">"{review.text}"</p>
                <p className="text-[#D4A017] font-semibold">— {review.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-white/70">
              Ponad 200 pozytywnych opinii na Google •
              <a
                href="https://facebook.com/niemamocnych.restauracja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4A017] hover:underline ml-1"
              >
                Zobacz wszystkie
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-20 bg-[#F5F0E8] fade-in-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#111111] mb-4">
              Zarezerwuj stolik
            </h2>
            <p className="text-xl text-[#111111]/70">
              Odwiedź nas lub zadzwoń:{" "}
              <a
                href="tel:451500236"
                className="text-[#D4A017] font-semibold hover:underline"
              >
                451 500 236
              </a>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Dane kontaktowe */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-playfair text-2xl font-bold text-[#111111] mb-6">
                Dane kontaktowe
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[#D4A017] flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-[#111111]">Adres</p>
                    <p className="text-[#111111]/70">
                      Kochana 1, 43-353 Porąbka
                    </p>
                    <p className="text-[#111111]/70">
                      Kurort Kozubnik, woj. śląskie
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[#D4A017] flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-[#111111]">Telefon</p>
                    <a
                      href="tel:451500236"
                      className="text-[#D4A017] hover:underline"
                    >
                      451 500 236
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[#D4A017] flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[#111111]">Facebook</p>
                    <a
                      href="https://facebook.com/niemamocnych.restauracja"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D4A017] hover:underline break-all"
                    >
                      /niemamocnych.restauracja
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[#D4A017] flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[#111111]">Instagram</p>
                    <a
                      href="https://instagram.com/niemamocnych.restauracja"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D4A017] hover:underline"
                    >
                      @niemamocnych.restauracja
                    </a>
                  </div>
                </div>
              </div>

              
            </div>

            {/* Godziny otwarcia */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-playfair text-2xl font-bold text-[#111111] mb-6">
                Godziny otwarcia
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-[#111111]/10">
                  <p className="text-[#111111]">Poniedziałek - Wtorek</p>
                  <p className="font-semibold text-[#D4A017]">Zamknięte</p>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-[#111111]/10">
                  <p className="text-[#111111]">Środa - Czwartek</p>
                  <p className="font-semibold text-[#D4A017]">12:00 - 18:00</p>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-[#111111]/10">
                  <p className="text-[#111111]">Piątek - Sobota</p>
                  <p className="font-semibold text-[#D4A017]">12:00 - 19:00</p>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-[#111111]/10">
                  <p className="text-[#111111]">Niedziela</p>
                  <p className="font-semibold text-[#D4A017]">12:00 - 18:00</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-[#F5F0E8] rounded-lg">
                <p className="text-sm text-[#111111]/70">
                  <span className="font-semibold text-[#111111]">Uwaga:</span> W dni świąteczne godziny mogą ulec zmianie. Prosimy o kontakt telefoniczny.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mapa */}
      <section className="py-12 bg-[#F5F0E8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5x2 mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2575.37620198034!2d19.23265634483959!3d49.79779465366621!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47169dc428581a83%3A0x5e88c83feb68e19a!2sNie%20ma%20mocnych!5e0!3m2!1spl!2spl!4v1774533853461!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa dojazdu do restauracji Nie ma mocnych"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-[#D4A017] mb-4">
                Nie ma mocnych
              </h3>
              <p className="text-white/70">
                Restauracja w sercu Beskidów.
                <br />
                Gdzie tradycja spotyka się ze smakiem.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Kontakt</h4>
              <p className="text-white/70 mb-2">Kochana 1, 43-353 Porąbka</p>
              <p className="text-white/70 mb-2">Kurort Kozubnik</p>
              <p className="text-white/70">
                Tel:{" "}
                <a
                  href="tel:451500236"
                  className="text-[#D4A017] hover:underline"
                >
                  451 500 236
                </a>
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Social Media</h4>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com/niemamocnych.restauracja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#D4A017] rounded-full flex items-center justify-center hover:bg-[#f5c842] transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-[#111111]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/niemamocnych.restauracja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#D4A017] rounded-full flex items-center justify-center hover:bg-[#f5c842] transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-[#111111]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>
              &copy; 2026 Restauracja Nie ma mocnych. Wszystkie prawa
              zastrzeżone.
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }
        
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .fade-in-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  );
}
