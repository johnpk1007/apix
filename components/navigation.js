import Image from "next/image";
import { BillboardWeek } from "./billboardWeek";

export const Navigation = ({ billboardWeek }) => {
  return (
    <nav className="flex flex-row w-full xxs:h-[150px] xl:h-[170px] fixed top-0 z-10 max-w-screen-xl">
      <div className="flex flex-col justify-start items-end xxs:w-[50%] md:w-[370px] bg-black">
        <div className="w-full h-4/5 flex flex-row justify-end xxs:items-start md:items-center relative xxs:pt-4 md:pt-0">
          <div className="flex flex-row items-center xxs:mr-[50px] md:mr-[80px] lg:mr-[100px] xl:mr-[120px]">
            <div className="relative xxs:w-[30px] sm:w-[40px] lg:w-[49px] xl:w-[63px] aspect-[7/5] md:mr-1 lg:mr-2">
              <Image
                src="/images/youtube_logo_drawing.png"
                alt="logo"
                fill
                className="object-contain h-full w-full"
              />
            </div>

            <div className="relative xxs:w-[75px] sm:w-[100px] lg:w-[119px] xl:w-[153px] aspect-[3/1]">
              <Image
                src="/images/youtube_logo_text.png"
                alt="logo"
                fill
                className="object-contain h-full w-full"
              />
            </div>
          </div>
          <div className="absolute xxs:right-[-9px] sm:right-[-13px] md:right-[-18px] lg:right-[-23px] xl:right-[-29px] xxs:pt-1 md:pt-0">
            <div className="relative xxs:hidden md:block md:w-[36px] lg:w-[46px] xl:w-[58px] aspect-square">
              <Image
                src="/images/apix_logo_drawing.png"
                alt="logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative xxs:w-[18px] sm:w-[26px] md:hidden aspect-square">
              <Image
                src="/images/apix_logo_white_drawing.png"
                alt="logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-1/5 border-b-2 border-neutral-300 flex">
          <div className="xxs:hidden xs:flex md:hidden justify-center items-center h-full xxs:w-1/2 font-poppins font-black md:text-sm lg:text-base xl:text-xl 2xl:text-2xl text-white text-center pb-6 boder-2">
            THIS WEEK
          </div>
          <div className="xxs:flex xs:hidden justify-center items-center h-full xxs:w-1/2 font-poppins font-black md:text-sm lg:text-base xl:text-xl 2xl:text-2xl text-white text-center pb-6 whitespace-pre-wrap">
            {`THIS\nWEEK`}
          </div>
          <div className="xxs:hidden xs:flex md:hidden  justify-center items-center h-full xxs:w-1/2 font-poppins font-black md:text-sm lg:text-base xl:text-xl 2xl:text-2xl text-white text-center pb-6">
            LAST WEEK
          </div>
          <div className="xxs:flex xs:hidden justify-center items-center h-full xxs:w-1/2 font-poppins font-black md:text-sm lg:text-base xl:text-xl 2xl:text-2xl text-white text-center pb-6 whitespace-pre-wrap">
            {`LAST\nWEEK`}
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 xxs:bg-black md:bg-white h-full">
        <div className="flex flex-row xxs:items-start md:items-center xxs:justify-start md:justify-between w-full h-4/5 relative xxs:pt-4 md:pt-0">
          <div className="relative xxs:hidden md:block md:w-[162px] lg:w-[193px] xl:w-[249px] lg:ml-[100px] aspect-[5/1] md:ml-[80px] lg:ml-[100px] xl:ml-[120px]">
            <Image
              src="/images/billboard_logo_text.png"
              alt="logo"
              fill
              className="object-contain h-full w-full"
            />
          </div>
          <div className="relative xxs:w-[135px] sm:w-[180px] md:hidden aspect-[5/1] ml-[50px]">
            <Image
              src="/images/billboard_logo_white_text.jpg"
              alt="logo"
              fill
              className="object-contain h-full w-full"
            />
          </div>
          <BillboardWeek billboardWeek={billboardWeek} />
        </div>
        <div className="flex flex-row justify-end w-full h-1/5 border-b-2 border-neutral-300">
          <div className="justify-center items-center h-full w-1/6 font-poppins font-black xxs:text-sm lg:text-base xl:text-xl 2xl:text-2xl text-#8289a1 text-center pb-6 xxs:hidden md:flex">
            LAST WEEK
          </div>
          <div className="xxs:hidden xs:flex justify-center items-center h-full xxs:w-1/2 md:w-1/6 font-poppins font-black md:text-sm lg:text-base xl:text-xl 2xl:text-2xl xxs:text-white md:text-#8289a1 text-center pb-6">
            PEAK POS.
          </div>
          <div className="xxs:flex xs:hidden justify-center items-center h-full xxs:w-1/2 md:w-1/6 font-poppins font-black md:text-sm lg:text-base xl:text-xl 2xl:text-2xl xxs:text-white md:text-#8289a1 text-center pb-6 whitespace-pre-wrap">
            {`PEAK\nPOS.`}
          </div>
          <div className="flex justify-center items-center h-full xxs:w-1/2 md:w-1/6 font-poppins font-black md:text-sm lg:text-base xl:text-xl 2xl:text-2xl xxs:text-white md:text-#8289a1 text-center pb-6">
            WKS ON CHART
          </div>
        </div>
      </div>
    </nav>
  );
};
