import axios from "axios";
import { dataToArtistList } from "../dataToArtistList";
import { connectToDB } from "../../../../../utils/database";
import { billboardArtistInsertion } from "../billboardArtistInsertion";

export async function POST(request) {
  const data = await request.json();
  const headers = request.headers;
  const request_type = headers.get("request_type");
  const response = new Response(
    JSON.stringify({ message: "Request received. Processing in background." })
  );
  if (request_type === "send_data") {
    processStart(data);
  } else if (request_type === "return_data") {
    processSendingBack(data);
  } else if (request_type === "return_data_final") {
    processEnd(data);
  }
  return response;
}

async function processStart(data) {
  const list = dataToArtistList(data);
  await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/update/artist_scrape`,
    JSON.stringify({ list: list, operationArray: [], num: 0 })
  );
}

async function processSendingBack({ list, operationArray, num }) {
  await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/update/artist_scrape`,
    JSON.stringify({ list: list, operationArray, num })
  );
}

async function processEnd({ operationArray }) {
  try {
    await connectToDB();
    billboardArtistInsertion(operationArray);
    await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/update/weekly_3`);
  } catch (error) {
    console.error(error.message);
  }
}
