import TreandingProduct from "../../treandingItems/TreandingProduct";
import myImage12 from "@/public/images/products/p12.jpg";
import myImage14 from "@/public/images/products/p14.jpg";
import myImage16 from "@/public/images/products/p16.jpg";
import myImage2 from "@/public/images/products/p2.jpg";
// import myImage from "@/public/images/products/";

function TreandingItemsProducts() {
  return (
    <div className="flex flex-wrap justify-start mt-10">
      <TreandingProduct
        discount={10}
        title="کلاه مردانه لبه دار"
        price={313513651}
        image={myImage12}
      />
      <TreandingProduct
        title="لباس خواب زنامه جیبدار"
        price={313513651}
        image={myImage14}
      />
      <TreandingProduct
        discount={18}
        title="عینک خواب زنامه جیبدار"
        price={313513651}
        image={myImage16}
      />
      <TreandingProduct
        discount={35}
        title="لباس خواب زنامه بدون جیب"
        price={313513651}
        image={myImage2}
      />
      <TreandingProduct
        discount={71}
        title="کلاه مردانه لبه دار"
        price={313513651}
        image={myImage12}
      />
      <TreandingProduct
        discount={10}
        title="عینک خواب زنامه جیبدار"
        price={313513651}
        image={myImage16}
      />
      <TreandingProduct
        discount={10}
        title="عینک خواب زنامه جیبدار"
        price={313513651}
        image={myImage16}
      />
      <TreandingProduct
        title="لباس خواب زنامه بدون جیب"
        price={313513651}
        image={myImage2}
      />
    </div>
  );
}

export default TreandingItemsProducts;
