export function dataToArtistList(data) {
  const conditions = [",", "Featuring", "&", "X"];
  const separators = /[,&]|Featuring| X /;
  const list = [];
  data.map((singleData) => {
    if (conditions.some((el) => singleData.artist.includes(el))) {
      const parts = singleData.artist.split(separators);
      const trimParts = parts.map((str) => {
        return str.trim();
      });
      list.push(...trimParts);
    } else {
      list.push(singleData.artist);
    }
  });
  const newSet = new Set(list);
  const newList = [...newSet];
  return newList;
}
