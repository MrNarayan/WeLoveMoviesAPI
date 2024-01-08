const db = require("../db/connection");

async function list(is_showing) {
  return db("movies")
    .select("movies.*")
    .modify((queryBuilder) => {
      if (is_showing) {
        queryBuilder
          .join(
            "movies_theaters",
            "movies.movie_id",
            "movies_theaters.movie_id"
          )
          .where({ "movies_theaters.is_showing": true })
          .groupBy("movies.movie_id");
      }
    });
}

async function read(movie_id) {
  // TODO: Add your code here
  
}


function create(post) {
  //your solution here
  return knex("posts")
    .insert(post)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
}

module.exports = {
  list,
  read,
};
