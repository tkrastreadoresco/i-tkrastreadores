export const tokens = {
    colors: {
        bg: "#FFFFFF",
        surface: "#FFFFFF",
        text: "#0B0B0D",
        muted: "#6B7280",
        border: "#E6E7EB",
        brand: {
            red: "#E10600",
            redSoft: "#FF3B30",
        },
        black: "#000000",
        white: "#FFFFFF",
    },
    radius: {
        sm: 10,
        md: 14,
        lg: 18,
        pill: 999,
    },
    shadow: {
        sm: "none",
        md: "none",
    },
    spacing: {
        xxs: 6,
        xs: 10,
        sm: 14,
        md: 18,
        lg: 24,
        xl: 32,
        xxl: 48,
    },
    container: {
        maxWidth: 1140,
        paddingX: 20,
    },
    breakpoints: {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
    },
    typography: {
        letterSpacing: "-1px",
        lineHeight: 1.1,
    },
} as const;

export type Tokens = typeof tokens;
