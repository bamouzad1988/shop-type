import { LinkLists } from "@/types/props.module";
import FooterSectionWrapper from "../reusableComponents/FooterSectionWrapper";
import LinkList from "./LinkList";

function CustomerService() {
  const customerService: LinkLists[] = [
    { text: "درباره ما", link: "about" },
    { text: "تماس با  ما", link: "contactus" },
    { text: "درباره ما", link: "سوالات متداول" },
  ];

  return (
    <FooterSectionWrapper>
      <LinkList title="سرویس مشتریان" list={customerService} />
    </FooterSectionWrapper>
  );
}

export default CustomerService;
