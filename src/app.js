const express = require('express');
const cors = require('cors');
const openapi = require('openapi-comment-parser');

const app = express();
const swaggerUi = require('swagger-ui-express');

// Api Routes
const index = require('./routes/index');
const categoryRoute = require('./routes/category.routes');
const deviceRoute = require('./routes/device.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

// Added routes
app.use(index);
app.use('/api/', categoryRoute);
app.use('/api/', deviceRoute);

// Initializing swagger
const spec = openapi();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));

module.exports = app;
