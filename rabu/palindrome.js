function palindrome(kata){
var c;
var output='';
for(var b=kata.length-1; b>=0; b-- ){
    output+=kata[b]; 
}
    if(kata==output){
        c= true;
    }else{
        c= false;
    }
    return c;
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

