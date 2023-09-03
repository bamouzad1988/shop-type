import { TitleProps } from "@/app/types/props.module";

function Title({ title, position, hasUnderline, textSize }: TitleProps) {
  interface SizeObject {
    small: string;
    medium: string;
    large: string;
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
    large: { small: "text-xl", medium: "text-2xl", large: "text-3xl" },
    medium: { small: "text-xl", medium: "text-xl", large: "text-xl" },
  };
  //todo
  const smallSize = classes[textSize as keyof MyObj].small;
  const mediumSize = classes[textSize as keyof MyObj].medium;
  const largeSize = classes[textSize as keyof MyObj].large;
  return (
    <div className={classes.position}>
      <h2
        className={`${classes.underline} font-iransans-bold text-custom-text pb-3 sm:${smallSize} md:${mediumSize} xl:${largeSize} inline-block`}
      >
        {title}
      </h2>
    </div>
  );
}

export default Title;
