import { usePortfolioDispatch } from "../context/PortfolioContext";

import Loader from "../components/Loader/Loader";
import { Canvas } from "@react-three/fiber";
import Sidebar from "../components/Sidebar/Sidebar";
import Cursor from "../components/Cursor/Cursor";
import AboutScene from "../scenes/AboutScene";

export default function About() {
  const dispatch = usePortfolioDispatch();

  return (
    <main>
      <Cursor />
      <Loader />
      <Sidebar />
      <section>
        <article>
          <h1 className="w-screen h-screen flex md:text-[120px] font-bold text-about-title">
            <span className="m-auto">
              About me<span className="text-gray-200">.</span>
            </span>
          </h1>
        </article>
        <div className="h-screen" />
        <article className="md:w-[900px] md:py-10 min-h-screen m-auto">
          <h1 className=" text-[55px] font-bold text-about-title text-center">
            From Italy to Germany
          </h1>
          <p className=" p-10 text-gray-100 text-[25px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim labore
            non mollitia provident voluptatum laborum, quisquam nobis ex officia
            harum assumenda temporibus tempora id, optio unde natus veritatis
            nihil. Aliquid?
          </p>
        </article>
        <div className="h-screen" />
        <article>
          <h1 className="w-screen h-screen flex md:text-[120px] font-bold text-about-title">
            <span className="m-auto">
              Curriculum Vitae<span className="text-gray-200">.</span>
            </span>
          </h1>
        </article>
      </section>

      <div className="canvas">
        <Canvas
          eventSource={document.getElementById("root")}
          eventPrefix="client"
          shadows
          camera={{ zoom: 15 }}
        >
          <AboutScene />
        </Canvas>
      </div>
    </main>
  );
}
