let movies: string[] = ["Star Wars", "War Games", "Cars"];
console.log(`Number of favorite movies: ${movies.length}`);
console.log(movies);

let movie_set = new Set<string>(movies);
movie_set.add("Indiana Jones and the Temple of Doom");
movie_set.add("Jaws");

let me: Map<string, string | number> = new Map();
me.set("Name", "Brice");
me.set("Age", 50);
me.set("Title", "Software Developer");