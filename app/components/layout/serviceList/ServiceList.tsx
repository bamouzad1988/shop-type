import ShopService from "../../shopService/ShopService";
import CustomContainer from "../CustomContainer";

function ServiceList() {
  return (
    <div className="w-100 bg-custom-lightGray mt-10">
      <CustomContainer>
        <div className="flex justify-around pb-10 pt-3 flex-wrap">
          <ShopService
            title="ارسال رایگان"
            subTitle="خرید بالای 1 میلیون"
            iconClass="ti-rocket"
          />
          <ShopService
            title="مرجوع رایگان"
            subTitle="تا 30 روز امکان مرجوع کالا"
            iconClass="ti-reload"
          />
          <ShopService
            title="پرداخت امن"
            subTitle="100 درصد پرداخت امن"
            iconClass="ti-lock"
          />
          <ShopService
            title="بهترین قیمت ها"
            subTitle="ضمانت پایین ترین قیمت"
            iconClass="ti-tag"
          />
        </div>
      </CustomContainer>
    </div>
  );
}

export default ServiceList;
