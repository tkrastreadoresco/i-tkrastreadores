"use client";

import styled from "@emotion/styled";
import { Container } from "@/components/ui/Container";
import { Page } from "@/components/ui/Page";
import { tokens } from "@/theme/tokens";

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
  max-width: 700px;
  font-size: 18px;
  line-height: 1.7;
  color: ${tokens.colors.muted};
`;

const ContentBox = styled.div`
  margin-top: 32px;
  padding: 28px;
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

// ─────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────

interface SimplePageProps {
    title: string;
    lead?: string;
    body: string;
}

export function SimplePage({ title, lead, body }: SimplePageProps) {
    return (
        <Page>
            <Hero>
                <Container>
                    <Title>{title}</Title>
                    {lead && <Lead>{lead}</Lead>}
                    <ContentBox>
                        <p>{body}</p>
                    </ContentBox>
                </Container>
            </Hero>
        </Page>
    );
}
