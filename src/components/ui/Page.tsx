"use client";

import styled from "@emotion/styled";
import { tokens } from "@/theme/tokens";

export const Page = styled.main`
  padding: 0;
  min-height: calc(100vh - 74px);
`;

export const PageTitle = styled.h1`
  font-family: 'Urbanist', sans-serif;
  font-size: 36px;
  line-height: 1.1;
  font-weight: 800;
  color: ${tokens.colors.black};

  @media (max-width: ${tokens.breakpoints.md}px) {
    font-size: 30px;
  }
`;

export const PageLead = styled.p`
  margin-top: 12px;
  font-size: 16px;
  line-height: 1.7;
  color: ${tokens.colors.muted};
  max-width: 820px;
`;
