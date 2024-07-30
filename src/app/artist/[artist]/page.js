"use client";

import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import { ArtistCard } from "../../../../components/artistCard";
import { ArtistNavigation } from "../../../../components/artistNavigation";
import { ExtraArtistNavigation } from "../../../../components/extraArtistNavigation";
import { StickyArtistNavigation } from "../../../../components/stickyArtistNavigation";
import { Context } from "../../../../components/provider";

export default function Artist({ params }) {
  const { firstCardscrollable, setFfirstCardScrollable } = useContext(Context);
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
      <div>
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
    <>
      <ArtistNavigation />
      <ExtraArtistNavigation
        artist={data ? data.artist : null}
        image={data ? data.image : null}
        length={data ? data.top5songs?.length : null}
      />
      <StickyArtistNavigation />
      <ArtistCardDeck
        data={data ? data.top5songs : null}
        artist={data ? data.artist : null}
      />
    </>
  );
}
