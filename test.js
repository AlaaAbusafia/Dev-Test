
reformat = (string) =>{
    
    var noVowel = string.replace(/[aeiou]/gi, '');
    var str = noVowel.charAt(0).toUpperCase() + noVowel.slice(1);
    var result = str.charAt(0) + str.slice(1).toLowerCase();
    return result;
    
}


 const repeat = (arr) =>
  [].concat(...Array.from({ length: 3 }, () => arr));
  
console.log(repeat([1, 2, 3]));


next_binary_number = arr =>{
  
    const arrLength = arr.length; 
    var i;
  
    for(i= arrLength-1; i >= 0; i--){
        
        if (arr[i] == 0){ 
            arr[i] = 1; 
            break; 

        }
        else{ 
            arr[i] = 0; 
        }    
    }

    if (i < 0) { 
        arr = [1, ...arr]; 
    } 
    return arr; 
}




next_binary_number = arr =>{
  
    const arrLength = arr.length; 
    var i;

    for(i= arrLength-1; i >= 0; i--){
        
        if (arr[i] == 0){ 
            arr[i] = 1; 
            
            break; 
  
       
        }else{ 
            arr[i] = 0; 
  
        }
    arr.map(function increment(arr) {
      return arr + 1;
    });
    }
    
if (i < 0) { 
        arr = [1, ...arr]; 
    }

     
    return arr; 
}