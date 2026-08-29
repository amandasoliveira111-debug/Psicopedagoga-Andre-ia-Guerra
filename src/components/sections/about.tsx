import Image from "next/image";
import {
  GraduationCap,
  HeartHandshake,
  Sprout,
  BookOpenText,
  Fingerprint,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { aboutBadges } from "@/lib/site-config";

const badgeStyles = [
  "bg-brand-blue-50 text-brand-blue-700",
  "bg-brand-purple-100 text-brand-purple-600",
  "bg-brand-pink-100 text-brand-pink-600",
  "bg-brand-green-300/50 text-ink",
  "bg-brand-orange-300/50 text-ink",
];

type ValueMarker = {
  label: string;
  icon: LucideIcon;
  bg: string;
  text: string;
};

const values: ValueMarker[] = [
  {
    label: "Acolhimento",
    icon: HeartHandshake,
    bg: "bg-brand-pink-100",
    text: "text-brand-pink-600",
  },
  {
    label: "Desenvolvimento",
    icon: Sprout,
    bg: "bg-brand-green-300/50",
    text: "text-ink",
  },
  {
    label: "Aprendizagem",
    icon: BookOpenText,
    bg: "bg-brand-blue-50",
    text: "text-brand-blue-600",
  },
  {
    label: "Individualidade",
    icon: Fingerprint,
    bg: "bg-brand-purple-100",
    text: "text-brand-purple-600",
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-card">
                <Image
                  src="/media/images/andreia-mesa.jpg"
                  alt="Andréia Guerra sorridente, sentada à sua mesa de atendimento, com uma estante de livros e brinquedos infantis ao fundo"
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
                Prazer, eu sou a Andréia
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg">
                <p>
                  Prazer, eu sou Andréia Guerra! 💙 Sou Pedagoga e
                  psicopedagoga clínica, especialista em Transtornos do
                  Neurodesenvolvimento. Minha trajetória com crianças começou
                  há mais de 20 anos. Ao longo desse caminho, atuei como
                  assistente social, professora e coordenadora escolar. Há 9
                  anos, atuo exclusivamente na clínica, realizando avaliação
                  psicopedagógica, intervenção, orientação parental e
                  consultoria escolar.
                </p>
                <p>
                  Mais do que olhar para as dificuldades, acredito na
                  importância de compreender o que está por trás delas. É
                  esse olhar que orienta cada avaliação, cada intervenção e
                  cada orientação às famílias, sempre com base em evidências
                  científicas e em parceria com a escola.
                </p>
                <p>
                  Seja bem-vindo(a) à Afetiva Infância. Espero que este
                  espaço ajude você a compreender melhor o desenvolvimento
                  infantil e encontre informações que façam sentido para a
                  sua família. É um prazer ter você por aqui.
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

            <RevealGroup className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {values.map(({ label, icon: Icon, bg, text }) => (
                <RevealItem
                  key={label}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <span
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-full",
                      bg,
                      text
                    )}
                  >
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span className="text-sm font-medium text-ink">
                    {label}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Container>
    </section>
  );
}
