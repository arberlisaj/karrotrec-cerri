// app/Footer.tsx
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Globe,
} from "lucide-react";
import Link from "next/link";

export default function Footer({ locale }: { locale: "en" | "sq" }) {
  const t = {
    en: {
      companyDesc: "Reliable towing and roadside assistance, available 24/7.",
      quickLinks: "Quick Links",
      home: "Home",
      services: "Services",
      gallery: "Gallery",
      about: "About Us",
      contact: "Contact",
      ourServices: "Our Services",
      emergencyTowing: "Emergency Towing",
      roadsideAssistance: "Roadside Assistance",
      vehicleRecovery: "Vehicle Recovery",
      flatbedTowing: "Flatbed Towing",
      longDistanceTowing: "Long Distance Towing",
      contactUs: "Contact Us",
      emergencyService: "24/7 Emergency Service",
      rights: "All rights reserved.",
    },
    sq: {
      companyDesc: "Shërbim i besueshëm karrotreci dhe ndihmë në rrugë, 24/7.",
      quickLinks: "Lidhjet e Shpejta",
      home: "Kryefaqja",
      services: "Shërbimet",
      gallery: "Galeria",
      about: "Rreth Nesh",
      contact: "Na Kontaktoni",
      ourServices: "Shërbimet Tona",
      emergencyTowing: "Tërheqja në Raste Emergjence",
      roadsideAssistance: "Ndihma në Rrugë",
      vehicleRecovery: "Rikuperimi i Mjeteve",
      flatbedTowing: "Tërheqja me Platformë",
      longDistanceTowing: "Tërheqja në Distanca të Gjatë",
      contactUs: "Na Kontaktoni",
      emergencyService: "Shërbimi Emergjent 24/7",
      rights: "Të gjitha të drejtat e rezervuara.",
    },
  }[locale];

  const prefix = locale === "en" ? "/en" : "/sq";

  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h1 className="text-lg font-semibold mb-4">
              <Link href={prefix}>Karrotrec Cerri</Link>
            </h1>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              {t.companyDesc}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`${prefix}`}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {t.home}
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/services`}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {t.services}
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/gallery`}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {t.gallery}
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/about`}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {t.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/contact`}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.ourServices}</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>{t.emergencyTowing}</li>
              <li>{t.roadsideAssistance}</li>
              <li>{t.vehicleRecovery}</li>
              <li>{t.flatbedTowing}</li>
              <li>{t.longDistanceTowing}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contactUs}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <span>+355 68 404 4344</span> | <span>+355 68 408 4444</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <span>cerrikarrotrec@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Rruga Teodor Keko, Tirana, Albania</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{t.emergencyService}</span>
              </li>
              <li className="flex items-center gap-2 mt-4 text-primary-foreground/80">
                <a
                  target="_blank"
                  href="https://www.instagram.com/karrotrec_cerri_24_h_/?hl=en"
                >
                  <Instagram size={20} />
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/Karrotrec.cerri24h/"
                >
                  <Facebook size={20} />
                </a>
                <a target="_blank" href="https://www.karrotrec-cerri.com">
                  <Globe size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-600 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Karrotrec Cerri. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
