"use client";

import styled from "@emotion/styled";
import { Container } from "@/components/ui/Container";
import type { Service } from "@/content/site";
import { tokens } from "@/theme/tokens";
import { ButtonLink } from "@/components/ui/Button";
import { contact } from "@/content/site";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
    Broadcast,
    ChartLineUp,
    ShieldCheck,
    CurrencyCircleDollar,
    DeviceMobile,
    Lightning,
    TrendUp,
    ChartPieSlice,
    Wrench,
    Leaf,
    WhatsappLogo,
    ArrowRight,
    CheckCircle,
} from "@phosphor-icons/react";

// ─────────────────────────────────────────────────────────────
// HERO SECTION
// ─────────────────────────────────────────────────────────────

const Hero = styled.section`
  padding: 80px 0 60px;
  background: linear-gradient(180deg, #fafafa 0%, #ffffff 100%);

  @media (max-width: ${tokens.breakpoints.md}px) {
    padding: 60px 0 40px;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 60px;
  align-items: center;

  @media (max-width: ${tokens.breakpoints.lg}px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const HeroContent = styled.div`
  max-width: 580px;
`;

const HeroTitle = styled.h1`
  font-family: 'Urbanist', sans-serif;
  font-size: 48px;
  font-weight: 800;
  color: ${tokens.colors.black};
  line-height: 1.1;

  @media (max-width: ${tokens.breakpoints.md}px) {
    font-size: 36px;
  }
`;

const HeroDescription = styled.p`
  margin-top: 20px;
  font-size: 18px;
  line-height: 1.7;
  color: ${tokens.colors.muted};
`;

const HeroHighlights = styled.div`
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: ${tokens.breakpoints.md}px) {
    grid-template-columns: 1fr;
  }
`;

const HighlightItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: white;
  border: 1px solid ${tokens.colors.border};
  border-radius: 12px;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: rgba(225, 6, 0, 0.3);
  }

  svg {
    flex-shrink: 0;
    color: ${tokens.colors.brand.red};
  }
`;

const HighlightText = styled.div`
  strong {
    display: block;
    font-family: 'Urbanist', sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: ${tokens.colors.black};
  }

  span {
    display: block;
    font-size: 12px;
    color: ${tokens.colors.muted};
  }
`;

const HeroActions = styled.div`
  margin-top: 28px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const HeroMedia = styled.div<{ $hasMedia: boolean }>`
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: ${tokens.radius.lg}px;
  overflow: hidden;
  background: ${({ $hasMedia }) => ($hasMedia ? "transparent" : "linear-gradient(135deg, #e8e8e8 0%, #f5f5f5 100%)")};
  border: 1px solid ${tokens.colors.border};

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.6);
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: white;
  }

  &::after {
    content: "Imagem do serviço";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    color: ${tokens.colors.muted};
    opacity: ${({ $hasMedia }) => ($hasMedia ? 0 : 1)};
    pointer-events: none;
  }
`;

// ─────────────────────────────────────────────────────────────
// SECTIONS BASE
// ─────────────────────────────────────────────────────────────

const Section = styled.section<{ $bg?: string }>`
  padding: 80px 0;
  background: ${({ $bg }) => $bg || "white"};

  @media (max-width: ${tokens.breakpoints.md}px) {
    padding: 60px 0;
  }
`;

const SectionHeader = styled.div<{ $center?: boolean }>`
  max-width: 700px;
  margin-bottom: 40px;
  ${({ $center }) => $center && "margin-left: auto; margin-right: auto; text-align: center;"}
`;

const SectionTitle = styled.h2`
  font-family: 'Urbanist', sans-serif;
  font-size: 32px;
  font-weight: 800;
  color: ${tokens.colors.black};

  @media (max-width: ${tokens.breakpoints.md}px) {
    font-size: 26px;
  }
`;

const SectionLead = styled.p`
  margin-top: 12px;
  font-size: 16px;
  line-height: 1.7;
  color: ${tokens.colors.muted};
