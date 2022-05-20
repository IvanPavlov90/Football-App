const { Router } = require("express");
const { getLeagues, createLeague } = require("../service/League.service");
const router = Router();

router.get('/leagues', async (request, response) => {
  try {
    const leagues = await getLeagues();
    const responseLeagues = [];
    leagues.forEach(league => {
      responseLeagues.push({
        id: league._id, 
        leagueName: league.leagueName, 
        image: Buffer.from(league.image, 'base64').toString('utf-8') 
      });
    });
    response.status(200).json(responseLeagues);
  } catch (e) {
    response.status(503).json({ error: '503' });
  }
});

router.post('/league/add', async (request, response) => {
  try {
    const league = createLeague({ ...request.body });
    const result = await league.save();
    if (result) {
      response.status(201).json(league);
    } else {
      response.status(501).json({ error: '501' });
    }
  } catch (e) {
    response.status(503).json({ error: '503' });
  }
});

module.exports = router;