import { Schema, model, models } from "mongoose";

const top5songsSchema = new Schema({
  title: {
    type: String,
  },
  peak_pos: {
    type: Number,
  },
  peak_date: {
    type: String,
  },
  wks_on_chart: {
    type: Number,
  },
  video: {
    type: String,
  },
});

const billboardAristSchema = new Schema({
  artist: String,
  top5songs: [top5songsSchema],
});

const BillboardArtist =
  models.BillboardArtist || model("BillboardArtist", billboardAristSchema);

export default BillboardArtist;
