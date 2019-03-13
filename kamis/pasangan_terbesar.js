function pasanganTerbesar(num){
    var numString = num.toString()
    // var numArr = [];
    var terbesar = Number(numString[0] + numString[1]);
    for(var a=0; a<numString.length; a++){
        
        var numCheck = numString[a] + numString[a+1];
        
        if(Number(terbesar) < Number(numCheck)){//mengembalikan string ke number
            terbesar = Number(numCheck)
        }
        // numArr.push(numCheck);

    }
    // numArr.sort(function(a, b){return b-a});
    return terbesar
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99