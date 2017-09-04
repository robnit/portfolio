'use strict';

var allProjects = []; // eslint-disable-line

function Project (object) { // eslint-disable-line
    this.title = object.title;
    this.url = object.url;
    this.summary = object.summary;
    this.imageUrl = object.imageUrl;
}

Project.prototype.toHtml = function() {
    
    let template = $('#project-template').html();
    let templateFiller = Handlebars.compile(template);
    let filledTemplate = templateFiller(this);
    
    return filledTemplate;
};

//Populate allProjects array
projectObject.forEach(function(x) { //eslint-disable-line
    // console.log(new Project(x));
    allProjects.push(new Project(x));
    // console.log(allProjects);
});

//Append AllProjects to html
allProjects.forEach(function(y) {
    $('#projects').append(y.toHtml());
});

