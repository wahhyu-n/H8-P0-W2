console.log('Tugas 1\n')

function shoutOut(){
    return 'Halo Function!'
}
console.log(shoutOut())


console.log('\nTugas 2\n')
function calculateMultiply(num1, num2){
    
    return num1*num2;
        
}
var num1 = 5;
var num2 = 6;
var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);


console.log('\nTugas 3\n')
function processSentence(name,age,address,hobby){
    return 'Nama saya '+name+', umur saya '+age+' tahun, alamat saya di '+address+', dan saya punya hobby yaitu '+hobby+'!'
}
var name = "Wahyu";
var age = 25;
var address = "Kulon Progo, Yogyakarta";
var hobby = "Gaming";
var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);