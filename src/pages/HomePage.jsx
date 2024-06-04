import Loader from "../components/Loader/Loader";
import Cursor from "../components/Cursor/Cursor";
import HomeSection from "./HomeSection";
import MainScene from "../scenes/MainScene";
import AboutSection from "./AboutSection";
import PorjectsSection from "./ProjectsSection";

export default function HomePage() {
  return (
    <main>
      <div className="hidden md:block md:fixed right-1 p-8 text-warmGray-100 font-bold">
        In development
      </div>
      <Loader />
      <Cursor />
      <MainScene />

      <HomeSection />
      <div className="h-screen" />
      <AboutSection />
      <div className="h-screen" />
      <PorjectsSection />
    </main>
  );
}
