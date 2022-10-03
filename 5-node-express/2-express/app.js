// express application
import express from 'express';

import compression from 'compression';
import morgan  from 'morgan';

import { fileURLToPath } from 'url';
import { dirname, sep } from 'path';

// configuration
const __dirname = dirname(fileURLToPath( import.meta.url )) + sep;

const cfg = {
    port: process.env.PORT || 3000,
    dir: {
      root:   __dirname,
      static: __dirname + 'static' + sep
    }
  };

const app = express();

app.use( compression() );
app.use(morgan("dev"));
app.disable('x-powered-by');

// for more options and caching can use the separate module serve-static:
// https://github.com/expressjs/serve-static
app.use(express.static( cfg.dir.static ));

export { app, cfg }