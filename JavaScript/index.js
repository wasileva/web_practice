
//------------------1--------------------
let age = 21;
let firstName = "Olga";
let student = true;
document.getElementById("p1").innerHTML = "Hello  " + firstName + " !!!";
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;

//------------------2--------------------
let q = 3.14;
let w = 5;
let r = 9;
let maximum;
let minimum;
/*
q = Math.round(3.14);
q = Math.abs(q);
q = Math.sqrt(q);
q = Math.pow(q);
q = Math.floor(q);
q = Math.ceil(q);
*/
maximum = Math.max(q, w, r);
minimum = Math.min(q, w, r);
//console.log(Math.PI);

//------------------3--------------------
age += 2;
//console.log(age);
age *= 2;
//console.log(age);
age -= 4;
//console.log(age);
age /= 5;
//console.log(age);

//------------------4--------------------
let username;
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("lname").innerHTML = "Welcome " + username;
    console.log("Hello ", username);
}

//------------------5--------------------
let x = Number("3.14");
let y = String(45);
let z = Boolean("");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

//------------------6--------------------
const PI = 3.14159;
let radius;
let curcumference;
//radius = window.prompt("Please enter a radius of the circle");
radius = Number(radius);

curcumference = 2 * PI * radius;

//console.log("curcumference is", curcumference);

//------------------7--------------------
let sideA;
let sideB;
let sideC;

document.getElementById("submit").onclick = function(){
    sideA = Number(document.getElementById("aInput").value);
    sideB = Number(document.getElementById("bInput").value);
    sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
    document.getElementById("cLabel").innerHTML = "side C: " + sideC;
}

//------------------8--------------------
let countNumber = 0;
document.getElementById("decreaseBtn").onclick = function(){
    countNumber -= 1;
    document.getElementById("counter").innerHTML = countNumber;
}
document.getElementById("increaseBtn").onclick = function(){
    countNumber += 1;
    document.getElementById("counter").innerHTML = countNumber;
}
document.getElementById("resetBtn").onclick = function(){
    countNumber = 0;
    document.getElementById("counter").innerHTML = countNumber;
}

//------------------9--------------------
document.getElementById("rollBtn").onclick = function(){
    document.getElementById("xLabel").innerHTML = Math.floor(Math.random()*6)+1;
    document.getElementById("yLabel").innerHTML = Math.floor(Math.random()*6)+1;
    document.getElementById("zLabel").innerHTML = Math.floor(Math.random()*6)+1;
}

//------------------10-------------------
let myName = "OlgaVasileva";
let myPhoneNumber = "123-456-7890";

//console.log(myName.length);
//console.log(myName.charAt(4));
//console.log(myName.indexOf('V'));
//console.log(myName.lastIndexOf('a'));
//console.log(myName.toUpperCase());
//console.log(myName.toLowerCase());
//console.log(myName.trim());
console.log(myPhoneNumber.replaceAll('-', '/'));

//------------------11-------------------

let fullName = "Olga Vasileva";
let fName = fullName.slice(0, fullName.indexOf(" "));
let lName = fullName.slice(fullName.indexOf(" ")+1);

console.log(fName);
console.log(lName);

//------------------12-------------------

console.log(fName.charAt(0).toLowerCase().trim());
//------------------13-------------------

let personAge = -1;

if (personAge >= 65){
    console.log("You are senior citizen");
} else if (personAge >= 18){
    console.log("You are an adult!");
} else if (personAge <= 0){
    console.log("You HAVEN'T BEEN BORN YET");
} else {
    console.log("You are a child");
}

//------------------14-------------------

document.getElementById("subscribeBtn").onclick = function(){
    if (document.getElementById("subscribeCheckBox").checked){
        console.log("You are subscribed");
    } else {
        console.log("You are NOT subscribed");
    }
}

document.getElementById("paymentBtn").onclick = function(){
    if (document.getElementById("visa").checked){
        console.log("You are paying with visa");
    } else if (document.getElementById("mastercard").checked){
        console.log("You are paying with mastercard");
    } else if (document.getElementById("paypal").checked){
        console.log("You are paying with paypal");
    } else {
        console.log("Plase select method of payment");
    }
}

//------------------15-------------------

