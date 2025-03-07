import React from "react";
import AboutHero from "@/components/about/hero";
import Story from "@/components/about/story";
import Mission from "@/components/about/mission";
import GlobalPresence from "@/components/about/global-presence";
import AMLCompliance from "@/components/about/aml-compliance";

export const metadata = {
  title: "About Us | Tawakal Express",
  description:
    "Learn about Tawakal Express, a pioneer international money transfer company with over 40 years of experience.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <Story />
      <Mission />
      <GlobalPresence />
      <AMLCompliance />
    </main>
  );
}
