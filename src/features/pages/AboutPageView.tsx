"use client";

import styled from "@emotion/styled";
import { Container } from "@/components/ui/Container";
import { Page } from "@/components/ui/Page";
import { tokens } from "@/theme/tokens";
import { ButtonLink } from "@/components/ui/Button";
import { aboutText, contact } from "@/content/site";
import {
  ClockCounterClockwise,
  ShieldCheck,
  Headset,
  TrendUp,
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

const StatsRow = styled.div`
  margin-top: 40px;
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

const StatCard = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  background: white;
  border: 1px solid ${tokens.colors.border};
  border-radius: ${tokens.radius.lg}px;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: rgba(225, 6, 0, 0.3);
  }

  svg {
    flex-shrink: 0;
    color: ${tokens.colors.brand.red};
  }
`;

const StatText = styled.div`
  strong {
    display: block;
    font-family: 'Urbanist', sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: ${tokens.colors.black};
  }

  span {
    display: block;
    margin-top: 2px;
    font-size: 13px;
    color: ${tokens.colors.muted};
  }
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

export function AboutPageView() {
  return (
    <Page>
      <Hero>
        <Container>
          <HeroContent>
            <Title>Sobre nós</Title>
            <Lead>
              Há 14 anos desenvolvendo soluções em geoposicionamento, rastreamento e
              telemetria para apoiar decisões, reduzir custos e aumentar a segurança das operações.
            </Lead>
            <Actions>
              <ButtonLink href="/servicos">
                Ver soluções <ArrowRight size={18} weight="bold" />
              </ButtonLink>
              <ButtonLink href={contact.whatsappLink} variant="ghost">
                Falar com especialista
              </ButtonLink>
            </Actions>
          </HeroContent>

          <StatsRow>
            <StatCard>
              <ClockCounterClockwise size={22} weight="bold" />
              <StatText>
                <strong>14 anos</strong>
                <span>Experiência e evolução</span>
              </StatText>
            </StatCard>
            <StatCard>
              <ShieldCheck size={22} weight="bold" />
              <StatText>
                <strong>Operação segura</strong>
                <span>Alertas e conformidade</span>
              </StatText>
            </StatCard>
            <StatCard>
              <TrendUp size={22} weight="bold" />
              <StatText>
                <strong>Eficiência</strong>
                <span>Indicadores para reduzir custos</span>
              </StatText>
            </StatCard>
            <StatCard>
              <Headset size={22} weight="bold" />
              <StatText>
                <strong>Suporte humanizado</strong>
                <span>Foco em resultado</span>
              </StatText>
            </StatCard>
          </StatsRow>
        </Container>
      </Hero>

      <Section>
        <Container>
          <SectionTitle>Quem é a TK Rastreadores</SectionTitle>
          <SectionLead>
            Somos uma empresa focada em tecnologia aplicada à gestão de frotas: visibilidade,
            controle e inteligência para a operação.
          </SectionLead>
          <ContentBox>
            <p>{aboutText}</p>
          </ContentBox>

          <div style={{ marginTop: 48 }}>
            <SectionTitle>Missão, visão e valores</SectionTitle>
            <SectionLead>
              Um jeito de trabalhar que prioriza confiança, evolução tecnológica e entrega real.
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
              <CTATitle>Vamos conversar sobre sua operação?</CTATitle>
              <CTALead>
                Conte o seu cenário e te ajudamos a escolher a solução ideal para sua frota.
              </CTALead>
              <CTAActions>
                <ButtonLink
                  href={contact.whatsappLink}
                  style={{ background: "white", color: tokens.colors.black }}
                >
                  Falar com especialista
                </ButtonLink>
                <ButtonLink
                  href="/contato"
                  variant="ghost"
                  style={{ borderColor: "rgba(255,255,255,0.3)", color: "white" }}
                >
                  Ir para contato
                </ButtonLink>
              </CTAActions>
            </CTA>
          </div>
        </Container>
      </Section>
    </Page>
  );
}
