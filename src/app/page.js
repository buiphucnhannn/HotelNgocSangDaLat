import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Rooms from "@/components/sections/Rooms";
import Amenities from "@/components/sections/Amenities";
import Experience from "@/components/sections/Experience";
import Location from "@/components/sections/Location";
import Gallery from "@/components/sections/Gallery";
import SunsetCta from "@/components/sections/SunsetCta";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Experience />
      <Location />
      <Gallery />
      <SunsetCta />
    </>
  );
}
