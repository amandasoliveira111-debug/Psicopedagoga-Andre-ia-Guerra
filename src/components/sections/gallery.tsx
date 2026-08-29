import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsappCta } from "@/components/ui/whatsapp-cta";

export default function DevelopmentGallery() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Conquistas do dia a dia"
          title="Pequenos avanços também são grandes conquistas."
        />

        <Reveal delay={0.12} className="mx-auto mt-14 max-w-3xl">
          <div className="rounded-3xl bg-gradient-to-br from-brand-blue-50 via-white to-brand-pink-50 p-8 shadow-soft sm:p-12">
            <p className="text-lg leading-relaxed text-ink-soft">
              Quando se trata de dificuldades de aprendizagem, nem sempre é
              fácil saber o que fazer e onde encontrar ajuda. No entanto, o
              mais indicado é buscar ajuda profissional para realizar um
              diagnóstico e indicar as melhores intervenções.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Ao procurar uma Psicopedagoga, os problemas de aprendizagem na
              vida de muitas crianças podem ser solucionados.
            </p>
            <p className="mt-5 text-lg font-semibold leading-relaxed text-ink">
              Não deixe o tempo passar! Agende um horário e saiba como
              ajudá-lo!!
            </p>

            <div className="mt-8 flex justify-center">
              <WhatsappCta variant="primary" size="lg" message="schedule">
                Agendar atendimento
              </WhatsappCta>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
