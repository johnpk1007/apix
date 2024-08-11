import { connectToDB } from "../../../../utils/database";
import Billboard from "../../../../models/billboard";
import axios from "axios";

export const GET = async () => {
  let result;
  try {
    await connectToDB();
    const data = await Billboard.find({ artist: "Shaboozey" });
    result = await Billboard.findByIdAndUpdate(
      data[0]._id,
      {
        artist: "Shaboozey?",
      },
      {
        returnOriginal: false,
      }
    );
    // console.log("data[0]._id:", data[0]._id);
    // axios.post(
    //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/experiment_2`,
    //   JSON.stringify(data[0]._id)
    // );
  } catch (error) {
    console.error(error);
  }

  return new Response(JSON.stringify({ message: result }));
};
