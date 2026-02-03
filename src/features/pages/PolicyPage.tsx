"use client";

import styled from "@emotion/styled";
import { Container } from "@/components/ui/Container";
import { Page } from "@/components/ui/Page";
import { tokens } from "@/theme/tokens";
import { ButtonLink } from "@/components/ui/Button";
import { contact } from "@/content/site";

// ─────────────────────────────────────────────────────────────
// STYLED COMPONENTS
// ─────────────────────────────────────────────────────────────

const Hero = styled.section`
  padding: 80px 0 40px;
  background: linear-gradient(180deg, #fafafa 0%, #ffffff 100%);

  @media (max-width: ${tokens.breakpoints.md}px) {
    padding: 60px 0 30px;
  }
`;

const Title = styled.h1`
  font-family: 'Urbanist', sans-serif;
  font-size: 44px;
  font-weight: 800;
  color: ${tokens.colors.black};

  @media (max-width: ${tokens.breakpoints.md}px) {
    font-size: 32px;
  }
`;

const Lead = styled.p`
  margin-top: 16px;
  max-width: 800px;
  font-size: 17px;
  line-height: 1.7;
  color: ${tokens.colors.muted};
`;

const Meta = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  span {
    padding: 8px 14px;
    font-size: 13px;
    color: ${tokens.colors.muted};
    background: white;
    border: 1px solid ${tokens.colors.border};
    border-radius: 999px;
  }
`;

const Layout = styled.div`
  padding: 40px 0 80px;

  @media (max-width: ${tokens.breakpoints.md}px) {
    padding: 30px 0 60px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 32px;
  align-items: start;

  @media (max-width: ${tokens.breakpoints.lg}px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.aside`
  position: sticky;
  top: 100px;
  padding: 20px;
  background: white;
  border: 1px solid ${tokens.colors.border};
  border-radius: ${tokens.radius.lg}px;

  @media (max-width: ${tokens.breakpoints.lg}px) {
    position: relative;
    top: auto;
  }
`;

const SidebarTitle = styled.h2`
  font-family: 'Urbanist', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: ${tokens.colors.black};
  margin-bottom: 12px;
`;

const SidebarList = styled.ul`
  list-style: none;
  display: grid;
  gap: 6px;

  a {
    display: block;
    padding: 10px 12px;
    font-size: 13px;
    color: ${tokens.colors.muted};
    border-radius: 10px;
    transition: background 0.2s ease, color 0.2s ease;

    &:hover {
      background: #fafafa;
      color: ${tokens.colors.black};
    }
  }
`;

const Content = styled.main`
  display: grid;
  gap: 32px;
`;

const Section = styled.section`
  padding: 24px;
  background: white;
  border: 1px solid ${tokens.colors.border};
  border-radius: ${tokens.radius.lg}px;
`;

const SectionTitle = styled.h2`
  font-family: 'Urbanist', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: ${tokens.colors.black};
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${tokens.colors.border};
`;

const SectionContent = styled.div`
  font-size: 14px;
  line-height: 1.75;
  color: ${tokens.colors.muted};

  p {
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul {
    margin: 12px 0;
    padding-left: 20px;

    li {
      margin-bottom: 8px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  code {
    padding: 2px 6px;
    font-size: 13px;
    background: #f5f5f5;
    border-radius: 4px;
    font-family: monospace;
  }
`;

const CTA = styled.div`
  padding: 24px;
  background: ${tokens.colors.black};
  border-radius: ${tokens.radius.lg}px;
  text-align: center;
`;

const CTATitle = styled.h3`
  font-family: 'Urbanist', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: white;
`;

const CTALead = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
`;

const CTAActions = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
`;

// ─────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────

interface PolicySection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface PolicyPageProps {
  title: string;
  lead?: string;
  updatedAt?: string;
  sections: PolicySection[];
}

// ─────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────

export function PolicyPage({ title, lead, updatedAt, sections }: PolicyPageProps) {
  return (
    <Page>
      <Hero>
        <Container>
          <Title>{title}</Title>
          {lead && <Lead>{lead}</Lead>}
          <Meta>
            {updatedAt && <span>Atualizado em {updatedAt}</span>}
            <span>{sections.length} seções</span>
          </Meta>
        </Container>
      </Hero>

      <Layout>
        <Container>
          <Grid>
            <Sidebar>
              <SidebarTitle>Navegação</SidebarTitle>
              <SidebarList>
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>{s.title}</a>
                  </li>
                ))}
              </SidebarList>
            </Sidebar>

            <Content>
              {sections.map((s) => (
                <Section key={s.id} id={s.id}>
                  <SectionTitle>{s.title}</SectionTitle>
                  <SectionContent>{s.content}</SectionContent>
                </Section>
              ))}

              <CTA>
                <CTATitle>Dúvidas sobre esta política?</CTATitle>
                <CTALead>Entre em contato com nossa equipe.</CTALead>
                <CTAActions>
                  <ButtonLink
                    href={contact.whatsappLink}
                    style={{ background: "white", color: tokens.colors.black }}
                  >
                    Falar conosco
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
            </Content>
          </Grid>
        </Container>
      </Layout>
    </Page>
  );
}
