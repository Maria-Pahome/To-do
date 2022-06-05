function sayHi (){
    console.log('hello there ${name}');
    changeName();
    console.log('sayHi is finished');
}

function changeName() {
    name = 'Boby';
    console.log('we changed it to ${name}');
    console.log('changeName is finished');
}

// let name = "dev Ed";

// sayHi (); //it creates his own execution context

// console.log("we are done with this code");

// console.log(this); // a pointer which refers to an object 

// const user = {
//     name: "developed by ed",
// };

// const admin ={
//     name: "admin",
// };

// function yell() {
//     console.log(this.name.toUpperCase());
// };

// user.yell = yell;
// admin.yell= yell;

// user.yell();
// admin.yell();

// user.sayHi(); // the function gets set when the function is invoked

// const lists = document.querySelectorAll ("li");

// lists.forEach( li => {
//     li.addEventListener ("click", function() {
//         console.log(this);
//     });
// });

// const user = {
//     name: "developedbyed",
//     videos: ['html', 'css', 'js', 'react'],
//     greet (){
//         console.log(`Hello there ${this.name}`);
//         this.videos.forEach(video => {
//                 console.log(this);
//         });
//         //add function in here 
//         // const getVideos = () => {
//         //     console.log(`You currently have ${this.videos.length} videos`);
//         // };
//         // getVideos();
//     }
// };

// user.greet();

// const person = {
//     firstName: "Ed",
//     lastName: 'Developer',
//     getName(){
//         console.log(this.firstName + this.lastName);
//     }
// };

// person.getName();

// function registerUser(country, lang){
//     //add functionallity ..
//     this.getName();
//     console.log(`My country is ${country} and my language is ${lang}`);
// };

// registerUser.call(person, 'hungary', 'eng');
// // const register = registerUser.bind(person);
// // register('Hungary', 'en');

// registerUser.apply(person, ['romania', 'Rom']);

//CONSTRUCTOR FRUNCTION 

// function Todo (name,completed) {
//     this.name= name;
//     this.completed = completed;
// };
    
// Todo.prototype.getTodoName = function (){
//     console.log(this.name);
// };
// const todo = new Todo("buy mozarella", false);
// const todo2 = new Todo("grilled chesse", false);
// todo.getTodoName();
// console.log(todo, todo2);

// function Enemy(life, level, name){
//     this.life= life;
//     this.level= level;
//     this.name = name;
// }

// Enemy.prototype.getInfo = function (){
//     console.log(this.life, this.level, this.name);
// }

// Enemy.prototype.attack = function (){
//     console.log(`${this.name} has attacked!`);
// }

// Enemy.prototype.block = function (){
//     console.log(`${this.name} has blocked!`);
// }

// function Dragon(life, level, name, color, spell){      //to inherit the proporties above
//     //keyword this is refering to the Dragon Object 
//     Enemy.call(this, life, level, name);
//     //define it as normal
//     this.color = color;
//     this.spell = spell;
// }

// //INHERIT PROTOTYPE
// Dragon.prototype = Object.create(Enemy.prototype);

// Dragon.prototype.fireBreath = function(){
//     console.log("FIRE BREATHHHHH");
// }

// const newDragon = new Dragon(100, 23, "Drogon", "green", "fire");

// newDragon.getInfo();
// console.log(newDragon);

// class Enemy {
//     constructor(life, name, level) {
//         this.life = life;
//         this.name = name;
//         this.level = level;
//     }
//     getInfo(){
//         console.log(this.life, this.level, this.name);
//     }
// }

// class Bug extends Enemy {
//     constructor (life, name, level, legs, damg){
//         super(life,name,level);
//         //
//         this.legs = legs;
//         this.damg = damg;
//     }
// }

// const John = new Bug (10, 'Buggy', 1, 6, 10);
// console.log(John);
// John.getInfo();