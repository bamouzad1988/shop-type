export const seprateNumbers = (number) => {
  const numberFormat = new Intl.NumberFormat("en-US");
  const output = numberFormat.format(number);
  return output;
};
