function cariMean(arr){
//var arrString=arr.split(' ')+arr.toString();
var jumlah=0;
for(var a=0; a<arr.length; a++){

    //var arrCheck = arrString[a] + arrString[a+1]
    jumlah += arr[a];// jumlah=jumlah+arr[a]
}
return Math.round(jumlah/arr.length);
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7