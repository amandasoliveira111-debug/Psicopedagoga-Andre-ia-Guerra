import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { aboutBadges } from "@/lib/site-config";

const badgeStyles = [
  "bg-brand-blue-50 text-brand-blue-700",
  "bg-brand-purple-100 text-brand-purple-600",
  "bg-brand-pink-100 text-brand-pink-600",
  "bg-brand-blue-100 text-brand-blue-600",
  "bg-brand-purple-100 text-brand-purple-600",
  "bg-brand-pink-100 text-brand-pink-600",
];

export default function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-card">
                <Image
                  src="/media/images/andreia-retrato.jpg"
                  alt="Retrato de Andréia Guerra, Psicopedagoga Clínica"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-soft sm:flex">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600">
                  <GraduationCap className="h-5 w-5" aria-hidden />
                </span>
                <span className="text-sm font-semibold text-ink">
                  {aboutBadges[0]}
                </span>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                Prazer, eu sou Andréia Guerra.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg">
                <p>
                  Sou assistente social, pedagoga e psicopedagoga clínica,
                  especialista em Transtornos do Neurodesenvolvimento, com
                  atuação em avaliação psicopedagógica e intervenção
                  psicopedagógica de crianças e adolescentes.
                </p>
                <p>
                  Há 9 anos atuo na clínica acompanhando crianças e
                  adolescentes com dificuldades de aprendizagem, TDAH, TEA e
                  Transtorno Específico da Aprendizagem, incluindo prejuízos
                  relacionados à leitura, escrita e matemática.
                </p>
                <p>
                  Meu trabalho busca compreender os fatores que interferem na
                  aprendizagem e planejar intervenções individualizadas,
                  considerando atenção, memória, funções executivas,
                  raciocínio lógico, habilidades acadêmicas e aspectos
                  socioemocionais e comportamentais.
                </p>
                <p>
                  Também atuo em parceria com famílias, escolas e demais
                  profissionais envolvidos no acompanhamento da criança ou
                  adolescente.
                </p>
                <p>
                  Sou sócia e idealizadora da Afetiva Infância — Núcleo de
                  Desenvolvimento Infantil, espaço onde realizo meus
                  atendimentos.
                </p>
              </div>
            </Reveal>

            <RevealGroup className="mt-6 flex flex-wrap gap-3">
              {aboutBadges.map((badge, i) => (
                <RevealItem key={badge}>
                  <span
                    className={cn(
                      "inline-block rounded-full px-4 py-1.5 text-sm font-medium",
                      badgeStyles[i % badgeStyles.length]
                    )}
                  >
                    {badge}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>

            <div className="mt-10 border-t border-brand-blue-100 pt-8">
              <Reveal>
                <h3 className="font-display text-xl font-semibold text-ink">
                  Formação e atualização profissional
                </h3>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
                  <p>
                    Minha formação profissional é construída de forma
                    contínua. Além das graduações em Serviço Social e
                    Pedagogia e da formação em Psicopedagogia Clínica, sou
                    especialista em Transtornos do Neurodesenvolvimento e
                    mantenho atualização permanente por meio de cursos,
                    formações e congressos voltados à aprendizagem,
                    neurodesenvolvimento e prática clínica baseada em
                    evidências.
                  </p>
                  <p>
                    Entre essas formações, destaco a formação em Transtornos
                    do Neurodesenvolvimento com o Dr. Thiago Castro, além da
                    participação contínua em congressos, cursos e estudos de
                    aperfeiçoamento profissional.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
