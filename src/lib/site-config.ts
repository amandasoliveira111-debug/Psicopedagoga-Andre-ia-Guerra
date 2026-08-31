export const brand = {
  name: "Afetiva Infância",
  tagline: "Núcleo de Desenvolvimento Infantil",
  professional: "Andréia Guerra",
  role: "Psicopedagoga Clínica",
  instagramHandle: "@psicopedagoga_andreiaguerra",
  instagramUrl: "https://www.instagram.com/psicopedagoga_andreiaguerra",
  clinicInstagramHandle: "@afetivainfância",
  clinicInstagramUrl: "https://www.instagram.com/afetivainfancia",
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
  { href: "#aprendizagem", label: "Aprendizagem" },
  { href: "#ambiente", label: "Ambiente" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#duvidas", label: "Dúvidas" },
] as const;

export const aboutBadges = [
  "Avaliação Psicopedagógica",
  "Aprendizagem",
  "Atenção",
  "Funções Executivas",
  "Linguagem",
  "Raciocínio Lógico",
] as const;

export type AtuacaoArea = {
  slug: string;
  title: string;
  description: string;
};

export const atuacaoAreas: AtuacaoArea[] = [
  {
    slug: "avaliacao-psicopedagogica",
    title: "Avaliação Psicopedagógica",
    description:
      "A avaliação psicopedagógica investiga como a criança ou adolescente aprende e quais fatores podem estar interferindo em seu desempenho escolar. São utilizados testes, instrumentos padronizados, escalas, atividades clínicas e recursos de avaliação para investigar habilidades relacionadas à leitura, escrita, matemática, atenção, memória, funções executivas, raciocínio lógico, além de aspectos socioemocionais e comportamentais envolvidos no processo de aprendizagem. A avaliação também pode identificar sinais e indicadores relacionados a dificuldades de aprendizagem, Transtorno Específico da Aprendizagem, TDAH, TEA e outros transtornos do neurodesenvolvimento, contribuindo para a definição dos próximos passos e, quando necessário, para o encaminhamento a outros profissionais.",
  },
  {
    slug: "intervencao-psicopedagogica",
    title: "Intervenção Psicopedagógica",
    description:
      "A intervenção psicopedagógica é planejada a partir das necessidades identificadas durante a avaliação. Por meio de estratégias, atividades e recursos específicos, o trabalho busca desenvolver habilidades, ampliar estratégias de aprendizagem e ajudar a criança ou adolescente a encontrar caminhos mais eficientes para lidar com suas dificuldades, considerando também suas potencialidades.",
  },
  {
    slug: "orientacao-familiar",
    title: "Orientação Familiar",
    description:
      "A família participa do processo por meio de orientações que ajudam os responsáveis a compreender as dificuldades apresentadas e a estabelecer estratégias mais adequadas para a rotina de estudos e aprendizagem.",
  },
  {
    slug: "parceria-com-a-escola",
    title: "Parceria com a Escola",
    description:
      "O contato com a escola permite compreender as demandas acadêmicas, acompanhar o desempenho do aluno e construir, junto à equipe pedagógica, estratégias e adaptações que favoreçam a aprendizagem e a participação no ambiente escolar.",
  },
  {
    slug: "trabalho-em-equipe-multidisciplinar",
    title: "Trabalho em Equipe Multidisciplinar",
    description:
      "Quando a criança ou adolescente é acompanhado por outros profissionais, o trabalho pode ser realizado em parceria com psicólogos, fonoaudiólogos, terapeutas ocupacionais, médicos e demais profissionais envolvidos no caso. Essa troca permite integrar diferentes olhares e construir estratégias de acompanhamento mais consistentes.",
  },
];

export type AttendanceStep = {
  number: string;
  title: string;
  text: string;
};

export const attendanceSteps: AttendanceStep[] = [
  {
    number: "1",
    title: "Primeiro contato",
    text: "Conversa inicial pelo WhatsApp para compreender brevemente a demanda e verificar disponibilidade de horários.",
  },
  {
    number: "2",
    title: "Anamnese com a família",
    text: "Encontro com os responsáveis para conhecer a história de desenvolvimento, escolarização, saúde e as principais dificuldades observadas.",
  },
  {
    number: "3",
    title: "Vínculo e observação clínica",
    text: "Início dos encontros com a criança ou adolescente, favorecendo vínculo e observação do modo como aprende, se organiza e responde às propostas.",
  },
  {
    number: "4",
    title: "Processo de avaliação",
    text: "Aplicação de testes, instrumentos padronizados, escalas e atividades clínicas para investigar leitura, escrita, matemática, atenção, memória, funções executivas, raciocínio lógico e aspectos socioemocionais e comportamentais.",
  },
  {
    number: "5",
    title: "Análise dos resultados",
    text: "Integração dos dados obtidos na avaliação com informações da família, da escola e, quando necessário, de outros profissionais.",
  },
  {
    number: "6",
    title: "Devolutiva à família",
    text: "Apresentação dos resultados, das habilidades observadas, das dificuldades identificadas e definição dos próximos passos.",
  },
  {
    number: "7",
    title: "Escola e equipe multidisciplinar",
    text: "Realização de reuniões com a escola e alinhamento com os profissionais que acompanham a criança ou adolescente.",
  },
  {
    number: "8",
    title: "Intervenção psicopedagógica",
    text: "Quando indicada, construção de um plano de intervenção individualizado com objetivos definidos a partir dos resultados da avaliação.",
  },
];

export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: "Quando devo procurar uma avaliação psicopedagógica?",
    answer:
      "A avaliação psicopedagógica pode ser indicada quando a criança ou adolescente apresenta dificuldades persistentes na aprendizagem, leitura, escrita ou matemática, baixo rendimento escolar, dificuldade de atenção, organização, memória ou funções executivas, ou quando a família e a escola percebem que o processo de aprendizagem não está acontecendo como esperado.",
  },
  {
    question: "Como funciona a avaliação psicopedagógica?",
    answer:
      "A avaliação é realizada ao longo de diferentes encontros e utiliza testes, instrumentos padronizados, escalas, atividades clínicas e observação para investigar habilidades acadêmicas, cognitivas, executivas, comportamentais e socioemocionais. Ao final, os resultados são discutidos com a família e são apresentadas orientações, possibilidades de intervenção e, quando necessário, encaminhamentos para outros profissionais.",
  },
  {
    question: "A avaliação psicopedagógica pode investigar TDAH, TEA e transtornos de aprendizagem?",
    answer:
      "A avaliação pode identificar sinais e indicadores relacionados ao TDAH, TEA, Transtorno Específico da Aprendizagem e outros transtornos do neurodesenvolvimento. Quando os resultados indicam necessidade de investigação complementar, a criança ou adolescente é encaminhado aos profissionais responsáveis pelo diagnóstico.",
  },
  {
    question: "Qual a diferença entre avaliação e intervenção psicopedagógica?",
    answer:
      "A avaliação psicopedagógica busca compreender como a criança ou adolescente aprende e quais fatores podem estar interferindo nesse processo. A intervenção psicopedagógica é o trabalho realizado a partir das necessidades identificadas, com estratégias direcionadas ao desenvolvimento das habilidades que apresentam maior dificuldade.",
  },
  {
    question: "Quanto tempo dura a avaliação psicopedagógica?",
    answer:
      "O número de encontros pode variar de acordo com a idade, a demanda e as necessidades de cada criança ou adolescente. Essas informações são explicadas à família antes do início do processo.",
  },
  {
    question: "A escola participa do acompanhamento?",
    answer:
      "Quando necessário, sim. O trabalho pode incluir contato e reuniões com a escola para troca de informações, compreensão das demandas acadêmicas e orientação de estratégias e adaptações que possam favorecer a aprendizagem.",
  },
  {
    question: "Você trabalha em parceria com outros profissionais?",
    answer:
      "Sim. Quando a criança ou adolescente é acompanhado por psicólogo, fonoaudiólogo, terapeuta ocupacional, médico ou outros profissionais, pode haver troca de informações e alinhamento entre a equipe, de acordo com as necessidades do caso.",
  },
  {
    question: "Como faço para agendar um atendimento?",
    answer:
      "O primeiro contato pode ser realizado pelo WhatsApp. A partir dele, conversamos brevemente sobre a demanda e verificamos a disponibilidade de horários.",
  },
];

