import 'dotenv/config';

import express from 'express';
import routes from './routes.js';

const app = express()
const port = 3000

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send(
    '<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>' +
    '<h1>Express with Postgres and Redis</h1>' +
    '<ul>' +
      '<li>' +
        '<a href="/postgres">' +
          'Postgres' +
        '</a>' +
      '</li>' +
      '<li>' +
        '<a href="/redis">' +
          'Redis' +
        '</a>' +
      '</li>' +
    '</ul>' +
    '</div>'
  );
})

routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})