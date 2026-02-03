"use client";

import Link from "next/link";
import styled from "@emotion/styled";
import { tokens } from "@/theme/tokens";

export const Button = styled.button<{ variant?: "solid" | "ghost" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: ${tokens.radius.pill}px;
  padding: 12px 20px;
  font-family: 'Urbanist', sans-serif;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid
    ${({ variant }) =>
    variant === "ghost" ? "var(--tk-border)" : "transparent"};
  background: ${({ variant }) =>
    variant === "ghost" ? "transparent" : "var(--tk-black)"};
  color: ${({ variant }) =>
    variant === "ghost" ? "var(--tk-text)" : "var(--tk-white)"};
  cursor: pointer;
  transition: transform 140ms ease, opacity 140ms ease;

  &:hover {
    opacity: 0.92;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const ButtonLink = styled(Link) <{ variant?: "solid" | "ghost" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: ${tokens.radius.pill}px;
  padding: 12px 20px;
  font-family: 'Urbanist', sans-serif;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid
    ${({ variant }) =>
    variant === "ghost" ? "var(--tk-border)" : "transparent"};
  background: ${({ variant }) =>
    variant === "ghost" ? "transparent" : "var(--tk-black)"};
  color: ${({ variant }) =>
    variant === "ghost" ? "var(--tk-text)" : "var(--tk-white)"};
  cursor: pointer;
  transition: transform 140ms ease, opacity 140ms ease;

  &:hover {
    opacity: 0.92;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.99);
  }
`;
