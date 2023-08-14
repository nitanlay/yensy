function showLetterOfString(string) {
    // tiene que iterar la letra del texto y mostrar el caracter, tip: el arreglo y el string comparten la propiedad .length
    // tip: un string se puede iterar de la misma forma que un arreglo
    let x=""
    for (let letter in string) {
        x += letter !== string.length - 1 && string[letter] + ", ";        
    }
    return x;
}
function compareTheNames(name1, name2) {
    // mostrar verdadero o falso ya sea el caso de que los nombres sean iguales
    return name1 === name2
}

function showjustVocals(text) {
    // iterar en el texto y mostrar unicamente las vocales, ejemplo: "Hola" -> o, a
    let vowels = "";
    for (let vowel of text) {
        // console.log (vowel);
        if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u") {
            // console.log(vowel);
            vowels = vowels + vowel;
        }
        // if(vowel === "a") vowels+=vowel;
        // else if(vowel === "e") vowels+=vowel
    }
    return vowels;
}

console.log(showLetterOfString("pepito leyendo el pais de las maravillas"));
console.log(compareTheNames("juan", "juan")); //debe mandar true
console.log(compareTheNames("Juan", "juan")); // debe mandar false
console.log(showjustVocals("texto de prueba"));
console.log(showjustVocals("otro texto de prueba"));


