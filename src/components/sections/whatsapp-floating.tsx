"use client";

import { WhatsappCta } from "@/components/ui/whatsapp-cta";

export default function WhatsappFloating() {
  return (
    <div className="fixed bottom-5 right-5 z-40 sm:bottom-8 sm:right-8">
      <span
        aria-hidden
        className="absolute inset-0 -z-10 animate-ping rounded-full bg-brand-pink-500/40 pointer-events-none"
      />
      <WhatsappCta message="floating" variant="primary" size="md" className="shadow-card">
        <span className="hidden sm:inline">Precisa de ajuda agora?</span>
      </WhatsappCta>
    </div>
  );
}
