const { Router } = require("express");
const { getLeagues } = require("../service/League.service");
const router = Router();

router.get('/leagues', async (request, response) => {
  try {
    const leagues = await getLeagues();
    if (leagues.length) {
      response.status(200).json({ leagues });
    } else {
      response.status(501).json({ error: '501' });
    }
  } catch (e) {
    response.status(503).json({ error: '503' });
  }
})

module.exports = router;