import axios from "axios";
import { artistScrape } from "../artistScrape";

export async function POST(request) {
  const { list, operationArray, num } = await request.json();
  const response = new Response(
    JSON.stringify({ message: "Request received. Processing in background." })
  );
  const limit = Math.min(num + 5, list.length);
  const newOperationArray = operationArray;
  let i = num;
  for (i; i < limit; i++) {
    try {
      const result = await artistScrape(
        list[i].toLowerCase().replace(/ /g, "-")
      );
      if (result.top5songs.length === 0) {
        continue;
      }
      const artist = list[i];
      const arr = {
        insertOne: {
          document: {
            artist: artist,
            image: result.artistImage,
            top5songs: result.top5songs,
          },
        },
      };
      newOperationArray.push(arr);
    } catch (error) {
      console.error(error.message);
    }
    const delay = Math.floor(Math.random() * 4000) + 1000;
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
  if (i < list.length) {
    axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/update/weekly_2`,
      JSON.stringify({ list: list, operationArray: newOperationArray, num: i }),
      {
        headers: {
          request_type: "return_data",
        },
      }
    );
    await new Promise((resolve) => setTimeout(resolve, 1000));
  } else {
    axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/update/weekly_2`,
      JSON.stringify({ list: list, operationArray: newOperationArray, num: i }),
      {
        headers: {
          request_type: "return_data_final",
        },
      }
    );
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  return response;
}
