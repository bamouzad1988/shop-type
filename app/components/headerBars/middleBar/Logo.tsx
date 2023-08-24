import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/images/logo.png";
function Logo() {
  return (
    <Link href="/">
      <Image
        src={LogoImg}
        width={110}
        height={32}
        alt="Picture of the author"
        loading="lazy"
      ></Image>
    </Link>
  );
}

export default Logo;
