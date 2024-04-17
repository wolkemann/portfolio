import Loader from "../components/Loader/Loader";
import { usePortfolioDispatch } from "../context/PortfolioContext";
import HomeScene from "../scenes/HomeScene";

export default function About() {
  const dispatch = usePortfolioDispatch();

  return (
    <main>
      <Loader />
      sadsda
      <HomeScene />
    </main>
  );
}
