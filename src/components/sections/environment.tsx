import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const spaceImages = [
  {
    src: "/media/images/espaco-recepcao-1.jpg",
    alt: "Sala de espera e brincar com mesinha infantil",
  },
  {
    src: "/media/images/espaco-recepcao-2.jpg",
    alt: "Espaço de recepção acolhedor",
  },
  {
    src: "/media/images/crianca-avaliacao-vr.jpg",
    alt: "Sala de atendimento com recursos de avaliação",
  },
  {
    src: "/media/images/andreia-sala-brincar.jpg",
    alt: "Sala de atividades preparada para o atendimento",
  },
];

export default function Environment() {
  return (
    <section
      id="ambiente"
      className="py-20 sm:py-28 bg-gradient-to-b from-white via-brand-pink-50/50 to-white"
    >
      <Container>
        <SectionHeading
          eyebrow="Um ambiente pensado para o desenvolvimento"
          title="Um espaço preparado para acolher diferentes necessidades."
        />

        <Reveal delay={0.08}>
          <div className="mx-auto max-w-2xl space-y-4 text-center leading-relaxed text-ink-soft mt-6">
            <p>
              Meus atendimentos são realizados na Afetiva Infância — Núcleo de
              Desenvolvimento Infantil, um espaço preparado para receber
              crianças, adolescentes e suas famílias.
            </p>
            <p>
              O ambiente foi pensado para favorecer vínculo, participação,
              aprendizagem e desenvolvimento, contando com salas organizadas
              para diferentes propostas de atendimento e recursos adequados
              às necessidades de cada criança.
            </p>
            <p>
              Na psicopedagogia, os espaços, materiais, jogos e recursos
              utilizados durante a avaliação psicopedagógica e a intervenção
              psicopedagógica são selecionados de acordo com os objetivos de
              cada atendimento.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-2">
          <Reveal delay={0.16}>
            <div className="relative mx-auto aspect-[9/16] w-full max-w-sm overflow-hidden rounded-3xl shadow-card lg:mx-0">
              <video
                controls
                preload="metadata"
                poster="/media/video/ambiente-poster.jpg"
                className="h-full w-full object-cover"
              >
                <source src="/media/video/ambiente.mp4" type="video/mp4" />
              </video>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="grid grid-cols-2 gap-4">
              {spaceImages.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-square overflow-hidden rounded-3xl shadow-soft"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 30vw, 45vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
