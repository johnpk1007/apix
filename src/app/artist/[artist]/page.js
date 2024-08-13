"use client";

import { notFound } from "next/navigation";
import { useEffect, useState, useContext } from "react";
import { ArtistCard } from "../../../../components/artistCard";
import { ArtistNavigation } from "../../../../components/artistNavigation";
import { ExtraArtistNavigation } from "../../../../components/extraArtistNavigation";
import { StickyArtistNavigation } from "../../../../components/stickyArtistNavigation";
import { Context } from "../../../../components/provider";

export default function Artist({ params }) {
  const { setFfirstCardScrollable } = useContext(Context);
  const [data, setData] = useState([]);
  const fetchArtist = async () => {
    const response = await fetch(`/api/artist/${params.artist}`);
    const responseJson = await response.json();
    setData(responseJson[0]);
  };

  useEffect(() => {
    fetchArtist();

    setFfirstCardScrollable(false);
  }, [params.artist]);

  if (!data) {
    notFound();
  }

  const ArtistCardDeck = ({ data, artist }) => {
    let arr = [0, 1, 2, 3, 4];
    if (data?.length < 5) {
      const newArr = [];
      for (let i = 0; i < data.length; i++) {
        newArr.push(i);
      }
      arr = newArr;
    }
    return (
      <div className="w-full">
        {arr.map((i) => (
          <ArtistCard
            key={i}
            data={data ? data[i] : null}
            artist={artist ? artist : null}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="relative">
      <div className="flex w-full items-stretch xxs:h-[50px] lg:h-[120px] fixed top-0 z-10">
        <div className="bg-black grow"></div>
        <div className="container relative max-w-screen-xl">
          <ArtistNavigation />
        </div>
        <div className="grow"></div>
      </div>
      <div className="flex w-full xxs:mt-[50px] lg:mt-[120px]">
        <div className="bg-black flex-1 top-0 bottom-0"></div>
        <div className="container max-w-screen-xl">
          <ExtraArtistNavigation
            artist={data ? data.artist : null}
            image={data ? data.image : null}
            length={data ? data.top5songs?.length : null}
          />
        </div>
        <div className="flex-1 top-0 bottom-0"></div>
      </div>
      <div className="sticky flex xxs:top-[50px] lg:top-[120px] z-10">
        <div className="bg-black flex-1 top-0 bottom-0"></div>
        <div className="container max-w-screen-xl">
          <StickyArtistNavigation />
        </div>
        <div className="grow top-0 bottom-0"></div>
      </div>
      <div className="flex">
        <div className="bg-black flex-1 top-0 bottom-0"></div>
        <div className="container flex max-w-screen-xl">
          <ArtistCardDeck
            data={data ? data.top5songs : null}
            artist={data ? data.artist : null}
          />
        </div>
        <div className="flex-1 top-0 bottom-0"></div>
      </div>
    </div>
  );
}
