import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/site";
import { ServiceDetailPage } from "@/features/services/ServiceDetailPage";

export function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);
    return {
        title: service?.title ?? "Solução",
        description: service?.short,
    };
}

export default async function SolucaoSlugPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);
    if (!service) notFound();
    return <ServiceDetailPage service={service} />;
}
