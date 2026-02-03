"use client";

import * as React from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

declare global {
    interface Window {
        __tk_lenis?: Lenis;
    }
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    React.useEffect(() => {
        // Respect accessibility preference.
        const prefersReduced =
            typeof window !== "undefined" &&
            window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) return;

        // Fast Refresh / HMR can leave a stale instance around. Recreate safely.
        if (window.__tk_lenis) {
            try {
                window.__tk_lenis.destroy();
            } catch {
                // ignore
            }
            window.__tk_lenis = undefined;
        }

        const lenis = new Lenis({
            // Keep touch scrolling native to avoid breaking mobile UX.
            smoothWheel: true,
            syncTouch: false,
            wheelMultiplier: 1,
            touchMultiplier: 1,
            lerp: 0.12,
            prevent: (node) => {
                return Boolean(node.closest?.("[data-lenis-prevent]"));
            },
        });

        window.__tk_lenis = lenis;

        let raf = 0;
        const loop = (time: number) => {
            lenis.raf(time);
            raf = window.requestAnimationFrame(loop);
        };
        raf = window.requestAnimationFrame(loop);

        return () => {
            window.cancelAnimationFrame(raf);
            lenis.destroy();
            if (window.__tk_lenis === lenis) window.__tk_lenis = undefined;
        };
    }, []);

    React.useEffect(() => {
        // Always start new pages at the top.
        const lenis = window.__tk_lenis;
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
    }, [pathname]);

    return <>{children}</>;
}
