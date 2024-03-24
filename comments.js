// Create web server
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(bodyParser.json());

// サーバー起動
app.listen(4001, () => {
  console.log('Listening on 4001');
});