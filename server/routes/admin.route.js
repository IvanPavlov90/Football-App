const { Router } = require("express");
const router = Router();

router.post('/admin/league', async (request, response) => {
  console.log(request.body);
  response.json({ message: 'ok' });
});

module.exports = router;
