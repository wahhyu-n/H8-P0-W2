function angkaPalindrome(num){
var balik="";
var i=true;
var hasil;

while(i){
    num=num+1;
    if(num<9){
        i=false;
        hasil=num;
    }
    balik = num.toString().split('').reverse().join('')
    if(String(num)===balik){
        i=false;
        hasil=num;
    }
}
return hasil;

}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
