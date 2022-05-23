const mongoose = require("mongoose");
const { Club } = require("../models/Club.model");

module.exports = {
  createClub: (club) => {
    const id = mongoose.Types.ObjectId();
    return new Club({
      _id: id,
      _leagueId: club._leagueId,
      clubName: club.clubName,
      image: club.image,
      f_year: club.f_year,
      city: club.city,
      stadium: club.stadium,
      history: club.history,
    })
  }
}