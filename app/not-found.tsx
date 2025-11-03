import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faqja Nuk U Gjet | Karrotrec Cerri",
  description:
    "Ops! Faqja që po kërkoni nuk ekziston. Kthehuni në faqen kryesore.",
};

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#3d3d3d] text-white px-4">
      <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl mb-6">Faqja Nuk U Gjet</h2>
      <p className="text-[#d1d1d1] mb-8 text-center max-w-md">
        Ops! Faqja që po kërkoni mund të jetë zhvendosur ose nuk ekziston.
      </p>
      <Link
        href="/sq"
        className="bg-black text-white px-6 py-3 rounded-md hover:bg-neutral-800 transition-all"
      >
        Kthehu në Faqen Kryesore
      </Link>
    </div>
  );
};

export default page;
