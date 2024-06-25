import { Hero } from "@/components/molecules";
import RetroGrid from "@/components/molecules/Retrogrid/Retrogrid";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="w-full h-full">
        <RetroGrid />
        <Hero />
      </div>
    </main>
  );
}
