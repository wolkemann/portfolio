import HomeScene from "../scenes/HomeScene";

export default function Home() {
  return (
    <main>
      <nav className="md:text-[20px] md:pl-8 md:p-5 md:m-auto p-5">
        <ul className="md:gap-10 md:justify-start flex justify-between">
          <li>Home</li>
          <li>About me</li>
          <li>Projects</li>
          <li>Blog</li>
        </ul>
      </nav>
      <div className="md:p-8 md:w-[768px] h-screen flex flex-col p-5">
        <h1 className="md:text-[85px] md:text-left text-[45px] text-center">
          Federico Sardo
        </h1>
        <h2 className="md:my-1 text-[25px] my-2">Developer</h2>
        <h2 className="text-[25px]">From Hamburg with Love</h2>
        <p className="md:text-[30px] md:m-auto my-2">
          “Sur des pensers nouveaux, faisons des verses antiques”
        </p>
      </div>

      <HomeScene />
    </main>
  );
}
