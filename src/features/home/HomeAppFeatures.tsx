"use client";

import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Container } from "@/components/ui/Container";
import { tokens } from "@/theme/tokens";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─────────────────────────────────────────────────────────────
// STYLED COMPONENTS
// ─────────────────────────────────────────────────────────────

const Section = styled.section`
  padding: 48px 0;
  background: ${tokens.colors.white};
  overflow: hidden;

  @media (max-width: ${tokens.breakpoints.md}px) {
    padding: 60px 0;
  }
`;

const Grid = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;

  @media (max-width: ${tokens.breakpoints.lg}px) {
    flex-direction: column;
    gap: 60px;
  }
`;

const rotate = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const rotateReverse = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
`;

const LeftCol = styled(motion.div)`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;

  @media (max-width: ${tokens.breakpoints.lg}px) {
    min-height: 400px;
    width: 100%;
  }
`;

const CircleOuter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  animation: ${rotate} 20s linear infinite;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    background: #ff0000;
    border-radius: 50%;
  }

  @media (max-width: ${tokens.breakpoints.md}px) {
    width: 320px;
    height: 320px;
  }
`;

const CircleInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 340px;
  height: 340px;
  border-radius: 50%;
  border: 1px dashed rgba(0, 0, 0, 0.1);
  animation: ${rotateReverse} 15s linear infinite;

  &::before {
    content: "";
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 8px;
    height: 8px;
    background: #ff0000;
    border-radius: 50%;
  }

  @media (max-width: ${tokens.breakpoints.md}px) {
    width: 260px;
    height: 260px;
  }
`;

const PhoneImage = styled(motion.img)`
  position: relative;
  z-index: 2;
  max-width: 480px;
  height: auto;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));

  @media (max-width: ${tokens.breakpoints.md}px) {
    max-width: 360px;
  }
`;

const RightCol = styled(motion.div)`
  flex: 1;

  @media (max-width: ${tokens.breakpoints.lg}px) {
    width: 100%;
  }
`;

const Title = styled(motion.h2)`
  font-size: 36px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -1px;
  margin-bottom: 48px;
  color: ${tokens.colors.black};

  @media (max-width: ${tokens.breakpoints.md}px) {
    font-size: 28px;
    margin-bottom: 32px;
  }
`;

const StepsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const StepItem = styled(motion.div)`
  display: flex;
  gap: 20px;
  position: relative;
`;

const StepIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4px;
`;

const StepBullet = styled(motion.div)`
  width: 12px;
  height: 12px;
  background: ${tokens.colors.black};
  border-radius: 50%;
  flex-shrink: 0;
  z-index: 1;
`;

const StepLine = styled(motion.div)`
  width: 2px;
  flex: 1;
  background: ${tokens.colors.border};
  min-height: 60px;
  transform-origin: top;
`;

const StepContent = styled.div`
  padding-bottom: 32px;
  flex: 1;

  &:last-child {
    padding-bottom: 0;
  }
`;

const StepTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
  color: ${tokens.colors.black};
  letter-spacing: -0.5px;
`;

const StepDescription = styled.p`
  font-size: 14px;
  color: ${tokens.colors.muted};
  line-height: 1.5;
  letter-spacing: -0.5px;

  a {
    color: #ff0000;
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.7;
    }
  }
`;

// ─────────────────────────────────────────────────────────────
// ANIMATION VARIANTS
// ─────────────────────────────────────────────────────────────

const imageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
};

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

const stepVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.2 + i * 0.15,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  }),
};

const bulletVariants = {
  hidden: { scale: 0 },
  visible: (i: number) => ({
    scale: 1,
    transition: {
      duration: 0.3,
      delay: 0.2 + i * 0.15,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  }),
};

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: (i: number) => ({
    scaleY: 1,
    transition: {
      duration: 0.4,
      delay: 0.3 + i * 0.15,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  }),
};

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────

const steps = [
  {
    title: "Baixar o aplicativo TK Rastreadores",
    description: (
      <>
        Acesse a <Link href="#">google play</Link> ou <Link href="#">app store</Link>, e procure por TK Rastreadores para baixar nosso app.
      </>
    ),
  },
  {
    title: "Localização rápida e prática",
    description:
      "Consulte as últimas posições, rotas e trajetos percorridos pelo veículos rastreado.",
  },
  {
    title: "Alerta de infrações",
    description:
      "Recebe aviso ao ligar o veículo, excesso de velocidade, entrada e saída de cercas eletrônicas.",
  },
  {
    title: "Cadastro de combustível e manutenções",
    description:
      "Faça o lançamento de abastecimento e manutenções preventivas direto no app.",
  },
];

// ─────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────

export function HomeAppFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section ref={ref}>
      <Container>
        <Grid>
          <LeftCol
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <CircleOuter />
            <CircleInner />
            <PhoneImage
              src="/vantagens-app.png"
              alt="TK Rastreadores App"
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ scale: 1.02, y: -10 }}
              transition={{ duration: 0.4 }}
            />
          </LeftCol>

          <RightCol>
            <Title
              variants={titleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              4 Vantagens de usar o nosso
              <br />
              sistema TK Fleet
            </Title>

            <StepsList>
              {steps.map((step, index) => (
                <StepItem
                  key={index}
                  custom={index}
                  variants={stepVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <StepIndicator>
                    <StepBullet
                      custom={index}
                      variants={bulletVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      whileHover={{ scale: 1.3 }}
                    />
                    {index < steps.length - 1 && (
                      <StepLine
                        custom={index}
                        variants={lineVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                      />
                    )}
                  </StepIndicator>
                  <StepContent>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                  </StepContent>
                </StepItem>
              ))}
            </StepsList>
          </RightCol>
        </Grid>
      </Container>
    </Section>
  );
}
