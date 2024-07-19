import { Schema, model, models } from "mongoose";

const titleArtistVideoSchema = new Schema({
  title: {
    type: String,
  },
  artist: {
    type: String,
  },
  video: {
    type: String,
  },
});

const TitleArtistVideo =
  models.TitleAristVideo || model("TitleAristVideo", titleArtistVideoSchema);

export default TitleArtistVideo;
