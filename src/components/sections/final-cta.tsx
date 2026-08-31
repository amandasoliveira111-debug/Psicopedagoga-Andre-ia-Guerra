import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { WhatsappCta } from "@/components/ui/whatsapp-cta";
import { brand } from "@/lib/site-config";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-gradient-to-br from-brand-blue-500 via-brand-blue-600 to-brand-purple-600 text-white">
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
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
            Vamos conversar?
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 text-balance font-display text-3xl font-semibold sm:text-4xl">
            Entender o que está dificultando a aprendizagem é o primeiro
            passo para saber como ajudar.
          </h2>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-5 text-lg text-white/90">
            Se você percebe dificuldades de aprendizagem, leitura, escrita,
            matemática, atenção ou organização escolar, podemos conversar
            sobre a necessidade de uma avaliação psicopedagógica e os
            próximos passos para o acompanhamento.
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-9">
            <WhatsappCta variant="secondary" size="lg" message="schedule">
              Falar com {brand.professional.split(" ")[0]} pelo WhatsApp
            </WhatsappCta>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
