import { connectToDB } from "../../../../../utils/database";
import { billboardInsertion } from "../billboardInsertion";
import { queInsertion } from "../queInsertion";
import { queCheck } from "../queCheck";
import { artistTitleVideoInsertion } from "../artistTitleVideoInsertion";
import { billboardUpdate } from "../billboardUpdate";

export const GET = async () => {
  //connect to DB
  await connectToDB();

  //que check process
  await queCheck();

  //artistTitleVideo process
  await artistTitleVideoInsertion();

  //billboard update
  await billboardUpdate();

  return new Response(JSON.stringify({ message: "daily api update" }), {
    headers: { "Content-Type": "application/json" },
  });
};
