'use strict';
var app = app || {};

console.log('in routes.js');
page( '/about', app.aboutController.init );
page( '/', app.projectController.init );

page.start();