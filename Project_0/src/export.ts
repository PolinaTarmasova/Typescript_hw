import {Movie} from "./entities";
let moviesArray:Movie[] = [];
class Movies{
    constructor() {
    }
    addNewMovie(movieObject:Movie){
        let count:number = 0;
        for (let i:number = 0; i < moviesArray.length; i++){
            if(moviesArray[i] == movieObject){
                count++;
                console.log(`Your movie is already in the movie library`);
            }
        }
        if(count == 0){
            moviesArray.push(movieObject);
            console.log(`You've added a movie ${movieObject.movieName} part ${movieObject.moviePart} to the library`);
        }
    }
    removeMovie(movieObject:Movie){
        let count:number = 0;
        for(let i:number = 0; i < moviesArray.length; i++){
            if(moviesArray[i] == movieObject){
                count++;
                moviesArray.splice(i, 1);
                console.log(`You've remove a movie ${movieObject.movieName} part ${movieObject.moviePart} from the library`);
            }
        }
        if(count == 0){
            console.log(`Your movie is not in the movie library`)
        }
    }
    findMovie(movieName:string){
        let count:number = 0;
        for(let i:number = 0; i < moviesArray.length; i++){
            if(moviesArray[i].movieName == movieName){
                count++;
                console.log(`The movie ${movieName} is found `, moviesArray[i]);
            }
        }
        if(count == 0){
            console.log(`Sorry, the movie ${movieName} was not found.`)
        }
    }
    findActor(name:string){
        let count:number = 0;
        for(let i:number = 0; i < moviesArray.length; i++){
            for(let j:number=0; j < moviesArray[i].movieActors.length; j++){
                if(moviesArray[i].movieActors[j] == name){
                    count++;
                    console.log(`${name} played in the movie ${moviesArray[i].movieName} part ${moviesArray[i].moviePart}`);
                }
            }
        }
        if(count == 0){
            console.log(`I'm sorry, ${name} hasn't acted anywhere`);
        }
    }
}

export {Movies, moviesArray};