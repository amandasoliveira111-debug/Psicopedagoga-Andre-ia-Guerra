import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { atuacaoAreas } from "@/lib/site-config";

export default function Services() {
  return (
    <section id="atendimento" className="py-20 sm:py-28 bg-white">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Atendimento Psicopedagógico"
          title="Como funciona o atendimento psicopedagógico?"
        />

        <Reveal delay={0.08}>
          <p className="text-ink-soft text-lg leading-relaxed text-center mt-4 max-w-2xl mx-auto">
            A avaliação e a intervenção psicopedagógica ajudam a compreender
            as dificuldades de aprendizagem, identificar habilidades que
            precisam ser desenvolvidas e construir estratégias
            individualizadas para favorecer o desenvolvimento acadêmico da
            criança ou adolescente.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 divide-y divide-brand-blue-100 rounded-3xl border border-brand-blue-100 bg-white overflow-hidden">
          {atuacaoAreas.map((area) => (
            <RevealItem key={area.slug} className="p-7 sm:p-8">
              <h3 className="font-display text-xl font-semibold text-brand-blue-600 mb-3">
                {area.title}
              </h3>
              <p className="text-ink-soft leading-relaxed">
                {area.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
