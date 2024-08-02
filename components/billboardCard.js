import { Video } from "./video";
import {
  YoutubeSkeletonVideo,
  YoutubeSkeletonNumber,
  YoutubeSkeletonText,
  BillboardSkeletonNumber,
  BillboardSkeletonText,
} from "./skeleton";
import { EditedTitle } from "./editedTitle";

export const BillboardCard = ({ data }) => {
  const stringDot = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.slice(0, maxLength - 3) + "...";
    }
    return str;
  };

  return (
    <div className="xxs:min-h-[350px] xxs:min-h-min xs: xs:h-[270px] xl:h-[300px] flex flex-col h-full w-full border-b-2 xxs:border-black sm:border-neutral-300 max-w-screen-xl bg-black">
      <div className="flex xxs:flex-col xs:flex-row xs:justify-start h-full w-full xxs:items-center xs:items-stretch">
        <div className="xxs:w-[321px] md:w-[370px] flex flex-col h-full bg-black items-start">
          <div className="flex w-full h-2/3 xs:ml-5 md:ml-0 xxs:mt-5 md:mt-0">
            {data ? (
              <Video src={data.video} />
            ) : (
              <div className="h-[178.6px] w-[321px]">
                <YoutubeSkeletonVideo />
              </div>
            )}

            <div className="xxs:hidden md:flex h-full flex-1 justify-center items-center text-white font-poppins font-bold md:text-xl xl:text-4xl">
              {data ? data.this_week : <YoutubeSkeletonNumber />}
            </div>
          </div>
          <div className="h-1/3 w-full relative">
            <div className="text-white font-roboto font-base md:text-base lg:text-xl xl:text-2xl mt-3 ml-2 xxs:hidden md:block">
              {data ? (
                stringDot(`${data.title}`, 30)
              ) : (
                <YoutubeSkeletonText width={300} height={20} />
              )}
            </div>
            <div className="text-neutral-500 font-roboto font-base md:text-sm lg:text-base text-xl ml-2 xxs:hidden md:block">
              {data ? (
                stringDot(`${data.artist}`, 40)
              ) : (
                <YoutubeSkeletonText width={150} height={20} />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-1 xxs:bg-black md:bg-white xxs:w-full">
          <div className="xxs:w-full md:w-3/6 xxs:h-min xs:h-[200px] flex flex-col xxs:justify-start xs:justify-center items-start xxs:pl-10 xxs:pl-15 sm:pl-20 md:pl-10">
            <div style={{ height: `${data?.page.length * 30 + 30}px` }}>
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
                    <EditedTitle artist={data.artist} page={data.page} />
                  ) : (
                    <div className="xxs:w-[140px] xs:w-[70px] md:w-[140px] mt-4 xxs:h-[15px] lg:h-[20px]">
                      <BillboardSkeletonText />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/6 h-[200px] justify-center items-center xxs:hidden md:flex">
            <div className="font-poppins font-black lg:text-2xl xl:text-3xl">
              {data ? data.last_week : <BillboardSkeletonNumber />}
            </div>
          </div>
          <div className="w-1/6 h-[200px] justify-center items-center xxs:hidden md:flex">
            <div className="font-poppins font-black lg:text-2xl xl:text-3xl">
              {data ? data.peak_pos : <BillboardSkeletonNumber />}
            </div>
          </div>
          <div className="w-1/6 h-[200px] justify-center items-center xxs:hidden md:flex">
            <div className="font-poppins font-black lg:text-2xl xl:text-3xl">
              {data ? data.wks_on_chart : <BillboardSkeletonNumber />}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full text-white xxs:flex md:hidden">
        <div className="w-1/4 justify-center items-center flex">
          <div className="font-poppins font-black xxs:text-xl lg:text-2xl xl:text-3xl text-white">
            <div className="flex justify-center items-center text-center border-2 w-12 h-12">
              {data ? data.this_week : <BillboardSkeletonNumber />}
            </div>
          </div>
        </div>
        <div className="w-1/4 justify-center items-center flex">
          <div className="font-poppins font-black xxs:text-xl lg:text-2xl xl:text-3xl text-white">
            {data ? (
              data.last_week !== 0 ? (
                data.last_week
              ) : (
                "NEW"
              )
            ) : (
              <BillboardSkeletonNumber />
            )}
          </div>
        </div>
        <div className="w-1/4 justify-center items-center flex">
          <div className="font-poppins font-black xxs:text-xl lg:text-2xl xl:text-3xl text-white">
            {data ? data.peak_pos : <BillboardSkeletonNumber />}
          </div>
        </div>
        <div className="w-1/4 justify-center items-center flex">
          <div className="font-poppins font-black xxs:text-xl lg:text-2xl xl:text-3xl text-white">
            {data ? data.wks_on_chart : <BillboardSkeletonNumber />}
          </div>
        </div>
      </div>
    </div>
  );
};
