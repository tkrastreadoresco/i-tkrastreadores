import type { Metadata } from "next";
import { PolicyPage } from "@/features/pages/PolicyPage";

export const metadata: Metadata = {
    title: "Política de cookies",
};

export default function AceitacaoDeCookiesPage() {
    return (
        <PolicyPage
            title="Política de Cookies"
            lead="Esta Política descreve como usamos cookies e tecnologias similares, quais categorias podem ser utilizadas e como você pode gerenciar suas preferências."
            updatedAt="23/01/2026"
            sections={[
                {
                    id: "o-que-sao",
                    title: "1. O que são cookies",
                    content: (
                        <>
                            <p>
                                Cookies são pequenos arquivos armazenados no seu dispositivo quando você visita um site. Eles ajudam no
                                funcionamento, segurança e melhoria de experiência.
                            </p>
                        </>
                    ),
                },
                {
                    id: "categorias",
                    title: "2. Categorias de cookies",
                    content: (
                        <>
                            <h3>2.1 Estritamente necessários</h3>
                            <p>
                                Essenciais para funcionamento e segurança do site. Em geral, não podem ser desativados sem comprometer recursos
                                básicos.
                            </p>
                            <h3>2.2 Desempenho e análise (quando aplicável)</h3>
                            <p>
                                Ajudam a entender como o site é usado, identificar erros e melhorar conteúdos. Quando utilizados, podem depender de
                                consentimento.
                            </p>
                            <h3>2.3 Funcionalidade (quando aplicável)</h3>
                            <p>
                                Permitem lembrar preferências e tornar a navegação mais conveniente.
                            </p>
                            <h3>2.4 Marketing (quando aplicável)</h3>
                            <p>
                                Podem ser usados para personalização de anúncios e mensuração de campanhas. Em geral, dependem de consentimento.
                            </p>
                        </>
                    ),
                },
                {
                    id: "base-legal",
                    title: "3. Base legal e consentimento (LGPD)",
                    content: (
                        <>
                            <p>
                                Cookies necessários podem ser usados com base em legítimo interesse e/ou para viabilizar o serviço. Cookies de
                                análise/marketing, quando utilizados, podem depender de consentimento.
                            </p>
                        </>
                    ),
                },
                {
                    id: "gerenciar",
                    title: "4. Como gerenciar cookies",
                    content: (
                        <>
                            <p>
                                Você pode gerenciar cookies nas configurações do seu navegador (bloquear, remover ou configurar permissões). O
                                caminho varia por navegador.
                            </p>
                            <ul>
                                <li>Remover cookies: configurações de privacidade do navegador.</li>
                                <li>Bloquear cookies: permissões do site no navegador.</li>
                                <li>Modo anônimo: pode reduzir persistência de cookies.</li>
                            </ul>
                        </>
                    ),
                },
                {
                    id: "prazos",
                    title: "5. Prazos e retenção",
                    content: (
                        <>
                            <p>
                                Cookies podem ser de sessão (expiram ao fechar o navegador) ou persistentes (expiram após um prazo). Os prazos
                                variam conforme a finalidade e fornecedor.
                            </p>
                        </>
                    ),
                },
                {
                    id: "alteracoes",
                    title: "6. Alterações desta Política",
                    content: (
                        <>
                            <p>
                                Podemos atualizar esta Política para refletir mudanças no site ou requisitos legais. Recomendamos revisar
                                periodicamente.
                            </p>
                        </>
                    ),
                },
            ]}
        />
    );
}
