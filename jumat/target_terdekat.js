function targetTerdekat(arr){
var jarakTerdekat=arr.length
var jarakAwal=0;
var index_o=arr.indexOf('o');

if(arr.indexOf('x') === -1){
    return 0;
}

for(var a=0; a<arr.length; a++){
    if(arr[a] === 'x'){
        jarakAwal=Math.abs(a - index_o);
        if(jarakAwal < jarakTerdekat){
            jarakTerdekat = jarakAwal;
           //console.log(jarakTerdekat)
        }
    }
}
return jarakTerdekat;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'x', ' ', ' ', 'o', ' ', ' ', 'x'])); // 3