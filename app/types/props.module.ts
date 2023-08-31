export interface Props {
  children: React.ReactNode;
  hasBorder?: boolean;
}
export interface BannerProps {
  overTitle: string;
  title: string;
  link: string;
  linkText: string;
  image: string;
}

export type Events<Value = string> =
  | (Event & { target: { value: Value; name: string } })
  | React.ChangeEvent<HTMLInputElement>;
