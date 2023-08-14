function anotherSort(numbers) {
    // primer ciclo
    for(let i = 0; i < numbers.length; i++) {        
        // segundo ciclo
        for(let j = 0; j < numbers.length; j++) {            
            // validar si es mayor que
            if(numbers[i] < numbers[j]){
                // dado caso que si: cambiar la posicion      
                // pepito guardara el numero menor   
                let pepito = numbers[i];
                //  juan guardara el numero mayor
                let juan = numbers[j];                
                numbers[i] = juan;
                numbers[j] = pepito;
            }
        }
    }
    return numbers
}

console.log (anotherSort([5,4,3,2,1,0]));


function bubbleSort (arr) {
    const l = arr.length;
    // primer ciclo
    for (let i = 0; i < l; i++ ) {
        // segundo ciclo
      for (let j = 0; j < l - 1 - i; j++ ) {
        if ( arr[ j ] > arr[ j + 1 ] ) {
          [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
        }
      }
    }
    return arr;
  };
  
  const arr = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
  const result = bubbleSort(arr);
  
  console.log(result);