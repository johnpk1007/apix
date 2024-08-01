import { connectToDB } from "../../../../utils/database";
import { billboardInsertion } from "./billboardInsertion";
import { queInsertion } from "./queInsertion";
import { queCheck } from "./queCheck";
import { artistTitleVideoInsertion } from "./artistTitleVideoInsertion";
import { billboardUpdate } from "./billboardUpdate";

export const weekly = async () => {
  //connect to DB
  await connectToDB();

  //scaping & billboard insertion process
  const data = await billboardInsertion();

  //que process
  await queInsertion(data);

  // //que check process
  await queCheck();

  //artistTitleVideo process
  await artistTitleVideoInsertion();

  //billboard update
  await billboardUpdate();
};
