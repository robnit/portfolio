'use strict';
var app = app || {};
(function(module) {
    const repoView = {};

    const ui = function() {
        let $about = $('#about');
        $about.find('ul').empty();
        $about.show().siblings().hide();
    };

    repoView.index = function() {
        // ui();
        var template = $( '#repo-template' ).html();
        var render = Handlebars.compile( template );

        $('#about').append(
            app.repos.with('name').map(render)
        );
    };

    module.repoView = repoView;
})(app);