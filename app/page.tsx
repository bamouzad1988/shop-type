// next
import { Suspense } from 'react'
// components
import Banners from "./components/layout/banners/Banners";
import HotSaleSlider from "./components/layout/hotSaleSlider/HotSaleSlider";
import Suggestion from "./components/layout/suggestion/Suggestion";
import TreandingItems from "./components/layout/treandingItems/TreandingItems";
import ServiceList from "./components/layout/serviceList/ServiceList";
import Loader from './components/reusableComponents/Loader';

export default function Home() {
  return (
    <>
    <Suspense fallback={<Loader size={'2rem'}/>}>
      <Banners />
    </Suspense>
    <Suspense fallback={<Loader size={'2rem'}/>}>
      <TreandingItems />
    </Suspense>
    <Suspense fallback={<Loader size={'2rem'}/>}>
      <HotSaleSlider />
    </Suspense>
    <Suspense fallback={<Loader size={'2rem'}/>}>
      <Suggestion />
    </Suspense>
      <ServiceList />
    </>
  );
}
