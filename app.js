import express from 'express';
import {join} from 'path';
import { myLogger } from './middlewares/logger-middleware.js';
import routes from './routes/web.js';
// import ejs from 'ejs';


const port  = 3000 ;
const app = express();

app.set('view engine', 'ejs');

app.use( express.static(join(process.cwd() , 'public')));

// Application level middleware
// app.use(myLogger);

// Routes level middleware
// app.use('/about' ,myLogger);

app.use( routes);


app.listen(port , ()=>{
    console.log(`App listening at port 3000`);
});