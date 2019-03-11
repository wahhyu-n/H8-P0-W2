/**
Interesting Square
------------------
Buatlah sebuah proses perulangan menggunakan looping/perulangan
(boleh menggunakan while / for)
Disediakan variable height, gunakan variable ini untuk
mengatur tinggi dari persegi yang akan kita buat.
Contoh:
  - height: 3
  - output:
    ***
    ###
    ***
  - height: 1
  - output:
    *
  - height: 5
  - output:
    *****
    #####
    *****
    #####
    *****
Tinggi dan lebar dari persegi sesuai dari variable height
*/

var height=3;

for(var i=1; i<=height; i++){
  var output='';
  for(var j=1; j<=height; j++){
    if(i%2!==0){
      output+='*';
    }else{
      output+='#';
    }
  }
  console.log(output);
}

