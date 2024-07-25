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

const billboardAristVideoSchema = new Schema({
  artist: String,
  image: String,
  top5songs: [top5songsSchema],
});

const BillboardArtistVideo =
  models.BillboardArtistVideo ||
  model("BillboardArtistVideo", billboardAristVideoSchema);

export default BillboardArtistVideo;
