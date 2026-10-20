const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'novus-setup-check' });
});

app.get('/welcome', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/health', (req, res) => {
  res.json({ healthy: true, uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});
