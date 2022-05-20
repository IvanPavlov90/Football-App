const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  _id: Types.ObjectId,
  _leagueId: Types.ObjectId,
  clubName: String,
  image: Buffer,
  f_year: Number,
  history: String,
  city: String,
  stadium: String,
});

module.exports = {
  Club: model("Club", schema),
};