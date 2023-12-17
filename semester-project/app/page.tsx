import Link from "@/node_modules/next/link";
import HeroSection from "./_components/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center">
      <HeroSection />
    </main>
  );
}
