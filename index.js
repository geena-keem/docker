const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('🐳 Docker!')
});

app.listen(8080, () => console.log('server is runnig!'));