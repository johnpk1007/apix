import { connectToDB } from "../../../../utils/database";
import Billboard from "../../../../models/billboard";

export const POST = async (request) => {
  try {
    await connectToDB();
    const data = await request.json();
    await Billboard.findByIdAndUpdate(data, { artist: "Shboozey?" });
  } catch (error) {
    console.error(error);
  }

  return new Response(JSON.stringify({ message: "processing!" }));
};
