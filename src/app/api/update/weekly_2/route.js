import axios from "axios";
import { dataToArtistList } from "../dataToArtistList";
import { connectToDB } from "../../../../../utils/database";
import { billboardArtistInsertion } from "../billboardArtistInsertion";

export const dynamic = "force-dynamic";

export async function POST(request) {
  console.log("api/update/weekly_2 starts working");
  // const data = await request.json();
  // const headers = request.headers;
  // const request_type = headers.get("request_type");
  const response = new Response(
    JSON.stringify({ message: "Request received. Processing in background." })
  );
  // if (request_type === "send_data") {
  //   const list = dataToArtistList(data);
  //   axios.post(
  //     `${process.env.NEXT_PUBLIC_BASE_URL}/api/update/artist_scrape`,
  //     JSON.stringify({ list: list, operationArray: [], num: 0 })
  //   );
  // } else if (request_type === "return_data") {
  //   axios.post(
  //     `${process.env.NEXT_PUBLIC_BASE_URL}/api/update/artist_scrape`,
  //     JSON.stringify({ list: list, operationArray, num })
  //   );
  // } else if (request_type === "return_data_final") {
  //   try {
  //     await connectToDB();
  //     billboardArtistInsertion(operationArray);
  //     axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/update/weekly_3`);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }
  return response;
}
