import type { Metadata } from "next";
import { AboutPageView } from "@/features/pages/AboutPageView";

export const metadata: Metadata = {
    title: "Sobre",
};

export default function SobrePage() {
    return <AboutPageView />;
}
