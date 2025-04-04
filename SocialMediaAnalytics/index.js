const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Social Media Analytics API is live 🚀');
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
