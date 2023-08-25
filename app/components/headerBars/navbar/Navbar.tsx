import { Events } from "@/app/types/props.module";
import CustomContainer from "../layouts/CustomContainer";
import Link from "next/link";

function Navbar() {
  const x = "aa";

  const linkHandleClick = (e: Events) => {
    e.preventDefault();
  };

  const linkClasses =
    " h-full flex items-center hover:bg-custom-main px-4 duration-300 transition-colors";
  return (
    <div className="w-full bg-custom-text mt-5">
      <CustomContainer hasBorder={false}>
        <ul className="flex text-custom-white items-center px-3 h-[54px]">
          <li className="h-full">
            <Link
              href="/"
              className={`${linkClasses} ${x === "aa" && "bg-custom-main"}`}
            >
              صفحه اصلی
            </Link>
          </li>
          <li className="h-full">
            <Link
              href="/"
              className={`${linkClasses} ${x === "bb" && "bg-custom-main"}`}
            >
              محصولات
            </Link>
          </li>
          <li className="h-full">
            <Link
              onClick={() => linkHandleClick}
              href="/"
              className={`${linkClasses} ${x === "bb" && "bg-custom-main"}`}
            >
              فروشگاه
            </Link>
          </li>
        </ul>
      </CustomContainer>
    </div>
  );
}

export default Navbar;
