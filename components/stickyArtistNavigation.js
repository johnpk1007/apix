export const StickyArtistNavigation = () => {
  return (
    <div className="flex flex-row h-[40px] w-full max-w-screen-xl">
      <div className="flex justify-end items-end xxs:w-0 md:w-[370px] h-full bg-black">
        <div className="w-[450px] h-[10px] border-b-2 border-neutral-300" />
      </div>
      <div className="flex items-end h-full flex-1 xxs:bg-black md:bg-white">
        <div className="flex flex-row justify-end w-full h-[50px] border-b-2 border-neutral-300">
          <div className="xxs:flex md:hidden justify-center items-center h-full xxs:w-1/3 font-poppins xxs:font-bold md:font-black xxs:text-sm md:text-sm lg:text-base xl:text-xl 2xl:text-2xl text-white pb-6 whitespace-pre-wrap">
            <div className="flex justify-center items-center text-center border-2 w-12 h-12">{`PEAK\nPOS.`}</div>
          </div>
          <div className="justify-center items-center h-full xxs:w-1/3 md:w-1/6 font-poppins font-black xxs:text-sm lg:text-base xl:text-xl 2xl:text-2xl xxs:text-white md:text-#8289a1 text-center pb-6 xxs:hidden md:flex">
            PEAK POS.
          </div>
          <div className="justify-center items-center h-full xxs:w-1/3 md:w-1/6 font-poppins font-black xxs:text-sm lg:text-base xl:text-xl 2xl:text-2xl xxs:text-white md:text-#8289a1 text-center pb-6 xxs:hidden md:flex">
            PEAK DATE
          </div>
          <div className="justify-center items-center h-full xxs:w-1/3 md:w-1/6 font-poppins font-black xxs:text-sm lg:text-base xl:text-xl 2xl:text-2xl xxs:text-white md:text-#8289a1 text-center pb-6 xxs:flex md:hidden whitespace-pre-wrap">
            {`PEAK\nDATE.`}
          </div>
          <div className="flex justify-center items-center h-full xxs:w-1/3 md:w-1/6 font-poppins xxs:font-bold md:font-black xxs:text-sm md:text-sm lg:text-base xl:text-xl 2xl:text-2xl xxs:text-white md:text-#8289a1 text-center pb-6 xxs:hidden md:flex">
            WKS ON CHART
          </div>
          <div className="justify-center items-center h-full xxs:w-1/3 md:w-1/6 font-poppins font-black xxs:text-sm lg:text-base xl:text-xl 2xl:text-2xl xxs:text-white md:text-#8289a1 text-center pb-6 xxs:flex md:hidden whitespace-pre-wrap">
            {`WKS ON\nCHART`}
          </div>
        </div>
      </div>
    </div>
  );
};
