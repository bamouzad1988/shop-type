import { TitleProps } from "@/app/types/props.module";

function Title({ title, position, hasUnderline, textSize }: TitleProps) {
  interface SizeObject {
    small: string;
    mediumSize: string;
    largeSize: string;
  }
  interface MyObj {
    position: string;
    underline: string;
    large: SizeObject;
    medium: SizeObject;
  }
  const classes: MyObj = {
    position: `text-${position}`,
    underline: hasUnderline ? " border-custom-main border-b-2" : "",
    large: { small: "text-xl", mediumSize: "text-2xl", largeSize: "text-3xl" },
    medium: { small: "text-xl", mediumSize: "text-xl", largeSize: "text-xl" },
  };
  //todo
  const smallSize = classes[textSize as keyof MyObj].small;
  // @ts-ignore
  const mediumSize = classes[textSize as keyof MyObj].mediumSize;
  // @ts-ignore
  const largeSize = classes[textSize as keyof MyObj].largeSize;

  return (
    <div className={classes.position}>
      <h2
        className={`${classes.underline} font-iransans-bold text-custom-text pb-2 sm:${smallSize} md:${mediumSize} xl:${largeSize} inline-block`}
      >
        {title}
      </h2>
    </div>
  );
}

export default Title;
