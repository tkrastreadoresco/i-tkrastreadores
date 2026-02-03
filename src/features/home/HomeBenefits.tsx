"use client";

import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Container } from "@/components/ui/Container";
import { tokens } from "@/theme/tokens";
import {
  GasPump,
  Car,
  MapPin,
  Wallet,
  Warning,
  ShieldCheck,
  Headset,
  FirstAidKit,
} from "@phosphor-icons/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─────────────────────────────────────────────────────────────
// STYLED COMPONENTS
// ─────────────────────────────────────────────────────────────

const Section = styled.section`
  padding: 100px 0;
  background-color: #fafafa;

  @media (max-width: ${tokens.breakpoints.md}px) {
    padding: 60px 0;
  }
`;

const Title = styled(motion.h2)`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -1px;
  margin-bottom: 60px;
  color: ${tokens.colors.black};

  @media (max-width: ${tokens.breakpoints.md}px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: ${tokens.breakpoints.lg}px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const BenefitsList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${tokens.breakpoints.lg}px) {
    gap: 20px;
  }
`;

const BenefitItem = styled(motion.div) <{ $align?: "left" | "right" }>`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-direction: ${({ $align }) => ($align === "right" ? "row-reverse" : "row")};
  text-align: ${({ $align }) => ($align === "right" ? "right" : "left")};

  @media (max-width: ${tokens.breakpoints.lg}px) {
    flex-direction: row;
    text-align: left;
  }
`;

const IconBox = styled(motion.div) <{ $variant: "red" | "dark" }>`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background-color: ${({ $variant }) =>
    $variant === "red" ? "#FF0000" : tokens.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);

  svg {
    color: white;
  }

  &:hover {
    transform: scale(1.1) rotate(5deg);
  }
`;

const BenefitText = styled.p`
  font-size: 15px;
  color: ${tokens.colors.text};
  line-height: 1.4;
  letter-spacing: -0.5px;
  max-width: 220px;

  @media (max-width: ${tokens.breakpoints.lg}px) {
    max-width: 100%;
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
`;

const CenterWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${tokens.breakpoints.lg}px) {
    order: -1;
  }
`;

const LogoCircle = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${tokens.breakpoints.md}px) {
    width: 220px;
    height: 220px;
  }
`;

const RotatingBorder = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  padding: 2px;
  background: linear-gradient(135deg, #ff0000, #ff6b6b, #ffffff, #e0e0e0, #ff0000);
  animation: ${rotate} 4s linear infinite;
  
  &::before {
    content: "";
    position: absolute;
    inset: 2px;
    border-radius: 50%;
    background: #fafafa;
  }
`;

const LogoInner = styled(motion.div)`
  position: relative;
  z-index: 1;
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  animation: ${pulse} 3s ease-in-out infinite;

  img {
    width: 60%;
    height: auto;
    object-fit: contain;
  }
`;

// ─────────────────────────────────────────────────────────────
// ANIMATION VARIANTS
// ─────────────────────────────────────────────────────────────

const titleVariants = {
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

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariantsLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
};

const itemVariantsRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
};

const centerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.23, 1, 0.32, 1] as const,
      delay: 0.3,
    },
  },
};

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────

const benefitsLeft = [
  {
    icon: GasPump,
    text: "Redução de até 18% no consumo de combustível",
    variant: "red" as const,
  },
  {
    icon: Car,
    text: "Aumento considerável da vida útil do veículo",
    variant: "dark" as const,
  },
  {
    icon: MapPin,
    text: "Acompanhamento em tempo real do motorista",
    variant: "red" as const,
  },
  {
    icon: Wallet,
    text: "Controle de custo com base sólida de dados",
    variant: "dark" as const,
  },
];

const benefitsRight = [
  {
    icon: Warning,
    text: "Evite qualquer tipo de multa, em tempo real",
    variant: "dark" as const,
  },
  {
    icon: ShieldCheck,
    text: "Maior segurança, rastreie em tempo real",
    variant: "red" as const,
  },
  {
    icon: Headset,
    text: "Atendimento 100% humanizado",
    variant: "dark" as const,
  },
  {
    icon: FirstAidKit,
    text: "Reduz significativamente o risco de acidentes",
    variant: "red" as const,
  },
];

// ─────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────

export function HomeBenefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section ref={ref}>
      <Container>
        <Title
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Aqui na TK você tem milhares
          <br />
          de benefícios
        </Title>

        <Grid>
          <BenefitsList
            variants={listVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {benefitsLeft.map((benefit, index) => (
              <BenefitItem
                key={index}
                $align="right"
                variants={itemVariantsLeft}
              >
                <IconBox
                  $variant={benefit.variant}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <benefit.icon size={22} weight="fill" />
                </IconBox>
                <BenefitText>{benefit.text}</BenefitText>
              </BenefitItem>
            ))}
          </BenefitsList>

          <CenterWrapper
            variants={centerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <LogoCircle>
              <RotatingBorder />
              <LogoInner
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src="/logo/logo-v1.svg" alt="TK Rastreadores" />
              </LogoInner>
            </LogoCircle>
          </CenterWrapper>

          <BenefitsList
            variants={listVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {benefitsRight.map((benefit, index) => (
              <BenefitItem
                key={index}
                $align="left"
                variants={itemVariantsRight}
              >
                <IconBox
                  $variant={benefit.variant}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <benefit.icon size={22} weight="fill" />
                </IconBox>
                <BenefitText>{benefit.text}</BenefitText>
              </BenefitItem>
            ))}
          </BenefitsList>
        </Grid>
      </Container>
    </Section>
  );
}
