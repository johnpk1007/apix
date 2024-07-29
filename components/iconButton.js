import Link from "next/link";
import Image from "next/image";

export const IconButton = () => {
  return (
    <Link href={"/"} className="relative" style={{ width: 40, height: 40 }}>
      <div
        style={{ width: 40, height: 40 }}
        className="absolute bg-slate-800/[.5] hover:bg-transparent transition duration-300 mix-blend-multiply"
      />
      <Image
        src="/images/arrow1.png"
        alt="logo"
        width={40}
        height={40}
        className="object-contain"
      />
    </Link>
  );
};
