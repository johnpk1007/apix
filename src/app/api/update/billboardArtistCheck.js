import BillboardArtistVideo from "../../../../models/billboardAristVideo";

export const billboardArtistCheck = async () => {
  const billboardArtistVideos = await BillboardArtistVideo.find({
    top5songs: {
      $elemMatch: {
        video: "",
      },
    },
  });
  console.log("billboardArtistVideos:", billboardArtistVideos);
  if (billboardArtistVideos.length > 0) {
    return true;
  } else {
    return false;
  }
};
