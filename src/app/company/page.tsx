import type { Metadata } from "next";
import About from "@/components/About";
import PageHero from "@/components/PageHero";
import Process from "@/components/Process";

export const metadata: Metadata = {
    title: "About Us",
    description: "We are a collective of elite software engineers dedicated to solving complex business challenges with an unwavering commitment to 99.9% uptime and global standards.",
    alternates: { canonical: 'https://infiniteblue.africa/company' },
};

export default function CompanyPage() {
    return (
        <>
            <PageHero 
                title="Our Company" 
                description="We are a collective of elite software engineers and cloud architects dedicated to solving complex business challenges." 
            />
            <About />
            <Process />
        </>
    );
}
