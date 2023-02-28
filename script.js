console.log("conectado");

//variables
let user; //declaracion
user="Marissa";//asignacion

console.log("user"); // user

user="ivan"; //string
user=99; //number
user=true; //boolean

let estudiante="francisco";
let edad= 30;
let esActivo= true;

//resolver:crear un estudiante

let estudiante2 = "Ana";
let edad2 = 35;
let esActivo2= false;



document.write(´
<div class="container">
    <p> class=> Nombre: ${estudiante} </p>
    <p> Edad: ${edad} </p>
    <p> Status: ${esActivo} </p>
</div>    
´);
document.write(estudiante2,edad2,esActivo2);

// crear 30 variables y desplegarlas en HTML