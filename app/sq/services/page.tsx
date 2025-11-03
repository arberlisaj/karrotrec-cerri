import { Card, CardContent } from "@/app/components/Card";
import {
  Truck,
  Wrench,
  Shield,
  MapPin,
  Clock,
  Zap,
  Car,
  AlertCircle,
} from "lucide-react";

export const metadata = {
  title:
    "Shërbimet Tona të Karrotrecit & Asistencës Rrugore | Karrotrec Cerri Shqipëri",
  description:
    "Zbuloni gamën e plotë të shërbimeve të Karrotrec Cerri në gjithë Shqipërinë — karrotrec emergjent 24/7, rimëkëmbje dhe asistencë rrugore.",
  keywords:
    "Karrotrec Cerri, shërbime karrotreci, ndihmë rrugore Shqipëri, rimëkëmbje automjetesh, transport automjetesh, karrotrec Tirana",
  openGraph: {
    title:
      "Shërbimet Tona - Karrotrec Cerri | Karrotrec i Besueshëm në Shqipëri",
    description:
      "Zbuloni gamën e plotë të shërbimeve të karrotrecit dhe asistencës rrugore nga Karrotrec Cerri. Profesionale, 24/7 dhe e disponueshme në gjithë Shqipërinë.",
    type: "website",
    url: "https://karrotrec-cerri.com/sq/services",
  },
};

const sherbimet = [
  {
    icon: Truck,
    title: "Tërheqje Emergjente",
    description:
      "Reagim i menjëhershëm për defekte ose aksidente. Flota jonë është e pajisur për tërheqjen e çdo lloj automjeti, nga makinat kompakte deri tek SUV-të e mëdhenj.",
    features: [
      "Disponueshmëri 24/7",
      "Kohë e shpejtë reagimi",
      "Të gjitha llojet e automjeteve",
      "Rimëkëmbje pas aksidenti",
    ],
  },
  {
    icon: Wrench,
    title: "Asistencë Rrugore",
    description:
      "Asistencë e plotë rrugore, përfshirë ndezjen e baterisë, ndërrimin e gomave, furnizimin me karburant dhe shërbimet e hapjes së makinës.",
    features: [
      "Ndezje baterie",
      "Ndërrim gome",
      "Furnizim me karburant",
      "Shërbim hapjeje automjeti",
    ],
  },
  {
    icon: MapPin,
    title: "Tërheqje në Distanca të Gjata",
    description:
      "Transport i sigurt dhe i mbrojtur i automjetit tuaj ndërmjet qyteteve dhe shteteve, me kujdes dhe profesionalizëm maksimal.",
    features: [
      "Transport ndërqytetas dhe ndër-shtetëror",
      "Ngarkim i sigurt",
      "Ndjekje me GPS",
      "Mbulim sigurimi",
    ],
  },
  {
    icon: Shield,
    title: "Rimëkëmbje Automjetesh",
    description:
      "Shërbime profesionale rimëkëmbjeje për automjete të bllokuara në hendek, baltë, dëborë apo situata të tjera të vështira, me pajisje të specializuara.",
    features: [
      "Rimëkëmbje jashtë rruge",
      "Shërbime me vinç",
      "Pajisje të specializuara",
      "Parandalim dëmtimesh",
    ],
  },
  {
    icon: Car,
    title: "Tërheqje me Platformë",
    description:
      "Shërbim premium me platformë për automjete luksoze, makina klasike dhe automjete speciale që kërkojnë kujdes të veçantë gjatë transportit.",
    features: [
      "Kujdes për automjete luksoze",
      "Pa kontakt me rrotat",
      "Fiksim i sigurt",
      "Mbrojtje ndaj motit",
    ],
  },
  {
    icon: Clock,
    title: "Tërheqje e Planifikuar",
    description:
      "Shërbime tërheqjeje të planifikuara për lëvizje të parapërgatitura, transport të automjeteve për koncesionerë apo ankande.",
    features: [
      "Orar fleksibël",
      "Çmime konkurruese",
      "Trajtim profesional",
      "Dorëzim në kohë",
    ],
  },
  {
    icon: Zap,
    title: "Tërheqje Motocikletash",
    description:
      "Tërheqje e specializuar për motocikleta me pajisje dhe teknika të përshtatshme për të garantuar mbërritjen e sigurt të motorit tuaj.",
    features: [
      "Pajisje specifike për motorë",
      "Transport i sigurt",
      "Operatorë me përvojë",
      "Të gjitha llojet e motorëve",
    ],
  },
  {
    icon: AlertCircle,
    title: "Rimëkëmbje pas Aksidenti",
    description:
      "Menaxhim profesional i vendngjarjes së aksidentit dhe rimëkëmbje e automjeteve, me bashkërendim me autoritetet dhe kompanitë e sigurimit.",
    features: [
      "Menaxhim i vendngjarjes",
      "Koordinim me sigurimet",
      "Rimëkëmbje e shumë automjeteve",
      "Pastrimi i mbetjeve",
    ],
  },
];

export default function ServicesPageSq() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#3d3d3d] text-[#fafafa] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Shërbimet Tona
            </h1>
            <p className="text-lg text-[#fafafa]/90 leading-relaxed">
              Zgjidhni nga një gamë e gjerë shërbimesh tërheqjeje dhe asistence
              rrugore të përshtatura për nevojat tuaja.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sherbimet.map((service, index) => (
              <Card
                key={index}
                className="border border-gray-300 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-[#3d3d3d]/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-[#3d3d3d]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-[#737373] mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm"
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-[#3d3d3d]" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
