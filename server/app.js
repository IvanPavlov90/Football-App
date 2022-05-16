const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

async function connectDatabase () {
  try {
    await mongoose.connect(process.env.DB_URI);
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  } catch (e) {
    console.log(e);
  }
}

connectDatabase();