let grade = "A";

switch(grade){
    case "A":
        console.log("You did great!");
        break;
    case "B":
        console.log("You did good!");
        break;
    case "C":
        console.log("You did Okay");
        break;
    case "D":
        console.log("You passed");
        break;
    case "F":
        console.log("You FAILED");
        break;
    default:
        console.log(grade, " is not a letter grade");
}

let gradeNum = 80;

switch(true){
    case gradeNum>=90:
        console.log("You did great!");
        break;
    case gradeNum>=80:
        console.log("You did good!");
        break;
    case gradeNum>=70:
        console.log("You did Okay");
        break;
    case gradeNum>=60:
        console.log("You passed");
        break;
    case gradeNum>=50:
        console.log("You FAILED");
        break;
    default:
        console.log(grade, " is not a letter grade");
}

//------------------17-------------------
if (false==0){
    console.log("false==0 is TRUE");
} 

if (false===0){
    console.log("false===0 is TRUE");
} else {
    console.log("false===0 is FALSE");
}

if ("3.14"==3.14){
    console.log(" '3.14'==3.14 is TRUE");
}

if ("3.14"===3.14){
    console.log(" '3.14'===3.14 is TRUE");
} else{
    console.log(" '3.14'===3.14 is FALSE");
}

//------------------18-------------------

for(let i = 0; i<=10; i+=1){
    console.log(i);
}

//------------------19-------------------
for(let i = 0; i<=5; i+=1){
    if (i==3){
        break;
    }
    console.log(i);
}
for(let i = 0; i<=5; i+=1){
    if (i==3){
        continue;
    }
    console.log(i);
}
//------------------20-------------------
let row;
let column
document.getElementById("RectangleBtn").onclick = function(){
     row = document.getElementById("row").value;
     column = document.getElementById("column").value;
     printRowColumn(row,column);
     
}

function printRowColumn(row,column){
    for(let i=0; i<row; i+=1){
        for(let j=0; j<column;j++){
            document.getElementById("rectangleLabel").innerHTML += "*";
        }
        document.getElementById("rectangleLabel").innerHTML += "<br>";
    }
}

//------------------21-------------------
let width = 5;
let height = 8;
let area = getArea(width, height);

console.log("The area is", area);

function getArea(width, height){
    return width*height;
}

//------------------22-------------------
let uName = "Olga Vasileva";
let items = 3;
let total = 75;

let text = `Hello ${uName}<br>
            You have ${items} in your cart<br>
            Your total is $${total}`

document.getElementById("myLabel").innerHTML = text;          

//------------------23-------------------

let myNum = 100;

//myNum = myNum.toLocaleString("en-US");
//myNum = myNum.toLocaleString("hi-IN");
//myNum = myNum.toLocaleString("ru-RU");

//myNum = myNum.toLocaleString("ru-RU", {style:"currency", currency:"RUB"});
//myNum = myNum.toLocaleString("en-US", {style:"currency", currency:"USD"});
//myNum = myNum.toLocaleString("hi-IN", {style:"currency", currency:"INR"});

//myNum = myNum.toLocaleString(undefined, {style:"percent"});

myNum = myNum.toLocaleString(undefined, {style:"unit", unit: "celsius"});

console.log(myNum);

//------------------24-------------------

let answer = Math.floor(Math.random()*10+1);
let guesses = 0;

document.getElementById("guessBtn").onclick = function(){
    let guess = document.getElementById("guessGame").value;
    guesses+=1;
    if (guess == answer){
        alert(`${answer} is a number. It took you ${guesses} guesses`);
    }else if(guess < answer){
        alert("Too small!");
    } else {
        alert("Too large!");
    }
}

//------------------25-------------------


document.getElementById("tempBtn").onclick = function(){
    let currentTemp = document.getElementById("tempInput").value;
    if(document.getElementById("celsius").checked){  
        document.getElementById("tempLabel").innerHTML = toCelsius(currentTemp) + "°C";
    } else if(document.getElementById("fahrenheit").checked){
        document.getElementById("tempLabel").innerHTML = toFahrenheit(currentTemp) + "°F";
    } else {
        document.getElementById("tempLabel").innerHTML = "Select a unit";
    }
}

