const express   = require('express');
const path      = require('path');

const app = express();

app.use(express.static('./dist/frontend-angular'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname,'/dist/frontend-angular/index.html'));
});

app.listen(process.env.PORT || 8000, () => {
    console.log('Server started');
})