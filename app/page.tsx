import Banners from "./components/layout/banners/Banners";
import Suggestion from "./components/layout/suggestion/Suggestion";
import TreandingItems from "./components/layout/treandingItems/TreandingItems";

export default function Home() {
  return (
    <>
      <Banners />
      <TreandingItems />
      <Suggestion />
    </>
  );
}
