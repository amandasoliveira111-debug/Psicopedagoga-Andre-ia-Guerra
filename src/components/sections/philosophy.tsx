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
    type: "image",
    src: "/media/images/crianca-cartoes.jpg",
    alt: "Atividade de leitura e escrita com cartões de palavras",
  },
  {
    type: "image",
    src: "/media/images/crianca-quebra-cabeca.jpg",
    alt: "Criança brincando com quebra-cabeça educativo",
  },
  {
    type: "image",
    src: "/media/images/crianca-avaliacao-vr.jpg",
    alt: "Avaliação psicopedagógica com uso de realidade virtual",
  },
  {
    type: "image",
    src: "/media/images/espaco-recepcao-1.jpg",
    alt: "Espaço preparado para atividades de aprendizagem",
  },
  {
    type: "video",
    src: "/media/video/crianca-atividade-sensorial.mp4",
    poster: "/media/video/crianca-atividade-sensorial-poster.jpg",
    alt: "Criança em atividade sensorial com brinquedo educativo",
  },
  {
    type: "video",
    src: "/media/video/crianca-atividade.mp4",
    poster: "/media/video/crianca-atividade-poster.jpg",
    alt: "Criança em atividade de aprendizagem com cartões e materiais escritos",
  },
];

export default function Philosophy() {
  return (
    <section
      id="aprendizagem"
      className="bg-gradient-to-b from-brand-blue-600 to-brand-blue-500 py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          invert
          eyebrow="Compreender para intervir"
          title="Aprender envolve muito mais do que compreender um conteúdo."
        />

        <Reveal delay={0.1}>
          <div className="mx-auto mt-6 max-w-2xl space-y-4 text-center text-base sm:text-lg leading-relaxed text-white/85">
            <p>
              A aprendizagem é resultado da integração entre diferentes
              processos cognitivos, linguísticos, emocionais e executivos.
            </p>
            <p>
              Atenção, memória, linguagem, funções executivas e raciocínio
              lógico participam desse processo e ajudam a compreender por que
              uma criança pode apresentar dificuldades de aprendizagem,
              transtornos de aprendizagem, dificuldades na leitura, escrita ou
              matemática, mesmo quando demonstra boas habilidades em outras
              áreas.
            </p>
            <p>
              Por isso, a avaliação psicopedagógica busca compreender como
              esses processos estão funcionando e quais fatores podem estar
              interferindo no desempenho escolar.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-14">
          <DragGallery invert slideClassName="w-[78%] sm:w-[46%] lg:w-[30%]">
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
