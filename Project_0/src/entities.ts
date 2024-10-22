interface Movie {
    movieName:string;
    movieGenre:string;
    moviePart:number;
    movieActors:string[];
    movieReview ?:boolean;
}

let movieOne : Movie = {
    movieName: "Матрица",
    movieGenre: "боевик",
    moviePart: 2,
    movieActors: ["Киану Ривз", "Керри-Энн Мосс", "Хьюго Уивинг"],
}
let movieTwo : Movie = {
    movieName: "Терминатор",
    movieGenre: "боевик",
    moviePart: 2,
    movieActors: ["Арнольд Шварценеггер", "Линда Хэмилтон", "Роберт Патрик"],
    movieReview:true,
}
let movieThree : Movie = {
    movieName: "Платфрма",
    movieGenre: "триллер",
    moviePart: 1,
    movieActors: ["Иван Массаге", "Александра Масангкай", "Сорион Эгилеор"],
}
let movieFour:Movie = {
    movieName: "Реинкарнация",
    movieGenre: "ужасы",
    moviePart: 1,
    movieActors: ["Тони Коллетт", "Алекс Вулф", "Милли Шапиро"],
    movieReview:true,
}
let movieFive:Movie = {
    movieName: "Исчезнувшая",
    movieGenre: "триллер",
    moviePart: 1,
    movieActors: ["Розамунд Пайк", "Бен Аффлек"],
}

export {Movie, movieOne, movieTwo, movieThree, movieFour, movieFive};