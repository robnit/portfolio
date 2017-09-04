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

//Populate allProjects array
projectObject.forEach(function(x) { //eslint-disable-line
    Project.allProjects.push(new Project(x));
});

//Append AllProjects to html
Project.allProjects.forEach(function(y) {
    $('#projects').append(y.toHtml());
});

