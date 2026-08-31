import { MapPin, Navigation } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsappCta } from "@/components/ui/whatsapp-cta";
import { brand } from "@/lib/site-config";

export default function InstagramLocation() {
  return (
    <section id="localizacao" className="py-20 sm:py-28 bg-white">
      <Container>
        <div className="mx-auto mb-16 max-w-2xl border-b border-brand-blue-100 pb-16 text-center sm:mb-20 sm:pb-20">
          <SectionHeading
            eyebrow="Instagram"
            title="Acompanhe meu trabalho também pelo Instagram."
            description="Conteúdos sobre aprendizagem, dificuldades e transtornos de aprendizagem, TDAH, TEA, leitura, escrita, matemática e desenvolvimento infantil, além de registros do dia a dia da psicopedagogia clínica."
          />

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue-500 via-brand-purple-500 to-brand-pink-500 px-7 py-3.5 font-semibold text-white shadow-soft transition-all duration-300 hover:shadow-card hover:brightness-105"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1={17.5} y1={6.5} x2={17.51} y2={6.5} />
                </svg>
                {brand.instagramHandle}
              </a>

              <a
                href={brand.clinicInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-brand-blue-600"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1={17.5} y1={6.5} x2={17.51} y2={6.5} />
                </svg>
                {brand.clinicInstagramHandle}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink text-center">
            Atendimento psicopedagógico em Vila Carrão.
          </h2>
          <p className="text-ink-soft mt-3 max-w-xl mx-auto text-center">
            Os atendimentos são realizados na Afetiva Infância — Núcleo de Desenvolvimento
            Infantil, em Vila Carrão, São Paulo.
          </p>
        </Reveal>

        <div className="mt-10 grid lg:grid-cols-2 gap-8 items-center">
          <Reveal delay={0.1}>
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                brand.address.mapsQuery
              )}&output=embed`}
              className="h-80 sm:h-96 w-full rounded-3xl border-0 shadow-card"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do atendimento"
            />
          </Reveal>

          <Reveal delay={0.18}>
            <div className="bg-white rounded-3xl shadow-soft p-8 flex flex-col gap-4 border border-brand-blue-100">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 shrink-0 text-brand-pink-500" aria-hidden />
                <span className="text-ink text-lg font-medium">{brand.address.full}</span>
              </div>
              <p className="text-ink-soft">Atendimento com hora marcada.</p>
              <WhatsappCta variant="primary" size="lg" message="schedule">
                Agendar atendimento
              </WhatsappCta>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  brand.address.mapsQuery
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-brand-blue-300 px-6 py-3 font-semibold text-brand-blue-600 transition-colors duration-200 hover:bg-brand-blue-50"
              >
                Como chegar
                <Navigation className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
