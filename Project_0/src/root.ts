import {movieOne, movieTwo, movieThree, movieFour, movieFive} from "./entities";
import {Movies, moviesArray} from "./export";

let movie:Movies = new Movies();
movie.addNewMovie(movieOne);
movie.addNewMovie(movieTwo);
movie.addNewMovie(movieThree);
movie.addNewMovie(movieFour);
movie.addNewMovie(movieFive);

movie.removeMovie(movieThree);

movie.findMovie("Платфрма");
movie.findMovie("Исчезнувшая");
movie.findMovie("Пираты Карибского моря");

movie.findActor("Джонни Депп");
movie.findActor("Бен Аффлек");
movie.findActor("Милли Шапиро");

console.table(moviesArray);





