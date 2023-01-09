var seneca = require('seneca')();
var entity = require('seneca-entity');
var mongo = require('seneca-mongo-store');

var plugin = require('./trailplugin');
seneca.use(plugin);

seneca.use(entity);
seneca.quiet();

seneca.use(mongo, {
      name: 'jay_db',
      host: '127.0.0.1',
      port: 27017,
})


seneca.listen(3500,()=>{
      console.log("Seneca listening on port 3500...");
})


