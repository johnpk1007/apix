import Image from "next/image";
import { BillboardWeek } from "./billboardWeek";

export const Navigation = () => {
  return (
    <nav className="flex flex-row w-full h-[290px] fixed top-0 z-10">
      <div className="flex flex-col justify-start items-end w-[550px] h-full bg-black">
        <div className="w-[450px] h-[200px] flex flex-row justify-center items-center relative">
          <div className="flex flex-row mr-[120px]">
            <Image
              src="/images/youtube_logo_drawing.png"
              alt="logo"
              width={88}
              height={62}
              className="object-contain"
            />
            <Image
              src="/images/youtube_logo_text.png"
              alt="logo"
              width={213}
              height={72}
              className="object-contain"
            />
          </div>
          <Image
            src="/images/apix_logo_drawing.png"
            alt="logo"
            width={106}
            height={106}
            className="object-contain absolute right-[-53px]"
          />
        </div>
        <div className="w-[450px] h-[90px] border-b-2 border-neutral-300" />
      </div>
      <div className="flex flex-col h-full w-[calc(100%-550px)] bg-white">
        <div className="flex flex-row justify-between w-full h-[200px] relative">
          <div className="font-poppins font-semibold text-base absolute right-1 text-#8289a1">
            This site is not affiliated with, endorsed by, or in any way
            officially connected with YouTube or billboard.
          </div>
          <Image
            src="/images/billboard_logo_text.png"
            alt="logo"
            width={323}
            height={68}
            className="object-contain ml-[120px]"
          />
          <BillboardWeek />
        </div>
        <div className="flex flex-row justify-end w-full h-[90px] border-b-2 border-neutral-300">
          <div className="flex justify-center items-center h-full w-1/4 font-poppins font-black text-3xl text-#8289a1">
            LAST WEEK
          </div>
          <div className="flex justify-center items-center h-full w-1/4 font-poppins font-black text-3xl text-#8289a1">
            PEAK POS.
          </div>
          <div className="flex justify-center items-center h-full w-1/4 font-poppins font-black text-3xl text-#8289a1">
            WKS ON CHART
          </div>
        </div>
      </div>
    </nav>
  );
};
