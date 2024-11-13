function calcFibo(n){
    if (n < 2){
        return [0,1];
    }
    else {
        return [...calcFibo(n-1), calcFibo(n-1)[n-1] + calcFibo(n-2)[n-2]];
    }
}

console.log(calcFibo(8));