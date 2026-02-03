import type { Metadata } from "next";
import { ContatoPageView } from "@/features/pages/ContatoPageView";

export const metadata: Metadata = {
    title: "Contato",
};

export default function ContatoPage() {
    return <ContatoPageView />;
}
