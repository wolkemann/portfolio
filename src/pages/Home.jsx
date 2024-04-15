import HomeScene from "../scenes/HomeScene";

export default function Home() {
  return (
    <main>
      <nav className="md:text-[20px] md:p-8 md:m-auto p-5">
        <ul className="md:gap-10 md:justify-start flex justify-between">
          <li>Home</li>
          <li>About me</li>
          <li>Projects</li>
          <li>Blog</li>
        </ul>
      </nav>
      <div className="md:p-8 md:pt-0 md:w-[768px] md:m-auto h-screen flex flex-col p-5">
        <div className="md:fixed md:w-[500px] md:left-0 md:bottom-0 md:p-10">
        <h1 className="md:text-[85px] md:text-left text-[45px] text-center blue-500">
          Federico Sardo
        </h1>
        <h2 className="md:my-1 text-[25px] my-2">Developer</h2>
        <h2 className="text-[25px]">From Hamburg with Love</h2>
        </div>
        <p className="md:fixed md:md:w-[600px] md:top-0 md:right-0 md:p-10 md:text-[25px] md:m-auto my-2 text-center">
          “Sur des pensers nouveaux, faisons des verses antiques”
        </p>
      </div>

      <HomeScene />
    </main>
  );
}
