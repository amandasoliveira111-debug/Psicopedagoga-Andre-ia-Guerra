import { MapPin, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { WhatsappCta } from "@/components/ui/whatsapp-cta";
import { brand, whatsappLink } from "@/lib/site-config";

const footerNavLinks = [
  { href: "#top", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#ambiente", label: "Ambiente" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#duvidas", label: "Dúvidas" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-brand-purple-100 pt-16 pb-8">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-3" aria-label={`${brand.name} — início`}>
              <span className="font-display text-lg font-semibold leading-none text-ink">
                {brand.name}
              </span>
            </a>
            <p className="mt-4 font-semibold text-ink">{brand.professional}</p>
            <p className="text-sm text-ink-soft">{brand.role}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-faint">
              Navegação
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-soft transition-colors duration-200 hover:text-brand-blue-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-faint">
              Contato
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-ink-soft">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0"
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
                <a
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-brand-blue-600"
                >
                  {brand.instagramHandle}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-ink-soft">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-brand-blue-600"
                >
                  {brand.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-ink-soft">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <span>{brand.address.full}</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm text-ink-soft">
              Pronta para ajudar seu filho a aprender do seu jeito.
            </p>
            <WhatsappCta variant="primary" size="md" className="mt-4">
              Falar no WhatsApp
            </WhatsappCta>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-brand-purple-100 pt-8 text-xs text-ink-faint sm:flex-row">
          <p>
            © {year} {brand.name} — {brand.professional}. Todos os direitos reservados.
          </p>
          <p>Psicopedagogia Clínica em Vila Carrão, São Paulo/SP.</p>
        </div>
      </Container>
    </footer>
  );
}
