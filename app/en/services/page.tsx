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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Towing & Roadside Services | Karrotrec Cerri Albania",
  description:
    "Explore Karrotrec Cerri’s complete range of towing and roadside services across Albania — 24/7 emergency towing, recovery, and assistance.",
  keywords:
    "Karrotrec Cerri services, towing Albania, roadside assistance Albania, emergency towing, vehicle recovery, car towing Tirana",
  openGraph: {
    title: "Our Services - Karrotrec Cerri | Reliable Towing in Albania",
    description:
      "Discover Karrotrec Cerri’s full range of towing and roadside assistance services. Professional, 24/7, and available across Albania.",
    type: "website",
    url: "https://karrotrec-cerri.com/en/services",
  },
};

const services = [
  {
    icon: Truck,
    title: "Emergency Towing",
    description:
      "Immediate response for vehicle breakdowns and accidents. Our fleet is equipped to handle all vehicle types, from compact cars to large SUVs.",
    features: [
      "24/7 availability",
      "Fast response time",
      "All vehicle types",
      "Accident recovery",
    ],
  },
  {
    icon: Wrench,
    title: "Roadside Assistance",
    description:
      "Complete roadside support including jump starts, tire changes, fuel delivery, and lockout services to get you moving again.",
    features: [
      "Battery jump starts",
      "Flat tire changes",
      "Fuel delivery",
      "Lockout service",
    ],
  },
  {
    icon: MapPin,
    title: "Long Distance Towing",
    description:
      "Safe and secure transportation of your vehicle across cities and states with professional care and attention.",
    features: [
      "Interstate transport",
      "Secure loading",
      "GPS tracking",
      "Insurance coverage",
    ],
  },
  {
    icon: Shield,
    title: "Vehicle Recovery",
    description:
      "Expert recovery services for vehicles in ditches, mud, snow, or other challenging situations using specialized equipment.",
    features: [
      "Off-road recovery",
      "Winch services",
      "Specialized equipment",
      "Damage prevention",
    ],
  },
  {
    icon: Car,
    title: "Flatbed Towing",
    description:
      "Premium flatbed service for luxury vehicles, classic cars, and specialty vehicles requiring extra care during transport.",
    features: [
      "Luxury vehicle care",
      "No wheel contact",
      "Secure tie-downs",
      "Weather protection",
    ],
  },
  {
    icon: Clock,
    title: "Scheduled Towing",
    description:
      "Pre-arranged towing services for planned vehicle moves, dealership transfers, or auction transport.",
    features: [
      "Flexible scheduling",
      "Competitive rates",
      "Professional handling",
      "Timely delivery",
    ],
  },
  {
    icon: Zap,
    title: "Motorcycle Towing",
    description:
      "Specialized motorcycle towing with proper equipment and techniques to ensure your bike arrives safely.",
    features: [
      "Bike-specific equipment",
      "Secure transport",
      "Experienced handlers",
      "All bike types",
    ],
  },
  {
    icon: AlertCircle,
    title: "Accident Recovery",
    description:
      "Professional accident scene management and vehicle recovery with coordination with authorities and insurance companies.",
    features: [
      "Scene management",
      "Insurance coordination",
      "Multi-vehicle recovery",
      "Debris cleanup",
    ],
  },
];

export default function ServicesPageEn() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#3d3d3d] text-[#fafafa] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Our Services
            </h1>
            <p className="text-lg text-[#fafafa]/90 leading-relaxed">
              Choose from a wide range of towing and roadside assistance
              services tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
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
