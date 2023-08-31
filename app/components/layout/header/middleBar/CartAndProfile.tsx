import Link from "next/link";
import Cart from "@/app/components/headerBars/middleBar/Cart";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

function CardAndProfile() {
  return (
    <div className="flex items-center">
      <Link href="/" className="relative  text-custom-textSecondary me-2">
        <AccountBoxIcon
          color="action"
          sx={{ transition: "all 0.3s", ":hover": { color: "#f7941d" } }}
        />
      </Link>
      <Cart />
    </div>
  );
}

export default CardAndProfile;
