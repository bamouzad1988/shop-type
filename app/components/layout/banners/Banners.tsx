import Banner from "../../banner/Banner";
import BannerImage1 from "@/public/images/products/mini-banner1.webp";
import BannerImage2 from "@/public/images/products/mini-banner2.webp";
import BannerImage3 from "@/public/images/products/mini-banner3.webp";
function Banners() {
  return (
    <div className="mt-8 flex px-3 gap-2 flex-wrap md:flex-nowrap z-0 relative">
      <Banner
        image={BannerImage1}
        overTitle="فروش فوری"
        title="تا 40% تخفیف فروش میانه ی فصل"
        link="/"
        linkText="خرید فوری"
      />
      <Banner
        image={BannerImage2}
        overTitle="فروش فوری"
        title="تا 40% تخفیف فروش میانه ی فصل"
        link="/"
        linkText="خرید فوری"
      />
      <Banner
        image={BannerImage3}
        overTitle="فروش فوری"
        title="تا 40% تخفیف فروش میانه ی فصل"
        link="/"
        linkText="خرید فوری"
      />
    </div>
  );
}

export default Banners;
