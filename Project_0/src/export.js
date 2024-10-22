"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moviesArray = exports.Movies = void 0;
var moviesArray = [];
exports.moviesArray = moviesArray;
var Movies = /** @class */ (function () {
    function Movies() {
    }
    Movies.prototype.addNewMovie = function (movieObject) {
        var count = 0;
        for (var i = 0; i < moviesArray.length; i++) {
            if (moviesArray[i] == movieObject) {
                count++;
                console.log("Your movie is already in the movie library");
            }
        }
        if (count == 0) {
            moviesArray.push(movieObject);
            console.log("You've added a movie ".concat(movieObject.movieName, " part ").concat(movieObject.moviePart, " to the library"));
        }
    };
    Movies.prototype.removeMovie = function (movieObject) {
        var count = 0;
        for (var i = 0; i < moviesArray.length; i++) {
            if (moviesArray[i] == movieObject) {
                count++;
                moviesArray.splice(i, 1);
                console.log("You've remove a movie ".concat(movieObject.movieName, " part ").concat(movieObject.moviePart, " from the library"));
            }
        }
        if (count == 0) {
            console.log("Your movie is not in the movie library");
        }
    };
    Movies.prototype.findMovie = function (movieName) {
        var count = 0;
        for (var i = 0; i < moviesArray.length; i++) {
            if (moviesArray[i].movieName == movieName) {
                count++;
                console.log("The movie ".concat(movieName, " is found "), moviesArray[i]);
            }
        }
        if (count == 0) {
            console.log("Sorry, the movie ".concat(movieName, " was not found."));
        }
    };
    Movies.prototype.findActor = function (name) {
        var count = 0;
        for (var i = 0; i < moviesArray.length; i++) {
            for (var j = 0; j < moviesArray[i].movieActors.length; j++) {
                if (moviesArray[i].movieActors[j] == name) {
                    count++;
                    console.log("".concat(name, " played in the movie ").concat(moviesArray[i].movieName, " part ").concat(moviesArray[i].moviePart));
                }
            }
        }
        if (count == 0) {
            console.log("I'm sorry, ".concat(name, " hasn't acted anywhere"));
        }
    };
    return Movies;
}());
exports.Movies = Movies;
