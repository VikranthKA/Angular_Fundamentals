const arr =[1,2,3,4,5,6,7,8,9,10]
//fibonacci


function fibo(n){
    const fib = [0,1]
    for(let i=2;i<n;i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}

// console.log(fibo(10))


//fatorial

function factorial(n){
    let result = 1
    for(let i=1;i<=n;i++){
        result = result * i
    }
    return result
}

// factorial

function recursiveFact(n){
    if(n<=1){
        return n
    }
    return n* recursiveFact(n-1)
}
// console.log(recursiveFact(3))
// console.log(factorial(2))

//isPrime

function isPrime(num){
    if(num <=1){
        return false
    }

    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            return false
        }
    }

    return true
}

// console.log(isPrime(33))


function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1
}

// console.log(linearSearch(arr,9))

function binarySearch(arr,target){
    let leftIndex = 0
    let rightIndex = arr.length-1

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor(leftIndex+rightIndex/2)
        if(target===arr[middleIndex]){
            return  middleIndex
        }
        if(target < arr[middleIndex]){
            rightIndex = middleIndex -1
        }else{
            leftIndex = middleIndex + 1
        }
    }

    return -1
}

console.log(binarySearch(arr,12))




