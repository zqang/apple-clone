"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      className="cursor-pointer"
      src="/images/apple.svg"
      alt="Apple logo"
      width={35}
      height={44}
    />
  );
};

export default Logo;
