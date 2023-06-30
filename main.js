
/*var nombre = "Victor robles"; // --> string "cadena de caracteres"
var altura = 169; // --> number "numero"
console.log(typeof nombre) // string
console.log(typeof altura) // number

var concatenacion = nombre +" " + altura;

var datos= document.getElementById("datos");
datos.innerHTML = `
    <h1> soy la caja de datos </h1>
    <h2> mi nombre es: ${nombre} </h2>
    <h3>mido: ${altura} cm </h3>
`;

if (altura >= 190) {
 datos.innerHTML += `<h1> eres una persona alta </h1>`   
}else{
 datos.innerHTML += `<h1> eres una persona bajita </h1>`  
}

for (var i = 2010; i <= 2020; i++) { 
    //bloque de instrucciones
    const dataTitle = document.createElement("h2") // creamos el elemento hijo con la etiqueta h2
    dataTitle.innerText = `estamos en el año ${i}` //
   datos.innerHTML += dataTitle;
    
}

function muestraminombre(nombre, altura) {
    var datos= document.getElementById("datos");
    datos.innerHTML = `
        <h1> soy la caja de datos </h1>
        <h2> mi nombre es: ${nombre} </h2>
        <h3>mido: ${altura} cm </h3>
    `;  
}
console.log(typeof muestraminombre) // --> function
// muestraminombre("yensy muñoz", 173);

var nombres =['william','hassan', 'hector'];
alert (nombres[1]);

function show(id) {
    alert(id)
} 
*/

function alertImagen () {
    alert ("id: profile_photo")
}

