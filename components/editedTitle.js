import { ArtistLinkButton } from "./artistLinkButton";

const conditions = [",", "Featuring", "&", "X", "x"];
const separators = /([,&]|Featuring| X | x )/;
const stringCheck = (str) => {
  return conditions.some((el) => str.includes(el));
};
const trimArrFunc = (arr) => {
  let newArr = [];
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === "Featuring" ||
      arr[i] === "&" ||
      arr[i] === "X" ||
      arr[i] === "x"
    ) {
      newArr.push(tempArr);
      tempArr = [];
      tempArr.push(arr[i]);
    } else if (arr[i] === ",") {
      tempArr.push(arr[i]);
      newArr.push(tempArr);
      tempArr = [];
    } else if (i !== arr.length - 1) {
      tempArr.push(arr[i]);
    } else if (i === arr.length - 1) {
      tempArr.push(arr[i]);
      newArr.push(tempArr);
      tempArr = [];
    }
  }
  return newArr;
};

export const EditedTitle = ({ artist, page }) => {
  const check = stringCheck(artist);
  if (check) {
    const arr = artist.split(separators);
    const trimArr = arr.map((str) => {
      return str.trim();
    });
    const newArr = trimArrFunc(trimArr);
    return (
      <div>
        {newArr.map((newArrItem, idx) => {
          if (newArrItem.length === 1) {
            return (
              <div
                key={idx}
                className="flex items-center font-poppins font-light lg:text-2xl xl:text-3xl  relative"
              >
                {page[idx].page ? (
                  <div>
                    <div className="absolute xxs:left-[-15px] sm:left-[-25px] lg:left-[-30px] xxs:w-[15px] sm:w-[25px] lg:w-[30px] top-0 rounded-l-lg top-0 bottom-0 bg-inherit">
                      +
                    </div>
                    <ArtistLinkButton artist={newArrItem[0]} />
                  </div>
                ) : (
                  newArrItem[0]
                )}
              </div>
            );
          } else {
            return (
              <div
                key={idx}
                className="flex items-center font-poppins font-light lg:text-2xl xl:text-3xl relative"
              >
                {page[idx].page ? (
                  <div>
                    <div className="absolute xxs:left-[-15px] sm:left-[-25px] lg:left-[-30px] xxs:w-[15px] sm:w-[25px] lg:w-[30px] top-0 rounded-l-lg top-0 bottom-0 bg-inherit">
                      +
                    </div>
                    <ArtistLinkButton
                      artist={newArrItem[1]}
                      extra={newArrItem[0]}
                    />
                  </div>
                ) : (
                  <div>
                    {newArrItem[0]}
                    {newArrItem[0] === "Featuring" ||
                    newArrItem[0] === "&" ||
                    newArrItem[0] === "X" ||
                    newArrItem[0] === "x"
                      ? " "
                      : ""}
                    {newArrItem[1]}{" "}
                  </div>
                )}
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    return (
      <div className="flex items-center font-poppins font-light lg:text-2xl xl:text-3xl relative">
        {page[0].page ? (
          <div>
            <div className="absolute xxs:left-[-15px] sm:left-[-25px] lg:left-[-30px] xxs:w-[15px] sm:w-[25px] lg:w-[30px] top-0 rounded-l-lg top-0 bottom-0 bg-inherit">
              +
            </div>
            <ArtistLinkButton artist={artist} />
          </div>
        ) : (
          artist
        )}
      </div>
    );
  }
};
