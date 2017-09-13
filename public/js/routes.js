'use strict';
var app = app || {};

page( '/about', app.aboutController.init );
page( '/', app.projectController.init );

page.start();