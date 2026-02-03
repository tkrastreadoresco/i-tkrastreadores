"use client";

import * as React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { tokens } from "@/theme/tokens";

const Frame = styled.div`
  border-radius: ${tokens.radius.lg}px;
  overflow: hidden;
  border: 1px solid var(--tk-border);
  background: var(--tk-surface);
`;

export function ServiceGallery({
    images,
}: {
    images: Array<{ src: string; alt: string }>;
}) {
    if (!images.length) return null;

    return (
        <Frame>
            <Swiper spaceBetween={0} slidesPerView={1}>
                {images.map((img) => (
                    <SwiperSlide key={img.src}>
                        <Image
                            src={img.src}
                            alt={img.alt}
                            width={1400}
                            height={900}
                            style={{ width: "100%", height: "auto", display: "block" }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Frame>
    );
}
