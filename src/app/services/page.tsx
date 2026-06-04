import type { Metadata } from "next";
import ServicesGrid from "@/components/Services";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
    title: "Services | InfiniteBlue Software Agency",
    description: "End-to-end software engineering for modern businesses. We specialize in Cloud Architecture, Mobile Apps, AI Integration, and Full-Stack Web Platforms.",
};

export default function ServicesPage() {
    return (
        <>
            <PageHero 
                title="Our Services" 
                description="End-to-end software engineering for modern businesses. From native mobile to cloud infrastructure." 
            />
            <ServicesGrid />
        </>
    );
}
