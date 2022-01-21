function threeSum(arr, n) {
    let threeSumArr = [];
    for (let i = 0; i < arr.length-2; i++) {
        for(let j = i+1 ; j< arr.length-1; j++){
            for(let k=j+1;k<arr.length ; k++){
                if((arr[i]+arr[j]+arr[k])===n){
                    threeSumArr.push([arr[i],arr[j],arr[k]]);
                }
            }
        }
    }
    return threeSumArr;
}

console.log(threeSum([1,2,3,4,5,6,7,8,9,10],14));