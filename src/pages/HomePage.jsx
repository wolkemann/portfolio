import Loader from "../components/Loader/Loader";
import Cursor from "../components/Cursor/Cursor";
import HomeSection from "./HomeSection";
import MainScene from "../scenes/MainScene";
import AboutSection from "./AboutSection";

export default function HomePage() {
  return (
    <main>
      <div className="hidden md:fixed right-1 p-8 text-warmGray-100 font-bold">
        In development
      </div>
      <Loader />
      <MainScene />

      <HomeSection />
      <div className="h-screen" />
      <AboutSection />

      <Cursor />
    </main>
  );
}
