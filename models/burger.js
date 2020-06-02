//import orm.js into burger.js
const orm = require('../config/orm.js');

// call the orm functions using specific imput
let burger = {
    all: function (cb) {
        orm.all('burgers', function(res){
            cb(res);
        })
    },
    create: function (cols, vals, cb) {
        orm.create('burgers', cols, vals, function(res) {
            cb(res);
        })
    },
    update: function (objColVals, condition, cb) {
        orm.update('burgers', objColVals, condition, function(res){
            cb(res);
        })
    },
    delete: function (condition, cb) {
        orm.delete('burgers', condition, function(res){
            cb(res);
        })
    },

}
//export burger.js using module exports
module.exports = burger
