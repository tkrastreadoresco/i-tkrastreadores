"use client";

import { Global, css } from "@emotion/react";
import { tokens } from "@/theme/tokens";

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        :root {
          color-scheme: light;
          --tk-bg: ${tokens.colors.bg};
          --tk-surface: ${tokens.colors.surface};
          --tk-text: ${tokens.colors.text};
          --tk-muted: ${tokens.colors.muted};
          --tk-border: ${tokens.colors.border};
          --tk-black: ${tokens.colors.black};
          --tk-white: ${tokens.colors.white};
          --tk-brand-red: ${tokens.colors.brand.red};
        }

        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }

        html,
        body {
          max-width: 100vw;
          overflow-x: hidden;
        }

        /* Lenis integration helpers */
        html.lenis {
          height: auto;
        }

        .lenis.lenis-smooth {
          scroll-behavior: auto !important;
        }

        .lenis.lenis-smooth [data-lenis-prevent] {
          overscroll-behavior: contain;
        }

        .lenis.lenis-stopped {
          overflow: hidden;
        }

        body {
          background: var(--tk-bg);
          color: var(--tk-text);
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          letter-spacing: -1px;
          line-height: 1.2;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Urbanist', sans-serif;
          letter-spacing: -1px;
          line-height: 1.1;
        }

        p, li, span, a, label {
          letter-spacing: -0.5px;
          line-height: 1.5;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button,
        input,
        textarea {
          font: inherit;
          letter-spacing: -0.5px;
        }

        ::selection {
          background: rgba(225, 6, 0, 0.22);
        }
      `}
    />
  );
}
