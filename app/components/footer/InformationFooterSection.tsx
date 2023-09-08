import { LinkLists } from "@/types/props.module";
import FooterSectionWrapper from "../reusableComponents/FooterSectionWrapper";
import LinkList from "./LinkList";

function InformationFooterSection() {
  const informationList: LinkLists[] = [
    { text: "درباره ما", link: "about" },
    { text: "تماس با  ما", link: "contactus" },
    { text: "سوالات متداول", link: "/" },
  ];
  return (
    <FooterSectionWrapper>
      <LinkList title="اطلاعات" list={informationList} />
    </FooterSectionWrapper>
  );
}

export default InformationFooterSection;
