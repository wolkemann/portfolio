import Loader from "./components/Loader/Loader";
import Cursor from "./components/Cursor/Cursor";
import HomeSection from "./pages/HomeSection";
import MainScene from "./scenes/MainScene";
import AboutSection from "./pages/AboutSection";
import ProjectsSection from "./pages/ProjectsSection";
import ContactsSection from "./pages/ContactsSection";

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
        <div className="h-screen" />
        <ContactsSection />
      </div>
    </main>
  );
}
