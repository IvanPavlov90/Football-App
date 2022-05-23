const { Router } = require("express");
const { createClub } = require("../service/Club.service");
const router = Router();

router.post('/club/add', async (request, response) => {
  try {
    const club = createClub({ ...request.body });
    const result = await club.save();
    if (result) {
      response.status(201).json(club);
    } else {
      response.status(501).json({ error: '501' });
    }
  } catch (e) {
    response.status(503).json({ error: '503' });
  }
})

module.exports = router;