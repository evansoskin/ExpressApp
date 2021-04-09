const express = require('express');
const app = express();
const PORT = 5001;

app.use( express.json() );

app.listen (
    PORT,
    () => console.log(`App listening on http://localhost:${PORT}`)
)

app.get('/new', (req, res) => {
    res.status(200).send({
        a: 'a',
        b: 'b',
        c: 'c'
    });
});

app.post('/new/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
        res.status(418).send({ message: 'Need a name' })
    }

    res.send({
        data: `${id} + ${name}`
    });
});