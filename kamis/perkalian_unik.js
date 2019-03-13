function perkalianUnik(arr){
    var array=[]
    for(a=0; a<arr.length; a++){
        var arrTemp=1;
        for(b=0; b<arr.length; b++){
            if(a!==b){//fungsi var a & b agar salah satu indeks tdk dihitung perkalian
                arrTemp *= arr[b];//mereplace 1 dg 4; 4*6;
            }
        }
        array.push(arrTemp);
    }
return array;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]