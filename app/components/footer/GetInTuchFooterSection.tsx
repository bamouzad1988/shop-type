import FooterSectionWrapper from "../reusableComponents/FooterSectionWrapper";
import FooterTitle from "./FooterTitle";

function GetInTuchFooterSection() {
  const liClasses = "w-fit my-1 text-sm text-custom-white";
  return (
    <FooterSectionWrapper>
      <FooterTitle title="راه های ارتباطی" />
      <div>
        <ul className="p-0 m-0 block">
          <li className={liClasses}>ایران - تهران - خیابان گاندی</li>
          <li className={liClasses}>خیابان استاد سمیعی - کوچه ی</li>
          <li className={liClasses}>info@niceshop.com</li>
        </ul>
      </div>
    </FooterSectionWrapper>
  );
}

export default GetInTuchFooterSection;
