import { LinkButton } from "./linkButton";

const conditions = [",", "Featuring", "&", "X"];
const separators = /([,&]|Featuring| X )/;
const stringCheck = (str) => {
  return conditions.some((el) => str.includes(el));
};

export const EditedTitle = ({ artist, page }) => {
  const check = stringCheck(artist);
  if (check) {
    const arr = artist.split(separators);
    const trimArr = arr.map((str) => {
      return str.trim();
    });

    return (
      <div>
        {trimArr.map((el, idx) => {
          if (idx % 2 === 1) {
            if (el === ",") {
              return (
                <div
                  key={idx}
                  className="flex font-poppins font-light text-3xl"
                >
                  {trimArr[idx - 1]}!,
                  {page[Math.floor(idx / 2)].page ? (
                    <LinkButton artist={page[Math.floor(idx / 2)].artist} />
                  ) : (
                    ""
                  )}
                </div>
              );
            } else {
              return (
                <div key={idx}>
                  <div className="flex font-poppins font-light text-3xl">
                    {trimArr[idx - 1]}
                  </div>
                  <div className="flex font-poppins font-light text-3xl">
                    {trimArr[idx]}
                    {page[Math.floor(idx / 2)].page ? (
                      <LinkButton artist={page[Math.floor(idx / 2)].artist} />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            }
          }
        })}
      </div>
    );
  } else {
    return (
      <div className="flex font-poppins font-light text-3xl">
        {artist}
        {page[0].page ? <LinkButton artist={page[0].artist} /> : ""}
      </div>
    );
  }
};