function toCelsius(temp){
    return (temp - 32)*(5/9);
}

function toFahrenheit(temp){
    return temp*9/5 + 32;
}

//------------------26-------------------

let fruits = ["apple", "orange", "banana"];

fruits.push("lemon");
fruits.pop();
fruits.unshift("mango");
fruits.shift();

let length = fruits.length;
let index = fruits.indexOf("orange");

console.log(fruits);

//------------------27-------------------

let prices = [5, 10, 15, 20, 25];

for(let i = prices.length-1; i >= 0; i -= 1){
    console.log(prices[i]);
}

for(let price of prices){
    console.log(price);
}

//------------------28-------------------

let tastyFruits = ["mango", "apple", "orange", "banana"];

tastyFruits = tastyFruits.sort().reverse();

for(let fr of tastyFruits){
    console.log(fr);
}

//------------------29-------------------

let numbers = [3, 5, 1, 5, 7, 9, 0, 4];
let maxm = Math.max(...numbers);
console.log(maxm);

let array1 = ["A", "B", "C", "D"];
let array2 = ["1", "2", "3", "4"];

array1.push(...array2);
console.log(array1);

//------------------30-------------------

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a,b,c,d,e));

function sum(...nums){
    let total = 0;
    for (let number of nums){
        total+=number;
    }
    return total;
}

//------------------31-------------------

resultSum(2,3,displaySum);

function resultSum(x,y,callBack){
    let result = x+y;
    callBack(result);
}
function displaySum(numeric){
    console.log(numeric);
}

//------------------32-------------------

let eachArray = ["spongebob", "patrick", "roy"];
eachArray.forEach(capitilize);
eachArray.forEach(printNames)

function capitilize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function printNames(element){
    console.log(element);
}
//------------------33-------------------

let chisla = [1, 2, 3, 4, 5, 6]; 
let squares = chisla.map(square);
let cubes = chisla.map(cube);

cubes.forEach(print);

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}


function print(element){
    console.log(element);
}

//------------------34-------------------

let studentAges = [17 , 14, 90, 21, 25, 27, 18, 15, 16];

let filterArray = studentAges.filter(checkAge);
filterArray.forEach(print);

function checkAge(element){
    return element >= 18;
}

//------------------35-------------------

let groceryPrices = [5, 10, 15, 20, 35, -2];

let totalPrice = groceryPrices.reduce(checkOut);
console.log(`Total price is $${totalPrice}`);

function checkOut(totalValue, element){
    return totalValue + element;
}

//------------------36-------------------

let marks = [30, 100, 20, 40, 70, 60, 80];
marks.sort(ascendingOrder);
marks.forEach(print);

//marks.sort((x,y) => y-x);
//marks.forEach((element)=>console.log(element));

function descendingOrder(x, y){
    return y-x;
}

function ascendingOrder(x, y){
    return x-y;
}

//------------------37-------------------
/*
    const greeting = function(){
        console.log("Test");
    }
    greeting();
*/

const greeting = (usName, surname)=>{
    console.log(`Hello ${usName} ${surname}`);
}

greeting("Olga", "Vasileva");

//------------------38-------------------

let deck = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

shuffle(deck);
deck.forEach(card => console.log(card));

