"use client";

import styled from "@emotion/styled";
import { tokens } from "@/theme/tokens";

export const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  padding-left: 48px;
  padding-right: 48px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${tokens.breakpoints.md}px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;
