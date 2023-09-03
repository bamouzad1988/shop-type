import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Props {
  children: React.ReactNode;
  hasBorder?: boolean;
}
export interface TitleProps {
  title: string;
  position: string;
  hasUnderline: boolean;
  textSize: any;
}
export interface TreandingTabProps {
  title: string;
  isActive?: boolean;
  onClick: () => void;
}

export interface BestsellingProps {
  discount?: number;
  title: string;
  price: number;
  image: StaticImport;
}
//    image
export interface BannerProps {
  overTitle: string;
  title: string;
  link: string;
  linkText: string;
  image: StaticImport;
}

export type Events<Value = string> =
  | (Event & { target: { value: Value; name: string } })
  | React.ChangeEvent<HTMLInputElement>
  | HTMLParagraphElement;
