import { app, cfg } from "./app.js";
import path from 'path';
import { URL } from 'url';
import  favicon  from "serve-favicon";
import { errorHandler } from './util/error.js'
import { pageNotFound} from './util/index.js';

const __dirname = new URL('.', import.meta.url).pathname;

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// home page route
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

// 404 middleware
app.use(pageNotFound);

// Error-handler middleware
app.use(errorHandler);

// start server
app.listen(cfg.port, () => {
    console.log(`App listening at http://localhost:${ cfg.port }`);
});