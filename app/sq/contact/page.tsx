import { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";
import Form from "@/app/components/Form";

export const metadata: Metadata = {
  title: "Na Kontaktoni | Karrotrec Cerri",
  description:
    "Kontaktoni Karrotrec Cerri për shërbime të rimorkios dhe ndihmës në rrugë në Tiranë, në dispozicion 24/7.",
  openGraph: {
    type: "website",
    siteName: "Karrotrec Cerri",
    title: "Na Kontaktoni - Karrotrec Cerri",
    description:
      "Kontaktoni Karrotrec Cerri për shërbime të rimorkios dhe ndihmës në rrugë në Tiranë, në dispozicion 24/7.",
  },
};

const page = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#3d3d3d] text-[#fafafa] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Na Kontaktoni
            </h1>
            <p className="text-lg text-[#fafafa]/90 leading-relaxed">
              Ne jemi këtu për tju ndihmuar me të gjitha nevojat tuaja për
              rimorkio dhe ndihmë në rrugë.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Na Dërgoni një Mesazh</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Form />
            {/* Contact Info */}
            <div className="mt-6 space-y-6">
              <div className="border border-gray-300 p-6 rounded shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefoni</h3>
                    <p className="text-sm text-gray-600">+355 68 404 4344</p>
                    <p className="text-sm text-gray-600">+355 68 408 4444</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Në dispozicion 24/7
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-300 p-6 rounded shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adresa</h3>
                    <p className="text-sm text-gray-600">
                      Rruga Teodor Keko, Tirane, Albania
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
