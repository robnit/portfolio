'use strict';

const express = require( 'express' );
const app = express ();
const MYPORT = process.env.PORT || 3000;

app.use( express.static('./public') );

app.get( '/', function( request,response ){
    response.sendFile( 'index.html', { root: './public' } );
});

app.listen(MYPORT, function() {
    console.log(`it's working! port is ${MYPORT}`)
});

