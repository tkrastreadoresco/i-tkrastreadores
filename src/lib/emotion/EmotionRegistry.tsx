"use client";

import * as React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";

function createEmotionCache() {
    const cache = createCache({ key: "css", prepend: true });
    cache.compat = true;
    return cache;
}

export default function EmotionRegistry({
    children,
}: {
    children: React.ReactNode;
}) {
    const [cache] = React.useState(() => {
        const c = createEmotionCache();
        c.inserted = {};
        return c;
    });

    useServerInsertedHTML(() => {
        const entries = Object.entries(cache.inserted);
        const styles = entries
            .map(([name, style]) => (typeof style === "boolean" ? "" : style))
            .join(" ");

        if (!styles) return null;

        return (
            <style
                data-emotion={`${cache.key} ${entries.map(([n]) => n).join(" ")}`}
                dangerouslySetInnerHTML={{ __html: styles }}
            />
        );
    });

    return <CacheProvider value={cache}>{children}</CacheProvider>;
}
