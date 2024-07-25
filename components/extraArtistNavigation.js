import Image from "next/image";
import {
  YoutubeSkeletonArtistPicture,
  BillboardSkeletonText,
} from "./skeleton";

export const ExtraArtistNavigation = ({ artist, image, length }) => {
  return (
    <div className="flex flex-row mt-[120px] h-[180px] w-full">
      <div className="flex justify-end items-start w-[550px] h-full bg-black">
        <div>
          {image ? (
            <Image
              src={image}
              alt="artist"
              width={150}
              height={150}
              className="object-cover rounded-full mr-[60px]"
            />
          ) : (
            <div className="mr-[60px]">
              <YoutubeSkeletonArtistPicture />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col h-full w-[calc(100%-550px)] bg-white">
        <div className="ml-[80px] mt-[20px]">
          <div className="font-poppins font-bold text-4xl">
            {artist ? (
              artist
            ) : (
              <BillboardSkeletonText width={300} height={20} />
            )}
          </div>
          <div className="font-poppins font-extralight text-lg text-slate-400">
            {length ? (
              `Billboard hot 100 top ${length} song${length > 1 ? "s" : ""}`
            ) : (
              <BillboardSkeletonText width={200} height={20} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
