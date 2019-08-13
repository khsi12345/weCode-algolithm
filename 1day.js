
const twoSum = (nums, target) => {
  let arr = [];
  
  for(let i = 0; i < nums.length; i++) {
    for(let j = i+1; j <= nums.length-1; j++) {
      if( (nums[i]+nums[j]) === target) {
        arr.push(i, j);
      }
    }
  }
  
        return arr;

}

twoSum([4, 9, 11, 14], 15)