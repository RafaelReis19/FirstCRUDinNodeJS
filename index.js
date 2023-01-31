const express = require('express');
//const res = require('express/lib/response');

const mServer = express();

mServer.use(express.json());

const musicas = ['Dandelions', 'Always Forever', 'Cold Play', 'Mc Poze do Anos 80'];

//get only one
mServer.get('/musicas/:index', (req, res) => {
    const { index } = req.params;

    return res.json(musicas[index]);
});

//get All
mServer.get('/musicas', (req, res) => {

    return res.json(musicas);
});

//post musica
mServer.post('/musicas', (req, res) => {
    const { nome } = req.body;

    musicas.push(nome);

    return res.json(musicas);

});

//put uma musica (atualizar)
mServer.put('/musicas/:index', (req, res) => {
    const { index } = req.params;

    const { nome } =  req.body;

    musicas[index] = nome;
    //musicas.push(nome);

    return res.json(musicas);
    //(musicas[index]);

});

//delete uma musica
mServer.delete('/musicas/:index', (req, res) => {
    const { index } = req.params;

    musicas.splice(index, 1);

    return res.json({ message: "A musica foi excluída com sucesso!"});

});

mServer.listen(3000);