"use client";

import styled from "@emotion/styled";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { tokens } from "@/theme/tokens";
import Link from "next/link";
import { motion } from "framer-motion";

// ─────────────────────────────────────────────────────────────
// STYLED COMPONENTS
// ─────────────────────────────────────────────────────────────

const Section = styled.section`
  background: ${tokens.colors.white};
  overflow: hidden;
  padding: 48px 0 0 0;

  @media (max-width: ${tokens.breakpoints.md}px) {
    padding: 0;
  }
`;

const Grid = styled.div`
  display: flex;
  align-items: stretch;
  min-height: 600px;

  @media (max-width: ${tokens.breakpoints.md}px) {
    flex-direction: column;
    min-height: auto;
  }
`;

const LeftCol = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 60px 80px 0;

  @media (max-width: ${tokens.breakpoints.md}px) {
    padding: 60px 0 40px;
    align-items: center;
    text-align: center;
  }
`;

const Title = styled(motion.h1)`
  font-family: 'Urbanist', sans-serif;
  font-size: 52px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: ${tokens.colors.black};
  max-width: 480px;

  @media (max-width: ${tokens.breakpoints.md}px) {
    font-size: 36px;
    max-width: 100%;
  }
`;

const Description = styled(motion.p)`
  font-family: 'Urbanist', sans-serif;
  font-size: 16px;
  color: ${tokens.colors.muted};
  line-height: 1.5;
  letter-spacing: -0.5px;
  margin-bottom: 32px;
  max-width: 420px;

  @media (max-width: ${tokens.breakpoints.md}px) {
    max-width: 100%;
  }
`;

const Actions = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 48px;

  @media (max-width: ${tokens.breakpoints.md}px) {
    justify-content: center;
  }
`;

const AppLink = styled(motion.create(Link))`
  font-family: 'Urbanist', sans-serif;
  color: ${tokens.colors.black};
  font-weight: 600;
  font-size: 15px;
  letter-spacing: -0.5px;
  text-decoration: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${tokens.colors.black};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const Partners = styled(motion.div)`
  p {
    font-family: 'Urbanist', sans-serif;
    font-size: 14px;
    color: ${tokens.colors.muted};
    letter-spacing: -0.5px;
    margin-bottom: 16px;
  }
`;

const PartnerLogos = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: ${tokens.breakpoints.md}px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
  }
`;

const PartnerLogo = styled(motion.div)`
  height: 24px;
  display: flex;
  align-items: center;
  opacity: 0.5;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
  
  img {
    height: 100%;
    width: auto;
    object-fit: contain;
  }
`;

const RightCol = styled(motion.div)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(255, 0, 0, 0) 45.21%,
    rgba(146, 1, 102, 0.13) 58.91%,
    rgba(254, 4, 107, 0.25) 72.61%,
    rgba(255, 0, 0, 0.5) 100%
  );
  padding: 0px;
  min-height: 500px;
  border-radius: 32px;
  overflow: hidden;
  position: relative;

  @media (max-width: ${tokens.breakpoints.md}px) {
    min-height: 400px;
    padding: 0px;
  }
`;

const HeroImage = styled(motion.img)`
  max-width: 100%;
  max-height: 600px;
  object-fit: cover;

  @media (max-width: ${tokens.breakpoints.md}px) {
    max-height: 400px;
  }
`;

// ─────────────────────────────────────────────────────────────
// ANIMATION VARIANTS
// ─────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1] as const,
      delay: 0.3,
    },
  },
};

// ─────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────

export function HomeHero() {
  return (
    <Section>
      <Container>
        <Grid>
          <LeftCol
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Title variants={itemVariants}>
              Gestão de rastreamento mais eficiente
            </Title>
            <Description variants={itemVariants}>
              Descubra o futuro do rastreamento veicular com nossa tecnologia de
              ponta, projetada para garantir segurança e eficiência inigualáveis
              para sua frota
            </Description>

            <Actions variants={itemVariants}>
              <ButtonLink
                href="/contato"
                variant="solid"
                style={{ height: 48, padding: "0 28px" }}
              >
                Solicitar uma cotação
              </ButtonLink>
              <AppLink
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Baixar APP
              </AppLink>
            </Actions>

            <Partners variants={itemVariants}>
              <p>Conheça empresas parceiras:</p>
              <PartnerLogos>
                {[1, 2, 3].map((i) => (
                  <PartnerLogo
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.5, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                    whileHover={{ opacity: 0.8, scale: 1.05 }}
                  >
                    <img
                      src={`https://cdn.logoipsum.com/logo_0${i}.svg`}
                      alt={`Partner ${i}`}
                    />
                  </PartnerLogo>
                ))}
              </PartnerLogos>
            </Partners>
          </LeftCol>

          <RightCol
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
          >
            <HeroImage
              src="/home-hero.png"
              alt="TK Rastreadores App"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
          </RightCol>
        </Grid>
      </Container>
    </Section>
  );
}
