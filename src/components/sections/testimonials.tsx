import { Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { DragGallery } from "@/components/ui/drag-gallery";
import { testimonials } from "@/lib/site-config";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 sm:py-28 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Depoimentos"
          title="A experiência de quem acompanha esse trabalho."
          description="Relatos de famílias que vivenciaram o acompanhamento psicopedagógico."
        />

        <Reveal delay={0.12}>
          <DragGallery
            className="mt-14"
            slideClassName="w-[85%] sm:w-[60%] lg:w-[33%]"
          >
            {testimonials.map((testimonial, i) => (
              <div
                key={`${testimonial.name}-${i}`}
                className="relative flex h-full flex-col gap-4 rounded-3xl border border-brand-purple-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                {testimonial.isPlaceholder && (
                  <span className="absolute top-3 right-3 rounded-full bg-brand-orange-300 px-2.5 py-1 text-[10px] font-bold tracking-wide text-ink uppercase">
                    Exemplo
                  </span>
                )}

                <div
                  className="flex items-center gap-1"
                  role="img"
                  aria-label={`Avaliação de ${testimonial.rating} de 5 estrelas`}
                >
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-4 w-4 fill-brand-orange-500 text-brand-orange-500"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <p className="italic leading-relaxed text-ink-soft">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="mt-auto flex flex-col gap-1 pt-2">
                  <span className="font-semibold text-ink">{testimonial.name}</span>
                  <span className="flex items-center gap-1.5 text-xs text-ink-faint">
                    <span
                      className="h-2 w-2 rounded-full bg-brand-blue-500"
                      aria-hidden="true"
                    />
                    Avaliação do Google
                    {testimonial.timeAgo && <> · {testimonial.timeAgo}</>}
                  </span>
                </div>
              </div>
            ))}
          </DragGallery>
        </Reveal>
      </Container>
    </section>
  );
}
