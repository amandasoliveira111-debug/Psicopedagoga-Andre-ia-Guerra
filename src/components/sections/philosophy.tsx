import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { DragGallery } from "@/components/ui/drag-gallery";

type GalleryItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster: string; alt: string };

const galleryItems: GalleryItem[] = [
  {
    type: "video",
    src: "/media/video/crianca-atividade.mp4",
    poster: "/media/video/crianca-atividade-poster.jpg",
    alt: "Criança em atividade de aprendizagem com cartões e materiais escritos",
  },
  {
    type: "video",
    src: "/media/video/crianca-atividade-sensorial.mp4",
    poster: "/media/video/crianca-atividade-sensorial-poster.jpg",
    alt: "Criança em atividade sensorial com brinquedo educativo",
  },
  {
    type: "image",
    src: "/media/images/crianca-quebra-cabeca.jpg",
    alt: "Criança brincando com quebra-cabeça em atividade educativa",
  },
  {
    type: "image",
    src: "/media/images/andreia-sala-brincar.jpg",
    alt: "Andréia na sala de atividades, utilizando materiais lúdicos de aprendizagem",
  },
  {
    type: "image",
    src: "/media/images/crianca-avaliacao-vr.jpg",
    alt: "Criança durante avaliação com recursos de tecnologia, usando óculos de realidade virtual",
  },
  {
    type: "image",
    src: "/media/images/crianca-cartoes.jpg",
    alt: "Criança realizando atividade de leitura e escrita com cartões de palavras",
  },
];

export default function Philosophy() {
  return (
    <section
      id="desenvolvimento"
      className="bg-gradient-to-b from-brand-blue-50/60 via-white to-white py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Cada criança no seu tempo"
          title="Cada criança tem seu próprio jeito de aprender."
          description="Cada criança se desenvolve em seu próprio tempo. O acompanhamento busca compreender as necessidades individuais de cada criança, respeitando seu ritmo, suas características e sua forma única de aprender."
        />

        <Reveal delay={0.1} className="mt-14">
          <DragGallery slideClassName="w-[78%] sm:w-[46%] lg:w-[30%]">
            {galleryItems.map((item) => (
              <div
                key={item.src}
                className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card"
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 78vw"
                    className="object-cover"
                  />
                ) : (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={item.poster}
                    aria-label={item.alt}
                    className="h-full w-full object-cover"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}
              </div>
            ))}
          </DragGallery>
        </Reveal>
      </Container>
    </section>
  );
}
