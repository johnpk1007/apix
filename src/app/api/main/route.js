import { connectToDB } from "../../../../utils/database";
import BillboardVideo from "../../../../models/billboardVideo";

export const GET = async () => {
  let content;
  try {
    await connectToDB();
    const data = await BillboardVideo.find().sort({ this_week: 1 });
    content = data;
    console.log("billboard download process complete");
  } catch (error) {
    console.error(error);
  }

  return new Response(JSON.stringify(content), {
    headers: { "Content-Type": "application/json" },
  });
};
