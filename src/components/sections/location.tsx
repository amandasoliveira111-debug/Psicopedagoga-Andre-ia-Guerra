import { MapPin, Navigation } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsappCta } from "@/components/ui/whatsapp-cta";
import { brand } from "@/lib/site-config";

export default function Location() {
  return (
    <section
      id="localizacao"
      className="bg-gradient-to-b from-white to-brand-blue-50/50 py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Onde estamos"
          title="Estamos em Vila Carrão"
          description={brand.address.full}
        />

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  brand.address.mapsQuery
                )}&output=embed`}
                className="h-80 w-full rounded-3xl border-0 shadow-card sm:h-96"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do consultório"
              />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex flex-col gap-4 rounded-3xl bg-white p-8 shadow-soft">
              <MapPin className="h-8 w-8 text-brand-pink-500" aria-hidden />
              <p className="text-lg font-medium text-ink">{brand.address.full}</p>
              <p className="text-ink-soft">Atendimento com hora marcada.</p>

              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <WhatsappCta variant="primary" size="lg" message="schedule">
                  Agendar atendimento
                </WhatsappCta>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    brand.address.mapsQuery
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-blue-300 px-6 py-3 font-semibold text-brand-blue-600 transition-colors hover:bg-brand-blue-50"
                >
                  Como chegar
                  <Navigation className="h-5 w-5" aria-hidden />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
