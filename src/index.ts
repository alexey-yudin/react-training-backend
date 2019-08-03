import * as express from 'express';
import * as logger from 'morgan';

const port = process.env.PORT || 8000;
const app = express();

app.use(logger('dev'));

app.get('/', (req, res) => {
  res.json({
    text: 'Text'
  });
});

app.listen(port, () => console.info(`Listening on port: ${port}`));
