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
  discount?: number;
  title: string;
  price: number;
  link: string;
  alt: string;
  image: string;
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
export interface ListItemProps {
  listItems: string[];
  title: string;
}
export interface FetchResult<T> {
  data: T | null;
  error: string | null;
}
export interface AddProductInputs {
  name: string;
  model: string;
  description: string;
  image: string;
  section: string;
  productType: string;
  discount: number;
  price: number;
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
export interface SlideProductProps {
  link: string;
  price: number;
  discount: number;
  image: string;
  title: string;
}

export interface SuggestionProps extends SlideProductProps {}
export interface BannerProps {
  overTitle: string;
  title: string;
  link: string;
  alt: string;
  linkText: string;
  image: string;
}
export type GetDataBySectionResult =
  | {
      success: true;
      data: ProductOjectFromDB[] | [];
    }
  | {
      success: false;
      error: string;
    };
export interface ProductOjectFromDB {
  _id: any;
  username: string;
  name: string;
  description: string;
  image: string;
  model?: string;
  discount: number;
  section: string;
  date: Date;
  price?: number;
}
export type Events<Value = string> =
  | (Event & { target: { value: Value; name: string } })
  | React.ChangeEvent<HTMLAnchorElement>
  | HTMLAnchorElement;
// cart
export interface CartProductProps {
  title: string;
  price: number;
  count: number;
  image: string;
  id: string;
}
// redux store
export interface CartSliceStateItem {
  id: string;
  name: string;
  count: number;
  price: number;
  totalAmount?: number;
  image: string;
}

export interface CartSliceInitialState {
  totalAmount: number;
  items: CartSliceStateItem[];
}
