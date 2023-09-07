import { ListLinkProps } from "@/app/types/props.module";
import FooterTitle from "./FooterTitle";
import Link from "next/link";

function LinkList(props: ListLinkProps) {
  const { title, list } = props;
  return (
    <div>
      <FooterTitle title={title} />
      <ul className="block m-0 p-0">
        {list &&
          list.map((value, index) => {
            return (
              <li
                key={`li${index}`}
                className="w-fit my-3 text-sm text-custom-white transition-all relative duration-300 right-0 hover:right-3 hover:text-custom-main "
              >
                <Link href={value.link}>{value.text}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default LinkList;
