import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { WhatsappCta } from "@/components/ui/whatsapp-cta";
import { brand } from "@/lib/site-config";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-gradient-to-br from-brand-blue-500 via-brand-purple-500 to-brand-pink-500 text-white">
      <div
        className="pointer-events-none absolute -top-24 -left-24 z-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-28 -right-20 z-0 h-80 w-80 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10 text-center max-w-2xl">
        <Reveal>
          <div className="mx-auto inline-block rounded-3xl bg-white px-6 py-4 shadow-soft">
            <span className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              {brand.name}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-8 text-balance font-display text-3xl font-semibold sm:text-4xl">
            Seu filho merece ser compreendido, acolhido e incentivado a
            desenvolver todo o seu potencial.
          </h2>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-5 text-lg text-white/90">
            Se você tem dúvidas sobre o desenvolvimento ou a aprendizagem da
            sua criança, converse com a Andréia.
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-9">
            <WhatsappCta variant="secondary" size="lg" message="schedule">
              Quero conversar pelo WhatsApp
            </WhatsappCta>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
