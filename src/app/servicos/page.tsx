import type { Metadata } from "next";
import { ServicesIndexPage } from "@/features/services/ServicesIndexPage";

export const metadata: Metadata = {
    title: "Serviços",
};

export default function ServicosPage() {
    return <ServicesIndexPage title="Serviços" />;
}
