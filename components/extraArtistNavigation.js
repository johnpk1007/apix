import Image from "next/image";
import {
  YoutubeSkeletonArtistPicture,
  BillboardSkeletonText,
} from "./skeleton";

export const ExtraArtistNavigation = ({ artist, image, length }) => {
  return (
    <div className="flex flex-row xxs:h-[120px] lg:h-[150px] xl:h-[180px] w-full max-w-screen-xl">
      <div className="flex xxs:justify-end lg:justify-end items-start xxs:w-[30%] md:w-[370px] h-full bg-black">
        {image ? (
          <div className="relative xxs:w-[75px] sm:w-[90px] md:w-[110px] lg:w-[120px] xl:w-[150px] aspect-square xxs:mr-0 md:mr-[60px]">
            <Image
              src={image}
              alt="artist"
              fill
              className="object-cover rounded-full"
            />
          </div>
        ) : (
          <div className="xxs:w-[75px] sm:w-[90px] md:w-[110px] lg:w-[120px] xl:w-[150px] aspect-square xxs:mr-0 md:mr-[60px]">
            <YoutubeSkeletonArtistPicture />
          </div>
        )}
      </div>
      <div className="flex flex-col h-full flex-1 xxs:bg-black md:bg-white">
        <div className="xxs:ml-[10px] lg:ml-[80px] md:mt-[20px]">
          <div className="font-poppins font-bold xxs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl xxs:text-white md:text-black">
            {artist ? (
              artist
            ) : (
              <div className="w-[100px] xxs:h-5 sm:h-6 lg:h-7 xl:h-9">
                <BillboardSkeletonText />
              </div>
            )}
          </div>
          <div className="font-poppins font-extralight xxs:text-xs sm:text-sm lg:text-base xl:text-lg text-slate-400">
            {length ? (
              `Billboard hot 100 top ${length} song${length > 1 ? "s" : ""}`
            ) : (
              <div className="xxs:w-[140px] xxs:h-3 sm:h-4 lg:h-5 xl:h-7 mt-2">
                <BillboardSkeletonText />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
