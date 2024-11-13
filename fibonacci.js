function calcFibo(times){

    if (!Number.isInteger(times)){
        return;
    }

    let tempArray = [0, 1];

    for (let i = 2; i < times ;i++) {
        tempArray.push(tempArray[i-2]+tempArray[i-1]);
    }

    return tempArray;
}

console.log(calcFibo(8));