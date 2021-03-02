//### Task 1:
// Function takes an array and repeat it triple times
 const repeat = (arr) =>
  [].concat(...Array.from({ length: 3 }, () => arr));

console.log(repeat([1, 2, 3])); //[1,2,3,1,2,3,1,2,3]  


//### Task 2:
//Function that take a string and delete the vowels, 
// and make all leters lowercase except the first letter

reformat = (string) => {
    // delete the vowels
    var noVowel = string.replace(/[aeiou]/gi, '');
    
    // Make the first letter upperCase
    var str = noVowel.charAt(0).toUpperCase() + noVowel.slice(1);
    
    // Make the letters lowercase starting from the second one
    var result = str.charAt(0) + str.slice(1).toLowerCase();
    
    return result; 
}
console.log(reformat("liMeSHArp DeveLoper TEST") ); //"Lmshrp dvlpr tst"




//### Task 3
//Function that take a binary number as an arrey and return the next
//binary naumber without using any built in functions

next_binary_number = arr =>{
  
    const arrLength = arr.length; 
    var i;
    
    // Find first 0 from right side and loop
    for(i= arrLength-1; i >= 0; i--){
        
        // convert first 0 to 1 and break
        if (arr[i] == 0){ 
            arr[i] = 1; 
            break; 
        }
         // else convert 1 to 0 
        else{ 
            arr[i] = 0; 
        }    
    }

    // if the binary array contains only the set bits
    if (i < 0) { 
        arr = [1, ...arr]; 
    }
    //result of the next binary
    return arr; 
}

console.log(next_binary_number([1,0])); // [1,1]

