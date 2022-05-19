const { Router } = require("express");
const { createLeague } = require("../service/League.service");
const router = Router();

router.post('/admin/league/add', async (request, response) => {
  try {
    const league = createLeague({ ...request.body });
    const result = await league.save();
    if (result) {
      response.status(201).json({ message: 'created' });
    } else {
      response.status(501).json({ error: '501' });
    }
  } catch (e) {
    response.status(503).json({ error: '503' });
  }
});

module.exports = router;
