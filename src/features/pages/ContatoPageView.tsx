"use client";

import * as React from "react";
import styled from "@emotion/styled";
import { Container } from "@/components/ui/Container";
import { Page } from "@/components/ui/Page";
import { Button, ButtonLink } from "@/components/ui/Button";
import { contact } from "@/content/site";
import { tokens } from "@/theme/tokens";
import {
    WhatsappLogo,
    Phone,
    EnvelopeSimple,
    Clock,
    ArrowRight,
} from "@phosphor-icons/react";

// ─────────────────────────────────────────────────────────────
// STYLED COMPONENTS
// ─────────────────────────────────────────────────────────────

const Hero = styled.section`
  padding: 80px 0 60px;
  background: linear-gradient(180deg, #fafafa 0%, #ffffff 100%);

  @media (max-width: ${tokens.breakpoints.md}px) {
    padding: 60px 0 40px;
  }
`;

const HeroContent = styled.div`
  max-width: 620px;
`;

const Title = styled.h1`
  font-family: 'Urbanist', sans-serif;
  font-size: 48px;
  font-weight: 800;
  color: ${tokens.colors.black};

  @media (max-width: ${tokens.breakpoints.md}px) {
    font-size: 36px;
  }
`;

const Lead = styled.p`
  margin-top: 16px;
  font-size: 18px;
  line-height: 1.7;
  color: ${tokens.colors.muted};
`;

const Grid = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 24px;

  @media (max-width: ${tokens.breakpoints.lg}px) {
    grid-template-columns: 1fr;
  }
`;

const Panel = styled.div`
  padding: 24px;
  background: white;
  border: 1px solid ${tokens.colors.border};
  border-radius: ${tokens.radius.lg}px;
`;

const PanelTitle = styled.h2`
  font-family: 'Urbanist', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: ${tokens.colors.black};
`;

const PanelLead = styled.p`
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.7;
  color: ${tokens.colors.muted};
`;

const Form = styled.form`
  margin-top: 20px;
  display: grid;
  gap: 16px;
`;

const FieldRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: ${tokens.breakpoints.md}px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: grid;
  gap: 6px;
  font-size: 13px;
  font-weight: 500;
  color: ${tokens.colors.muted};
`;

const Input = styled.input`
  height: 44px;
  padding: 0 16px;
  font-family: 'Urbanist', sans-serif;
  font-size: 14px;
  border: 1px solid ${tokens.colors.border};
  border-radius: ${tokens.radius.pill}px;
  outline: none;
  background: #fafafa;
  transition: border-color 0.2s ease, background 0.2s ease;

  &:focus {
    border-color: rgba(225, 6, 0, 0.5);
    background: white;
  }
`;

const Textarea = styled.textarea`
  min-height: 120px;
  padding: 14px 16px;
  font-family: 'Urbanist', sans-serif;
  font-size: 14px;
  border: 1px solid ${tokens.colors.border};
  border-radius: 16px;
  outline: none;
  background: #fafafa;
  resize: vertical;
  transition: border-color 0.2s ease, background 0.2s ease;

  &:focus {
    border-color: rgba(225, 6, 0, 0.5);
    background: white;
  }
`;

const FormActions = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const Divider = styled.div`
  height: 1px;
  background: ${tokens.colors.border};
  margin: 24px 0;
`;

const FAQ = styled.div`
  display: grid;
  gap: 12px;

  details {
    padding: 14px 16px;
    background: #fafafa;
    border: 1px solid ${tokens.colors.border};
    border-radius: 12px;
    transition: border-color 0.2s ease;

    &[open] {
      border-color: rgba(225, 6, 0, 0.3);
    }
  }

  summary {
    cursor: pointer;
    font-family: 'Urbanist', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: ${tokens.colors.black};
    list-style: none;

    &::-webkit-details-marker {
      display: none;
    }
  }

  p {
    margin-top: 12px;
    font-size: 14px;
    line-height: 1.7;
    color: ${tokens.colors.muted};
  }
`;

const Aside = styled.aside`
  display: grid;
  gap: 16px;
  align-content: start;
`;

const ContactCards = styled.div`
  display: grid;
  gap: 12px;
`;

const ContactCard = styled.a`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  background: white;
  border: 1px solid ${tokens.colors.border};
  border-radius: ${tokens.radius.lg}px;
  color: ${tokens.colors.text};
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: rgba(225, 6, 0, 0.3);
    transform: translateY(-2px);
  }

  svg {
    flex-shrink: 0;
    color: ${tokens.colors.brand.red};
  }
`;

const ContactCardText = styled.div`
  strong {
    display: block;
    font-family: 'Urbanist', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: ${tokens.colors.black};
  }

  span {
    display: block;
    margin-top: 4px;
    font-size: 13px;
    color: ${tokens.colors.muted};
    word-break: break-word;
  }
`;

const InfoPanel = styled.div`
  padding: 24px;
  background: white;
  border: 1px solid ${tokens.colors.border};
  border-radius: ${tokens.radius.lg}px;
`;

const InfoList = styled.div`
  margin-top: 16px;
  display: grid;
  gap: 10px;

  p {
    font-size: 14px;
    line-height: 1.6;
    color: ${tokens.colors.muted};

    b {
      color: ${tokens.colors.text};
      font-weight: 600;
    }
  }
`;

// ─────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────

function buildMailto(subject: string, body: string) {
    const s = encodeURIComponent(subject);
    const b = encodeURIComponent(body);
    return `mailto:${contact.email}?subject=${s}&body=${b}`;
}

