export const brand = {
  name: "Afetiva Infância",
  tagline: "Núcleo de Desenvolvimento Infantil",
  professional: "Andréia Guerra",
  role: "Psicopedagoga Clínica",
  instagramHandle: "@psicopedagoga_andreiaguerra",
  instagramUrl: "https://www.instagram.com/psicopedagoga_andreiaguerra",
  whatsappNumber: "5511991234171",
  whatsappDisplay: "(11) 99123-4171",
  address: {
    street: "Rua Rogério Giorgi, 180",
    neighborhood: "Vila Carrão",
    city: "São Paulo",
    state: "SP",
    full: "Rua Rogério Giorgi, 180 – Vila Carrão, São Paulo/SP",
    mapsQuery: "Rua Rogério Giorgi, 180, Vila Carrão, São Paulo - SP",
  },
} as const;

export const whatsappMessages = {
  default:
    "Olá, Andréia! Conheci seu trabalho pelo site e gostaria de saber mais sobre o acompanhamento psicopedagógico.",
  hero: "Olá, Andréia! Vi o site e gostaria de ajuda para meu filho(a).",
  schedule:
    "Olá, Andréia! Gostaria de agendar uma avaliação psicopedagógica.",
  floating: "Olá, Andréia! Preciso de ajuda e gostaria de tirar uma dúvida.",
} as const;

export function whatsappLink(message: keyof typeof whatsappMessages = "default") {
  const text = encodeURIComponent(whatsappMessages[message]);
  return `https://wa.me/${brand.whatsappNumber}?text=${text}`;
}

export const navLinks = [
  { href: "#sobre", label: "Sobre Andréia" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#desenvolvimento", label: "Desenvolvimento" },
  { href: "#ambiente", label: "Ambiente" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#duvidas", label: "Dúvidas" },
] as const;

export const aboutBadges = [
  "Psicopedagoga Clínica",
  "Especialista em Transtornos do Neurodesenvolvimento",
  "FTND",
  "TDAH",
  "TEA",
] as const;

export type Service = {
  slug: string;
  title: string;
  description: string;
  color: "blue" | "pink" | "green" | "purple" | "orange";
};

export const services: Service[] = [
  {
    slug: "psicopedagogia-clinica",
    title: "Psicopedagogia Clínica",
    description:
      "Intervenção especializada para superar dificuldades de aprendizagem e desenvolver todo o potencial da criança.",
    color: "blue",
  },
  {
    slug: "avaliacao-psicopedagogica",
    title: "Avaliação Psicopedagógica",
    description:
      "Identificamos como a criança aprende e quais estratégias são necessárias para o seu desenvolvimento escolar e pessoal.",
    color: "pink",
  },
  {
    slug: "avaliacao-neuropsicologica",
    title: "Avaliação Neuropsicológica",
    description:
      "Avaliação das funções cognitivas, emocionais e comportamentais para um olhar completo sobre o desenvolvimento.",
    color: "green",
  },
  {
    slug: "terapia-comportamental",
    title: "Terapia Comportamental",
    description:
      "Estratégias baseadas em evidências para desenvolver habilidades, autonomia, regulação emocional e comportamento adaptativo.",
    color: "purple",
  },
  {
    slug: "orientacao-familiar",
    title: "Orientação Familiar",
    description:
      "Apoiamos famílias para compreender e lidar com os desafios do dia a dia, fortalecendo vínculos e promovendo um ambiente acolhedor.",
    color: "orange",
  },
  {
    slug: "consultoria-escolar",
    title: "Consultoria Escolar",
    description:
      "Parceria com escolas para promover estratégias inclusivas que favoreçam o desenvolvimento e a aprendizagem das crianças.",
    color: "blue",
  },
];

export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: "O que é o acompanhamento psicopedagógico?",
    answer:
      "É um processo de avaliação e intervenção voltado para compreender como a criança aprende, identificando suas necessidades e potencialidades para apoiar seu desenvolvimento escolar, emocional e pessoal.",
  },
  {
    question: "Para quem é indicado?",
    answer:
      "Para crianças que apresentam dificuldades de aprendizagem, sinais relacionados a transtornos do neurodesenvolvimento (como TDAH e TEA) ou que se beneficiariam de um olhar individualizado sobre a forma como aprendem.",
  },
  {
    question: "Como funciona o primeiro atendimento?",
    answer:
      "O primeiro encontro é dedicado a conhecer a criança e a família, entender a história e as queixas trazidas, e explicar como o processo de avaliação e acompanhamento pode ser conduzido a partir daí.",
  },
  {
    question: "Como saber se meu filho precisa de acompanhamento?",
    answer:
      "Sinais como dificuldade persistente para acompanhar a escola, desmotivação com os estudos, ou questões de atenção e comportamento observadas pela família e pela escola podem indicar que vale a pena buscar uma avaliação especializada.",
  },
  {
    question: "Quanto tempo dura o acompanhamento?",
    answer:
      "Cada criança tem seu próprio ritmo, por isso a duração é definida caso a caso, a partir da avaliação inicial e da evolução observada ao longo do processo. Não é possível estimar um prazo fixo sem conhecer a criança.",
  },
  {
    question: "Como funciona o agendamento?",
    answer:
      "O agendamento é feito diretamente pelo WhatsApp. Você pode conversar com a Andréia, tirar dúvidas iniciais e combinar o melhor horário para o primeiro atendimento.",
  },
  {
    question: "Onde fica o atendimento?",
    answer: `O atendimento acontece em consultório na ${brand.address.full}.`,
  },
];

export type Testimonial = {
  name: string;
  text: string;
  rating: number;
  isPlaceholder?: boolean;
};

// PLACEHOLDER — substituir pelos depoimentos reais do Google quando fornecidos.
export const testimonials: Testimonial[] = [
  {
    name: "Depoimento em breve",
    text: "Espaço reservado para uma avaliação real do Google. Substitua este conteúdo pelos depoimentos verdadeiros de pais e responsáveis.",
    rating: 5,
    isPlaceholder: true,
  },
  {
    name: "Depoimento em breve",
    text: "Espaço reservado para uma avaliação real do Google. Substitua este conteúdo pelos depoimentos verdadeiros de pais e responsáveis.",
    rating: 5,
    isPlaceholder: true,
  },
  {
    name: "Depoimento em breve",
    text: "Espaço reservado para uma avaliação real do Google. Substitua este conteúdo pelos depoimentos verdadeiros de pais e responsáveis.",
    rating: 5,
    isPlaceholder: true,
  },
];

export const siteSeo = {
  title: "Psicopedagoga Clínica em Vila Carrão | Andréia Guerra",
  description:
    "Atendimento psicopedagógico clínico em Vila Carrão, São Paulo, com acompanhamento individualizado para desenvolvimento, aprendizagem e necessidades relacionadas ao neurodesenvolvimento.",
  keywords: [
    "psicopedagoga",
    "psicopedagoga clínica",
    "psicopedagoga infantil",
    "psicopedagogia infantil",
    "psicopedagoga Vila Carrão",
    "psicopedagoga em São Paulo",
    "psicopedagogia Vila Carrão",
    "dificuldades de aprendizagem",
    "desenvolvimento infantil",
    "acompanhamento psicopedagógico",
    "TDAH",
    "TEA",
    "transtornos do neurodesenvolvimento",
    "aprendizagem infantil",
  ],
  siteUrl: "https://www.afetivainfancia.com.br",
} as const;
