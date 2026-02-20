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
            lead="Esta Política explica como a TK Rastreadores coleta, utiliza, armazena e protege dados pessoais — incluindo dados de localização — no contexto deste site, dos nossos sistemas de rastreamento, aplicativos e canais de atendimento, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)."
            updatedAt="20/02/2026"
            sections={[
                /* ────────────────────── 1 ────────────────────── */
                {
                    id: "introducao",
                    title: "1. Introdução",
                    content: (
                        <>
                            <p>
                                A <strong>TK Rastreadores</strong> é uma empresa especializada em soluções tecnológicas de
                                geoposicionamento via satélite para gestão e monitoramento de frotas. Atuamos há mais de 14 anos
                                oferecendo sistemas avançados de rastreamento veicular, telemetria e videotelemetria.
                            </p>
                            <p>
                                Levamos a proteção dos seus dados pessoais a sério. Esta Política de Privacidade foi
                                elaborada para que você compreenda de forma clara e transparente como tratamos seus dados,
                                quais são os seus direitos e como pode exercê-los.
                            </p>
                            <p>
                                Recomendamos a leitura completa deste documento. Em caso de dúvidas, nossos canais de
                                contato estão à disposição.
                            </p>
                        </>
                    ),
                },
                /* ────────────────────── 2 ────────────────────── */
                {
                    id: "escopo",
                    title: "2. Escopo e aplicação",
                    content: (
                        <>
                            <p>
                                Esta Política se aplica a todas as interações realizadas:
                            </p>
                            <ul>
                                <li>Neste site institucional (<strong>tkrastreadores.com.br</strong>).</li>
                                <li>Nos sistemas e plataformas de rastreamento e telemetria fornecidos pela TK Rastreadores.</li>
                                <li>Nos aplicativos móveis (TK Rastreador — iOS e Android).</li>
                                <li>Nos canais de atendimento (WhatsApp, e-mail, telefone e formulários de contato).</li>
                                <li>Nas relações comerciais (B2B) com clientes, fornecedores e parceiros.</li>
                            </ul>
                            <p>
                                Ao utilizar nossos serviços, sistemas ou aplicativos, você declara estar ciente e de acordo
                                com as práticas descritas nesta Política.
                            </p>
                        </>
                    ),
                },
                /* ────────────────────── 3 ────────────────────── */
                {
                    id: "dados-coletados",
                    title: "3. Quais dados coletamos",
                    content: (
                        <>
                            <p>
                                A depender da natureza da interação, podemos coletar e tratar as seguintes categorias de
                                dados pessoais:
                            </p>
                            <ul>
                                <li>
                                    <strong>Dados de identificação e contato:</strong> nome, CPF/CNPJ, e-mail, telefone/WhatsApp,
                                    empresa, cargo e endereço.
                                </li>
                                <li>
                                    <strong>Dados de localização:</strong> latitude, longitude, velocidade, horário do registro,
                                    histórico de movimentação e rotas — coletados por meio de rastreadores instalados nos veículos
                                    e/ou pela função de rastreamento do celular nos nossos aplicativos (via GPS, Wi-Fi, torres de
                                    celular e demais tecnologias de geolocalização disponíveis no dispositivo).
                                </li>
                                <li>
                                    <strong>Dados de telemetria e videotelemetria:</strong> informações técnicas de condução
                                    (aceleração, frenagem, RPM, consumo de combustível, entre outros), além de imagens e vídeos
                                    capturados por câmeras embarcadas, quando aplicável.
                                </li>
                                <li>
                                    <strong>Dados técnicos e de navegação:</strong> endereço IP, tipo de navegador, sistema
                                    operacional, páginas acessadas, horários de acesso e logs de uso — coletados automaticamente
                                    para funcionamento, segurança e melhoria do site e dos sistemas.
                                </li>
                                <li>
                                    <strong>Dados de comunicação:</strong> conteúdo de mensagens enviadas por formulários,
                                    e-mail ou WhatsApp, incluindo solicitações de orçamento, dúvidas e reclamações.
                                </li>
                            </ul>
                        </>
                    ),
                },
                /* ────────────────────── 4 ────────────────────── */
                {
                    id: "finalidades",
                    title: "4. Finalidades do tratamento",
                    content: (
                        <>
                            <p>Os dados pessoais coletados são utilizados para as seguintes finalidades:</p>
                            <ul>
                                <li>Prestação dos serviços de rastreamento veicular, telemetria e videotelemetria contratados.</li>
                                <li>Fornecimento de informações de localização em tempo real, histórico de movimentação, alertas e notificações relacionadas.</li>
                                <li>Atendimento a solicitações de contato, dúvidas, orçamentos e suporte técnico.</li>
                                <li>Gestão do relacionamento comercial com clientes, fornecedores e parceiros.</li>
                                <li>Cumprimento de obrigações legais, regulatórias e contratuais.</li>
                                <li>Melhoria e desenvolvimento dos nossos sistemas, aplicativos e serviços.</li>
                                <li>Garantia de segurança, prevenção a fraudes e proteção contra abusos nos sistemas e no site.</li>
                                <li>Envio de comunicações comerciais, quando autorizado pelo titular.</li>
                            </ul>
                        </>
                    ),
                },
                /* ────────────────────── 5 ────────────────────── */
                {
                    id: "bases-legais",
                    title: "5. Bases legais (LGPD)",
                    content: (
                        <>
                            <p>
                                O tratamento de dados pessoais pela TK Rastreadores fundamenta-se em uma ou mais hipóteses
                                legais previstas na LGPD (Lei nº 13.709/2018):
                            </p>
                            <ul>
                                <li>
                                    <strong>Execução de contrato ou procedimentos preliminares:</strong> quando o tratamento é
                                    necessário para prestação dos serviços contratados ou para atender solicitações do titular
                                    antes da formalização contratual.
                                </li>
                                <li>
                                    <strong>Consentimento:</strong> quando o titular manifesta concordância livre, informada e
                                    inequívoca para finalidades específicas, como a ativação da função de rastreamento do celular
                                    ou o recebimento de comunicações comerciais.
                                </li>
                                <li>
                                    <strong>Legítimo interesse:</strong> quando o tratamento é necessário para atender interesses
                                    legítimos da TK Rastreadores ou de terceiros, desde que não prevaleçam direitos e liberdades
                                    fundamentais do titular — por exemplo, segurança do site, melhoria dos serviços e prevenção a
                                    fraudes.
                                </li>
                                <li>
                                    <strong>Cumprimento de obrigação legal ou regulatória:</strong> quando há exigência de lei,
                                    regulamento ou determinação de autoridade competente.
                                </li>
                                <li>
                                    <strong>Proteção da vida ou da incolumidade física:</strong> em situações excepcionais que
                                    justifiquem o uso dos dados para proteção do titular ou de terceiros.
                                </li>
                            </ul>
                        </>
                    ),
                },
                /* ────────────────────── 6 ────────────────────── */
                {
                    id: "rastreamento",
                    title: "6. Política de Privacidade para Uso da Função de Rastreamento",
                    content: (
                        <>
                            <p>
                                O uso dos nossos sistemas e aplicativos com a função de rastreamento ativada implica na
                                coleta, uso e compartilhamento de <strong>dados de localização</strong>. Esta seção descreve como
                                esses dados são tratados. Ao utilizar nossos sistemas, você concorda com as práticas aqui
                                descritas.
                            </p>

                            <p><strong>6.1. Coleta de Dados de Localização</strong></p>
                            <ul>
                                <li>
                                    Coletamos dados de localização dos dispositivos de rastreamento instalados nos veículos e/ou do seu
                                    dispositivo móvel, incluindo informações sobre latitude, longitude, velocidade, direção,
                                    altitude e horário do registro da localização.
                                </li>
                                <li>
                                    Os dados de localização são obtidos por meio de tecnologias de geolocalização como GPS, GLONASS,
                                    Wi-Fi, torres de celular e outras tecnologias disponíveis no dispositivo e/ou rastreador.
                                </li>
                                <li>
                                    A coleta ocorre de forma contínua enquanto a função de rastreamento estiver ativada,
                                    possibilitando o monitoramento em tempo real e o registro do histórico de movimentação.
                                </li>
                            </ul>

                            <p><strong>6.2. Uso dos Dados de Localização</strong></p>
                            <ul>
                                <li>
                                    Os dados de localização coletados são usados <strong>exclusivamente</strong> para fornecer os
                                    serviços de rastreamento e monitoramento ao próprio cliente que os contratou.
                                </li>
                                <li>
                                    Podem ser utilizados para informações sobre a localização atual do veículo/dispositivo,
                                    histórico de movimentação, geração de relatórios de rota, alertas de cerca eletrônica,
                                    notificações de velocidade e demais funcionalidades contratadas.
                                </li>
                                <li>
                                    <strong>Não utilizamos os dados de localização para nenhuma outra finalidade</strong> que não
                                    seja a prestação dos serviços de rastreamento e gestão de frotas contratados pelo cliente.
                                </li>
                            </ul>

                            <p><strong>6.3. Compartilhamento dos Dados de Localização</strong></p>
                            <ul>
                                <li>
                                    Os dados de localização coletados <strong>não serão compartilhados com terceiros</strong>, salvo
                                    nas seguintes hipóteses: autorização expressa do cliente; cumprimento de obrigação legal ou
                                    ordem judicial; ou proteção da vida e da incolumidade física do titular ou de terceiros.
                                </li>
                                <li>
                                    Quando houver compartilhamento com operadores/fornecedores de tecnologia necessários à
                                    prestação do serviço, este será regido por contratos com cláusulas de sigilo e proteção de
                                    dados.
                                </li>
                            </ul>

                            <p><strong>6.4. Armazenamento dos Dados de Localização</strong></p>
                            <ul>
                                <li>
                                    Os dados de localização são armazenados de forma segura em servidores protegidos, com acesso
                                    restrito a pessoal autorizado, e serão retidos apenas pelo período necessário à prestação dos
                                    serviços e ao cumprimento de obrigações legais.
                                </li>
                                <li>
                                    Após o término do contrato de serviço ou quando solicitado pelo cliente, os dados de
                                    localização poderão ser excluídos permanentemente dos nossos sistemas, observados os prazos
                                    legais de retenção aplicáveis.
                                </li>
                            </ul>

                            <p><strong>6.5. Segurança dos Dados de Localização</strong></p>
                            <ul>
                                <li>
                                    Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger os
                                    dados de localização contra acesso não autorizado, alteração, divulgação ou destruição
                                    indevida.
                                </li>
                                <li>
                                    Mantemos os dados de localização em servidores seguros com criptografia, firewalls e
                                    controles rigorosos de acesso.
                                </li>
                            </ul>

                            <p><strong>6.6. Direitos do Cliente quanto aos Dados de Localização</strong></p>
                            <ul>
                                <li>
                                    O cliente tem o direito de acessar, corrigir e solicitar a exclusão dos seus dados de
                                    localização a qualquer momento, pelos canais indicados nesta Política.
                                </li>
                                <li>
                                    O cliente pode retirar o consentimento para o uso dos dados de localização, o que resultará
                                    na suspensão dos serviços de rastreamento vinculados a esta funcionalidade.
                                </li>
                                <li>
                                    A desativação da função de rastreamento do celular pode ser realizada a qualquer momento
                                    nas configurações do aplicativo ou do sistema.
                                </li>
                            </ul>
                        </>
                    ),
                },
                /* ────────────────────── 7 ────────────────────── */
                {
                    id: "compartilhamento",
                    title: "7. Compartilhamento de dados",
                    content: (
                        <>
                            <p>
                                A TK Rastreadores pode compartilhar dados pessoais com terceiros nas seguintes hipóteses:
                            </p>
                            <ul>
                                <li>
                                    <strong>Operadores e fornecedores de tecnologia:</strong> provedores de hospedagem, plataformas
                                    de rastreamento, ferramentas de e-mail e suporte — estritamente necessários para viabilizar a
                                    operação dos serviços.
                                </li>
                                <li>
                                    <strong>Obrigação legal ou ordem judicial:</strong> quando houver determinação de autoridade
                                    competente.
                                </li>
                                <li>
                                    <strong>Proteção de direitos:</strong> para resguardar direitos da TK Rastreadores em processos
                                    judiciais, administrativos ou arbitrais.
                                </li>
                            </ul>
                            <p>
                                <strong>Não vendemos, alugamos ou cedemos dados pessoais a terceiros para fins comerciais
                                ou publicitários.</strong> Todo compartilhamento ocorre sob contratos com cláusulas de
                                confidencialidade e medidas de segurança compatíveis.
                            </p>
                        </>
                    ),
                },
                /* ────────────────────── 8 ────────────────────── */
                {
                    id: "retencao",
                    title: "8. Retenção e prazos",
                    content: (
                        <>
                            <p>
                                Mantemos dados pessoais pelo tempo necessário para cumprir as finalidades descritas nesta
                                Política, observando:
                            </p>
                            <ul>
                                <li>Prazos contratuais e de prestação de serviço vigentes.</li>
                                <li>Prazos legais e regulatórios aplicáveis (tributários, trabalhistas, cíveis, entre outros).</li>
                                <li>Prazos de guarda para exercício de direitos em eventuais processos judiciais ou administrativos.</li>
                            </ul>
                            <p>
                                Após o encerramento das finalidades ou dos prazos legais, os dados serão eliminados ou
                                anonimizados de forma segura.
                            </p>
                        </>
                    ),
                },
                /* ────────────────────── 9 ────────────────────── */
                {
                    id: "seguranca",
                    title: "9. Segurança da informação",
                    content: (
                        <>
                            <p>
                                A TK Rastreadores implementa medidas de segurança técnicas e organizacionais para proteger
                                os dados pessoais sob sua responsabilidade, incluindo:
                            </p>
                            <ul>
                                <li>Criptografia de dados em trânsito e em repouso.</li>
                                <li>Firewalls, antivírus e proteção de rede.</li>
                                <li>Controles de acesso com autenticação e segregação de privilégios.</li>
                                <li>Monitoramento contínuo de sistemas e servidores.</li>
                                <li>Backups regulares e planos de recuperação de desastres.</li>
                                <li>Treinamentos internos sobre proteção de dados e boas práticas de segurança.</li>
                            </ul>
                            <p>
                                Embora adotemos as melhores práticas do mercado, nenhum sistema é completamente imune a
                                incidentes. Em caso de incidente de segurança que possa acarretar risco relevante aos
                                titulares, comunicaremos os afetados e a Autoridade Nacional de Proteção de Dados (ANPD)
                                nos termos da legislação.
                            </p>
                        </>
                    ),
                },
                /* ────────────────────── 10 ────────────────────── */
                {
                    id: "direitos",
                    title: "10. Direitos do titular",
                    content: (
                        <>
                            <p>
                                Nos termos da LGPD, você — enquanto titular dos dados — pode exercer os seguintes direitos:
                            </p>
                            <ul>
                                <li><strong>Confirmação</strong> da existência de tratamento de dados.</li>
                                <li><strong>Acesso</strong> aos seus dados pessoais tratados por nós.</li>
                                <li><strong>Correção</strong> de dados incompletos, inexatos ou desatualizados.</li>
                                <li><strong>Anonimização, bloqueio ou eliminação</strong> de dados desnecessários, excessivos ou tratados em desconformidade com a lei.</li>
                                <li><strong>Portabilidade</strong> dos dados a outro fornecedor de serviço, mediante requisição expressa.</li>
                                <li><strong>Eliminação</strong> dos dados tratados com base em consentimento, exceto quando houver obrigação legal de retenção.</li>
                                <li><strong>Informação</strong> sobre entidades públicas e privadas com as quais compartilhamos dados.</li>
                                <li><strong>Revogação do consentimento</strong> a qualquer momento, sem prejuízo da legalidade do tratamento anterior.</li>
                                <li><strong>Oposição</strong> ao tratamento realizado com fundamento em hipótese de dispensa de consentimento, quando aplicável.</li>
                                <li><strong>Revisão de decisões automatizadas</strong> que afetem seus interesses, quando houver.</li>
                            </ul>
                            <p>
                                Para exercer qualquer destes direitos, entre em contato conosco: <code>{contact.email}</code>.
                                Responderemos sua solicitação em até <strong>15 (quinze) dias úteis</strong>, podendo este prazo ser
                                prorrogado justificadamente conforme a complexidade do caso.
                            </p>
                        </>
                    ),
                },
                /* ────────────────────── 11 ────────────────────── */
                {
                    id: "deveres",
                    title: "11. Deveres do titular",
                    content: (
                        <>
                            <p>
                                Assim como garantimos direitos, é importante ressaltar que o titular também possui deveres:
                            </p>
                            <ul>
                                <li>
                                    Fornecer informações verdadeiras, completas e atualizadas ao utilizar nossos serviços e
                                    canais de contato.
                                </li>
                                <li>
                                    Manter sigilo de credenciais de acesso (login, senha e tokens) aos nossos sistemas e
                                    aplicativos, não compartilhando-os com terceiros.
                                </li>
                                <li>
                                    Tomar conhecimento desta Política de Privacidade e de eventuais atualizações, revisitando
                                    periodicamente nossos canais.
                                </li>
                                <li>
                                    Comunicar imediatamente à TK Rastreadores qualquer uso indevido ou não autorizado de sua
                                    conta ou dados.
                                </li>
                            </ul>
                        </>
                    ),
                },
                /* ────────────────────── 12 ────────────────────── */
                {
                    id: "menores",
                    title: "12. Dados de menores de idade",
                    content: (
                        <>
                            <p>
                                Os serviços da TK Rastreadores são direcionados a empresas e profissionais (relações B2B). Não
                                coletamos intencionalmente dados pessoais de menores de 18 anos.
                            </p>
                            <p>
                                Caso, no contexto da relação trabalhista com nossos colaboradores, seja necessário tratar
                                dados de menores de idade (dependentes para benefícios, por exemplo), tal tratamento será
                                realizado com base legal específica e com o devido consentimento dos responsáveis legais,
                                observando todas as garantias previstas na LGPD.
                            </p>
                        </>
                    ),
                },
                /* ────────────────────── 13 ────────────────────── */
                {
                    id: "terceiros",
                    title: "13. Sites e aplicativos de terceiros",
                    content: (
                        <>
                            <p>
                                Nosso site e sistemas podem conter links para sites ou serviços de terceiros (redes sociais,
                                plataformas de pagamento, integrações com sistemas parceiros, entre outros). A TK Rastreadores
                                não se responsabiliza pelas práticas de privacidade desses terceiros.
                            </p>
                            <p>
                                Recomendamos que você leia as Políticas de Privacidade de cada serviço externo antes de
                                fornecer dados pessoais.
                            </p>
                        </>
                    ),
                },
                /* ────────────────────── 14 ────────────────────── */
                {
                    id: "cookies",
                    title: "14. Cookies e tecnologias similares",
                    content: (
                        <>
                            <p>
                                Utilizamos cookies e tecnologias similares para garantir o funcionamento adequado do site,
                                melhorar a experiência de navegação, analisar o uso do site e, quando autorizado, para fins
                                de comunicação e marketing.
                            </p>
                            <ul>
                                <li>
                                    <strong>Cookies essenciais:</strong> necessários para o funcionamento básico do site e dos
                                    sistemas — não podem ser desativados.
                                </li>
                                <li>
                                    <strong>Cookies de desempenho/analíticos:</strong> permitem analisar como os visitantes
                                    utilizam o site para melhorias contínuas.
                                </li>
                                <li>
                                    <strong>Cookies de funcionalidade:</strong> armazenam preferências do usuário para
                                    personalizar a experiência.
                                </li>
                            </ul>
                            <p>
                                Você pode gerenciar e/ou desabilitar cookies por meio das configurações do seu navegador.
                                Observe que a desativação de cookies essenciais pode prejudicar o funcionamento do site.
                            </p>
                        </>
                    ),
                },
                /* ────────────────────── 15 ────────────────────── */
                {
                    id: "encarregado",
                    title: "15. Encarregado de Dados (DPO)",
                    content: (
                        <>
                            <p>
                                A TK Rastreadores designou um Encarregado de Proteção de Dados (DPO) para administrar
                                questões relativas ao tratamento de dados pessoais e à conformidade com a LGPD.
                            </p>
                            <p>
                                Para tratar de assuntos relacionados à privacidade e proteção de dados, entre em contato:
                            </p>
                            <ul>
                                <li><strong>E-mail:</strong> <code>{contact.email}</code></li>
                                <li><strong>WhatsApp:</strong> {contact.comercial.whatsapp}</li>
                            </ul>
                            <p>
                                As solicitações são respondidas em até <strong>15 (quinze) dias úteis</strong>. Casos mais
                                complexos poderão demandar prazo adicional, do qual o titular será devidamente informado.
                            </p>
                        </>
                    ),
                },
                /* ────────────────────── 16 ────────────────────── */
                {
                    id: "alteracoes",
                    title: "16. Alterações desta Política",
                    content: (
                        <>
                            <p>
                                A TK Rastreadores poderá atualizar esta Política de Privacidade periodicamente para refletir
                                melhorias nos serviços, mudanças operacionais, avanços tecnológicos ou novos requisitos legais
                                e regulatórios.
                            </p>
                            <p>
                                A versão atualizada será sempre publicada neste site com a respectiva data de atualização.
                                Recomendamos que você revise esta Política regularmente para se manter informado sobre como
                                protegemos seus dados.
                            </p>
                            <p>
                                Alterações substanciais poderão ser comunicadas por meio dos nossos canais oficiais.
                            </p>
                        </>
                    ),
                },
                /* ────────────────────── 17 ────────────────────── */
                {
                    id: "disposicoes-finais",
                    title: "17. Disposições finais",
                    content: (
                        <>
                            <p>
                                Esta Política de Privacidade é regida pela legislação brasileira, especialmente pela Lei
                                Geral de Proteção de Dados (Lei nº 13.709/2018) e pelo Marco Civil da Internet
                                (Lei nº 12.965/2014).
                            </p>
                            <p>
                                Caso algum dispositivo desta Política seja considerado inválido ou inexequível, os demais
                                dispositivos permanecerão em pleno vigor e efeito.
                            </p>
                            <p>
                                Eventuais conflitos serão submetidos ao Foro da Comarca de Porto Velho/RO, com exclusão de
                                qualquer outro, por mais privilegiado que seja.
                            </p>
                        </>
                    ),
                },
            ]}
        />
    );
}
