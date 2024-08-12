import axios from "axios";
import { dataToArtistList } from "../dataToArtistList";
import { connectToDB } from "../../../../../utils/database";
import { billboardArtistInsertion } from "../billboardArtistInsertion";

export const dynamic = "force-dynamic";

export async function POST(request) {
  console.log("api/update/weekly_2 starts working");
  const data = await request.json();
  const headers = request.headers;
  const request_type = headers.get("request_type");
  const response = new Response(
    JSON.stringify({ message: "Request received. Processing in background." })
  );
  if (request_type === "send_data") {
    const list = dataToArtistList(data);
    console.log("list:", list);
    axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/update/artist_scrape`,
      JSON.stringify({ list: list, operationArray: [], num: 0 })
    );
    await new Promise((resolve) => setTimeout(resolve, 1000));
  } else if (request_type === "return_data") {
    console.log("return_data:", data);
    const { list, operationArray, num } = data;
    axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/update/artist_scrape`,
      JSON.stringify({ list: list, operationArray, num })
    );
    await new Promise((resolve) => setTimeout(resolve, 1000));
  } else if (request_type === "return_data_final") {
    console.log("return_data_final:", data);
    // try {
    //   await connectToDB();
    //   billboardArtistInsertion(operationArray);
    //   axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/update/weekly_3`);
    //   await new Promise((resolve) => setTimeout(resolve, 1000));
    // } catch (error) {
    //   console.error(error.message);
    // }
  }
  return response;
}
