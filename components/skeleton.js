export const YoutubeSkeletonVideo = () => {
  return (
    <div className="rounded-lg h-[178.6px] w-[321px] bg-slate-800 animate-pulse"></div>
  );
};

export const YoutubeSkeletonNumber = () => {
  return (
    <div className="rounded-full h-8 w-8 bg-slate-800 animate-pulse"></div>
  );
};

export const YoutubeSkeletonArtistPicture = () => {
  return (
    <div className="rounded-full aspect-square w-full bg-slate-800 animate-pulse"></div>
  );
};

export const YoutubeSkeletonText = ({ width, height }) => {
  return (
    <div
      className={`rounded-xl bg-slate-800 animate-pulse mt-4`}
      style={{ width, height }}
    ></div>
  );
};

export const BillboardSkeletonNumber = () => {
  return (
    <div className="rounded-full h-8 w-8 xxs:bg-slate-800 md:bg-slate-200 animate-pulse"></div>
  );
};

export const BillboardSkeletonText = () => {
  return (
    <div
      className={`rounded-2xl xxs:bg-slate-800 md:bg-slate-200 animate-pulse h-full w-full`}
    ></div>
  );
};
