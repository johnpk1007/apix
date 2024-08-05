import { Video } from "./video";
import {
  YoutubeSkeletonNumber,
  BillboardSkeletonNumber,
  BillboardSkeletonText,
  YoutubeSkeletonText,
  YoutubeSkeletonVideo,
} from "./skeleton";

export const ArtistCard = ({ data, artist }) => {
  const stringDot = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.slice(0, maxLength - 3) + "...";
    }
    return str;
  };

  return (
    <div className="flex flex-col w-full xxs:h-[320px] md:h-[270px] xl:h-[300px] max-w-screen-xl border-b-2 xxs:border-black md:border-neutral-300">
      <div className="flex justify-center bg-black xxs:h-5/7 md:h-full">
        <div className="flex flex-col xxs:w-[321px] md:w-[370px] bg-black">
          <div className="flex h-2/3">
            <div className="h-full w-[350px]">
              {data ? <Video src={data.video} /> : <YoutubeSkeletonVideo />}
            </div>
          </div>
          <div className="h-1/3 xxs:block xs:hidden md:block">
            <div className="font-roboto font-base md:text-base lg:text-xl xl:text-2xl text-white text-pretty mt-5 ml-2 ">
              {data ? (
                stringDot(`${data.title}`, 30)
              ) : (
                <YoutubeSkeletonText width={300} height={20} />
              )}
            </div>
            <div className="text-neutral-500 font-roboto font-base md:text-sm lg:text-base text-xl ml-2">
              {data ? (
                stringDot(`${artist}`, 40)
              ) : (
                <YoutubeSkeletonText width={150} height={20} />
              )}
            </div>
          </div>
        </div>
        <div className="xxs:hidden md:flex flex-1 bg-white">
          <div className="w-3/6 h-[200px] flex flex-col justify-center items-start">
            <div className="ml-10">
              <div className="font-poppins font-black lg:text-2xl xl:text-3xl xxs:text-white md:text-black text-pretty">
                {data ? (
                  stringDot(`${data.title}`, 30)
                ) : (
                  <BillboardSkeletonText width={200} height={20} />
                )}
              </div>
              <div className="font-poppins font-light lg:text-2xl xl:text-3xl xxs:text-white md:text-black">
                {data ? (
                  stringDot(`${artist}`, 30)
                ) : (
                  <BillboardSkeletonText width={150} height={20} />
                )}
              </div>
            </div>
          </div>
          <div className="w-1/6 h-[200px] flex justify-center items-center">
            <div className="font-poppins font-black lg:text-2xl xl:text-3xl">
              {data ? data.peak_pos : <BillboardSkeletonNumber />}
            </div>
          </div>
          <div className="w-1/6 h-[200px] flex justify-center items-center">
            <div className="font-poppins font-black lg:text-2xl xl:text-3xl">
              {data ? data.peak_date : <BillboardSkeletonNumber />}
            </div>
          </div>
          <div className="w-1/6 h-[200px] flex justify-center items-center">
            <div className="font-poppins font-black lg:text-2xl xl:text-3xl">
              {data ? data.wks_on_chart : <BillboardSkeletonNumber />}
            </div>
          </div>
        </div>
        <div className="xxs:hidden xs:flex md:hidden flex-1 bg-black">
          <div className="h-[200px] flex flex-col xxs:justify-start xs:justify-center items-start xxs:pl-10 xxs:pl-15 sm:pl-20 md:pl-10">
            <div style={{ height: "60px" }}>
              <div className="xl:pl-20 xxs:pt-2 xs:pt-0 w-full">
                <div className="font-poppins font-black lg:text-2xl xl:text-3xl xxs:text-white md:text-black w-full">
                  {data ? (
                    stringDot(`${data.title}`, 20)
                  ) : (
                    <div className="xxs:w-[170px] xs:w-[100px] md:w-[170px] xxs:h-[18px] lg:h-[23px]">
                      <BillboardSkeletonText />
                    </div>
                  )}
                </div>
                <div className="font-poppins font-light xxs:text-white md:text-black">
                  {data ? (
                    stringDot(`${artist}`, 20)
                  ) : (
                    <div className="xxs:w-[140px] xs:w-[70px] md:w-[140px] mt-4 xxs:h-[15px] lg:h-[20px]">
                      <BillboardSkeletonText />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full text-white xxs:flex md:hidden bg-black h-2/7">
        <div className="w-1/3 justify-center items-center flex">
          <div className="font-poppins font-black xxs:text-xl lg:text-2xl xl:text-3xl text-white">
            <div className="flex justify-center items-center text-center border-2 w-12 h-12">
              {data ? data.peak_pos : <BillboardSkeletonNumber />}
            </div>
          </div>
        </div>
        <div className="w-1/3 justify-center items-center flex">
          <div className="font-poppins font-black xxs:text-xl lg:text-2xl xl:text-3xl text-white">
            {data ? data.peak_date : <BillboardSkeletonNumber />}
          </div>
        </div>
        <div className="w-1/3 justify-center items-center flex">
          <div className="font-poppins font-black xxs:text-xl lg:text-2xl xl:text-3xl text-white">
            {data ? data.wks_on_chart : <BillboardSkeletonNumber />}
          </div>
        </div>
      </div>
    </div>
  );
};
