import { connectToDB } from "../../../../utils/database";
import BillboardVideo from "../../../../models/billboardVideo";
import { NextResponse } from "next/server";

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

  return NextResponse.json(content);

  // return new Response(JSON.stringify(content), {
  //   headers: { "Content-Type": "application/json" },
  // });
};

export const revalidate = 86400;
