import spaIcon from "@/public/images/spaIcon.svg";
import Image from "next/image";

function UserIcon() {
  return (
    <Image
      src={spaIcon}
      alt="userIcon"
      width={35}
      height={35}
      unoptimized
      className="sm:flex hidden"
    />
  );
}

export default UserIcon;
