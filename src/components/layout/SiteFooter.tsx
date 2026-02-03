"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import { Container } from "@/components/ui/Container";
import { contact, services } from "@/content/site";
import { tokens } from "@/theme/tokens";
import {
    IconFacebook,
    IconInstagram,
    IconMail,
    IconPhone,
    IconWhatsapp,
} from "./icons";
import { FooterQuestionForm } from "./FooterQuestionForm";

const Footer = styled.footer`
  margin-top: 80px;
  padding: 56px 0 26px;
  border-top: 1px solid var(--tk-border);
  background: var(--tk-bg);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1fr 1.4fr;
  gap: 36px;
  align-items: start;

  @media (max-width: ${tokens.breakpoints.lg}px) {
    grid-template-columns: 1.2fr 1fr 1fr;
  }

  @media (max-width: ${tokens.breakpoints.md}px) {
    grid-template-columns: 1fr;
    gap: 26px;
  }
`;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
`;

const Desc = styled.p`
  color: var(--tk-muted);
  font-size: 14px;
  line-height: 1.6;
  max-width: 360px;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 18px;

  a {
    width: 34px;
    height: 34px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${tokens.radius.pill}px;
    border: 1px solid var(--tk-border);
    color: var(--tk-text);
    transition: transform 140ms ease, opacity 140ms ease;

    &:hover {
      opacity: 0.9;
      transform: scale(1.06);
    }

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const ColTitle = styled.h3`
  font-family: 'Urbanist', sans-serif;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const List = styled.ul`
  list-style: none;
  display: grid;
  gap: 9px;

  a,
  span {
    font-size: 14px;
    color: var(--tk-muted);
    line-height: 1.4;
  }

  a:hover {
    color: var(--tk-text);
  }
`;

const ContactItem = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--tk-muted);
  font-size: 14px;

  svg {
    width: 18px;
    height: 18px;
    color: var(--tk-text);
  }

  &:hover {
    color: var(--tk-text);
  }
`;

const BottomBar = styled.div`
  margin-top: 42px;
  padding-top: 18px;
  border-top: 1px solid var(--tk-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: ${tokens.breakpoints.md}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 22px;
  flex-wrap: wrap;

  a {
    font-size: 13px;
    color: var(--tk-muted);
  }

  a:hover {
    color: var(--tk-text);
  }
`;

const Year = styled.span`
  font-size: 13px;
  color: var(--tk-muted);
`;

export function SiteFooter() {
    return (
        <Footer>
            <Container>
                <Grid>
                    <div>
                        <LogoRow>
                            <Image
                                src="/logo/logo-v1.svg"
                                alt="TK Rastreadores"
                                width={112}
                                height={34}
                                priority={false}
                            />
                        </LogoRow>
                        <Desc>
                            Desenvolvimento de soluções tecnológicas em geoposicionamento via
                            satélite para gestão e monitoramento de frotas.
                        </Desc>
                        <SocialRow>
                            <a href={contact.whatsappLink} aria-label="WhatsApp">
                                <IconWhatsapp />
                            </a>
                            <a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <IconInstagram />
                            </a>
                        </SocialRow>
                    </div>

                    <div>
                        <ColTitle>Serviços</ColTitle>
                        <List>
                            {services.slice(0, 10).map((s) => (
                                <li key={s.slug}>
                                    <Link href={`/servicos/${s.slug}`}>{s.title}</Link>
                                </li>
                            ))}
                        </List>
                    </div>

                    <div>
                        <ColTitle>Mapa do site</ColTitle>
                        <List>
                            <li>
                                <Link href="/">Página inicial</Link>
                            </li>
                            <li>
                                <Link href="/servicos">Serviços</Link>
                            </li>
                            <li>
                                <Link href="/contato">Contato</Link>
                            </li>
                            <li>
                                <Link href="/quem-somos">Quem somos</Link>
                            </li>
                        </List>
                    </div>

                    <div>
                        <ColTitle>Contato</ColTitle>
                        <List>
                            <li>
                                <ContactItem href={contact.comercial.link} target="_blank" rel="noopener noreferrer">
                                    <IconWhatsapp />
                                    Comercial: {contact.comercial.whatsapp}
                                </ContactItem>
                            </li>
                            <li>
                                <ContactItem href={contact.suporte.link} target="_blank" rel="noopener noreferrer">
                                    <IconWhatsapp />
                                    Suporte: {contact.suporte.whatsapp}
                                </ContactItem>
                            </li>
                            <li>
                                <ContactItem href={contact.monitoramento.link} target="_blank" rel="noopener noreferrer">
                                    <IconWhatsapp />
                                    Monitoramento: {contact.monitoramento.whatsapp}
                                </ContactItem>
                            </li>
                            <li>
                                <ContactItem href={`mailto:${contact.email}`}>
                                    <IconMail />
                                    {contact.email}
                                </ContactItem>
                            </li>
                        </List>
                    </div>

                    <div>
                        <ColTitle>Ficou com dúvida?</ColTitle>
                        <Desc style={{ marginBottom: 12 }}>
                            Digite a sua dúvida para falar diretamente com nossos suportes
                        </Desc>
                        <FooterQuestionForm />
                    </div>
                </Grid>

                <BottomBar>
                    <Year>{new Date().getFullYear()} Todos os direitos reservados</Year>
                    <BottomLinks>
                        <Link href="/politica-de-privacidade">Política de privacidade</Link>
                        <Link href="/aceitacao-de-cookies">Aceitação de cookies</Link>
                    </BottomLinks>
                </BottomBar>
            </Container>
        </Footer>
    );
}
