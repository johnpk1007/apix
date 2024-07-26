import Image from "next/image";
import { BillboardWeek } from "./billboardWeek";

export const Navigation = ({ billboardWeek }) => {
  return (
    <nav className="flex flex-row w-full h-[170px] fixed top-0 z-10">
      <div className="flex flex-col justify-start items-end w-[550px] h-full bg-black">
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
        <div className="w-[450px] h-[50px] border-b-2 border-neutral-300" />
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
          <BillboardWeek billboardWeek={billboardWeek} />
        </div>
        <div className="flex flex-row justify-end w-full h-[50px] border-b-2 border-neutral-300">
          <div className="flex justify-center items-center h-full w-1/6 font-poppins font-black text-2xl text-#8289a1">
            LAST WEEK
          </div>
          <div className="flex justify-center items-center h-full w-1/6 font-poppins font-black text-2xl text-#8289a1">
            PEAK POS.
          </div>
          <div className="flex justify-center items-center h-full w-1/6 font-poppins font-black text-2xl text-#8289a1">
            WKS ON CHART
          </div>
        </div>
      </div>
    </nav>
  );
};
