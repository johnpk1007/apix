import { connectToDB } from "../../../../../utils/database";
import { billboardQueInsertion } from "../billboardQueInsertion";
import { queCheck } from "../queCheck";
import { artistTitleVideoInsertion } from "../artistTitleVideoInsertion";
import { billboardUpdate } from "../billboardUpdate";
import { billboardArtistUpdate } from "../billboardArtistUpdate";
import { billboardMatching } from "../billboardMatching";

export async function GET() {
  const response = new Response(
    JSON.stringify({ message: "Request received. Processing in background." })
  );
  await processInBackground();
  return response;
}

async function processInBackground() {
  try {
    await connectToDB();
    await billboardQueInsertion();
    await queCheck();
    await artistTitleVideoInsertion();
    await billboardUpdate();
    await billboardArtistUpdate();
    await billboardMatching();
    console.log("weekly update done");
  } catch (error) {
    console.error(error.message);
  }
}
