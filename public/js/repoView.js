'use strict';
var app = app || {};
console.log('in repoView.js');

(function(module) {
    const repoView = {};

    const ui = function() {
        console.log('in ui');
        let $about = $('#about');
        $about.find('ul').empty();
        $about.show().siblings().hide();
    };

    repoView.index = function() {
        ui();
        console.log('after ui called');
        var template = $( '#repo-template' ).html();
        console.log('after template, before render');
        var render = Handlebars.compile( template );

        console.log('about to append');
        $('#about').append(
            app.repos.with('name').map(render)
        );
    };

    module.repoView = repoView;
})(app);