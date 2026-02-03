import type { Metadata } from "next";
import { ServicesIndexPage } from "@/features/services/ServicesIndexPage";

export const metadata: Metadata = {
    title: "Soluções",
};

export default function SolucoesPage() {
    return <ServicesIndexPage title="Soluções" />;
}
