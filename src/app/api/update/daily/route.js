import { connectToDB } from "../../../../../utils/database";
import { queCheck } from "../queCheck";
import { artistTitleVideoInsertion } from "../artistTitleVideoInsertion";
import { billboardUpdate } from "../billboardUpdate";
import { billboardArtistUpdate } from "../billboardArtistUpdate";
import { billboardCheck } from "../billboardCheck";
import { billboardArtistCheck } from "../billboardArtistCheck";

export const GET = async () => {
  //connect to DB
  try {
    await connectToDB();
  } catch (error) {
    console.error("Error in connectToDB:", error);
    return new Response(JSON.stringify({ message: "Error in connectToDB" }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  //billboard check process
  const billboardCheckResult = await billboardCheck();
  const billboardArtistCheckResult = await billboardArtistCheck();

  if (billboardCheckResult === true && billboardArtistCheckResult === true) {
    return new Response(JSON.stringify({ message: "nothing to update" }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  //que check process
  try {
    await queCheck();
  } catch (error) {
    console.error("Error in que check:", error);
    return new Response(JSON.stringify({ message: "Error in que check" }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  // artistTitleVideo process
  try {
    await artistTitleVideoInsertion();
  } catch (error) {
    console.error("Error in artistTitleVideoInsertion:", error);
  }

  //billboard update
  if (billboardCheck) {
    try {
      await billboardUpdate();
    } catch (error) {
      console.error("Error in billboardUpdate:", error);
      return new Response(
        JSON.stringify({ message: "Error in billboardUpdate" }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }

  //billboard artist update
  if (billboardArtistCheck) {
    try {
      await billboardArtistUpdate();
    } catch (error) {
      console.error("Error in billboardArtistUpdate:", error.message);
      return new Response(
        JSON.stringify({ message: "Error in billboard artist Update" }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }

  return new Response(JSON.stringify({ message: "daily api update" }), {
    headers: { "Content-Type": "application/json" },
  });
};
