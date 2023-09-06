import Banners from "./components/layout/banners/Banners";
import HotSaleSlider from "./components/layout/hotSaleSlider/HotSaleSlider";
import Suggestion from "./components/layout/suggestion/Suggestion";
import TreandingItems from "./components/layout/treandingItems/TreandingItems";
import ServiceList from "./components/layout/serviceList/ServiceList";

export default function Home() {
  return (
    <>
      <Banners />
      <TreandingItems />
      <HotSaleSlider />
      <Suggestion />
      <ServiceList />
    </>
  );
}
