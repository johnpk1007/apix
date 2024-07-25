export const YoutubeSkeletonVideo = () => {
  return (
    <div className="rounded-lg h-full w-full bg-slate-800 animate-pulse"></div>
  );
};

export const YoutubeSkeletonNumber = () => {
  return (
    <div className="rounded-full h-8 w-8 bg-slate-800 animate-pulse"></div>
  );
};

export const YoutubeSkeletonArtistPicture = () => {
  return (
    <div className="rounded-full h-[150px] w-[150px] bg-slate-800 animate-pulse"></div>
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
    <div className="rounded-full h-8 w-8 bg-slate-200 animate-pulse"></div>
  );
};

export const BillboardSkeletonText = ({ width, height }) => {
  return (
    <div
      className={`rounded-2xl bg-slate-200 animate-pulse mt-4`}
      style={{ width, height }}
    ></div>
  );
};
