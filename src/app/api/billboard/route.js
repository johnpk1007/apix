import { connectToDB } from "../../../../utils/database";
import { billboardInsertion } from "../update/billboardInsertion";
import { artistScrape } from "../update/artistScrape";
import { multipleArtistScrape } from "../update/multipleArtistScrape";
import { billboardQueInsertion } from "../update/billboardQueInsertion";
import { queCheck } from "../update/queCheck";
import { artistTitleVideoInsertion } from "../update/artistTitleVideoInsertion";
import { billboardArtistUpdate } from "../update/billboardArtistUpdate";

import { billboardCheck } from "../update/billboardCheck";
import { billboardArtistCheck } from "../update/billboardArtistCheck";

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

  const billboardCheckResult = await billboardCheck();
  const billboardArtistCheckResult = await billboardArtistCheck();

  if (billboardCheckResult === true && billboardArtistCheckResult === true) {
    return new Response(JSON.stringify({ message: "nothing to update" }), {
      headers: { "Content-Type": "application/json" },
    });
  }
  // //scaping & billboard insertion process
  // let data;
  // try {
  //   data = await billboardInsertion();
  // } catch (error) {
  //   console.error("Error in scraping & billboard insertion:", error);
  //   return new Response(
  //     JSON.stringify({ message: "Error in scraping & billboard insertion" }),
  //     {
  //       headers: { "Content-Type": "application/json" },
  //     }
  //   );
  // }

  // //billboard artist scrape process
  // try {
  //   await multipleArtistScrape(data);
  // } catch (error) {
  //   console.error("Error in billboard artist scrape:", error);
  //   return new Response(
  //     JSON.stringify({ message: "Error in billboard artist scrape" }),
  //     {
  //       headers: { "Content-Type": "application/json" },
  //     }
  //   );
  // }

  // //billboard que insertion process
  // try {
  //   await billboardQueInsertion();
  // } catch (error) {
  //   console.error("Error in billboard que insertion:", error);
  //   return new Response(
  //     JSON.stringify({ message: "Error in billboard que insertion" }),
  //     {
  //       headers: { "Content-Type": "application/json" },
  //     }
  //   );
  // }

  // //que check process
  // try {
  //   await queCheck();
  // } catch (error) {
  //   console.error("Error in que check:", error);
  //   return new Response(JSON.stringify({ message: "Error in que check" }), {
  //     headers: { "Content-Type": "application/json" },
  //   });
  // }

  // // artistTitleVideo process
  // try {
  //   await artistTitleVideoInsertion();
  // } catch (error) {
  //   console.error("Error in artistTitleVideoInsertion:", error.message);
  // }

  // try {
  //   await billboardArtistUpdate();
  // } catch (error) {
  //   console.error("Error in billboardArtistUpdate:", error.message);
  // }

  // const billboardCheckTrueFalse = await billboardCheck();
  // console.log("billboardCheckTrueFalse:", billboardCheckTrueFalse);

  const billboardArtistCheckTrueFalse = await billboardArtistCheck();
  console.log("billboardArtistCheckTrueFalse:", billboardArtistCheckTrueFalse);

  return new Response(
    JSON.stringify({ message: "weekly api update complete" }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};
