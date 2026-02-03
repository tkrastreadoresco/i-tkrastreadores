"use client";

import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "@emotion/styled";
import Link from "next/link";
import type { Service } from "@/content/site";
import { tokens } from "@/theme/tokens";

const Card = styled(Link)`
  display: block;
  border: 1px solid var(--tk-border);
  border-radius: ${tokens.radius.lg}px;
  padding: 16px;
  background: var(--tk-surface);

  h3 {
    font-size: 16px;
    font-weight: 800;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    line-height: 1.55;
    color: var(--tk-muted);
  }
`;

export function ServicesCarousel({ services }: { services: Service[] }) {
    return (
        <Swiper
            spaceBetween={14}
            slidesPerView={1.1}
            breakpoints={{
                640: { slidesPerView: 1.4 },
                768: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3.1 },
            }}
        >
            {services.map((s) => (
                <SwiperSlide key={s.slug}>
                    <Card href={`/servicos/${s.slug}`}>
                        <h3>{s.title}</h3>
                        <p>{s.short}</p>
                    </Card>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
