//1
var hello = 'world'; 
console.log(hello); //En princio, imprimia en consola un valor indefinido dado que no estabamos definiendo la variable

//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);// Imprimira en consola el valor de la variable needle (magnet)
}

//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); // Imprimira el valor de la variable brendan (super cool)

//4
var food = 'chicken';
console.log(food); // Imprimira el valor de la variable food (chicken)
eat();
function eat(){
    food = 'half-chicken';
    console.log(food); // Imprimira el valor de la variable food (half-chicken)
    var food = 'gone';
}

//5
console.log(food); // Imprimira el valor de la variable food (chicken)
var mean = function() {
    food = "chicken";
    console.log(food); // Imprimira el valor de la variable food (chicken)
    var food = "fish";
    console.log(food); // Imprimira el valor de la variable food (fish)
}
mean(); // En un princio obtendra un error , dado que la funcion aun no esta definida 
console.log(food);// Imprimira el valor de la variable food (chicken)

//6
var genre = "disco";
console.log(genre); // En un princio imprimiera indefinido, pero luego de la correcion imprimira el valor de genre (disco)
function rewind() {
    genre = "rock";
    console.log(genre);// Imprimira el valor de la variable genre (rock)
    var genre = "r&b";
    console.log(genre);// Imprimira el valor de la variable genre (r&b)
}
rewind();// En un princio obtendra un error , dado que la funcion aun no esta definida 
console.log(genre);// Imprimira el valor de la variable genre (disco)

//7
dojo = "san jose";
console.log(dojo);// Imprimira el valor de la variable dojo (san jose)
function learn() {
    dojo = "seattle";
    console.log(dojo);// Imprimira el valor de la variable dojo (seattle)
    var dojo = "burbank";
    console.log(dojo);// Imprimira el valor de la variable dojo (burbank)
}
learn(); // En un princio obtendra un error , dado que la funcion aun no esta definida 
console.log(dojo);// Imprimira el valor de la variable dojo (san jose)

//8
function makeDojo(name, students){
    let dojo = {}; // al cumplise la condicion else if dara un error, para la cual cambiamos el tipo de variable de una const a un let para arreglar error. 
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo; 
}
console.log(makeDojo("Chicago", 65)); // En un princio obtendra un error , dado que la funcion aun no esta definida, despues de corregir el error imprime el valor del objeto dojo  name : Chicago , students : 65 ,  hiring: true 
console.log(makeDojo("Berkeley", 0)); // En un princio obtendra un error , dado que la funcion aun no esta definida , despues de corregir el error imprime en pantalla closed for now