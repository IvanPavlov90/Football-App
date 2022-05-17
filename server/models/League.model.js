const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  _id: Types.ObjectId,
  leagueName: String,
  image: Buffer,
});

module.exports = {
  League: model("League", schema),
};