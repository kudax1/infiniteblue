import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <Hero />
      <FadeIn delay={100}><ClientLogos /></FadeIn>
      <FadeIn delay={100}><Services /></FadeIn>
      <FadeIn delay={100}><FeaturedWork /></FadeIn>
      <FadeIn delay={100}><Testimonials /></FadeIn>
      <FadeIn delay={100}><CTABanner /></FadeIn>
    </>
  );
}