export type Testimonial = {
  name: string;
  text: string;
  rating: number;
  timeAgo?: string;
  isPlaceholder?: boolean;
};

// Ordenado do mais recente/completo para o mais antigo.
export const testimonials: Testimonial[] = [
  {
    name: "Thais Coquejo",
    timeAgo: "um mês atrás",
    rating: 5,
    text: "Quero deixar registrado o quanto sou grata pelo trabalho incrível da psicopedagoga Andreia. Minha filha chegou ao consultório sem estar alfabetizada, e hoje já está evoluindo muito, começando a ler e se desenvolvendo a cada dia. Além de ser uma excelente profissional, ela é extremamente carinhosa, paciente e dedicada. A Sophia ama estar com ela e não vê a hora de chegar o dia de vê-la, o que faz toda a diferença no processo de aprendizado. Sem dúvidas, recomendo de olhos fechados!",
  },
  {
    name: "Susana",
    timeAgo: "um mês atrás",
    rating: 5,
    text: "Querida Andreia, é incrível ver a evolução da minha filha desde que começou com você. Seu olhar cuidadoso, as atividades e o apoio fazem ela se sentir segura e motivada a aprender. Gratidão por ser uma profissional tão humana e competente.",
  },
  {
    name: "Tatiana Kazumi H. Teruya",
    timeAgo: "um mês atrás",
    rating: 5,
    text: "Ótima profissional!! Recomendo de olhos fechados!!! 🥰",
  },
  {
    name: "Ellis Soares",
    timeAgo: "2 anos atrás",
    rating: 5,
    text: "A Dra Andréia é maravilhosa!!!! Ajudou muito no início do tratamento do meu filho Rafael.",
  },
  {
    name: "Karina Alves",
    timeAgo: "3 anos atrás",
    rating: 5,
    text: "Andréia, além de ser uma profissional maravilhosa, é uma querida! Super atenciosa! Minha filha adora!",
  },
  {
    name: "Kelly Rodrigues",
    timeAgo: "4 anos atrás",
    rating: 5,
    text: "A Andréia é uma profissional maravilhosa. Super atenciosa, profissional e se torna amiga de todos. Minha sobrinha tem sido muito bem assistida por ela. Recomendo demais seu trabalho.",
  },
  {
    name: "Giovanna Pieruzi",
    timeAgo: "4 anos atrás",
    rating: 5,
    text: "Andréia é uma profissional excelente, muito competente e carinhosa com as crianças. Meu filho é apaixonado por ela.",
  },
];

export const siteSeo = {
  title: "Andréia Guerra — Psicopedagoga Clínica | Avaliação Psicopedagógica",
  description:
    "Avaliação e intervenção psicopedagógica para crianças e adolescentes com dificuldades e transtornos de aprendizagem, TDAH e TEA. Atendimento em Vila Carrão, São Paulo/SP.",
  keywords: [
    "psicopedagoga",
    "psicopedagoga clínica",
    "avaliação psicopedagógica",
    "intervenção psicopedagógica",
    "atendimento psicopedagógico",
    "psicopedagoga Vila Carrão",
    "psicopedagoga em São Paulo",
    "dificuldades de aprendizagem",
    "transtornos de aprendizagem",
    "TDAH",
    "TEA",
    "transtornos do neurodesenvolvimento",
    "leitura",
    "escrita",
    "matemática",
    "funções executivas",
  ],
  siteUrl: "https://www.afetivainfancia.com.br",
} as const;
