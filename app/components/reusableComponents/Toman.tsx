function Toman({ color }: { color?: string }) {
  const colorClass = color ? color : "text-custom-productText";
  return (
    <span className={`text-xs font-iransans-demibold mx-1 ${colorClass}`}>
      تومان
    </span>
  );
}

export default Toman;
