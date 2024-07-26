import { billboardMatching } from "../update/billboardMatching";
import { connectToDB } from "../../../../utils/database";
import { billboardUpdate } from "../update/billboardUpdate";

export const GET = async () => {
  try {
    await connectToDB();
    // await billboardUpdate();
    // await billboardMatching();
  } catch (error) {
    console.error(error);
  }
  return new Response(JSON.stringify({ message: "experiment complete" }), {
    headers: { "Content-Type": "application/json" },
  });
};
