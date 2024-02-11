import Transition from "../components/loaderTwo/LoaderTwo";

const Projects = () => {
  return (
    <div className="w-screen h-screen md:p-12">
      <div className="w-screen p-12 text-center md:w-[750px] md:m-auto md:p-0">
        <h2 className="h2">Hello there, I am</h2>
        <h1 className="h1">Federico Sardo</h1>
        <h2 className="h2 text-accent">Web Developer</h2>
        <p className="font-thin text-2xl italic my-12">
          —<span className="text-accent">Hamburg</span> with love —
        </p>
      </div>
    </div>
  );
};

export default Transition(Projects);