`;

// ─────────────────────────────────────────────────────────────
// FEATURES GRID
// ─────────────────────────────────────────────────────────────

const FeaturesGrid = styled.div`
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

const FeatureCard = styled.div`
  padding: 28px;
  background: #fafafa;
  border: 1px solid ${tokens.colors.border};
  border-radius: ${tokens.radius.lg}px;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: rgba(225, 6, 0, 0.3);
  }
`;

const FeatureIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${tokens.colors.brand.red};
  border-radius: 12px;
  color: white;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-family: 'Urbanist', sans-serif;
  font-size: 17px;
  font-weight: 700;
  color: ${tokens.colors.black};
  margin-bottom: 10px;
`;

const FeatureText = styled.p`
  font-size: 14px;
  line-height: 1.65;
  color: ${tokens.colors.muted};
`;

// ─────────────────────────────────────────────────────────────
// STEPS
// ─────────────────────────────────────────────────────────────

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: ${tokens.breakpoints.lg}px) {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled.div`
  text-align: center;
`;

const StepNumber = styled.div`
  width: 56px;
  height: 56px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${tokens.colors.brand.red};
  border-radius: 50%;
  font-family: 'Urbanist', sans-serif;
  font-size: 22px;
  font-weight: 800;
  color: white;
`;

const StepTitle = styled.h3`
  font-family: 'Urbanist', sans-serif;
  font-size: 17px;
  font-weight: 700;
  color: ${tokens.colors.black};
  margin-bottom: 10px;
`;

const StepText = styled.p`
  font-size: 14px;
  line-height: 1.65;
  color: ${tokens.colors.muted};
`;

// ─────────────────────────────────────────────────────────────
// BENEFITS
// ─────────────────────────────────────────────────────────────

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: ${tokens.breakpoints.md}px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.div`
  display: flex;
  gap: 16px;
  padding: 24px;
  background: white;
  border: 1px solid ${tokens.colors.border};
  border-radius: ${tokens.radius.lg}px;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: rgba(225, 6, 0, 0.3);
  }
`;

const BenefitIcon = styled.div`
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(225, 6, 0, 0.1);
  border-radius: 10px;
  color: ${tokens.colors.brand.red};
`;

const BenefitContent = styled.div`
  h4 {
    font-family: 'Urbanist', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: ${tokens.colors.black};
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    line-height: 1.65;
    color: ${tokens.colors.muted};
  }
`;

// ─────────────────────────────────────────────────────────────
// DIFFERENTIALS
// ─────────────────────────────────────────────────────────────

const DifferentialsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: ${tokens.breakpoints.lg}px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const DifferentialsList = styled.ul`
  list-style: none;
  display: grid;
  gap: 14px;
`;

const DifferentialItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 15px;
  line-height: 1.6;
  color: ${tokens.colors.text};

  svg {
    flex-shrink: 0;
    margin-top: 2px;
    color: ${tokens.colors.brand.red};
  }
`;

// ─────────────────────────────────────────────────────────────
// GALLERY
// ─────────────────────────────────────────────────────────────

const GalleryGrid = styled.div`
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

const GalleryImage = styled.div`
  position: relative;
  aspect-ratio: 4/3;
  border-radius: ${tokens.radius.lg}px;
  overflow: hidden;
  border: 1px solid ${tokens.colors.border};
`;

// ─────────────────────────────────────────────────────────────
// CTA
// ─────────────────────────────────────────────────────────────

const CTASection = styled.section`
  padding: 80px 0;
  background: ${tokens.colors.black};

  @media (max-width: ${tokens.breakpoints.md}px) {
    padding: 60px 0;
  }
`;

const CTAContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-family: 'Urbanist', sans-serif;
  font-size: 36px;
  font-weight: 800;
  color: white;
  line-height: 1.2;

  @media (max-width: ${tokens.breakpoints.md}px) {
    font-size: 28px;
  }
`;

const CTAText = styled.p`
  margin-top: 16px;
  font-size: 17px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
`;

