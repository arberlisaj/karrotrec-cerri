"use client";
import { MessageCircle, Instagram, Facebook } from "lucide-react";

export default function SocialButtonsV1() {
  const whatsappNumber = "355684044344";
  const whatsappMessage = "Hello, I need towing assistance";
  const instagramUrl = "https://www.instagram.com/karrotrec_cerri_24_h_/?hl=en";
  const facebookUrl = "https://www.facebook.com/Karrotrec.cerri24h/";

  const handleWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleInstagram = () => {
    window.open(instagramUrl, "_blank", "noopener,noreferrer");
  };

  const handleFacebook = () => {
    window.open(facebookUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg transition-all hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Instagram Button */}
      <button
        onClick={handleInstagram}
        className="bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] hover:opacity-90 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110"
        aria-label="Follow us on Instagram"
      >
        <Instagram className="h-6 w-6" />
      </button>

      {/* Facebook Button */}
      <button
        onClick={handleFacebook}
        className="bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-full p-4 shadow-lg transition-all hover:scale-110"
        aria-label="Follow us on Facebook"
      >
        <Facebook className="h-6 w-6" />
      </button>
    </div>
  );
}
