import { HeroSection } from "@/components/home/HeroSection";
import { HomeExperience } from "@/components/home/HomeExperience";
import { SkillsSection } from "@/components/home/SkillsSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HomePersonal } from "@/components/home/HomePersonal";
import { HomeContact } from "@/components/home/HomeContact";

export default function Home() {
    return (
        <div className="flex flex-col gap-12 md:gap-20 pb-16">
            <HeroSection />
            <HomeExperience />
            <SkillsSection />
            <FeaturedProjects />
            <HomePersonal />
            <HomeContact />
        </div>
    );
}

