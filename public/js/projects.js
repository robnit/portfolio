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
        Project.loadAll( JSON.parse(localStorage.projectData) );
    } else {
        $.getJSON( 'data/projectData.json' )
            .done( function(data){
                console.log('success');
                localStorage.setItem('projectData', JSON.stringify( data ));
                Project.loadAll( data );
            })
    }
}

$(document).ready(function(){
    Project.fetchAll();
})
