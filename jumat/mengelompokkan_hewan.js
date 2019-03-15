function groupAnimals(animals) {
    // you can only write your code here!
    //var hewan=split.animals(' ');
    //var hurufPertama=
    
    // var index = 0;// variabel untuk indeks array result
    
    // for (i = 0; i < animals.length; i++) {
    //     if (result.length === 0) {
    //         result.push(animals[i]);
    //     } else if (result[index[0][0]] === animals[i][0]) {
    //         result[index[0][0]].push(animals[i]);
    //     } else {
    //         result.push(animals[i]);
    //         index++;
    //     }
    // }
    var result = [];//array hasil pengelompokkan hewan
    animals.sort();// fungsi sorting animals
    for(var i = 0; i< animals.length; i++){//0<5
        var found = false;

        for(var j = 0; j<result.length; j++){//setelah di push ada 1, lalu dicocokkan huruf pertama
            //animals[i][0]=cacing huruf pertama cacing
            if(animals[i][0] === result[j][0][0]){//[j][0][0]=j=sederet[ 'cacing', 'cicak' ],[0][0]=kata ayam [0]=kata a dlm anoa
                result[j].push(animals[i]);
                found =true;
            }
        }
        if(found === false){
            result.push( [animals[i]] );//jk msh kosong memasukkan semua kata
        }
    }
    return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]