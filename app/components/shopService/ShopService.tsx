import { ShopServiceProps } from "@/app/types/props.module";

function ShopService(props: ShopServiceProps) {
  const { title, subTitle, iconClass } = props;
  return (
    <div className="flex justify-center items-center xxs:w-full xs:w-1/2 lg:w-1/4 mt-7">
      <div className="me-2">
        <i className={`${iconClass} text-[35px] text-custom-text`}></i>
      </div>
      <div>
        <h5 className="font-iransans-demibold text-base text-custom-text">
          {title}
        </h5>
        <h6 className="font-iransans-medium text-sm text-custom-textSecondary mt-1">
          {subTitle}
        </h6>
      </div>
    </div>
  );
}

export default ShopService;
