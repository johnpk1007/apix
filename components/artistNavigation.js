import Image from "next/image";
import { IconButton } from "./iconButton";

export const ArtistNavigation = () => {
  return (
    <nav className="flex flex-row w-full h-[120px] fixed top-0 z-10">
      <div className="flex flex-row justify-end items-start w-[550px] h-full bg-black">
        <div className="w-[100px] h-full flex justify-center items-center">
          <IconButton />
        </div>
        <div className="w-[450px] h-[120px] flex flex-row justify-center items-center relative">
          <div className="flex flex-row mr-[100px]">
            <Image
              src="/images/youtube_logo_drawing.png"
              alt="logo"
              width={63}
              height={45}
              className="object-contain"
            />
            <Image
              src="/images/youtube_logo_text.png"
              alt="logo"
              width={153}
              height={52}
              className="object-contain"
            />
          </div>
          <Image
            src="/images/apix_logo_drawing.png"
            alt="logo"
            width={58}
            height={58}
            className="object-contain absolute right-[-29px]"
          />
        </div>
      </div>
      <div className="flex flex-col h-full w-[calc(100%-550px)] bg-white">
        <div className="flex flex-row justify-between w-full h-[120px] relative">
          <div className="font-poppins font-semibold text-base absolute right-1 text-#8289a1">
            This site is not affiliated with, endorsed by, or in any way
            officially connected with YouTube or billboard.
          </div>
          <Image
            src="/images/billboard_logo_text.png"
            alt="logo"
            width={249}
            height={52}
            className="object-contain ml-[120px]"
          />
        </div>
      </div>
    </nav>
  );
};
