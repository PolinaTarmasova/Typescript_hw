"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entities_1 = require("./entities");
var export_1 = require("./export");
var movie = new export_1.Movies();
movie.addNewMovie(entities_1.movieOne);
movie.addNewMovie(entities_1.movieTwo);
movie.addNewMovie(entities_1.movieThree);
movie.addNewMovie(entities_1.movieFour);
movie.addNewMovie(entities_1.movieFive);
movie.removeMovie(entities_1.movieThree);
movie.findMovie("Платфрма");
movie.findMovie("Исчезнувшая");
movie.findMovie("Пираты Карибского моря");
movie.findActor("Джонни Депп");
movie.findActor("Бен Аффлек");
movie.findActor("Милли Шапиро");
console.table(export_1.moviesArray);
