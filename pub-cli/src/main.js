var pubs = require('pub-services').services;

function getListPub(){
    pubs.getListPub();
}

function getListPubDay(){
    pubs.getListPubOpen();
}

module.exports = {
    getListPub:getListPub,
    getListPubDay:getListPubDay
}