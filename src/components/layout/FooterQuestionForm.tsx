"use client";

import * as React from "react";
import styled from "@emotion/styled";
import { contact } from "@/content/site";
import { tokens } from "@/theme/tokens";

const Wrap = styled.form`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: ${tokens.breakpoints.md}px) {
    width: 100%;
  }
`;

const Input = styled.input`
  height: 40px;
  min-width: 240px;
  padding: 0 14px;
  border-radius: ${tokens.radius.pill}px;
  border: 1px solid var(--tk-border);
  outline: none;

  &:focus {
    border-color: rgba(225, 6, 0, 0.45);
    outline: 4px solid rgba(225, 6, 0, 0.10);
    outline-offset: 0;
  }

  @media (max-width: ${tokens.breakpoints.md}px) {
    flex: 1;
    min-width: 0;
  }
`;

const Submit = styled.button`
  height: 40px;
  padding: 0 16px;
  border-radius: ${tokens.radius.pill}px;
  border: 1px solid transparent;
  background: var(--tk-black);
  color: var(--tk-white);
  font-weight: 600;
  cursor: pointer;
  transition: opacity 140ms ease;

  &:hover {
    opacity: 0.9;
  }
`;

export function FooterQuestionForm() {
  const [value, setValue] = React.useState("");

  return (
    <Wrap
      onSubmit={(e) => {
        e.preventDefault();
        const message = value.trim();
        if (!message) return;
        const subject = encodeURIComponent("Dúvida — TK Rastreadores");
        const body = encodeURIComponent(message);
        window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      }}
    >
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Digite aqui a sua dúvida..."
        aria-label="Digite a sua dúvida"
      />
      <Submit type="submit">Enviar</Submit>
    </Wrap>
  );
}
