"use client";

import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { tokens } from "@/theme/tokens";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─────────────────────────────────────────────────────────────
// STYLED COMPONENTS
// ─────────────────────────────────────────────────────────────

const Section = styled.section`
  padding: 24px 48px;

  @media (max-width: ${tokens.breakpoints.md}px) {
    padding: 0 24px;
  }
`;

const Wrapper = styled(motion.div)`
  background-color: #f4f4f5;
  border-radius: 24px;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  min-height: 380px;

  @media (max-width: ${tokens.breakpoints.lg}px) {
    flex-direction: column;
    min-height: auto;
  }
`;

const Content = styled(motion.div)`
  flex: 1;
  padding: 60px;
  z-index: 2;

  @media (max-width: ${tokens.breakpoints.md}px) {
    padding: 40px 24px;
    text-align: center;
  }
`;

const Title = styled(motion.h2)`
  font-size: 36px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -1px;
  margin-bottom: 16px;
  color: ${tokens.colors.black};
  max-width: 480px;

  @media (max-width: ${tokens.breakpoints.md}px) {
    font-size: 28px;
    max-width: 100%;
  }
`;

const Description = styled(motion.p)`
  font-size: 15px;
  color: ${tokens.colors.muted};
  line-height: 1.5;
  letter-spacing: -0.5px;
  margin-bottom: 32px;
  max-width: 440px;

  @media (max-width: ${tokens.breakpoints.md}px) {
    max-width: 100%;
  }
`;

const StoreButtons = styled(motion.div)`
  display: flex;
  gap: 12px;

  @media (max-width: ${tokens.breakpoints.md}px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const StoreButton = styled(motion.create(Link))`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.5px;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);

  svg {
    width: 20px;
    height: 20px;
  }
`;

const GooglePlayButton = styled(StoreButton)`
  background: ${tokens.colors.black};
  color: white;

  &:hover {
    background: #222;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const AppStoreButton = styled(StoreButton)`
  background: white;
  color: ${tokens.colors.black};
  border: 1px solid ${tokens.colors.border};

  &:hover {
    border-color: ${tokens.colors.black};
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ImageSide = styled(motion.div)`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 380px;

  @media (max-width: ${tokens.breakpoints.lg}px) {
    width: 100%;
    min-height: 300px;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: translateY(-50%) scale(1);
  }
  50% {
    transform: translateY(-50%) scale(1.02);
  }
`;

const BlackCircle = styled(motion.div)`
  position: absolute;
  right: -100px;
  top: 50%;
  transform: translateY(-50%);
  width: 450px;
  height: 450px;
  background: ${tokens.colors.black};
  border-radius: 50%;

  @media (max-width: ${tokens.breakpoints.lg}px) {
    right: 50%;
    transform: translate(50%, -50%);
    width: 350px;
    height: 350px;
    animation: ${pulse} 4s ease-in-out infinite;
  }

  @media (max-width: ${tokens.breakpoints.md}px) {
    width: 280px;
    height: 280px;
  }
`;

const PhoneMockup = styled(motion.div)`
  position: relative;
  z-index: 2;
  width: 280px;
  height: 560px;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  border: 8px solid #1a1a1a;
  background: #000;
  transform: translateX(60px) translateY(80px);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${tokens.breakpoints.lg}px) {
    transform: translateY(60px);
    width: 240px;
    height: 480px;
  }

  @media (max-width: ${tokens.breakpoints.md}px) {
    width: 200px;
    height: 400px;
    border-width: 6px;
    border-radius: 32px;
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
      delayChildren: 0.1,
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

const circleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
};

const phoneVariants = {
  hidden: { opacity: 0, y: 80, rotate: -5 },
  visible: {
    opacity: 1,
    y: 80,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1] as const,
      delay: 0.2,
    },
  },
};

// ─────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────

const GooglePlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.609-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.807 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

// ─────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────

export function HomeAppDownload() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section ref={ref}>
      <Wrapper
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      >
        <Content
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Title variants={itemVariants}>
            Acesse seus dados e configure alertas 100% personalizados!
          </Title>
          <Description variants={itemVariants}>
            Com nosso aplicativo, você consegue ter o controle de tudo, como
            controle de velocidade, posição, trajeto e diversas funcionalidades
          </Description>

          <StoreButtons variants={itemVariants}>
            <GooglePlayButton
              href="#"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <GooglePlayIcon />
              Google Play
            </GooglePlayButton>
            <AppStoreButton
              href="#"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <AppleIcon />
              App Store
            </AppStoreButton>
          </StoreButtons>
        </Content>

        <ImageSide>
          <BlackCircle
            variants={circleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
          <PhoneMockup
            variants={phoneVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{
              y: 70,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <img src="/app-tkflet-1.jpg" alt="TK Rastreadores App" />
          </PhoneMockup>
        </ImageSide>
      </Wrapper>
    </Section>
  );
}
