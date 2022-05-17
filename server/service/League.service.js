const mongoose = require("mongoose");
const { League } = require("../models/League.model");

module.exports = {
  createLeague: (league) => {
    const id = mongoose.Types.ObjectId();
    return new League({
      _id: id,
      leagueName: league.leagueName,
      image: league.image,
    })
  },
  getLeagues: async () => {
    return await League.find().sort({
      leagueName: -1,
    });
  }
}