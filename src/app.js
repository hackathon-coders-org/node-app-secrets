const express = require('express');
const app = express();
app.get('/health', (_req, res) => res.json({ status: 'ok', service: 'node-app-secrets' }));
module.exports = app;
