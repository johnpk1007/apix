import { connectToDB } from "../../../../../utils/database";
import { billboardInsertion } from "../billboardInsertion";
import { queInsertion } from "../queInsertion";
import { queCheck } from "../queCheck";
import { artistTitleVideoInsertion } from "../artistTitleVideoInsertion";
import { billboardUpdate } from "../billboardUpdate";
import { multipleArtistScrape } from "../multipleArtistScrape";
import { billboardQueInsertion } from "../billboardQueInsertion";
import { billboardArtistUpdate } from "../billboardArtistUpdate";
import { billboardMatching } from "../billboardMatching";

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

  //billboard artist scrape process
  try {
    await multipleArtistScrape(data);
  } catch (error) {
    console.error("Error in billboard artist scrape:", error);
    return new Response(
      JSON.stringify({ message: "Error in billboard artist scrape" }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  //billboard que insertion process
  try {
    await billboardQueInsertion();
  } catch (error) {
    console.error("Error in billboard que insertion:", error);
    return new Response(
      JSON.stringify({ message: "Error in billboard que insertion" }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
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

  //billboard artist update
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

  try {
    await billboardMatching();
  } catch (error) {
    console.error("Error in billboard matching:", error.message);
    return new Response(
      JSON.stringify({ message: "Error in billboard matching" }),
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
