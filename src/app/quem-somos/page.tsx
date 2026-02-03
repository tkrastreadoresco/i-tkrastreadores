import type { Metadata } from "next";
import { WhoWeArePageView } from "@/features/pages/WhoWeArePageView";

export const metadata: Metadata = {
    title: "Quem somos",
};

export default function QuemSomosPage() {
    return <WhoWeArePageView />;
}
