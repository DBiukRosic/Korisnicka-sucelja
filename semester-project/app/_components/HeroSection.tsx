import HeroImageGrid, { HeroImageObject } from "./HeroImageGrid";
import Button from "@/components/Button";

import heroImage1 from "@/public/hero/gettyimages-adding-engine-oil.jpg";
import heroImage2 from "@/public/hero/How-To-Fix-A-Blown-Engine-1200x900.jpg";
import heroImage3 from "@/public/hero/marc-kleen-GeeZAavtFy4-unsplash.jpg";
import heroImage4 from "@/public/hero/Vehicle-Diagnostic-Test-Guildford-scaled.jpg";

const images: HeroImageObject[] = [
  {
    image: heroImage1,
    borderRadius: "10% 10% 10% 10%",
  },
  {
    image: heroImage2,
    borderRadius: "10% 10% 10% 10%",
  },
  {
    image: heroImage3,
    borderRadius: "10% 10% 10% 10%",
  },
  {
    image: heroImage4,
    borderRadius: "10% 10% 10% 10%",
  },
];

const HeroSection = () => (
  
    <section className = "container flex justify-between items-center gap-10 w-screen mb-8">
        <div className = "flex flex-col justify-start gap-4 max-w-xl m-auto lg:m-0">
            <h1 className = "font-urbanist text-4xl font-bold lg:text-left xl:text-5xl whitespace-break-spaces text-brand-blue-50">We care about your car!</h1>
            <p className = "text-base font-urbanist text-center lg:text-left xl:test-lg whitespace-break-spaces">Our car service is dedicated to ensuring your vehicle&apos;s peak performance and your complete satisfaction. With a team of highly skilled technicians and state-of-the-art equipment, we offer a comprehensive range of services to keep your vehicle running smoothly. From routine maintenance like oil changes and tire rotations to complex engine diagnostics and repairs, we handle it all. We take pride in our commitment to quality and safety, using only genuine parts and adhering to industry-best practices. Whether you&apos;re in need of a quick tune-up or a major overhaul, you can trust us to provide efficient, reliable, and cost-effective solutions for your car. At our car service, your vehicle is in capable hands, and your peace of mind is our top priority.</p>
            <div className = "flex justify-center lg:justify-center">
            <Button orange>BOOK A MEETING NOW</Button>
        </div>
        
        </div>
        <div className="hidden lg:block flex-shrink-0">
      <HeroImageGrid images={images} />
    </div>
    </section>
);

export default HeroSection;