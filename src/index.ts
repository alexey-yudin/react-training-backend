import * as express from 'express';
import * as logger from 'morgan';
import * as bookRoutes from './routes/books';
import * as bodyParser from 'body-parser';
import * as path from 'path';

const port = process.env.PORT || 8000;
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public/')));

app.use(bookRoutes);

app.listen(port, () => console.info(`Listening on port: ${port}`));
