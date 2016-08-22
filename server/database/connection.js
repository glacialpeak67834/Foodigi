// const mysql = require('mysql');
// const connect = function () {
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'sql'
// })
// console.log('on the way to connection');
// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function(err, rows, feilds){
//   if (err) throw err;
//   console.log('the solution is:', rows[0].solution);
// });
// connection.end();
// }




// var knex = require('knex')({
//   client: 'mysql',
//   connection: {
//     host     : 'localhost',
//     user     : 'root',
//     password : 'sql',
//     database : 'course',
//     charset  : 'utf8'
//   }
// });

// var bookshelf = require('bookshelf')(knex);

// var User = bookshelf.Model.extend({
//   tableName: 'users'
// });




var knex = require('knex')({client: 'mysql', connection: process.env.MYSQL_DATABASE_CONNECTION });
var bookshelf = require('bookshelf')(knex);

const connect = function () {

  var User = bookshelf.Model.extend({
    tableName: 'users',
    posts: function() {
      return this.hasMany(Posts);
    }
  });

  var Posts = bookshelf.Model.extend({
    tableName: 'messages',
    tags: function() {
      return this.belongsToMany(Tag);
    }
  });

  var Tag = bookshelf.Model.extend({
    tableName: 'tags'
  })

  User.where('id', 1).fetch({withRelated: ['posts.tags']}).then(function(user) {
    console.log(user.related('posts').toJSON());
  }).catch(function(err) {
    console.error(err);
  });
}
module.exports = connect;
