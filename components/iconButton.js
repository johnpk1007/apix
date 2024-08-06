import Link from "next/link";
import Image from "next/image";

export const IconButton = () => {
  return (
    <Link
      href={"/"}
      className="
      relative 
      block 
      xxs:w-[20px] 
      lg:w-[25px] 
      xl:w-[30px] 
      aspect-square
      rounded-full 
      hover:bg-black
      hover:bg-[radial-gradient(circle,transparent_1%,black_1%)]
      hover:bg-center
      hover:bg-[length:10000%_10000%]
      active:bg-slate-500
      active:bg-[length:100%_100%]
      hover:duration-500
      active:duration-0
      "
      scroll={false}
    >
      <div className="absolute bg-slate-800/[.5] z-10 hover:bg-transparent transition duration-300 mix-blend-multiply w-full h-full" />
      <div className="w-full h-full">
        <Image
          src="/images/arrow.png"
          alt="logo"
          fill
          className="object-contain"
        />
      </div>
    </Link>
  );
};
