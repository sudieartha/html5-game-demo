define(function (require) {

    'use strict';

    var Firebase = require('firebase');

    var myFirebaseRef = new Firebase('https://html5-game-demo.firebaseio.com/players/');

    return myFirebaseRef;

});
