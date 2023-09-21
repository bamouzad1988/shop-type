import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Props {
  children: React.ReactNode;
  hasBorder?: boolean;
}

export interface RegisterValidation {
  data: string;
  minLength: number;
  type?: string;
}

export interface TitleProps {
  title: string;
  position: string;
  hasUnderline: boolean;
  textSize: string;
}
export interface SignupValidation {
  minLength: number;
  data: string;
  type?: string;
}
export interface TreandingTabProps {
  title: string;
  isActive?: boolean;
  onClick: () => void;
}

export interface BestsellingProps {
  title: string;
  discount?: number;
  price: number;
  image: StaticImport;
}
export interface ShopServiceProps {
  iconClass: string;
  title: string;
  subTitle: string;
}
export interface FooterTitleProps {
  title: string;
}
export interface LinkLists {
  text: string;
  link: string;
}
export interface ListItemProps{
  listItems:string[];
  title:string
}
export interface AddProductInputs {
  name: string;
  model: string;
  description: string;
  image: string;
  section: string;
  discount: number;
}
export interface responsiveDialogProps {
  text: string;
  title: string;
  open: boolean;
  okText: string;
  cancelText: string;
  exitHandler: (text) => void;
}
export interface ListLinkProps {
  title: string;
  list: { text: string; link: string }[];
}
export interface SlideProductProps extends BestsellingProps {}

export interface SuggestionProps extends BestsellingProps {
  discount?: number;
}
export interface BannerProps {
  overTitle: string;
  title: string;
  link: string;
  linkText: string;
  image: StaticImport;
}

export type Events<Value = string> =
  | (Event & { target: { value: Value; name: string } })
  | React.ChangeEvent<HTMLAnchorElement>
  | HTMLAnchorElement;
