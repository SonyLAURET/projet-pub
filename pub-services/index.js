var pubService = require('./services/pubs.services.js');

function getListPub(){
    console.log(pubService.recupereJSON());
}

function getListPubOpen(){
    console.log(pubService.OpenDay());
}

getListPub();
getListPubOpen();
module.exports = {
    services: {
        getListPub: getListPub,
        getListPubOpen: getListPubOpen
    }
}