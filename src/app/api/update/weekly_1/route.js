import axios from "axios";
import { connectToDB } from "../../../../../utils/database";
import { billboardInsertion } from "../billboardInsertion";
import { billboardInsertionBeforeCheck } from "../billboardInsertionBeforeCheck";
import { queInsertion } from "../queInsertion";

export async function GET() {
  console.log("api/update/weekly_1 starts working");
  const response = new Response(
    JSON.stringify({ message: "Request received. Processing in background." })
  );
  try {
    await connectToDB();
    const data = await billboardInsertion();
    await queInsertion(data);
    axios.post(
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
  return response;
}
