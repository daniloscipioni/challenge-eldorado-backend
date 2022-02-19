const express = require('express');
const cors = require('cors');
const app = express();
const openapi = require('openapi-comment-parser');
const swaggerUi = require('swagger-ui-express');

const spec = openapi();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

// Api Routes
const index = require('./routes/index');

app.use(index);

module.exports = app;