import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "TK Rastreadores - Quem Somos";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#000000",
                    backgroundImage:
                        "radial-gradient(circle at 25% 25%, #1a1a1a 0%, #000000 50%)",
                    fontFamily: "system-ui, sans-serif",
                    padding: "60px",
                }}
            >
                {/* Gradient overlay */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "40%",
                        background:
                            "linear-gradient(to top, rgba(225, 6, 0, 0.2), transparent)",
                    }}
                />

                {/* TK Icon */}
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "24px",
                        backgroundColor: "#e10600",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "48px",
                        fontWeight: "bold",
                        color: "white",
                        marginBottom: "40px",
                    }}
                >
                    TK
                </div>

                {/* Main Title */}
                <h1
                    style={{
                        fontSize: "64px",
                        fontWeight: "bold",
                        color: "white",
                        lineHeight: 1.1,
                        letterSpacing: "-2px",
                        margin: 0,
                        marginBottom: "24px",
                        textAlign: "center",
                    }}
                >
                    Quem Somos
                </h1>

                <p
                    style={{
                        fontSize: "28px",
                        color: "rgba(255, 255, 255, 0.7)",
                        margin: 0,
                        marginBottom: "48px",
                        textAlign: "center",
                        maxWidth: "800px",
                    }}
                >
                    14 anos de experiência em rastreamento e monitoramento de frotas
                </p>

                {/* Stats */}
                <div
                    style={{
                        display: "flex",
                        gap: "60px",
                    }}
                >
                    {[
                        { value: "14+", label: "Anos de experiência" },
                        { value: "3000+", label: "Clientes ativos" },
                        { value: "20000+", label: "Veículos monitorados" },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "48px",
                                    fontWeight: "bold",
                                    color: "#e10600",
                                    letterSpacing: "-2px",
                                }}
                            >
                                {stat.value}
                            </span>
                            <span
                                style={{
                                    fontSize: "18px",
                                    color: "rgba(255, 255, 255, 0.6)",
                                }}
                            >
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Website URL */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "40px",
                        fontSize: "20px",
                        color: "rgba(255, 255, 255, 0.5)",
                    }}
                >
                    tkrastreadores.com.br
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
