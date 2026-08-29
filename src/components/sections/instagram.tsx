import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { brand } from "@/lib/site-config";

export default function InstagramCta() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <Container>
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl bg-gradient-to-br from-brand-purple-100 via-white to-brand-pink-50 p-8 text-center shadow-soft sm:p-12">
            <div className="relative h-28 w-28 overflow-hidden rounded-full ring-4 ring-white shadow-card sm:h-32 sm:w-32">
              <Image
                src="/media/images/andreia-mesa.jpg"
                alt="Andréia Guerra"
                fill
                sizes="128px"
                className="object-cover"
              />
            </div>

            <div>
              <span className="inline-block rounded-full bg-brand-pink-100 px-4 py-1.5 text-sm font-semibold text-brand-pink-600">
                Instagram
              </span>
              <h2 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
                Acompanhe o dia a dia no Instagram
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
                Bastidores do consultório, depoimentos de famílias e conteúdo
                sobre desenvolvimento infantil, TDAH, TEA e aprendizagem.
              </p>
            </div>

            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue-500 via-brand-purple-500 to-brand-pink-500 px-7 py-3.5 font-semibold text-white shadow-soft transition-all duration-300 hover:shadow-card hover:brightness-105"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1={17.5} y1={6.5} x2={17.51} y2={6.5} />
              </svg>
              {brand.instagramHandle}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
