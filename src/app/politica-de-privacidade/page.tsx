import type { Metadata } from "next";
import { PolicyPage } from "@/features/pages/PolicyPage";
import { contact } from "@/content/site";

export const metadata: Metadata = {
    title: "Política de privacidade",
};

export default function PoliticaDePrivacidadePage() {
    return (
        <PolicyPage
            title="Política de Privacidade"
            lead="Esta Política explica como a TK Rastreadores trata dados pessoais no contexto deste site e do atendimento comercial, em conformidade com a LGPD."
            updatedAt="23/01/2026"
            sections={[
                {
                    id: "escopo",
                    title: "1. Escopo",
                    content: (
                        <>
                            <p>
                                Esta Política se aplica às interações realizadas neste site institucional, nos canais de atendimento e nas solicitações
                                de contato/orçamento.
                            </p>
                        </>
                    ),
                },
                {
                    id: "dados",
                    title: "2. Quais dados podemos tratar",
                    content: (
                        <>
                            <p>
                                Podemos tratar dados pessoais fornecidos por você, como nome, empresa, e-mail, telefone/WhatsApp e o conteúdo da
                                mensagem enviada.
                            </p>
                            <p>
                                Também podemos coletar dados técnicos mínimos para funcionamento e segurança do site (por exemplo, informações de
                                navegação e logs), sempre que aplicável.
                            </p>
                        </>
                    ),
                },
                {
                    id: "finalidades",
                    title: "3. Finalidades do tratamento",
                    content: (
                        <>
                            <ul>
                                <li>Responder solicitações de contato, dúvidas e pedidos de orçamento.</li>
                                <li>Prestar atendimento comercial e suporte relacionado às soluções.</li>
                                <li>Manter segurança e prevenção a fraudes/abusos no site.</li>
                                <li>Melhorar experiência e desempenho do site (quando aplicável).</li>
                            </ul>
                        </>
                    ),
                },
                {
                    id: "bases-legais",
                    title: "4. Bases legais (LGPD)",
                    content: (
                        <>
                            <p>
                                O tratamento pode ocorrer com base em uma ou mais hipóteses legais previstas na LGPD, como:
                            </p>
                            <ul>
                                <li>Execução de procedimentos preliminares a contrato (atendimento a pedido do titular).</li>
                                <li>Legítimo interesse (ex.: segurança do site e melhoria dos serviços), com avaliação de necessidade.</li>
                                <li>Cumprimento de obrigação legal/regulatória, quando aplicável.</li>
                                <li>Consentimento, quando necessário (ex.: determinadas categorias de cookies).</li>
                            </ul>
                        </>
                    ),
                },
                {
                    id: "compartilhamento",
                    title: "5. Compartilhamento de dados",
                    content: (
                        <>
                            <p>
                                Podemos compartilhar dados com fornecedores/operadores estritamente necessários para viabilizar o atendimento e a
                                operação do site (ex.: provedores de e-mail, hospedagem, ferramentas de suporte).
                            </p>
                            <p>
                                Não vendemos dados pessoais. Compartilhamentos ocorrem sob contratos e medidas de segurança compatíveis.
                            </p>
                        </>
                    ),
                },
                {
                    id: "retencao",
                    title: "6. Retenção e prazos",
                    content: (
                        <>
                            <p>
                                Mantemos dados pessoais pelo tempo necessário para cumprir as finalidades descritas nesta Política, respeitando
                                prazos legais e regulatórios aplicáveis, além de prazos de guarda para defesa em eventuais processos.
                            </p>
                        </>
                    ),
                },
                {
                    id: "seguranca",
                    title: "7. Segurança",
                    content: (
                        <>
                            <p>
                                Adotamos medidas técnicas e organizacionais para proteger dados pessoais contra acesso não autorizado, perda,
                                alteração ou divulgação indevida.
                            </p>
                        </>
                    ),
                },
                {
                    id: "direitos",
                    title: "8. Direitos do titular",
                    content: (
                        <>
                            <p>
                                Nos termos da LGPD, você pode solicitar: confirmação de tratamento, acesso, correção, anonimização, portabilidade,
                                eliminação (quando aplicável), informação sobre compartilhamentos, revogação de consentimento e revisão de decisões
                                automatizadas (quando houver).
                            </p>
                            <p>
                                Para exercer seus direitos, contate:
                                <br />
                                <code>{contact.email}</code>
                            </p>
                        </>
                    ),
                },
                {
                    id: "cookies",
                    title: "9. Cookies e tecnologias similares",
                    content: (
                        <>
                            <p>
                                Para detalhes sobre cookies (categorias, finalidades e como gerenciar preferências), consulte a Política de Cookies.
                            </p>
                        </>
                    ),
                },
                {
                    id: "alteracoes",
                    title: "10. Alterações desta Política",
                    content: (
                        <>
                            <p>
                                Podemos atualizar esta Política para refletir melhorias do site, mudanças operacionais ou requisitos legais.
                                Recomendamos revisar periodicamente.
                            </p>
                        </>
                    ),
                },
            ]}
        />
    );
}
