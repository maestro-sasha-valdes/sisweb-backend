const express = require('express');
const morgan = require('morgan');
import cookieParser from "cookie-parser";
const db = require('./src/models')
const cors = require('cors');


import apiRouter from './src/routes';



const app = express();
const port = 3005;

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use(cors({ origin: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use(apiRouter);

  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
