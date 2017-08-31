'use strict';

var allProjects = []; // eslint-disable-line

function Project (title, url, summary, imageUrl) { // eslint-disable-line
    title = this.title;
    url = this.url;
    summary = this.summary;
    imageUrl = this.imageUrl;
}

Project.prototype.toHtml = function() {
    var $newProject = $('section.template').clone();
    $newProject.removeClass('template');

    $newProject.find('.projectTitle').text('this.title)');
    $newProject.find('.projectUrl').attr('href', this.projectUrl);
    $newProject.find('.projectImage').attr('src', this.imageUrl);
    $newProject.find('.projectSummary').text(this.summary);

    return $newProject;
};

//Populate allProjects array
projects.forEach(function(x) { //eslint-disable-line
    allProjects.push(new Project(x));
});

//Append AllProjects to html
allProjects.forEach(function(x){
    $('#projects').append(x.toHtml());
});