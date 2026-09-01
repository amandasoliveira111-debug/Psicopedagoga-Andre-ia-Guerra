import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { DragGallery } from "@/components/ui/drag-gallery";

const spaceImages = [
  {
    src: "/media/images/ambiente-entrada.jpg",
    alt: "Entrada e recepção do espaço de atendimento",
  },
  {
    src: "/media/images/ambiente-sofa-logo.jpg",
    alt: "Área de espera com identidade visual Afetiva Infância",
  },
  {
    src: "/media/images/ambiente-mural-arvore.jpg",
    alt: "Cantinho de atividades com mural ilustrado de árvore",
  },
  {
    src: "/media/images/ambiente-sala-azul.jpg",
    alt: "Sala de atividades com mesinha infantil e brinquedos",
  },
  {
    src: "/media/images/ambiente-mesa-rosa.jpg",
    alt: "Sala de atendimento com mesa infantil e materiais organizados",
  },
  {
    src: "/media/images/ambiente-escritorio.jpg",
    alt: "Espaço de atendimento com mesa de trabalho",
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
                poster="/media/video/ambiente-tour-poster.jpg"
                className="h-full w-full object-cover"
              >
                <source src="/media/video/ambiente-tour.mp4" type="video/mp4" />
              </video>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <DragGallery slideClassName="w-[70%] sm:w-[45%]">
              {spaceImages.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-square overflow-hidden rounded-3xl shadow-soft"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 70vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </DragGallery>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
