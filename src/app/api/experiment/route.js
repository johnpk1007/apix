import { artistScrape } from "../update/artistScrape";

export const GET = async () => {
  try {
    const result = await artistScrape("jt");
    console.log("result:", result);
  } catch (error) {
    console.error(error);
  }

  return new Response(JSON.stringify({ message: "experiment complete" }), {
    headers: { "Content-Type": "application/json" },
  });
};