function shuffle(array){
    let currentIndex = array.length;
    while(currentIndex != 0){
        let randomIndex = Math.floor(Math.random()*array.length);
        currentIndex-=1;

        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
}

//------------------39-------------------

let userN = "Olga";
let inboxMessages = 2;
login();

function login(){
    displayUserName();
    displayMessages();

    function displayUserName(){
        console.log(`Hello ${userN}`);
    }

    function displayMessages(){
        console.log(`You have ${inboxMessages} new messages`);
    }
}

//------------------40-------------------

document.getElementById("login").onclick = signin();

function signin(){
    let a = "Vasileva";
    let mes = 9;
    function showMessages(){
        console.log(`Hello ${a} you have ${mes} new messages`);
        mes = 0;
    }
    return showMessages;
}

//------------------41-------------------

const store = new Map([
    ["t-shirt", 50],
    ["skirt", 30],
    ["short", 10],
    ["hat", 45],
    ["dress", 155],
]);


console.log(store.get("skirt"));
store.set("coat", 1000);
store.delete("coat");
console.log(store.has("undewear"));
console.log(store.size);
store.forEach((value, key)=>console.log(`${key} $${value}`));

//------------------42-------------------
//Object
const car = {
    make: "Nissan",
    model: "Altima",
    color: "black",

    drive : function(){
        console.log(`You drive the car ${this.make}`)
    },

    brake : function(){
        console.log(`You step on brakes`)
    }
}

console.log(`${car.make} ${car.model} ${car.color}`);
car.drive();
car.brake();

//------------------43-------------------

class Player{
    score = 0;

    play(){
        console.log("You RUN the game");
    }

    exit(){
        console.log("You EXITED the game");
    }
}

let player1 = new Player();
player1.score += 1;
console.log(player1.score);
player1.play();
player1.exit();

//------------------44-------------------

class Student{
    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study(){
        console.log(`${this.name} is studing`);
    }
}

let student1 = new Student("Jeniffer", 23, 5,0);
console.log(`${student1.name} ${student1.age} ${student1.gpa}`);
student1.study();

//------------------45-------------------

class Car{

    static numberOfCars = 0;

    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }

    static startRace(){
        console.log("3..2..1..GO!");
    }
}

let car1 = new Car("Mustang");
let car2 = new Car("Corvette");
let car3 = new Car("BMW");

console.log(Car.numberOfCars);
Car.startRace();

//------------------46-------------------

class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }

    move(){

    }
}

class Rabbit extends Animal{
    name = "rabbit";
    move(){
        console.log(`${this.name} is running`);
    }
}

class Fish extends Animal{
    name = "fish";
    move(){
        console.log(`${this.name} is swimming`);
    }
}

