import * as _ from "lodash";

let movies = ['Star Wars', 'The Empire Strikes Back', 'Return of the Jedi'];

for(let movie of movies) {
  console.log(_.snakeCase(movie));
}