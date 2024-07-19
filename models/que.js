import { Schema, model, models } from "mongoose";

const queSchema = new Schema({
  title: {
    type: String,
  },
  artist: {
    type: String,
  },
});

const Que = models.Que || model("Que", queSchema);

export default Que;
