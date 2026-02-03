"use client";

import styled from "@emotion/styled";
import { Container } from "@/components/ui/Container";
import { Page } from "@/components/ui/Page";
import { tokens } from "@/theme/tokens";
import { ButtonLink } from "@/components/ui/Button";
import { aboutText, contact } from "@/content/site";
import {
  ShieldCheck,
  TrendUp,
  Headset,
  SlidersHorizontal,
  UsersThree,
  Target,
  Eye,
  Handshake,
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
  max-width: 720px;
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

const Actions = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const Section = styled.section`
  padding: 60px 0;

  @media (max-width: ${tokens.breakpoints.md}px) {
    padding: 40px 0;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Urbanist', sans-serif;
  font-size: 28px;
  font-weight: 800;
  color: ${tokens.colors.black};
`;

const SectionLead = styled.p`
  margin-top: 12px;
  font-size: 16px;
  line-height: 1.7;
  color: ${tokens.colors.muted};
  max-width: 700px;
`;

const ContentBox = styled.div`
  margin-top: 24px;
  padding: 24px;
  background: white;
  border: 1px solid ${tokens.colors.border};
  border-radius: ${tokens.radius.lg}px;

  p {
    font-size: 15px;
    line-height: 1.85;
    color: ${tokens.colors.muted};
    white-space: pre-line;
  }
`;

const FeaturesGrid = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: ${tokens.breakpoints.lg}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${tokens.breakpoints.sm}px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  padding: 20px;
  background: white;
  border: 1px solid ${tokens.colors.border};
  border-radius: ${tokens.radius.lg}px;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: rgba(225, 6, 0, 0.3);
  }

  svg {
    color: ${tokens.colors.brand.red};
    margin-bottom: 12px;
  }

  h3 {
    font-family: 'Urbanist', sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: ${tokens.colors.black};
    margin-bottom: 6px;
  }

  p {
    font-size: 13px;
    line-height: 1.6;
    color: ${tokens.colors.muted};
  }
`;

const ValuesGrid = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: ${tokens.breakpoints.lg}px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  padding: 24px;
  background: white;
  border: 1px solid ${tokens.colors.border};
  border-radius: ${tokens.radius.lg}px;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: rgba(225, 6, 0, 0.3);
  }

  h3 {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Urbanist', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: ${tokens.colors.black};
  }

  p {
    margin-top: 12px;
    font-size: 14px;
    line-height: 1.7;
    color: ${tokens.colors.muted};
  }

  svg {
    color: ${tokens.colors.brand.red};
  }
`;

const CTA = styled.div`
  margin-top: 40px;
  padding: 32px;
  background: ${tokens.colors.black};
  border-radius: ${tokens.radius.lg}px;
`;

const CTATitle = styled.h3`
  font-family: 'Urbanist', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: white;
`;

const CTALead = styled.p`
  margin-top: 8px;
  font-size: 15px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
`;

const CTAActions = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

// ─────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────

export function WhoWeArePageView() {
  return (
    <Page>
      <Hero>
        <Container>
          <HeroContent>
            <Title>Quem somos</Title>
            <Lead>
              Desde 2010, oferecendo soluções em rastreamento e telemetria com foco em segurança,
              eficiência operacional e suporte humanizado para frotas de todos os portes.
            </Lead>
            <Actions>
              <ButtonLink href="/servicos">
                Ver soluções <ArrowRight size={18} weight="bold" />
              </ButtonLink>
              <ButtonLink href={contact.comercial.link} target="_blank" rel="noopener noreferrer" variant="ghost">
                Falar com especialista
              </ButtonLink>
            </Actions>
          </HeroContent>
        </Container>
      </Hero>

      <Section>
        <Container>
          <SectionTitle>O que nos diferencia</SectionTitle>
          <SectionLead>
            Uma combinação de experiência, tecnologia e atendimento que gera resultados reais.
          </SectionLead>

          <FeaturesGrid>
            <FeatureCard>
              <ShieldCheck size={24} weight="bold" />
              <h3>Segurança</h3>
              <p>Monitoramento 24h com alertas inteligentes para proteção da operação.</p>
            </FeatureCard>
            <FeatureCard>
              <TrendUp size={24} weight="bold" />
              <h3>Eficiência</h3>
              <p>Indicadores claros que apoiam decisões e reduzem custos operacionais.</p>
            </FeatureCard>
            <FeatureCard>
              <Headset size={24} weight="bold" />
              <h3>Suporte</h3>
              <p>Atendimento humanizado com foco na resolução e no sucesso do cliente.</p>
            </FeatureCard>
            <FeatureCard>
              <SlidersHorizontal size={24} weight="bold" />
              <h3>Flexibilidade</h3>
              <p>Soluções adaptáveis para diferentes tipos de frota e operação.</p>
            </FeatureCard>
          </FeaturesGrid>
        </Container>
      </Section>

      <Section style={{ background: "#fafafa" }}>
        <Container>
          <SectionTitle>Nossa história</SectionTitle>
          <SectionLead>
            Uma trajetória de evolução constante para entregar sempre mais valor aos nossos clientes.
          </SectionLead>
          <ContentBox>
            <p>{aboutText}</p>
          </ContentBox>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Missão, visão e valores</SectionTitle>
          <SectionLead>
            Os princípios que guiam nossas decisões e o relacionamento com cada cliente.
          </SectionLead>

          <ValuesGrid>
            <ValueCard>
              <h3>
                <Target size={20} weight="bold" /> Missão
              </h3>
              <p>
                Oferecer soluções inteligentes de rastreamento e telemetria para apoiar decisões
                estratégicas e otimizar recursos.
              </p>
            </ValueCard>
            <ValueCard>
              <h3>
                <Eye size={20} weight="bold" /> Visão
              </h3>
              <p>
                Ser referência nacional em monitoramento veicular, reconhecida por inovação,
                qualidade e excelência no atendimento.
              </p>
            </ValueCard>
            <ValueCard>
              <h3>
                <Handshake size={20} weight="bold" /> Valores
              </h3>
              <p>
                Transparência, confiabilidade, evolução contínua e foco em resultados com
                segurança e suporte próximo ao cliente.
              </p>
            </ValueCard>
          </ValuesGrid>

          <CTA>
            <CTATitle>Quer conhecer nossas soluções?</CTATitle>
            <CTALead>
              Entre em contato e descubra como podemos ajudar sua operação.
            </CTALead>
            <CTAActions>
              <ButtonLink
                href={contact.comercial.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "white", color: tokens.colors.black }}
              >
                Falar com especialista
              </ButtonLink>
              <ButtonLink
                href={contact.comercial.link}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: "white" }}
              >
                Solicitar orçamento
              </ButtonLink>
            </CTAActions>
          </CTA>
        </Container>
      </Section>
    </Page>
  );
}
