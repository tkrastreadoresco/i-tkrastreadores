"use client";

import * as React from "react";
import { GlobalStyles } from "@/theme/GlobalStyles";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { LenisProvider } from "@/components/app/LenisProvider";

export function AppShell({ children }: { children: React.ReactNode }) {
    return (
        <LenisProvider>
            <GlobalStyles />
            <SiteHeader />
            {children}
            <SiteFooter />
        </LenisProvider>
    );
}
