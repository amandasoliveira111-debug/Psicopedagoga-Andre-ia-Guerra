import {
  BookOpenText,
  Brain,
  ScanSearch,
  HeartHandshake,
  Users,
  School,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { services, type Service } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const iconBySlug: Record<string, LucideIcon> = {
  "psicopedagogia-clinica": BookOpenText,
  "avaliacao-psicopedagogica": Brain,
  "avaliacao-neuropsicologica": ScanSearch,
  "terapia-comportamental": HeartHandshake,
  "orientacao-familiar": Users,
  "consultoria-escolar": School,
};

const colorClasses: Record<Service["color"], string> = {
  blue: "bg-brand-blue-100 text-brand-blue-600",
  pink: "bg-brand-pink-100 text-brand-pink-600",
  green: "bg-brand-green-300 text-ink",
  purple: "bg-brand-purple-100 text-brand-purple-600",
  orange: "bg-brand-orange-300 text-ink",
};

export default function Services() {
  return (
    <section id="atendimento" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Áreas de atuação"
          title="Como posso ajudar?"
          description="Um olhar individualizado para compreender como cada criança aprende e se desenvolve."
        />

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconBySlug[service.slug] ?? BookOpenText;
            return (
              <RevealItem key={service.slug}>
                <div className="flex h-full flex-col gap-4 rounded-3xl bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-2xl",
                      colorClasses[service.color]
                    )}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {service.description}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
