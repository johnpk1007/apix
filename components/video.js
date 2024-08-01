"use client";

import { useState } from "react";
import { YoutubeSkeletonVideo } from "./skeleton";

export function Video({ src }) {
  const [loading, setLoading] = useState(true);
  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className="relative h-[178.6px] w-[321px]">
      {loading ? (
        <div className="absolute top-0 left-0 bg-black w-full h-full">
          <YoutubeSkeletonVideo />
        </div>
      ) : (
        <div />
      )}
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${src}`}
        title="Music Video"
        loading="lazy"
        aria-hidden="true"
        onLoad={handleLoad}
      />
    </div>
  );
}
