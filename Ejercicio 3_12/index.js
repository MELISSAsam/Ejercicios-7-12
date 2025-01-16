let nums = [3, 2, 4, 1];
let maxSum = nums[0] + nums[1]; 

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        let sum = nums[i] + nums[j];
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
}

alert(`El mayor es de la suma de dos numeros es ${maxSum}`);