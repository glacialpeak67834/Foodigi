knex.schema.createTable('users', function(table) {  
    table.increments();
    table.string('nameFirst');
    table.string('nameLast');
    table.string('email', 128);
    table.string('password');
    table.timestamps();
});