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
    alt: "Espaço de recepção acolhedor com identidade visual Afetiva Infância",
  },
];

export default function Environment() {
  return (
    <section
      id="ambiente"
      className="bg-gradient-to-b from-white via-brand-pink-50/50 to-white py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Nosso espaço"
          title="Um ambiente preparado para acolher."
          description="Um espaço pensado para o conforto e o desenvolvimento da criança, com materiais e ambientes adequados para cada etapa do atendimento."
        />

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-2">
          <Reveal>
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

          <Reveal delay={0.12}>
            <div className="grid gap-5 sm:grid-cols-2">
              {spaceImages.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-soft"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 30vw, 90vw"
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
