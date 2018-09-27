const express = require('express');
const app = express();
const PORT = process.env.PORT || 5005;

app.use(express.static('server/public'));

// No body-parser needed since we don't have any routes

// You should not need to modify this file for this activity

app.listen(PORT, () => {
    console.log('server running on port', PORT);
})