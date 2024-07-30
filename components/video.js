"use client";

import { useState } from "react";
import { YoutubeSkeletonVideo } from "./skeleton";

export function Video({ src }) {
  const [loading, setLoading] = useState(true);
  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className="w-[350px] h-[200px] relative">
      {loading ? (
        <div className="w-[350px] h-[200px] absolute top-0 left-0">
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
