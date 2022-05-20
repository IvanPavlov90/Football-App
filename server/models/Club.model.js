const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  _id: Types.ObjectId,
  _leagueId: Types.ObjectId,
  clubName: String,
  image: Buffer,
  f_year: Number,
  city: String,
  stadium: String,
  history: String,
});

module.exports = {
  Club: model("Club", schema),
};