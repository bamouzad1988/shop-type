export interface Props {
  children: React.ReactNode;
  hasBorder?: boolean;
}
export type Events<Value = string> =
  | (Event & { target: { value: Value; name: string } })
  | React.ChangeEvent<HTMLInputElement>;