const CTAActions = styled.div`
  margin-top: 28px;
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
`;

// ─────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────

export function ServiceDetailPage({ service }: { service: Service }) {
    const images = service.images ?? [];
    const hasImages = images.length > 0;

    return (
        <>
            {/* HERO */}
            <Hero>
                <Container>
                    <HeroGrid>
                        <HeroContent>
                            <HeroTitle>{service.title}</HeroTitle>
                            <HeroDescription>{service.short}</HeroDescription>

                            <HeroHighlights>
                                <HighlightItem>
                                    <TrendUp size={20} weight="bold" />
                                    <HighlightText>
                                        <strong>Eficiência</strong>
                                        <span>Indicadores claros</span>
                                    </HighlightText>
                                </HighlightItem>
                                <HighlightItem>
                                    <ShieldCheck size={20} weight="bold" />
                                    <HighlightText>
                                        <strong>Segurança</strong>
                                        <span>Alertas em tempo real</span>
                                    </HighlightText>
                                </HighlightItem>
                                <HighlightItem>
                                    <Lightning size={20} weight="bold" />
                                    <HighlightText>
                                        <strong>Implantação</strong>
                                        <span>Equipe assistida</span>
                                    </HighlightText>
                                </HighlightItem>
                            </HeroHighlights>

                            <HeroActions>
                                <ButtonLink href={contact.comercial.link} target="_blank" rel="noopener noreferrer">
                                    <WhatsappLogo size={18} weight="fill" />
                                    Falar com especialista
                                </ButtonLink>
                                <ButtonLink href={contact.comercial.link} target="_blank" rel="noopener noreferrer" variant="ghost">
                                    Solicitar orçamento
                                    <ArrowRight size={18} weight="bold" />
                                </ButtonLink>
                            </HeroActions>
                        </HeroContent>

                        <HeroMedia $hasMedia={hasImages}>
                            {hasImages && (
                                <Swiper
                                    modules={[Pagination, Autoplay]}
                                    pagination={{ clickable: true }}
                                    autoplay={images.length > 1 ? { delay: 4000, disableOnInteraction: false } : false}
                                    loop={images.length > 1}
                                >
                                    {images.map((img) => (
                                        <SwiperSlide key={img.src}>
                                            <Image
                                                src={img.src}
                                                alt={img.alt}
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                                style={{ objectFit: "cover" }}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            )}
                        </HeroMedia>
                    </HeroGrid>
                </Container>
            </Hero>

            {/* FEATURES */}
            <Section>
                <Container>
                    <SectionHeader $center>
                        <SectionTitle>Recursos e funcionalidades</SectionTitle>
                        <SectionLead>
                            Tecnologia avançada para otimizar a gestão da sua frota com máxima eficiência e controle.
                        </SectionLead>
                    </SectionHeader>

                    <FeaturesGrid>
                        <FeatureCard>
                            <FeatureIcon>
                                <Broadcast size={24} weight="fill" />
                            </FeatureIcon>
                            <FeatureTitle>Monitoramento 24/7</FeatureTitle>
                            <FeatureText>
                                Acompanhamento em tempo real com atualizações instantâneas e histórico completo.
                            </FeatureText>
                        </FeatureCard>

                        <FeatureCard>
                            <FeatureIcon>
                                <ChartLineUp size={24} weight="fill" />
                            </FeatureIcon>
                            <FeatureTitle>Relatórios avançados</FeatureTitle>
                            <FeatureText>
                                Análises de desempenho, consumo, produtividade e comportamento dos motoristas.
                            </FeatureText>
                        </FeatureCard>

                        <FeatureCard>
                            <FeatureIcon>
                                <ShieldCheck size={24} weight="fill" />
                            </FeatureIcon>
                            <FeatureTitle>Segurança total</FeatureTitle>
                            <FeatureText>
                                Alertas inteligentes, cercas virtuais e notificações de segurança.
                            </FeatureText>
                        </FeatureCard>

                        <FeatureCard>
                            <FeatureIcon>
                                <CurrencyCircleDollar size={24} weight="fill" />
                            </FeatureIcon>
                            <FeatureTitle>Economia comprovada</FeatureTitle>
                            <FeatureText>
                                Redução de custos com combustível, manutenção e otimização de rotas.
                            </FeatureText>
                        </FeatureCard>

                        <FeatureCard>
                            <FeatureIcon>
                                <DeviceMobile size={24} weight="fill" />
                            </FeatureIcon>
                            <FeatureTitle>App mobile</FeatureTitle>
                            <FeatureText>
                                Acesso completo pelo aplicativo TK Fleet disponível para iOS e Android.
                            </FeatureText>
                        </FeatureCard>

                        <FeatureCard>
                            <FeatureIcon>
                                <Lightning size={24} weight="fill" />
                            </FeatureIcon>
                            <FeatureTitle>Instalação rápida</FeatureTitle>
                            <FeatureText>
                                Implementação ágil e integração facilitada com sistemas existentes.
                            </FeatureText>
                        </FeatureCard>
                    </FeaturesGrid>
                </Container>
            </Section>

            {/* HOW IT WORKS */}
            <Section $bg="#fafafa">
                <Container>
                    <SectionHeader $center>
                        <SectionTitle>Como funciona</SectionTitle>
                        <SectionLead>
                            Processo simples e eficiente para implementar a solução na sua empresa.
                        </SectionLead>
                    </SectionHeader>

                    <StepsGrid>
                        <StepCard>
                            <StepNumber>1</StepNumber>
                            <StepTitle>Análise e planejamento</StepTitle>
                            <StepText>
                                Nossa equipe realiza análise detalhada e desenvolve um plano personalizado.
                            </StepText>
                        </StepCard>

                        <StepCard>
                            <StepNumber>2</StepNumber>
                            <StepTitle>Instalação e configuração</StepTitle>
                            <StepText>
                                Instalamos os equipamentos com agilidade e configuramos conforme sua operação.
                            </StepText>
                        </StepCard>

                        <StepCard>
                            <StepNumber>3</StepNumber>
                            <StepTitle>Treinamento e suporte</StepTitle>
                            <StepText>
                                Treinamos sua equipe e oferecemos suporte contínuo para garantir o sucesso.
                            </StepText>
                        </StepCard>
                    </StepsGrid>
                </Container>
            </Section>

            {/* BENEFITS */}
            <Section>
                <Container>
                    <SectionHeader $center>
                        <SectionTitle>Principais benefícios</SectionTitle>
                        <SectionLead>
                            Vantagens reais e mensuráveis que impactam diretamente seus resultados.
                        </SectionLead>
                    </SectionHeader>

                    <BenefitsGrid>
                        <BenefitCard>
                            <BenefitIcon>
                                <CurrencyCircleDollar size={22} weight="fill" />
                            </BenefitIcon>
                            <BenefitContent>
                                <h4>Redução de custos</h4>
                                <p>
                                    Economize até 30% nos custos da frota com otimização de rotas e manutenção preventiva.
                                </p>
                            </BenefitContent>
                        </BenefitCard>

                        <BenefitCard>
                            <BenefitIcon>
                                <TrendUp size={22} weight="fill" />
                            </BenefitIcon>
                            <BenefitContent>
                                <h4>Aumento de produtividade</h4>
                                <p>
                                    Melhore a eficiência com monitoramento em tempo real e gestão de jornadas.
                                </p>
                            </BenefitContent>
                        </BenefitCard>

                        <BenefitCard>
                            <BenefitIcon>
                                <ShieldCheck size={22} weight="fill" />
                            </BenefitIcon>
                            <BenefitContent>
                                <h4>Segurança aprimorada</h4>
                                <p>
                                    Proteja veículos, cargas e motoristas com alertas e monitoramento 24/7.
                                </p>
                            </BenefitContent>
                        </BenefitCard>

                        <BenefitCard>
                            <BenefitIcon>
                                <ChartPieSlice size={22} weight="fill" />
                            </BenefitIcon>
                            <BenefitContent>
                                <h4>Decisões baseadas em dados</h4>
                                <p>
                                    Acesso a relatórios completos para decisões estratégicas precisas.
                                </p>
                            </BenefitContent>
                        </BenefitCard>

                        <BenefitCard>
                            <BenefitIcon>
                                <Wrench size={22} weight="fill" />
                            </BenefitIcon>
                            <BenefitContent>
                                <h4>Manutenção preventiva</h4>
                                <p>
                                    Evite paradas não programadas com alertas baseados em dados reais.
                                </p>
                            </BenefitContent>
                        </BenefitCard>

                        <BenefitCard>
                            <BenefitIcon>
                                <Leaf size={22} weight="fill" />
                            </BenefitIcon>
                            <BenefitContent>
                                <h4>Sustentabilidade</h4>
                                <p>
                                    Reduza emissão de poluentes com gestão inteligente de combustível.
                                </p>
                            </BenefitContent>
                        </BenefitCard>
                    </BenefitsGrid>
                </Container>
            </Section>

            {/* DIFFERENTIALS */}
            <Section $bg="#fafafa">
                <Container>
                    <DifferentialsGrid>
                        <div>
                            <SectionTitle>Diferenciais da solução</SectionTitle>
                            <SectionLead>
                                Com 14 anos de experiência, a TK Rastreadores se destaca pela qualidade,
                                suporte personalizado e inovação tecnológica.
                            </SectionLead>
                        </div>

                        <DifferentialsList>
                            <DifferentialItem>
                                <CheckCircle size={20} weight="fill" />
                                Tecnologia 4G de última geração com cobertura nacional
                            </DifferentialItem>
                            <DifferentialItem>
                                <CheckCircle size={20} weight="fill" />
                                Plataforma web e mobile com interface intuitiva
                            </DifferentialItem>
                            <DifferentialItem>
                                <CheckCircle size={20} weight="fill" />
                                Atualizações automáticas sem custo adicional
                            </DifferentialItem>
                            <DifferentialItem>
                                <CheckCircle size={20} weight="fill" />
                                Integrações com principais sistemas (ERP, TMS)
                            </DifferentialItem>
                            <DifferentialItem>
                                <CheckCircle size={20} weight="fill" />
                                Equipe técnica certificada e especializada
                            </DifferentialItem>
                            <DifferentialItem>
                                <CheckCircle size={20} weight="fill" />
                                Suporte técnico 24/7 por telefone, chat e WhatsApp
                            </DifferentialItem>
                        </DifferentialsList>
                    </DifferentialsGrid>
                </Container>
            </Section>

            {/* GALLERY */}
            {hasImages && (
                <Section>
                    <Container>
                        <SectionHeader $center>
                            <SectionTitle>Galeria de imagens</SectionTitle>
                            <SectionLead>
                                Conheça visualmente os recursos e funcionalidades da solução.
                            </SectionLead>
                        </SectionHeader>

                        <GalleryGrid>
                            {images.map((img, idx) => (
                                <GalleryImage key={idx}>
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </GalleryImage>
                            ))}
                        </GalleryGrid>
                    </Container>
                </Section>
            )}

            {/* CTA */}
            <CTASection>
                <Container>
                    <CTAContent>
                        <CTATitle>Pronto para transformar sua gestão de frota?</CTATitle>
                        <CTAText>
                            Entre em contato com nossos especialistas e descubra como{" "}
                            <strong style={{ color: "white" }}>{service.title}</strong> pode
                            revolucionar a forma como você gerencia seus veículos.
                        </CTAText>
                        <CTAActions>
                            <ButtonLink
                                href={contact.comercial.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ background: "white", color: tokens.colors.black }}
                            >
                                Falar no WhatsApp
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
                    </CTAContent>
                </Container>
            </CTASection>
        </>
    );
}
