function tentukanDeretGeometri(arr) {
    var temp=0;

    for(var i=0; i<arr.length-1; i++){
        //if(arr[i] !== arr[i-1] + temp){}
            temp+=(arr[i+1]/arr[i]);//temp=temp+3->3, 6, 9, 12, temp=12
    }
        if((temp/(arr.length-1))===(arr[1]/arr[0])){//temp/(arr.length-1)=12/3=4 , 4===(3/1=4), 4===4
            return true;
        }else
        {
            return false;
        }
    


}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false