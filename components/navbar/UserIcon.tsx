import spaIcon from "@/public/images/spaIcon.avif";
import Image from "next/image";

function UserIcon() {
  return (
    <Image
      src={spaIcon}
      alt="userIcon"
      unoptimized
      className="sm:flex hidden h-7 w-10"
    />
  );
}

export default UserIcon;
