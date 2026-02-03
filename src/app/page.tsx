import { HomeHero } from "@/features/home/HomeHero";
import { HomeStats } from "@/features/home/HomeStats";
import { HomeAbout } from "@/features/home/HomeAbout";
import { HomeServices } from "@/features/home/HomeServices";
import { HomeBenefits } from "@/features/home/HomeBenefits";
import { HomeAppFeatures } from "@/features/home/HomeAppFeatures";
import { HomeAppDownload } from "@/features/home/HomeAppDownload";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeStats />
      <HomeAbout />
      <HomeServices />
      <HomeBenefits />
      <HomeAppFeatures />
      <HomeAppDownload />
    </main>
  );
}
