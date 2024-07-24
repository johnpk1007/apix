import Que from "../../../../models/que";
import TitleAristVideo from "../../../../models/titleArtistVideo";
import mongoose from "mongoose";

export const queCheck = async () => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const queItems = await Que.find().session(session);
    const titleAristVideos = await TitleAristVideo.find().session(session);
    const newQueItems = [];
    const finalQueItems = [];

    //checkinig for same que item
    for (const queItem of queItems) {
      if (
        newQueItems.findIndex(
          (newQueItem) =>
            newQueItem.title === queItem.title &&
            newQueItem.artist === queItem.artist
        ) === -1
      ) {
        newQueItems.push(queItem);
      }
    }

    //checking if titleAristVideo has queItem already
    for (const newQueItem of newQueItems) {
      if (
        titleAristVideos.findIndex(
          (titleAristVideo) =>
            titleAristVideo.title === newQueItem.title &&
            titleAristVideo.artist.includes(newQueItem.artist)
        ) === -1
      ) {
        if (
          finalQueItems.findIndex(
            (finalQueItem) =>
              finalQueItem.title === newQueItem.title &&
              finalQueItem.artist === newQueItem.artist
          ) === -1
        ) {
          finalQueItems.push(newQueItem);
        }
      }
    }
    const bulkOperation = finalQueItems.map((finalQueItem) => ({
      insertOne: { document: finalQueItem },
    }));

    await Que.bulkWrite(
      [
        {
          deleteMany: { filter: {} },
        },
        ...bulkOperation,
      ],
      { session }
    );
    await session.commitTransaction();
    session.endSession();
    console.log("billboard insertion complete");
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};
