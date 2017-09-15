'use strict';
var app = app || {};
console.log('in repo.js');
(function(module) {
    const repos = {};

    repos.all = [];

    repos.requestRepos = function(callback) {

        $.ajax({
            url: 'https://api.github.com/users/Robnit/repos',
            method: 'GET',
            header: {
                'Authorization': `token ${TOKEN}`
            }
        }).then( data => {
            repos.all= data;
            callback();

            console.log( 'Data:', data );
        })

    };
    
    repos.with = attr => repos.all.filter(repo => repo[attr]);

    module.repos = repos;
})(app);
