import { connectToDB } from "../../../../utils/database";
import BillboardVideo from "../../../../models/billboardVideo";
export async function GET() {
  let content;
  try {
    connectToDB();
    const data = await BillboardVideo.find();
    content = data;
    console.log("billboard download process complete");
  } catch (error) {
    console.error(error);
  }

  return new Response(JSON.stringify(content), {
    headers: { "Content-Type": "application/json" },
  });
}
