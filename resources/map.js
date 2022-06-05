//MAP - COPY OF ONE ARRAY -LOOPS OVER EACH ONE ARRAY
const videos = [ 
    "pranking my sister",
    "how to javascript",
    "html tutorial",
    "learning the piano",
    "html basics",
    "css",
    "java",
    "programming",
    "ux/ui"
];

// const newVideos = videos.map(function(video) {
// //   return video.toUpperCase();
//     // if( video.length <10){
//     //     return video;
//     // }else {
//     //     return "nope";
//     // }

//     //shorter 

//     return video.length < 10 ? video: "nope";
// });

// console.log(newVideos);

// newVideos.push("HEYYY");

// console.log (newVideos);
// console.log (videos);

//FInd

// const searchTutorial = videos.find(function(video){
//     return video.includes("html basics");
// });

// // console.log(searchTutorial);

// const shortSearch = videos.filter(function(video){
//     return video.length<10;
// });

// console.log(shortSearch);

//AN ARRAY OF OBJECTS

const games = [
    {title: "Mass Efect" , rating: 9.5},
    {title: "League of legends", rating: 4},
    {title: "Last of us", rating: 10},
    {title: "God of War", rating: 10},
    {title: "WWE 2k20", rating: 5}
]

// const highRating = games.filter(function(game){
//     return game.rating>9;
// });

// //console.log(highRating);

// const checkRating = games.every(function(game){
//     return game.rating > 8;
// });

// const someRating = games.some(function(game){
//     return game.rating > 8;
// });

// // console.log(someRating);

// const sayHello = function (){
//     console.log("Hi");
// };

// sayHello();

//How we used to do it 
// const newVideos = videos.map(function(video) {
//     return video.length < 10 ? video: "nope";
// });

// const arrowVideos = videos.map( video =>{
//     return video.length < 10 ? video: "nope";
// }); //daca sterg {} , sterg si return pentru ca semnul => spune ca returneaza valoarea indicata

// const arrowVideos = videos.map(video => (video.length < 10 ? video: "nope"));

// const arrowVideos = videos.map(video => video.toUpperCase());

// console.log(arrowVideos);

// button.addEventListener ("click", event => {

// });

//SORT
const items = ["Banana", "Orange", "Apple", "Mango"]
const ratings = [92, 54, 32, 76, 88, 7 , 2, 44.5, 5, 90];

// ratings.sort(function(a,b){
//     return b - a; 
// });

//return negative a is sorted before b 
//positive -b is sorted before a
// if they are the same is 0 then nothing changes

// const filtred = ratings.sort ((a,b) => a - b); 

// console.log(ratings);

// games.sort((a,b) => b.rating - a.rating);
// console.log(games);

// const descRating = [...ratings];  //creaza o copie fara a modifa variabila initiala
// descRating.sort ((a,b) => b - a);

// const ascRating = [...ratings];
// ascRating.sort((a,b) => a-b);
// console.log(ascRating);

//poti si concatina

// const otherNames = ["John", "bovi", "Juvi"];

// // const allNames = names.concat(otherNames); //returneaza un nou array, fara a schimba array-ul principal
// // console.log(names);

// const allNames = ["this","is","ed",...otherNames];
// console.log(allNames);