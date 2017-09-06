'use strict';

const express = require( 'express' ); //makes it so error is returned if express module is not found
const app = express ();
const PORT = process.env.PORT || 3000;

app.use( express.static('./public') );

app.get( '/', function( request,response ){
  response.sendFile( 'index.html', { root: './public' } );
});

app.listen(PORT, function() {
    console.log(`it's working! port is ${PORT}`)
  });