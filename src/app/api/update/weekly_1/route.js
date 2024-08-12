import axios from "axios";
import { connectToDB } from "../../../../../utils/database";
import { billboardInsertion } from "../billboardInsertion";
import { queInsertion } from "../queInsertion";

export const dynamic = "force-dynamic";

export const GET = async () => {
  console.log("api/update/weekly_1 starts working");
  await backgroundProcess();
  return new Response(
    JSON.stringify({ message: "Request received. Processing in background." })
  );
};

const backgroundProcess = async () => {
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
    await new Promise((resolve) => setTimeout(resolve, 1000));
  } catch (error) {
    console.error(error.message);
  }
};