// ─────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────

export function ContatoPageView() {
    const [name, setName] = React.useState("");
    const [company, setCompany] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [message, setMessage] = React.useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = "Contato — TK Rastreadores";
        const body = [
            `Nome: ${name || "-"}`,
            `Empresa: ${company || "-"}`,
            `E-mail: ${email || "-"}`,
            `Telefone/WhatsApp: ${phone || "-"}`,
            "",
            "Mensagem:",
            message || "-",
        ].join("\n");

        window.location.href = buildMailto(subject, body);
    };

    return (
        <Page>
            <Hero>
                <Container>
                    <HeroContent>
                        <Title>Contato</Title>
                        <Lead>
                            Fale com a equipe da TK Rastreadores. Podemos te ajudar a escolher a
                            solução ideal para rastreamento, telemetria e gestão de frota.
                        </Lead>
                    </HeroContent>

                    <Grid>
                        <Panel>
                            <PanelTitle>Solicite contato</PanelTitle>
                            <PanelLead>
                                Envie sua mensagem e retornaremos o mais rápido possível.
                            </PanelLead>

                            <Form onSubmit={handleSubmit}>
                                <FieldRow>
                                    <Label>
                                        Nome
                                        <Input
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Seu nome"
                                        />
                                    </Label>
                                    <Label>
                                        Empresa (opcional)
                                        <Input
                                            value={company}
                                            onChange={(e) => setCompany(e.target.value)}
                                            placeholder="Nome da empresa"
                                        />
                                    </Label>
                                </FieldRow>
                                <FieldRow>
                                    <Label>
                                        E-mail
                                        <Input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="seu@email.com"
                                            inputMode="email"
                                        />
                                    </Label>
                                    <Label>
                                        Telefone / WhatsApp
                                        <Input
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="(DD) 00000-0000"
                                            inputMode="tel"
                                        />
                                    </Label>
                                </FieldRow>
                                <Label>
                                    Mensagem
                                    <Textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Conte um pouco sobre sua necessidade (frota, tipo de operação, objetivo...)"
                                    />
                                </Label>

                                <FormActions>
                                    <Button type="submit">
                                        Enviar por e-mail <ArrowRight size={18} weight="bold" />
                                    </Button>
                                    <ButtonLink href={contact.whatsappLink} variant="ghost">
                                        <WhatsappLogo size={18} weight="fill" /> Abrir WhatsApp
                                    </ButtonLink>
                                </FormActions>
                            </Form>

                            <Divider />

                            <PanelTitle>Perguntas rápidas</PanelTitle>
                            <PanelLead>
                                Respostas objetivas para acelerar seu atendimento.
                            </PanelLead>
                            <div style={{ marginTop: 16 }}>
                                <FAQ>
                                    <details>
                                        <summary>Quanto tempo leva para instalar e ativar?</summary>
                                        <p>
                                            Depende do volume e do tipo de equipamento, mas a implantação costuma
                                            ser rápida e acompanhada pela nossa equipe.
                                        </p>
                                    </details>
                                    <details>
                                        <summary>Tem acesso por aplicativo?</summary>
                                        <p>
                                            Sim. Nossas soluções podem incluir acesso por app e/ou web, com
                                            permissões por usuário.
                                        </p>
                                    </details>
                                    <details>
                                        <summary>Consigo gerar relatórios e indicadores?</summary>
                                        <p>
                                            Sim. Você acompanha rotas, eventos e indicadores para apoiar decisões
                                            e reduzir custos operacionais.
                                        </p>
                                    </details>
                                </FAQ>
                            </div>
                        </Panel>

                        <Aside>
                            <ContactCards>
                                <ContactCard href={contact.whatsappLink}>
                                    <WhatsappLogo size={22} weight="fill" />
                                    <ContactCardText>
                                        <strong>WhatsApp</strong>
                                        <span>{contact.whatsapp}</span>
                                    </ContactCardText>
                                </ContactCard>

                                <ContactCard href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                                    <Phone size={22} weight="bold" />
                                    <ContactCardText>
                                        <strong>Telefone</strong>
                                        <span>{contact.phone}</span>
                                    </ContactCardText>
                                </ContactCard>

                                <ContactCard href={`mailto:${contact.email}`}>
                                    <EnvelopeSimple size={22} weight="bold" />
                                    <ContactCardText>
                                        <strong>E-mail</strong>
                                        <span>{contact.email}</span>
                                    </ContactCardText>
                                </ContactCard>

                                <ContactCard as="div" style={{ cursor: "default" }}>
                                    <Clock size={22} weight="bold" />
                                    <ContactCardText>
                                        <strong>Horário</strong>
                                        <span>Comercial e suporte conforme disponibilidade.</span>
                                    </ContactCardText>
                                </ContactCard>
                            </ContactCards>

                            <InfoPanel>
                                <PanelTitle>Atendimento</PanelTitle>
                                <PanelLead>
                                    Atendemos operações em todo o Brasil. Caso precise de visita técnica,
                                    descreva no formulário.
                                </PanelLead>
                                <InfoList>
                                    <p>
                                        <b>Modalidade:</b> remoto e presencial (quando necessário)
                                    </p>
                                    <p>
                                        <b>Referência:</b> suporte humanizado e implantação assistida
                                    </p>
                                </InfoList>
                            </InfoPanel>
                        </Aside>
                    </Grid>
                </Container>
            </Hero>
        </Page>
    );
}
