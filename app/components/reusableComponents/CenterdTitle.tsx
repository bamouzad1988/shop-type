import { CenteredTitle } from "@/app/types/props.module";

function CenteredTitle({ title }: CenteredTitle) {
  return (
    <div className="text-center">
      <h2 className="font-iransans-bold text-custom-text pb-3 sm:text-xl md:text-2xl xl:text-3xl inline-block border-custom-main border-b-2">
        {title}
      </h2>
    </div>
  );
}

export default CenteredTitle;
