import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "TK Rastreadores - Serviços Profissionais";
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
                    Nossos Serviços
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
                    Instalação, suporte técnico e consultoria especializada
                </p>

                {/* Services Grid */}
                <div
                    style={{
                        display: "flex",
                        gap: "24px",
                    }}
                >
                    {["Instalação", "Suporte 24h", "Treinamento", "Consultoria"].map(
                        (service, i) => (
                            <div
                                key={i}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    padding: "16px 28px",
                                    borderRadius: "12px",
                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "20px",
                                        color: "white",
                                        fontWeight: "600",
                                    }}
                                >
                                    {service}
                                </span>
                            </div>
                        )
                    )}
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
