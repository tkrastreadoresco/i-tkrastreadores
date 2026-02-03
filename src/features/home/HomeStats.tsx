"use client";

import * as React from "react";
import styled from "@emotion/styled";
import { Container } from "@/components/ui/Container";
import { tokens } from "@/theme/tokens";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";

// ─────────────────────────────────────────────────────────────
// STYLED COMPONENTS
// ─────────────────────────────────────────────────────────────

const Section = styled.section`
  padding: 48px 48px;

  @media (max-width: ${tokens.breakpoints.md}px) {
    padding: 24px;
  }
`;

const Band = styled(motion.div)`
  background-color: ${tokens.colors.black};
  border-radius: 20px;
  padding: 60px 80px;
  color: ${tokens.colors.white};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
  }

  @media (max-width: ${tokens.breakpoints.md}px) {
    padding: 40px 24px;
    border-radius: 16px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px;

  @media (max-width: ${tokens.breakpoints.md}px) {
    display: none;
  }
`;

const MobileCarousel = styled.div`
  display: none;

  @media (max-width: ${tokens.breakpoints.md}px) {
    display: block;

    .swiper-slide {
      width: auto;
    }
  }
`;

const Item = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 200px;

  @media (max-width: ${tokens.breakpoints.md}px) {
    min-width: 180px;
  }
`;

const NumberWrap = styled.div`
  font-family: 'Urbanist', sans-serif;
  font-size: 62px;
  font-weight: 200;
  line-height: 1;
  letter-spacing: -2px;
  display: flex;
  align-items: baseline;

  @media (max-width: ${tokens.breakpoints.md}px) {
    font-size: 40px;
  }
`;

const Label = styled(motion.div)`
  font-family: 'Urbanist', sans-serif;
  font-size: 14px;
  letter-spacing: -0.5px;
  color: rgba(255, 255, 255, 0.6);
  max-width: 200px;
  line-height: 1.4;
`;

// ─────────────────────────────────────────────────────────────
// ANIMATED NUMBER COMPONENT
// ─────────────────────────────────────────────────────────────

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function AnimatedNumber({ value, suffix = "", prefix = "", duration = 2 }: AnimatedNumberProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const durationMs = duration * 1000;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(easeOut * value);

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <NumberWrap ref={ref}>
      {prefix && <span>{prefix}</span>}
      <span>{displayValue.toLocaleString("pt-BR")}</span>
      {suffix && <span>{suffix}</span>}
    </NumberWrap>
  );
}

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────

const stats = [
  {
    value: 94,
    suffix: "%",
    label: "Taxa de satisfação que condiz com nossa entrega de qualidade",
  },
  {
    value: 14,
    suffix: "+",
    label: "Anos de experiência entregando o melhor serviço do mercado",
  },
  {
    value: 3000,
    suffix: "+",
    label: "Clientes atendidos em toda a nossa trajetória de sucesso",
  },
  {
    value: 20000,
    suffix: "+",
    label: "Rastreadores instalados em veículos de todos os portes",
  },
];

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

// ─────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────

export function HomeStats() {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section>
      <Band
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      >
        <Grid>
          {stats.map((stat, index) => (
            <Item
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.1,
                ease: [0.23, 1, 0.32, 1] as const
              }}
            >
              <AnimatedNumber
                value={stat.value}
                suffix={stat.suffix}
                duration={2 + index * 0.3}
              />
              <Label
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                {stat.label}
              </Label>
            </Item>
          ))}
        </Grid>

        <MobileCarousel>
          <Swiper
            modules={[FreeMode]}
            freeMode
            slidesPerView="auto"
            spaceBetween={32}
          >
            {stats.map((stat, index) => (
              <SwiperSlide key={index}>
                <Item
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2}
                  />
                  <Label>{stat.label}</Label>
                </Item>
              </SwiperSlide>
            ))}
          </Swiper>
        </MobileCarousel>
      </Band>
    </Section>
  );
}
