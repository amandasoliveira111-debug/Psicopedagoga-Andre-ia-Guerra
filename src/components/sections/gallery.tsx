import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { attendanceSteps } from "@/lib/site-config";

export default function AttendanceSteps() {
  return (
    <section
      id="processo"
      className="py-20 sm:py-28 bg-gradient-to-b from-brand-purple-600 to-brand-purple-500"
    >
      <Container className="max-w-3xl">
        <SectionHeading
          invert
          eyebrow="Do primeiro contato aos próximos passos"
          title="Como acontece o processo de avaliação psicopedagógica?"
        />

        <RevealGroup className="relative mt-14 flex flex-col gap-8">
          <div
            className="pointer-events-none absolute left-5 top-2 bottom-2 hidden w-px bg-white/25 sm:block"
            aria-hidden="true"
          />
          {attendanceSteps.map((step) => (
            <RevealItem key={step.number} className="relative flex gap-5">
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white font-display font-semibold text-brand-purple-600">
                {step.number}
              </span>
              <div className="flex-1 pt-1">
                <h3 className="font-display text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-1 leading-relaxed text-white/80">
                  {step.text}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mx-auto mt-12 max-w-2xl text-center italic leading-relaxed text-white/80">
          <p>
            Esta seção também demonstra, de forma concreta, como a prática
            clínica baseada em evidências se traduz em um processo
            estruturado de avaliação, análise e intervenção.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
