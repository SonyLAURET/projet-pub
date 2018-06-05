
const express = require('express');
const pubService = require('pub-services').services;
const app = express();
app.get('/pubs', function (req, res) {
    const pubs = pubService.getListPub();
        res.status(200).json();
        return JSON.stringify(pubs);
})
app.get('/pubs/ouvert', function (req, res) {
    const pubs = pubService.getListPubOpen();
        res.status(200).json();
})
app.listen(3000);