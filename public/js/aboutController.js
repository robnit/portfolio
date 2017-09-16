'use strict';
var app = app || {};

(function(module) {
    const aboutController = {};
    aboutController.init = () => {
        console.log('about clicked');
        $('#projects').hide();
        $('#about').show();

        app.repos.requestRepos(app.repoView.index);

    }

    module.aboutController = aboutController;
})(app);