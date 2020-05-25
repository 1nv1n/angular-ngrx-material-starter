const path = require('path');
const express = require('express');
const compression = require('compression');

const CONTEXT = `/${process.env.CONTEXT || 'nvn-website'}`;
const PORT = process.env.PORT || 1337;

const app = express();

app.use(compression());
app.use(
  CONTEXT,
  express.static(path.resolve(__dirname, '../../dist/nvn-website'))
);
app.use('/', express.static(path.resolve(__dirname, '../../dist/nvn-website')));
app.listen(PORT, () =>
  console.log(`App running on http://localhost:${PORT}${CONTEXT}`)
);
