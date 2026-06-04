import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
    title: "About Us | InfiniteBlue Software Agency",
    description: "We are a collective of elite software engineers dedicated to solving complex business challenges with an unwavering commitment to 99.9% uptime and global standards.",
};

export default function CompanyPage() {
    return (
        <>
            <About />
        </>
    );
}
