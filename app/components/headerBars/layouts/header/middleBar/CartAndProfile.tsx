import Link from "next/link";
import Cart from "@/app/components/headerBars/middleBar/Cart";
import ContactsIcon from "@mui/icons-material/Contacts";
function CardAndProfile() {
  return (
    <div className="flex items-center">
      <Link href="/" className="relative  text-custom-textSecondary me-2">
        <ContactsIcon color="action" />
      </Link>
      <Cart />
    </div>
  );
}

export default CardAndProfile;
