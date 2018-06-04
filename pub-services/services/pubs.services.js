var json = require('../mocks/pubs.json')
const moment=require('moment');

function recupereJSON() {
    return json;
}

function OpenDay() {
    var day = moment().format("dddd");
    var tab=[];
    json.forEach(element => {
        if (element['openDays'].includes(day)) {
            tab.push(element['name']);
        }     
    });
    return tab;
}
module.exports = {
   
    recupereJSON: recupereJSON,
    OpenDay: OpenDay
}