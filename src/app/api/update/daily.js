import axios from "axios";
import { GET as scrape } from "../scrape/route";
import { connectToDB } from "../../../../utils/database";
import Billboard from "../../../../models/billboard";
import Que from "../../../../models/que";
import TitleAristVideo from "../../../../models/titleArtistVideo";
import BillboardVideo from "../../../../models/billboardVideo";
import mongoose from "mongoose";

const videoSearch = async (query) => {
  //   try {
  //     const response = await axios.get(
  //       `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=video&q=${query.replace(
  //         / /gi,
  //         "%20"
  //       )}&key=${process.env.YOUTUBE_API_KEY}`
  //     );
  //     return response.data.items[0].id.videoId;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const update = async () => {
  //   let data;
  //   //connect to DB
  //   try {
  //     connectToDB();
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   //artistTitleVideo process
  //   let hasMore = true;
  //   while (hasMore) {
  //     const session = await mongoose.startSession();
  //     try {
  //       session.startTransaction();
  //       const queItems = await Que.find()
  //         .sort({ _id: 1 })
  //         .limit(10)
  //         .session(session);
  //       if (queItems.length === 0) {
  //         hasMore = false;
  //         break;
  //       }
  //       const processedQueItems = [];
  //       await Promise.all(
  //         queItems.map(async (el, idx) => {
  //           const query = el.title + " " + el.artist;
  //           const result = await videoSearch(query);
  //           processedQueItems[idx] = {
  //             title: el.title,
  //             artist: el.artist,
  //             video: result,
  //           };
  //         })
  //       );
  //       await TitleAristVideo.insertMany(processedQueItems, { session });
  //       const queItemIds = queItems.map((item) => item._id);
  //       await Que.deleteMany({ _id: { $in: queItemIds } }).session(session);
  //       console.log("que deletion and update are complete");
  //       await session.commitTransaction();
  //       session.endSession();
  //     } catch (error) {
  //       await session.abortTransaction();
  //       session.endSession();
  //       console.log(error);
  //     }
  //   }
  //   //billboard update
  //   try {
  //     const billboardItems = await Billboard.find();
  //     const titleAristVideos = await TitleAristVideo.find();
  //     const billboardVideo = [];
  //     for (const billboardItem of billboardItems) {
  //       for (const titleAristVideo of titleAristVideos) {
  //         if (
  //           billboardItem.artist === titleAristVideo.artist &&
  //           billboardItem.title === titleAristVideo.title
  //         ) {
  //           billboardVideo.push({
  //             this_week: billboardItem.this_week,
  //             title: billboardItem.title,
  //             artist: billboardItem.artist,
  //             peak_pos: billboardItem.peak_pos,
  //             video: titleAristVideo.video,
  //           });
  //         } else {
  //           billboardVideo.push({
  //             this_week: billboardItem.this_week,
  //             title: billboardItem.title,
  //             artist: billboardItem.artist,
  //             peak_pos: billboardItem.peak_pos,
  //             video: "",
  //           });
  //         }
  //       }
  //     }
  //     await BillboardVideo.deleteMany();
  //     await BillboardVideo.insertMany(billboardVideo);
  //     console.log("billboard update process complete");
  //   } catch (error) {
  //     console.error(error);
  //   }
};
