"use client";

import styled from "@emotion/styled";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { tokens } from "@/theme/tokens";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { services, contact } from "@/content/site";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "swiper/css";

// ─────────────────────────────────────────────────────────────
// STYLED COMPONENTS
// ─────────────────────────────────────────────────────────────

const Section = styled.section`
  padding: 80px 0 100px;
  background-color: ${tokens.colors.black};
  color: ${tokens.colors.white};

  @media (max-width: ${tokens.breakpoints.md}px) {
    padding: 60px 0 80px;
  }
`;

const Header = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 60px;
  margin-bottom: 48px;

  @media (max-width: ${tokens.breakpoints.md}px) {
    flex-direction: column;
    gap: 24px;
    margin-bottom: 32px;
  }
`;

const Title = styled(motion.h2)`
  font-size: 40px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -1px;
  flex: 1;

  @media (max-width: ${tokens.breakpoints.md}px) {
    font-size: 32px;
  }
`;

const HeaderRight = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  line-height: 1.5;
  letter-spacing: -0.5px;
`;

const CarouselWrapper = styled(motion.div)`
  .swiper-slide {
    width: 380px;
    height: auto;

    @media (max-width: ${tokens.breakpoints.md}px) {
      width: 300px;
    }
  }
`;

const Card = styled(motion.create(Link)) <{ $imagePosition: "top" | "bottom" }>`
  display: flex;
  flex-direction: ${({ $imagePosition }) =>
    $imagePosition === "top" ? "column" : "column-reverse"};
  background: ${tokens.colors.white};
  border-radius: 20px;
  overflow: hidden;
  justify-content: space-between;
  color: ${tokens.colors.black};
  height: 100%;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const CardContent = styled.div`
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.5px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: ${tokens.colors.muted};
  line-height: 1.5;
  letter-spacing: -0.5px;
`;

const CardImageWrapper = styled.div<{ $fromTop: boolean }>`
  width: 100%;
  height: 280px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: ${({ $fromTop }) => ($fromTop ? "flex-start" : "flex-end")};
  justify-content: center;

  @media (max-width: ${tokens.breakpoints.md}px) {
    height: 220px;
  }
`;

const PhoneMockup = styled.div<{ $rotate?: number; $hasImage: boolean; $fromTop: boolean }>`
  width: 65%;
  aspect-ratio: 9 / 17;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transform: ${({ $rotate, $fromTop }) => {
    const translateY = $fromTop ? "translateY(-50%)" : "translateY(50%)";
    return $rotate ? `rotate(${$rotate}deg) ${translateY}` : translateY;
  }};
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  background: ${({ $hasImage }) => ($hasImage ? "#000" : "transparent")};
  border: ${({ $hasImage }) => ($hasImage ? "6px solid #1a1a1a" : "1px solid red")};
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
      staggerChildren: 0.15,
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

const carouselVariants = {
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
// DATA HELPERS
// ─────────────────────────────────────────────────────────────

function getServiceImage(service: (typeof services)[0]): string | null {
  if (service.images && service.images.length > 0) {
    return service.images[0].src;
  }
  return null;
}

const rotations = [0, -5, 3, -3, 5, 0, -4, 4, -2, 2, 0];

// ─────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────

export function HomeServices() {
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
            Conheça todos os nossos serviços oferecidos
          </Title>
          <HeaderRight variants={itemVariants}>
            <Description>
              Aqui na TK Rastreadores você encontra todos os serviços
              necessários para você e sua empresa
            </Description>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ButtonLink
                href={contact.comercial.link}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                style={{
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "white",
                  width: "fit-content",
                }}
              >
                Solicitar uma cotação ↗
              </ButtonLink>
            </motion.div>
          </HeaderRight>
        </Header>

        <CarouselWrapper
          variants={carouselVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Swiper
            modules={[Autoplay]}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            slidesPerView="auto"
            spaceBetween={20}
          >
            {services.map((service, index) => {
              const image = getServiceImage(service);
              const hasImage = !!image;
              const rotation = rotations[index % rotations.length];
              const imageOnTop = index % 2 === 0;
              const phoneFromTop = !imageOnTop;

              return (
                <SwiperSlide key={service.slug}>
                  <Card
                    href={`/solucoes/${service.slug}`}
                    $imagePosition={imageOnTop ? "top" : "bottom"}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                  >
                    <CardContent>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.short}</CardDescription>
                    </CardContent>
                    <CardImageWrapper $fromTop={phoneFromTop}>
                      <PhoneMockup $rotate={rotation} $hasImage={hasImage} $fromTop={phoneFromTop}>
                        {hasImage && <img src={image} alt={service.title} />}
                      </PhoneMockup>
                    </CardImageWrapper>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </CarouselWrapper>
      </Container>
    </Section>
  );
}
