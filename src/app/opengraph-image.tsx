import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "TK Rastreadores - Soluções em rastreamento e monitoramento de frotas";
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

                {/* Logo */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "40px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                        }}
                    >
                        {/* TK Icon */}
                        <div
                            style={{
                                width: "80px",
                                height: "80px",
                                borderRadius: "20px",
                                backgroundColor: "#e10600",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "40px",
                                fontWeight: "bold",
                                color: "white",
                            }}
                        >
                            TK
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "48px",
                                    fontWeight: "bold",
                                    color: "white",
                                    letterSpacing: "-2px",
                                }}
                            >
                                TK Rastreadores
                            </span>
                        </div>
                    </div>
                </div>

                {/* Main Title */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        maxWidth: "900px",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "56px",
                            fontWeight: "bold",
                            color: "white",
                            lineHeight: 1.1,
                            letterSpacing: "-2px",
                            margin: 0,
                            marginBottom: "24px",
                        }}
                    >
                        Gestão e Monitoramento
                        <br />
                        de Frotas Inteligente
                    </h1>
                    <p
                        style={{
                            fontSize: "24px",
                            color: "rgba(255, 255, 255, 0.7)",
                            margin: 0,
                            lineHeight: 1.4,
                        }}
                    >
                        Rastreamento veicular • Telemetria avançada • Videotelemetria
                    </p>
                </div>

                {/* Stats */}
                <div
                    style={{
                        display: "flex",
                        gap: "60px",
                        marginTop: "60px",
                    }}
                >
                    {[
                        { value: "14+", label: "Anos" },
                        { value: "3000+", label: "Clientes" },
                        { value: "20000+", label: "Rastreadores" },
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
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                    }}
                >
                    <span
                        style={{
                            fontSize: "20px",
                            color: "rgba(255, 255, 255, 0.5)",
                        }}
                    >
                        tkrastreadores.com.br
                    </span>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
