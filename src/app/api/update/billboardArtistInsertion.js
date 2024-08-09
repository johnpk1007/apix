import mongoose from "mongoose";
import BillboardArtist from "../../../../models/billboardArtist";

export async function billboardArtistInsertion(operationArray) {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    await BillboardArtist.bulkWrite(
      [
        {
          deleteMany: { filter: {} },
        },
        ...operationArray,
      ],
      { session }
    );
    await session.commitTransaction();
    session.endSession();
    console.log("billboard artist insertion process complete");
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
}
