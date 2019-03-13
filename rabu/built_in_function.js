function dataHandling2(input){
 input.splice(1,2,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    //console.log(input);
 input.splice(4,2,"Pria", "SMA Internasional Metro");
    console.log(input);
 var tanggal=input[3];
   // console.log(tanggal);
 var tanggal2=tanggal.split("/");
 var tanggal0=tanggal.split("/");//di split 2 kali

   // console.log(tanggal2);
var bulan=tanggal2[1];
switch(bulan){
    case 01: console.log('Januari');
    break;
    case 02: console.log('Februari');
    break;
    case 03: console.log('Maret');
    break;
    case 04: console.log('April');
    break;
    case 05: console.log('Mei');
    break;
    case 06: console.log('Juni');
    break;
    case 07: console.log('Juli');
    break;
    case 08: console.log('Agustus');
    break;
    case 09: console.log('September');
    break;
    case 10: console.log('Oktober');
    break;
    case 11: console.log('November');
    break;
    default:
    console.log('Desember');
}
tanggal2.sort(function(value1,value2){return value2-value1})
    console.log(tanggal2);
    console.log(tanggal0.join("-"));
    var nama= input[1].slice(0,14);
    console.log(nama);
}
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input)