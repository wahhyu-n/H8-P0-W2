function tentukanDeretAritmatika(arr){
var deret=arr[1]-arr[0];
//var result;
//var c;
for(a=1; a<arr.length; a++){
    if(arr[a] !== arr[a-1] + deret){
        return false;
    }
}
return true;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false