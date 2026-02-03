"use client";

import styled from "@emotion/styled";
import { Container } from "@/components/ui/Container";
import { tokens } from "@/theme/tokens";
import { Star, CalendarBlank, Crosshair, Eye, Handshake } from "@phosphor-icons/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "swiper/css";

// ─────────────────────────────────────────────────────────────
// STYLED COMPONENTS
// ─────────────────────────────────────────────────────────────

const Section = styled.section`
  padding: 48px 0;
  background-color: ${tokens.colors.white};

  @media (max-width: ${tokens.breakpoints.md}px) {
    padding: 0 0 24px 0;
  }
`;

const Header = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
  margin-bottom: 48px;

  @media (max-width: ${tokens.breakpoints.md}px) {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 32px;
  }
`;

const Title = styled(motion.h2)`
  font-size: 40px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -1px;
  color: ${tokens.colors.black};
  flex-shrink: 0;
  flex: 1;

  @media (max-width: ${tokens.breakpoints.md}px) {
    font-size: 32px;
    max-width: 100%;
  }
`;

const Description = styled(motion.p)`
  color: ${tokens.colors.muted};
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.5px;
  flex: 1;

  @media (max-width: ${tokens.breakpoints.md}px) {
    max-width: 100%;
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 480px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 48px;

  @media (max-width: ${tokens.breakpoints.md}px) {
    height: 280px;
    border-radius: 16px;
    margin-bottom: 32px;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StarsWrapper = styled(motion.div)`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 4px;
  background: ${tokens.colors.white};
  padding: 8px 16px;
  border-radius: 100px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const CardsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: ${tokens.breakpoints.md}px) {
    display: none;
  }
`;

const MobileCarousel = styled.div`
  display: none;

  @media (max-width: ${tokens.breakpoints.md}px) {
    display: block;

    .swiper-slide {
      width: 280px;
    }
  }
`;

const Card = styled(motion.div)`
  border: 1px solid ${tokens.colors.border};
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  cursor: default;

  &:hover {
    border-color: ${tokens.colors.black};
    transform: translateY(-4px);

    .icon-wrapper {
      background: ${tokens.colors.black};
      
      svg {
        color: ${tokens.colors.white};
      }
    }
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid ${tokens.colors.border};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);

  svg {
    color: ${tokens.colors.black};
    transition: color 0.3s ease;
  }
`;

const CardText = styled.p`
  font-size: 14px;
  color: ${tokens.colors.text};
  line-height: 1.5;
  letter-spacing: -0.5px;
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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  }),
};

const imageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
};

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────

const features = [
  {
    icon: CalendarBlank,
    text: "14 anos de experiência no desenvolvimento de soluções tecnológicas para logística e transporte.",
  },
  {
    icon: Crosshair,
    text: "Fornecer tecnologias avançadas para decisões estratégicas, otimização de recursos e proteção de ativos.",
  },
  {
    icon: Eye,
    text: "Ser referência nacional em rastreamento inteligente, reconhecida pela inovação e excelência no atendimento.",
  },
  {
    icon: Handshake,
    text: "Atuamos com foco em inovação, confiabilidade e entrega de resultados reais para nossos clientes.",
  },
];

// ─────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────

export function HomeAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section ref={ref}>
      <Container>
        <Header
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Title variants={itemVariants}>
            Conheça a sua empresa de Gestão e monitoramento
          </Title>
          <Description variants={itemVariants}>
            Com 14 anos de experiência, a TK Rastreadores é especialista em
            rastreamento e monitoramento veicular inteligente. Unimos inovação e
            tecnologia para otimizar a gestão de frotas, reduzir custos e
            garantir máxima segurança na condução.
          </Description>
        </Header>

        <ImageWrapper
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <AboutImage src="/about-image.png" alt="TK Rastreadores Office" />
          <StarsWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }}
              >
                <Star size={20} weight="fill" color="#F59E0B" />
              </motion.div>
            ))}
          </StarsWrapper>
        </ImageWrapper>

        <CardsGrid>
          {features.map((feature, index) => (
            <Card
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ y: -4 }}
            >
              <IconWrapper className="icon-wrapper">
                <feature.icon size={22} weight="light" />
              </IconWrapper>
              <CardText>{feature.text}</CardText>
            </Card>
          ))}
        </CardsGrid>

        <MobileCarousel>
          <Swiper
            modules={[FreeMode]}
            freeMode
            slidesPerView="auto"
            spaceBetween={16}
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <Card
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <IconWrapper className="icon-wrapper">
                    <feature.icon size={22} weight="light" />
                  </IconWrapper>
                  <CardText>{feature.text}</CardText>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </MobileCarousel>
      </Container>
    </Section>
  );
}
