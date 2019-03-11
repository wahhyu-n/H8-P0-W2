/**

Virus Percentage
================

Implementasikan function virusPercentage untuk menghitung
persentase virus yang ada. Hanya akan ada 4 tipe virus, yaitu:
- *
- #
- @
- $

# Contoh:
- `input` -> **##@
  output -> 40% *, 40% #, 20% @
- `input` -> **#*##
  output -> 50% *, 50% #

Contoh lain ada di test case

# Asumsi:
- `input` tidak akan pernah kosong
- `input` pasti berisi virus

# Aturan coding:
- DILARANG menggunakan regex

*/



var virusCode='**##@';
var virusx={};
var virusy=[];
var viruscount=0;
var input;
for (var a = 1; a <= virusCode.length; a++) {
    if (virusx[input[a]] === undefined) {
        virusx[input[a]] = 1;
    } else {
        virusx[input[a]] += 1
    }
}
/*for(var key in virusx){
    viruscount = Math.round(virusx[key] * 100 / viruslength) + '% ' + key;
}*/

console.log(virusCode('**#*##')); // 50% *, 50% #
console.log(virusCode('**######')); // 75% #, 25% *
console.log(virusCode('**##@')); // 40% *, 40% #, 20% @
console.log(virusCode('@')); // 100% @
console.log(virusCode('#$*@')); // 25% #, 25% $, 25% *, 25% @