class Hawk extends Animal{
    name = "hawk";
    move(){
        console.log(`${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

const animal = [rabbit, fish, hawk];

animal.forEach((element) =>{
    element.eat();
    element.sleep();
    element.move();
    console.log("alive = ", element.alive);
})


//------------------47-------------------
class Shape{
    constructor(shapeName){
        this.shapeName = shapeName;
    }
}

class Oval extends Shape{
    constructor(shapeName, area){
        super(shapeName);
        this.area = area;
    }
}

class A{

}

class Hexagon extends A{
    constructor(edge, area){
        super();
        this.edge = edge;
        this.area = area;
    }
}
const hexagon = new Hexagon("6", 45);
const oval = new Oval("Oval", 60);
console.log(`${oval.shapeName}  ${oval.area}`);

//------------------48-------------------

class Machine{
    constructor(power){
        this._power = power;
        this._gas = 25;
    }

    get power(){
        return `${this._power} hp`;
    }

    get gas(){
        return `${this._gas}L (${this._gas/50 * 100}%)`;
    }

    set gas(value){
        if (value > 50){
            value = 50;
        } else if(value < 0){
            value = 0;
        }
        this._gas = value;
    }
}

const machine = new Machine(40);
machine.gas = 20;
console.log(machine.gas);
console.log(machine.power);

//------------------49-------------------

try{
    //let x = window.prompt("Enter a number #");
    let x = 0;
    x = Number(x);
    if (isNan(x)) throw "That wasn't a number";
    if (x == "") throw "That was empty!";
} catch(error){
    console.log(error);
}
finally{
    console.log("This always executes");
}

//------------------50-------------------

let sumup = 0;
//let up = window.prompt("Count up to what # ?");
let up = 0;
up = Number(up);
let n = "candy";
const myTimer = setInterval(countUp, 1000, n);

function countUp(n){
   // sumup += 1;
  //  console.log(sumup + " " + n);
    if (sumup >= up){
        clearInterval(myTimer);
    }
}

//------------------51-------------------

let date = new Date();
let year =  date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
date = date.toLocaleDateString("ru-Ru");
console.log(date);

//------------------52-------------------

let clockLabel = document.getElementById("clock");
setInterval(update, 1000);

function update(){
    let date1 = new Date();
    clockLabel.innerHTML = formatTime(date1);

    function formatTime(date){
        let hours = date.getHours();
        let minutes = formatZeroes(date.getMinutes());
        let seconds = formatZeroes(date.getSeconds());
        let amOrPm = hours >= 12 ? "pm" : "am";

        hours = (hours % 12) || 12;
        hours = formatZeroes(hours);
        return `${hours}:${minutes}:${seconds} ${amOrPm}`;     
    }

    function formatZeroes(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}

//------------------53-------------------

let promise = new Promise((resolve, reject) => {
    let fileLoader = true;
    if (fileLoader){
        resolve("File loaded");
    }else {
        reject("File NOT loaded");
    }
});

promise.then(result => console.log(result)).
        catch(error => console.log(error));

//--->
let wait = waitingTime => new Promise((resolve) => {
    setTimeout(resolve, waitingTime);
});

wait(5000).then(() => console.log("Thank you for waiting"));

//------------------54-------------------

async function loadFile1(){
    let loader = true;
    if (loader){
        return "File loaded!!!!";
    }else {
        throw "File NOT loaded";
    }
}

loadFile1().then(result => console.log(result)).
        catch(error => console.log(error));

//------------------55-------------------
//async - makes a function return a Promise
//await - makes a function wait for a Promise



async function loadFile(){
    let promise = new Promise((resolve, reject) => {
        let fileLoader = true;
        if (fileLoader){
            resolve("File loaded");
        }else {
            reject("File NOT loaded");
        }
    });

    try{
        document.getElementById("myH2").innerHTML = await promise;
    }catch(error){
        document.getElementById("myH2").innerHTML = await error;
    }
}

loadFile();

//------------------56-------------------

//import {PI1, getCurcumference1, getArea1} from "./math_util.js";
import * as MathUtil from "./math_util.js";
console.log(MathUtil.PI1);
console.log(MathUtil.getCurcumference1(5));
console.log(MathUtil.getArea1(7));

//------------------57-------------------
/*
console.dir(document.body);
console.log(document.title);
console.log(document.URL);
document.body.style.backgroundColor = "lightblue";
*/

//------------------58-------------------

let testRadio = document.getElementsByName("temp");
testRadio.forEach((el) => {
    if(el.checked){
        console.log(el.value);
    }
});

let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor = "lightblue";

document.getElementsByClassName("desserts");

document.querySelector("[for]");

//------------------59-------------------

let element = document.querySelector("#vegetables");
let children = Array.from(element.children);
children.forEach((child)=>child.style.backgroundColor = "lightgreen");

/*
    element.firstElementChild
    element.lastElementChild
    element.parentElement
    element.nextElementSibling
    element.previousElementSibling
    element.children[0] 
    Array.from(.children)
*/

//------------------60-------------------

const nameTag1 = document.createElement("h1");
nameTag1.textContent = "Vas";
document.body.append(nameTag1);

const myList = document.querySelector("#vegetables");
const listItem = document.createElement("li");
listItem.textContent = "carrot";
//myList.append(listItem);
//myList.prepend(listItem);
myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);

//------------------61-------------------
/*
    element.onclick
    element.onload
    element.onchange
    element.onmouseover
    element.onmouseout
    element.onmousedown
    element.onmouseup
*/

//------------------62-------------------

let innerDiv = document.getElementById("innerDiv");
let outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", changeBlack,);
outerDiv.addEventListener("click", changeBlack, true);

function changeBlack(){
    this.style.backgroundColor = "black";
}

/*
    innerDiv.addEventListener("mouseout", changeGreen);
    innerDiv.addEventListener("mouseover", changeRed);

    function changeGreen(){
        innerDiv.style.backgroundColor = "lightgreen";
    }

    function changeRed(){
        innerDiv.style.backgroundColor = "red";
    }
*/

//------------------63-------------------

const toggleBtn = document.querySelector("#btn");
const img = document.querySelector("#myImg");

toggleBtn.addEventListener("click", () => {
    if (img.style.display == "none"){
        img.style.display = "block";
    }else {
        img.style.display = "none";
    }
});
/*
    toggleBtn.addEventListener("click", () => {
        if (img.style.visibility == "hidden"){
            img.style.visibility = "visible";
        }else {
            img.style.visibility = "hidden";
        }
    });
*/

//------------------64-------------------

const myDiv = document.querySelector("#myDiv");
window.addEventListener("keydown", move);

let x1 = 0;
let y1 = 0;

function move(event){
    switch(event.key){
        case "ArrowDown":
            y1+=5;
            myDiv.style.top = y1 + "px";
            break;  
        case "ArrowUp":
            y1-=5;
            myDiv.style.top = y1 + "px";
            break;
        case "ArrowLeft":
            x1-=5;
            myDiv.style.left = x1 + "px";
            break;
        case "ArrowRight":
            x1+=5;
            myDiv.style.left = x1 + "px";
            break;     
        default: break;     
    }
}

//------------------65-------------------

const beginBtn = document.getElementById("beginBtn");
const myAnimation = document.getElementById("mySquare");

beginBtn.addEventListener("click", begin);



function begin(){
    let timerId = null;
    let degrees = 0;
    let x2 = 0;
    let y2 = 0;

    timerId = setInterval(frame, 5);

    function frame(){
        if (x2 >= 200 || y2 >= 200){
            clearInterval(timerId);
        } else{
            degrees+=4;
            x2+=1;
            y2+=1;
            myAnimation.style.left = x2 + "px";
            myAnimation.style.top = y2 + "px";
            myAnimation.style.transform = "rotateZ("+degrees+"deg)";
        }
    }
}

//------------------66-------------------

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

/*
    //Draw lines

    context.strokeStyle = "purple";
    context.lineWidth = 10;
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(250,250);
    context.lineTo(250,500);
    context.moveTo(500,0);
    context.lineTo(250,250);
    context.stroke();
*/

/*
    //Draw triangle

    context.beginPath();
    context.strokeStyle = "green";
    context.fillStyle = "yellow";
    context.lineWidth = 5;
    context.moveTo(250, 0);
    context.lineTo(0, 250);
    context.lineTo(500, 250);
    context.lineTo(250, 0);
    context.stroke();
    context.fill();
*/

/*
    //DRAW RECTANGLE

    context.fillStyle = "lightgreen";
    context.strokeStyle = "black";
    context.fillRect(0, 0, 250, 250);
    context.strokeRect(0, 0, 250, 250);

*/

/*
    //DRAW CIRCLE

    //(x, y, r, sAngle, eAngle, counterclockwise)

    context.fillStyle = "red";
    context.strokeStyle = "purple";
    context.lineWidth = 10;
    context.beginPath();
    context.arc(250, 250, 200, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
*/

//DRAW TEXT

context.font = "50px Times New Roman";
context.fillStyle = "pink";
context.textAlign = "center";
context.fillText("YOU are the best!", canvas.width / 2, canvas.height / 2);


//------------------67-------------------

let btn = document.getElementById("winBtn");

console.dir(window);
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.scrollX);
console.log(window.scrollY);

//console.log(window.location.href);
//window.location.href="https://www.google.com";
//console.log(window.location.hostname);
//console.log(window.location.pathname);

//btn.addEventListener("click",() => window.open("https://www.google.com"));
//btn.addEventListener("click",() => window.close());
btn.addEventListener("click",() => window.print());

//window.alert("Hello");
//window.confirm("Press OK if you are agree");
/*
    let yourAge = window.prompt("Enter your age");
    if (yourAge < 18){
        window.alert("Ypu must be 18+ to visit this site");
        window.close();
    }
*/

//------------------68-------------------

//Cookie

let fName1 = document.getElementById("fName");
let lName1 = document.getElementById("lName");
let sbmCookieBtn = document.getElementById("sbmCookieBtn");
let getCookieBtn = document.getElementById("getCookieBtn");

sbmCookieBtn.addEventListener("click", () => {
    setCookie("firstName", fName1.value, 30);
    setCookie("lastName", lName1.value, 30);
});

getCookieBtn.addEventListener("click", () => {
    fName1.value = getCookie("firstName");
    lName1.value = getCookie("lastName");
});

function setCookie(name, value, daysToLive){
    let date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}

function deleteCookie(name){
    setCookie(name, null, null);
}

function getCookie(name){
    let cDecoded = decodeURIComponent(document.cookie);
    let cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach((element) => { 
        if (element.indexOf(name) == 0){
            result = element.substring(name.length + 1);
        }
    });
    return result;
}

