"use client";
import Link from "next/link";
import Cart from "@/app/components/headerBars/middleBar/Cart";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useSession } from "next-auth/react";

function CardAndProfile() {
  const { data: session } = useSession();
  if (!session) {
    return null;
  }
  return (
    <div className="flex items-center">
      <Link
        href="/profile"
        className="relative  text-custom-textSecondary me-2"
      >
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
