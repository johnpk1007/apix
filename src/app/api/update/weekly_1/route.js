import axios from "axios";
import { connectToDB } from "../../../../../utils/database";
import { billboardInsertion } from "../billboardInsertion";
import { billboardInsertionBeforeCheck } from "../billboardInsertionBeforeCheck";
import { queInsertion } from "../queInsertion";

export async function GET() {
  const response = new Response(
    JSON.stringify({ message: "Request received. Processing in background." })
  );
  processInBackground();
  return response;
}

async function processInBackground() {
  try {
    await connectToDB();
    const data = await billboardInsertion();
    // const result = await billboardInsertionBeforeCheck(data);
    // if (result) {
    //   throw new Error("nothing to update");
    // }
    await queInsertion(data);
    await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/update/weekly_2`,
      JSON.stringify(data),
      {
        headers: {
          request_type: "send_data",
        },
      }
    );
  } catch (error) {
    console.error(error.message);
  }
}
