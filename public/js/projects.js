'use strict';
var app = {};

( function(module){

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
        Project.allProjects = projectObject.map(function(a){
            return new Project(a);
        });
        // //Append AllProjects to html
        Project.allProjects.map(function(a){
            $('#projects').append(a.toHtml());
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

    module.Project = Project;

})(app);

// $(document).ready(function(){
//     Project.fetchAll();
// })
