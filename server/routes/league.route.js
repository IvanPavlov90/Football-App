const { Router } = require("express");
const { getLeagues } = require("../service/League.service");
const router = Router();

router.get('/leagues', async (request, response) => {
  try {
    const leagues = await getLeagues();
    const responseLeagues = [];
    leagues.forEach(league => {
      responseLeagues.push({ 
        leagueName: league.leagueName, 
        image: Buffer.from(league.image, 'base64').toString('utf-8') 
      });
    });
    response.status(200).json(responseLeagues);
  } catch (e) {
    response.status(503).json({ error: '503' });
  }
})

module.exports = router;