import { Clock, MapPin, Phone, Shield, Truck, Wrench } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Karrotrec Cerri | Professional Vehicle Recovery & Transport",
  description:
    "Karrotrec Cerri offers 24/7 towing and roadside assistance in Albania. Fast, professional, and reliable vehicle recovery services.",
  keywords:
    "Karrotrec Cerri, towing Albania, roadside assistance Albania, emergency towing, vehicle recovery, transport service, Tirana towing",
  openGraph: {
    title: "Karrotrec Cerri - Reliable Towing in Albania",
    description:
      "24/7 professional towing and roadside assistance across Albania. Call Karrotrec Cerri for reliable recovery services.",
    type: "website",
    url: "https://karrotrec-cerri.com",
  },
};

export default function HomePageEn() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-right bg-no-repeat"
          style={{ backgroundImage: `url(/hero.jpg)` }}
        />
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-200">
              Reliable Towing & Roadside Assistance
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Fast, professional towing and roadside services available 24/7.
              Call us now for immediate assistance!
            </p>
            <a
              href="tel:+355684084444"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#ebebeb] text-[#333] rounded-lg font-medium hover:bg-[#d4d4d4] transition-colors"
            >
              <Phone className="h-5 w-5" /> Call +355 68 408 4444
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-10 border-t">
            {[
              { value: "10+", label: "Years in Business" },
              { value: "10,000+", label: "Vehicles Towed" },
              { value: "24/7", label: "Availability" },
              { value: "100%", label: "Customer Satisfaction" },
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

      {/* Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Clock,
              title: "24/7 Availability",
              text: "Our team is available around the clock to provide immediate assistance whenever you need it.",
            },
            {
              icon: Shield,
              title: "Certified Professionals",
              text: "Our team consists of certified professionals with years of hands-on towing experience.",
            },
            {
              icon: Truck,
              title: "Fast Response",
              text: "We pride ourselves on our quick response times to get you safely back on the road.",
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
              Zgjidhje gjithëpërfshirëse për të gjitha nevojat tuaja të
              karrotrecit dhe ndihmës në rrugë
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
                title: "Tërheqje në Distanca të Gjatë",
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
                title: "Tërheqje me Orar të Paracaktuar",
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

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white text-black text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Immediate Assistance?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Contact us now for fast and reliable towing and roadside services
          available 24/7.
        </p>
        <a
          href="tel:+355684084444"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-[#333] transition-colors"
        >
          <Phone className="h-5 w-5" /> Call +355 68 408 4444
        </a>
      </section>
    </>
  );
}
