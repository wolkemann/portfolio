import Loader from "../components/Loader/Loader";
import Cursor from "../components/Cursor/Cursor";
import HomeSection from "./HomeSection";
import MainScene from "../scenes/MainScene";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";

export default function HomePage() {
  return (
    <main>
      <div className="hidden md:block md:fixed right-1 p-8 text-warmGray-100 font-bold">
        In development
      </div>
      <Loader />
      <Cursor />
      <MainScene />

      <div className="h-screen w-screen overflow-y-scroll snap-mandatory snap-y">
        <HomeSection />
        <div className="h-screen" />
        <AboutSection />
        <div className="h-screen" />
        <ProjectsSection />
      </div>
    </main>
  );
}
