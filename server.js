'use strict';

const express = require( 'express' );
const app = express ();
const MYPORT = process.env.MYPORT || 3000;  //process.env returns object containing user environment

app.use( express.static('./public') );

app.get( '/', function( request,response ){
    response.sendFile( 'index.html', { root: './public' } );
});

app.listen(MYPORT, function() {
    console.log(`it's working! port is ${MYPORT}`)
});