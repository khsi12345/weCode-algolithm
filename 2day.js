const reverse = x => {
    console.log(x)
    let returnNums = [];
    let num = String(x);
    let nums = Array.prototype.slice.call(num)
    console.log(nums);
    
    for(let i = nums.length-1; i >= 0; i--) {
    
      if(nums[i] === '-') {
        returnNums.unshift(nums[i])
      }
      returnNums.push(nums[i])
    console.log(returnNums)
    }
    return parseInt(returnNums.join(''))
  };
  
  
  reverse(-87120)