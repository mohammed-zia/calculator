const add = function(a,b) {
return a + b
};

const subtract = function(a,b) {
	return a - b
};

const multiply = (a,b) => {
    return a*b
}


const divide = (a,b) => {
    return a/b
}


const multiplyArr = function(arr) {
  let total = 0;
  for(let i = 0; i<arr.length; i++){
    if(i === 0){
      total = arr[i]
    }
    else{
      total *= arr[i]
    }
  }
  return total
};
