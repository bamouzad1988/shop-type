export const revalidate = 5000 
// next
import { Suspense } from 'react'
// components
import Banners from "./components/layout/banners/Banners";
import Suggestion from "./components/layout/suggestion/Suggestion";
import TreandingItems from "./components/layout/treandingItems/TreandingItems";
import ServiceList from "./components/layout/serviceList/ServiceList";
import Loader from './components/reusableComponents/Loader';
import HotSaleSiderWrapper from './components/layout/hotSaleSlider/HotSaleSliderWrapper';

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
      <HotSaleSiderWrapper/>
    </Suspense>
    <Suspense fallback={<Loader size={'2rem'}/>}>
      <Suggestion />
    </Suspense>
      <ServiceList />
    </>
  );
}
