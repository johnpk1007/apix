import { Schema, model, models } from "mongoose";

const billboardVideoSchema = new Schema({
  this_week: {
    type: Number,
  },
  title: {
    type: String,
  },
  artist: {
    type: String,
  },
  last_week: {
    type: Number,
  },
  peak_pos: {
    type: Number,
  },
  wks_on_chart: {
    type: Number,
  },
  video: {
    type: String,
  },
});

const BillboardVideo =
  models.BillboardVideo || model("BillboardVideo", billboardVideoSchema);

export default BillboardVideo;
