const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;

async function connectDatabase () {
  try {
    await mongoose.connect(process.env.DB_URI);
    app.listen(port, () => {
      console.log(`Используемый порт - ${port}`)
    });
  } catch (e) {
    console.log(e);
  }
}

connectDatabase();

app.use(cors({
    origin: `http://localhost:4200`
  })
);

app.use(express.json({ extended: true }));
app.use('/api', require('./routes/league.route'));
app.use('/api', require('./routes/club.route'));