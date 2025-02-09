import { connectToDB } from "../../../../../utils/database";
import BillboardArtistVideo from "../../../../../models/billboardAristVideo";

export const GET = async (request, { params }) => {
  let content;
  try {
    await connectToDB();
    const data = await BillboardArtistVideo.find({
      artist: params.artist.replace(/-/g, " "),
    });
    content = data;
    if (data.length === 0) {
      return new Response(JSON.stringify({ message: "Page not found" }), {
        status: 404,
      });
    }

    console.log("billboard artist download process complete");
  } catch (error) {
    console.error(error);
  }

  return new Response(JSON.stringify(content), {
    headers: { "Content-Type": "application/json" },
  });
};
