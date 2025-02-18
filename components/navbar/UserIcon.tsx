import spaIcon from "@/public/images/spaIcon.png";
import Image from "next/image";

function UserIcon() {
  return (
    <Image
      src={spaIcon}
      alt="userIcon"
      unoptimized
      className="sm:flex hidden h-7 w-9"
    />
  );
}

export default UserIcon;
