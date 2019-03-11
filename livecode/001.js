/**
Buatlah sebuah PSEUDOCODE untuk kasus berikut:

Sebuah mobil sedang berjalan dengan kecepatan 80 km/jam.
Ketika mobil akan menanjak sebuah jalanan/jalur, kecepatan mobil akan berkurang
sesuai dengan kemiringan sudut dari jalan tersebut:
 - sudut kemiringan jalan 0-14 derajat maka kecepatan mobil tidak akan berkurang
 - sudut kemiringan jalan 15-29 derajat maka kecepatan mobil akan berkurang 10 km/jam
 - sudut kemiringan jalan 30-44 derajat maka kecepatan mobil akan berkurang 15 km/jam
 - sudut kemiringan jalan 45-50 derajat maka kecepatan mobil akan berkurang 25 km/jam

Tampilkan kecepatan mobil jika menghadapi tanjakan dengan sudut kemiringan tersebut
**/


//your alogritma/pseudocode here

Deklarasi
 kecepatan:integer
 kemiringan:integer
Begin
 Input kecepatan<-80
 Read and Save kecepatan
  if (kemiringan=0-14) then
  kecepatan=kecepatan-0 then    
  Output('kecepatan mobil tidak akan berkurang')
  get kecepatan
   else If (kemiringan=15-29) then
   kecepatan=kecepatan-10 then
   Output('kecepatan mobil akan berkurang 10 km/jam')
   get kecepatan
    else If (kemiringan=30-44) then
    kecepatan=kecepatan-15 then
    Output('kecepatan mobil akan berkurang 15 km/jam')
    get kecepatan
     else If (kemiringan=45-50) then
     kecepatan=kecepatan-25 then
     Output('kecepatan mobil akan berkurang 25 km/jam')
     get kecepatan
     else
     Output('kecepatan tidak terdefinisi')
  endif
