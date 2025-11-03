import { Clock, MapPin, Phone, Shield, Truck, Wrench } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Karrotrec Cerri | Transport & Ndihmë Profesionale për Automjete",
  description:
    "Karrotrec Cerri ofron shërbime karrotreci dhe ndihmë rrugore 24/7 në gjithë Shqipërinë. Shërbim i shpejtë, profesional dhe i besueshëm për çdo rast.",
  keywords:
    "Karrotrec Cerri, karrotrec Shqipëri, ndihmë rrugore Shqipëri, tërheqje emergjente, transport automjetesh, shërbim transporti, karrotrec Tiranë",
  openGraph: {
    title: "Karrotrec Cerri - Karrotrec i Besueshëm në Shqipëri",
    description:
      "Shërbime profesionale karrotreci dhe ndihmë rrugore 24/7 në gjithë Shqipërinë. Kontaktoni Karrotrec Cerri për shërbime të shpejta dhe të sigurta.",
    type: "website",
    url: "https://karrotrec-cerri.com",
  },
};

export default function HomePageSq() {
  return (
    <>
      <section className="relative py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-right bg-no-repeat"
          style={{ backgroundImage: `url(/hero.jpg)` }}
        />
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-200">
              Karrotrec & Ndihmë Rrugore të Besueshme
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Shërbime të shpejta dhe profesionale karrotreci dhe ndihme
              rrugore, të disponueshme 24/7. Na telefononi tani për ndihmë të
              menjëhershme!
            </p>
            <a
              href="tel:+355684084444"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#ebebeb] text-[#333] rounded-lg font-medium hover:bg-[#d4d4d4] transition-colors"
            >
              <Phone className="h-5 w-5" /> Telefononi +355 68 408 4444
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-10 border-t">
            {[
              { value: "10+", label: "Vite Eksperiencë" },
              { value: "10,000+", label: "Automjete të Tërhequra" },
              { value: "24/7", label: "Disponueshmëri" },
              { value: "100%", label: "Kënaqësi e Klientëve" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-8 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/1 backdrop-blur-md rounded-md"
              >
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-200/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Veçoritë */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Clock,
              title: "Disponueshmëri 24/7",
              text: "Ekipi ynë është gjithmonë në dispozicion për t’ju ndihmuar sa herë që ju nevojitet.",
            },
            {
              icon: Shield,
              title: "Profesionalë të Certifikuar",
              text: "Ekipi ynë përbëhet nga ekspertë me përvojë shumëvjeçare në fushën e karrotrecit.",
            },
            {
              icon: Truck,
              title: "Reagim i Shpejtë",
              text: "Krenohemi për kohën e reagimit të shpejtë, duke ju kthyer në rrugë sa më shpejt të jetë e mundur.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="border shadow-sm rounded-lg p-8 text-center"
            >
              <f.icon className="h-8 w-8 mx-auto mb-4 text-[#3d3d3d]" />
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#737373] leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Shërbimet */}
      <section className="relative py-16 md:py-24 bg-gray-800 text-white">
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Shërbimet tona të Karrotrecit & Ndihmës në Rrugë
            </h2>
            <p className="max-w-2xl mx-auto text-gray-200">
              Zgjidhje gjithëpërfshirëse për çdo nevojë të karrotrecit dhe
              ndihmës në rrugë
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Truck,
                title: "Tërheqje Emergjente",
                text: "Shërbim i shpejtë dhe i besueshëm karrotreci, i disponueshëm 24/7 për çdo situatë emergjente.",
              },
              {
                icon: Wrench,
                title: "Ndihmë në Rrugë",
                text: "Ndihmë e menjëhershme për goma të shfryra, bateri të shkarkuara, bllokime dhe probleme të tjera të vogla.",
              },
              {
                icon: MapPin,
                title: "Tërheqje në Distanca të Gjata",
                text: "Transport i sigurt dhe profesional i automjeteve në distanca të gjata brenda Shqipërisë.",
              },
              {
                icon: Shield,
                title: "Rikuperim Automjetesh",
                text: "Rikuperim profesional i automjeteve të bllokuara, të dëmtuara ose të përfshira në aksidente.",
              },
              {
                icon: Truck,
                title: "Tërheqje me Platformë",
                text: "Zgjidhja ideale për makina luksoze, të dëmtuara ose me qasje të ulët – transport i sigurt dhe pa dëmtime.",
              },
              {
                icon: Clock,
                title: "Tërheqje e Planifikuar",
                text: "Rezervoni paraprakisht për transportet e planifikuara, riparime ose dorëzime.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="border border-gray-600 shadow-lg hover:shadow-xl transition-all bg-white/1 backdrop-blur-md rounded-2xl p-6"
              >
                <s.icon className="h-8 w-8 text-[#fafafa] mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/sq/services"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/20 text-white rounded-md font-medium shadow-lg hover:bg-white/30 transition-all"
            >
              Shiko të gjitha shërbimet
            </Link>
          </div>
        </div>
      </section>

      {/* Thirrje për Veprim */}
      <section className="py-16 md:py-24 bg-white text-black text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ju nevojitet ndihmë e menjëhershme?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Na kontaktoni tani për shërbime të shpejta dhe të besueshme karrotreci
          dhe ndihme rrugore, të disponueshme 24/7.
        </p>
        <a
          href="tel:+355684084444"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-[#333] transition-colors"
        >
          <Phone className="h-5 w-5" /> Telefononi +355 68 408 4444
        </a>
      </section>
    </>
  );
}
