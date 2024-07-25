export const StickyArtistNavigation = () => {
  return (
    <div className="flex flex-row h-[40px] w-full sticky top-[120px]">
      <div className="flex justify-end items-end w-[550px] h-full bg-black">
        <div className="w-[450px] h-[10px] border-b-2 border-neutral-300" />
      </div>
      <div className="flex items-end h-full w-[calc(100%-550px)] bg-white">
        <div className="flex flex-row justify-end w-full h-[50px] border-b-2 border-neutral-300">
          <div className="flex justify-center items-center h-full w-1/4 font-poppins font-black text-2xl text-#8289a1">
            PEAK POS.
          </div>
          <div className="flex justify-center items-center h-full w-1/4 font-poppins font-black text-2xl text-#8289a1">
            PEAK DATE
          </div>
          <div className="flex justify-center items-center h-full w-1/4 font-poppins font-black text-2xl text-#8289a1">
            WKS ON CHART
          </div>
        </div>
      </div>
    </div>
  );
};
