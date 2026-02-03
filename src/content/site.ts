export type Service = {
    slug: string;
    title: string;
    short: string;
    sections?: Array<{ heading: string; body?: string; bullets?: string[] }>;
    images?: Array<{ src: string; alt: string }>; // from /public
};

export const contact = {
    whatsapp: "+55 (24) 98129-2932",
    whatsappLink: "https://wa.me/5524981292932",
    phone: "0800 2423-231",
    email: "atendimento@tkrastreadores.com.br",
};

export const headerNav = {
    items: [
        { href: "/", label: "Início" },
        { href: "/quem-somos", label: "Quem somos" },
        { href: "/servicos", label: "Soluções" },
        { href: "/contato", label: "Contato" },
    ],
    cta: {
        label: "Acessar sistema",
        items: [
            {
                label: "RASTREAMENTO 4G E GESTÃO DE FROTA",
                href: "#",
            },
            {
                label: "TELEMETRIA, LOGISTICA E GESTÃO AVANÇADA",
                href: "#",
            },
        ],
    },
};

export const aboutText =
    "A TK Rastreadores atua há 14 anos no desenvolvimento de soluções tecnológicas em geoposicionamento via satélite para gestão e monitoramento de frotas. Com foco em inovação e eficiência, a empresa oferece sistemas avançados de rastreamento veicular, telemetria e videotelemetria, garantindo controle preciso e informações em tempo real. Nossas soluções são projetadas para apoiar a gestão estratégica das operações, contribuindo para a redução de custos operacionais, otimização do consumo de combustível, aumento da produtividade e elevação dos níveis de segurança na condução dos veículos. Atendemos empresas de diversos segmentos, especialmente logística, transporte e frotas corporativas, sempre com compromisso, qualidade, confiabilidade e evolução tecnológica contínua.";

export const services: Service[] = [
    {
        slug: "rastreamento-4g-pro",
        title: "TK Rastreamento — 4G PRO",
        short:
            "Rastreamento veicular com comunicação 4G e informações em tempo real para apoiar a gestão e o controle da frota.",
    },
    {
        slug: "telemetria-avancada",
        title: "TK Fleet — Telemetria Avançada",
        short:
            "Telemetria para transformar dados de condução em indicadores de eficiência, segurança e economia.",
        images: [
            { src: "/app-tkflet-1.jpg", alt: "App TK Fleet" },
            { src: "/app-tkflet-2.jpg", alt: "App TK Fleet" },
            { src: "/app-tkflet-3.jpg", alt: "App TK Fleet" },
            { src: "/app-tkflet-4.jpg", alt: "App TK Fleet" },
            { src: "/app-tkflet-5.jpg", alt: "App TK Fleet" },
            { src: "/app-tkflet-6.jpg", alt: "App TK Fleet" },
        ],
    },
    {
        slug: "identificador-de-motorista",
        title: "Identificador de Motorista",
        short:
            "Identificação e controle do condutor para melhorar rastreabilidade, conformidade e gestão de uso do veículo.",
    },
    {
        slug: "performance-e-ranking-de-motorista",
        title: "Performance e Ranking de Motorista",
        short:
            "Indicadores e ranking para acompanhar performance, promover direção segura e orientar ações de melhoria.",
        images: [
            {
                src: "/ranking-conducao-economica.jpg",
                alt: "Ranking de condução econômica",
            },
            {
                src: "/ranking-perfomance-conducao-motorista.jpg",
                alt: "Ranking de performance de condução",
            },
            {
                src: "/ranking-de-motorista-com-mais-tempo-de-motor-ocioso.jpg",
                alt: "Ranking de motor ocioso",
            },
        ],
    },
    {
        slug: "videotelemetria",
        title: "Videotelemetria",
        short:
            "Monitoramento com câmeras e análise por IA para aumentar segurança, reduzir riscos e registrar eventos críticos.",
        sections: [
            {
                heading: "Recursos principais",
                bullets: [
                    "Módulos 2G/3G/4G e Wi‑Fi com rastreamento em tempo real.",
                    "Gravação de canal duplo (estrada à frente e cabine ao mesmo tempo).",
                    "Tecnologia com ADAS, DMS e IA auxiliando na condução comportamental do motorista.",
                    "Capacidade até 5 canais.",
                    "Análise do comportamento de condução: aceleração brusca, frenagem brusca e curva brusca.",
                ],
            },
            {
                heading: "Vídeos acionados por eventos",
                bullets: [
                    "Uso de celular",
                    "Aviso de saída de faixa",
                    "Conduzindo o veículo sem cinto de segurança",
                    "Risco de colisão de pedestres",
                    "Ultrapassagem em faixa contínua",
                    "Colisão detectada",
                    "Dirigir cansado",
                    "Distração na condução do veículo",
                    "Dirigir fumando",
                    "Câmera coberta",
                    "Motorista ausente (veículo ligado sem motorista dentro)",
                    "Andando muito próximo do veículo à frente com risco de colisão",
                    "Dirigir com olhos fechados",
                    "Reconhecimento de sinalização rodoviária e área urbana",
                    "Contagem de passageiros (câmera interna em ônibus)",
                ],
            },
        ],
        images: [
            {
                src: "/infracoes-de-video-telemetria.jpg",
                alt: "Infrações de videotelemetria",
            },
            {
                src: "/perfomace-de-conducao-segura-de-video-telemetria.jpg",
                alt: "Performance de condução segura",
            },
            {
                src: "/relatorio-de-infracoes.jpg",
                alt: "Relatório de infrações",
            },
            {
                src: "/relatorio-de-sensores.jpg",
                alt: "Relatório de sensores",
            },
            {
                src: "/relatorio-telemetria-por-viagem-efetuada.jpg",
                alt: "Telemetria por viagem",
            },
            {
                src: "/telemetria-avancada-relatorio-consolidado.jpg",
                alt: "Relatório consolidado",
            },
        ],
    },
    {
        slug: "gestao-de-multas",
        title: "Gestão de Multas",
        short:
            "Centralize ocorrências e apoie processos internos com visibilidade para gestão de infrações e medidas corretivas.",
    },
    {
        slug: "gestao-de-manutencoes",
        title: "Gestão de Manutenções",
        short:
            "Planejamento e acompanhamento de manutenções para reduzir paradas e aumentar a disponibilidade da frota.",
    },
    {
        slug: "gestao-de-despesas",
        title: "Gestão de Despesas",
        short:
            "Organize custos operacionais e tenha visão consolidada para apoiar decisões e otimizações.",
    },
    {
        slug: "gestao-de-combustivel-e-abastecimentos",
        title: "Gestão de Combustível e Abastecimentos",
        short:
            "Controle e acompanhamento de abastecimentos para reduzir desperdícios e apoiar a eficiência do consumo.",
    },
    {
        slug: "telemetria-agro",
        title: "Telemetria Agro",
        short:
            "Telemetria aplicada ao campo para apoiar operação, produtividade e controle em atividades agro.",
    },
    {
        slug: "jornada-de-trabalho",
        title: "Jornada de Trabalho",
        short:
            "Acompanhe jornadas e eventos operacionais para suportar gestão e conformidade com rotinas do time.",
    },
];

export function getServiceBySlug(slug: string) {
    return services.find((s) => s.slug === slug) ?? null;
}
