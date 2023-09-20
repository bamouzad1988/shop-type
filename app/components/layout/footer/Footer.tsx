"use client";
import AboutFooterSection from "../../footer/AboutFooterSection";
import CustomerService from "../../footer/CustomerService";
import GetInTuchFooterSection from "../../footer/GetInTuchFooterSection";
import InformationFooterSection from "../../footer/InformationFooterSection";
import CustomContainer from "../CustomContainer";

function Footer() {
  return (
    <div className="pb-16 pt-6 bg-custom-text text-custom-white">
      <CustomContainer>
        <div className="flex justify-between px-3 flex-wrap">
          <AboutFooterSection />
          <InformationFooterSection />
          <CustomerService />
          <GetInTuchFooterSection />
        </div>
      </CustomContainer>
    </div>
  );
}

export default Footer;
