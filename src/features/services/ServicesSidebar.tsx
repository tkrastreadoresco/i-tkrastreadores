"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import { tokens } from "@/theme/tokens";
import { services } from "@/content/site";
import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/ui/Button";

const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const NavWidget = styled.div`
  background: #fcfcfc;
  border: 1px solid ${tokens.colors.border};
  border-radius: 12px;
  padding: 24px;
`;

const WidgetTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${tokens.colors.border};
`;

const ServiceList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ServiceLink = styled(Link) <{ isActive?: boolean }>`
  display: block;
  padding: 12px 16px;
  border-radius: 8px;
  background: ${props => props.isActive ? tokens.colors.black : 'transparent'};
  color: ${props => props.isActive ? tokens.colors.white : tokens.colors.text};
  font-weight: 500;
  font-size: 14px;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.isActive ? tokens.colors.black : '#f0f0f0'};
  }
`;

const ContactWidget = styled.div`
  background: ${tokens.colors.black};
  border-radius: 12px;
  padding: 30px;
  color: white;
  text-align: center;
`;

const ContactTitle = styled.h4`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const ContactText = styled.p`
  font-size: 14px;
  color: rgba(255,255,255,0.7);
  margin-bottom: 24px;
  line-height: 1.5;
`;

export function ServicesSidebar() {
    const pathname = usePathname();

    return (
        <SidebarContainer>
            <NavWidget>
                <WidgetTitle>Nossas Soluções</WidgetTitle>
                <ServiceList>
                    {services.map(service => (
                        <li key={service.slug}>
                            <ServiceLink
                                href={`/solucoes/${service.slug}`}
                                isActive={pathname === `/solucoes/${service.slug}`}
                            >
                                {service.title}
                            </ServiceLink>
                        </li>
                    ))}
                </ServiceList>
            </NavWidget>

            <ContactWidget>
                <ContactTitle>Precisa de ajuda?</ContactTitle>
                <ContactText>Entre em contato com nossos especialistas para encontrar a melhor solução para sua frota.</ContactText>
                <ButtonLink href="/contato" variant="solid" style={{ background: 'white', color: 'black', width: '100%' }}>
                    Falar com consultor
                </ButtonLink>
            </ContactWidget>
        </SidebarContainer>
    );
}
