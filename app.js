const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world with node.js');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT,() => {
  console.log(`App listening on port ${PORT}`);
});
