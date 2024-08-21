import { Navbar } from "@/components/Shared/Navbar";
import FirstBlock from "./components/FirstBlock/FirstBlock";
import SliderBrands from "./components/SliderBrands/SliderBrands";
import Features from "./components/Features/Features";
import { OurFleet } from "./components/OurFleet";
import { DriveToday } from "./components/DriveToday";
import { Credits } from "./components/Credits";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FirstBlock />
      <SliderBrands />
      <Features />
      <OurFleet />
      <DriveToday />
      <Credits />
    </div>
  );
}
