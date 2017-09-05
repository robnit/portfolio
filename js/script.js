'use strict';

$('.tab:contains(Home)').on('click',function(event){
    (event).preventDefault();
    ('#projects').show();
    ('#about').hide();
})

$('.tab:contains=(About)').on('click',function(event){
    (event).preventDefault();
    ('#projects').hide();
    ('#about').show();
})