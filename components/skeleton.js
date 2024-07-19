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

export const YoutubeSkeletonText = ({ length, height }) => {
  return (
    <div
      className={`rounded-xl h-${height} w-[${length}px] bg-slate-800 animate-pulse mt-4`}
    ></div>
  );
};

export const BillboardSkeletonNumber = () => {
  return (
    <div className="rounded-full h-8 w-8 bg-slate-200 animate-pulse"></div>
  );
};

export const BillboardSkeletonText = ({ length, height }) => {
  return (
    <div
      className={`rounded-2xl h-${height} w-[${length}px] bg-slate-200 animate-pulse mt-4`}
    ></div>
  );
};
