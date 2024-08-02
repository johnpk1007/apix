import Image from "next/image";

export const ArtistNavigation = () => {
  return (
    <nav className="flex flex-row w-full xxs:h-[50px] lg:h-[120px] fixed top-0 z-10 max-w-screen-xl">
      <div className="flex flex-row justify-end items-center xxs:w-[50%] md:w-[370px] h-full bg-black relative">
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
      <div className="flex items-center h-full flex-1 xxs:bg-black md:bg-white">
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
      </div>
    </nav>
  );
};
