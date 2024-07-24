import BillboardVideo from "../../../../models/billboardVideo";

export const billboardCheck = async () => {
  const billboardVideos = await BillboardVideo.find({ video: "" });
  if (billboardVideos.length > 0) {
    return true;
  } else {
    return false;
  }
};
