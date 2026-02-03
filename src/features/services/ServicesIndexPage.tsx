"use client";

import styled from "@emotion/styled";
import { Container } from "@/components/ui/Container";
import { Page } from "@/components/ui/Page";
import { services } from "@/content/site";
import Link from "next/link";
import { tokens } from "@/theme/tokens";
import { ArrowRight } from "@phosphor-icons/react";

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
  max-width: 700px;
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

const Section = styled.section`
  padding: 0 0 80px;

  @media (max-width: ${tokens.breakpoints.md}px) {
    padding: 0 0 60px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: ${tokens.breakpoints.lg}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${tokens.breakpoints.md}px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: white;
  border: 1px solid ${tokens.colors.border};
  border-radius: ${tokens.radius.lg}px;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: rgba(225, 6, 0, 0.3);
    transform: translateY(-4px);
  }
`;

const CardTitle = styled.h3`
  font-family: 'Urbanist', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: ${tokens.colors.black};
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  line-height: 1.65;
  color: ${tokens.colors.muted};
  flex: 1;
`;

const CardLink = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 16px;
  font-family: 'Urbanist', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: ${tokens.colors.brand.red};
`;

// ─────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────

export function ServicesIndexPage({ title = "Soluções" }: { title?: string }) {
  return (
    <Page>
      <Hero>
        <Container>
          <HeroContent>
            <Title>{title}</Title>
            <Lead>
              Conheça nossas soluções para rastreamento, telemetria e gestão de frotas.
              Tecnologia e suporte para otimizar sua operação.
            </Lead>
          </HeroContent>
        </Container>
      </Hero>

      <Section>
        <Container>
          <Grid>
            {services.map((s) => (
              <Card key={s.slug} href={`/servicos/${s.slug}`}>
                <CardTitle>{s.title}</CardTitle>
                <CardDescription>{s.short}</CardDescription>
                <CardLink>
                  Ver detalhes <ArrowRight size={16} weight="bold" />
                </CardLink>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </Page>
  );
}
