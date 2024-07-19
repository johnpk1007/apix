import { connectToDB } from "../../../../../utils/database";
import { billboardInsertion } from "../billboardInsertion";
import { queInsertion } from "../queInsertion";
import { queCheck } from "../queCheck";
import { artistTitleVideoInsertion } from "../artistTitleVideoInsertion";
import { billboardUpdate } from "../billboardUpdate";

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

  //scaping & billboard insertion process
  let data;
  try {
    data = await billboardInsertion();
  } catch (error) {
    console.error("Error in scraping & billboard insertion:", error);
    return new Response(
      JSON.stringify({ message: "Error in scraping & billboard insertion" }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  //que process
  try {
    await queInsertion(data);
  } catch (error) {
    console.error("Error in que insertion:", error);
    return new Response(JSON.stringify({ message: "Error in que insertion" }), {
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
    return new Response(
      JSON.stringify({ message: "Error in artistTitleVideoInsertion" }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  //billboard update
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

  return new Response(
    JSON.stringify({ message: "weekly api update complete" }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};
