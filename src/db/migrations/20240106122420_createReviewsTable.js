exports.up = function(knex) {
    return knex.schema.createTable("reviews", (table) => {
      table.string("content");
      table.integer("score").unsigned().notNullable();
      table.integer("critic_id").unsigned().notNullable();
      table.foreign("critic_id").references("critic_id")
        .inTable("critics")
        .onDelete("CASCADE");;
      table.integer("movie_id").unsigned().notNullable();
      table.foreign("movie_id").references("movie_id")
        .inTable("Movies")
        .onDelete("CASCADE");;
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("reviews");
  };
  