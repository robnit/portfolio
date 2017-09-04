'use strict';

function Project (object) { // eslint-disable-line
    this.title = object.title;
    this.url = object.url;
    this.summary = object.summary;
    this.imageUrl = object.imageUrl;
}

Project.allProjects = [];

Project.prototype.toHtml = function() {
    let template = $('#project-template').html();
    let templateFiller = Handlebars.compile(template);
    return templateFiller(this);
};

Project.loadAll = function(projectObject){
    //Populate allProjects array
    projectObject.forEach(function(x) { //eslint-disable-line
        Project.allProjects.push(new Project(x));
    });

    //Append AllProjects to html
    Project.allProjects.forEach(function(y) {
        $('#projects').append(y.toHtml());
    });
}

Project.fetchAll = function() {
    if (localStorage.projectData) {
        // When projectData is already in localStorage,
        // we can load it with the .loadAll function above,
        // and then render the index page (using the proper method on the articleView object).
        Project.loadAll( JSON.parse(localStorage.projectData) ); //DONE TODO: What do we pass in to loadAll()?
    } else {
        $.getJSON( 'data/projectData.json' )
            .done( function(data){
                console.log('success');
                localStorage.setItem('projectData', JSON.stringify( data ));
                Project.loadAll( data );
            })
        // DONE TODO: When we don't already have the rawData,
        // we need to retrieve the JSON file from the server with AJAX (which jQuery method is best for this?),
        // cache it in localStorage so we can skip the server call next time,
        // then load all the data into Project.all with the .loadAll function above,
        // and then render the index page.
    }
}
$(document).ready(function(){
    Project.fetchAll();


})
