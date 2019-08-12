
const twoSum = (nums, target) => {
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let returnArr = [];
    
    for(let i = 0; i < nums.length-1; i++) {
      // console.log(nums[i])
      if( (nums[i]+nums[i+1]) !== target) {
        // console.log(nums[i], nums[i+1])
        arr1.push(...nums.splice(i+1, 1))
        i--
        // console.log(nums, "arr1", arr1)
      }
      else {
        returnArr.push(i, i+1)
        return returnArr
      }
      
    }
    
    for(let i = 0; i < arr1.length-1; i++) {
      if( (arr1[i]+arr1[i+1]) !== target) {
        arr2.push(...arr1.splice(i+1, 1))
        i--
        // console.log(arr1, "arr2",arr2)
      }
      else {
        returnArr.push(i, i+1)
        return returnArr
      }
    }
    
    for(let i = 0; i < arr2.length-1; i++) {
      if( (arr2[i]+arr2[i+1]) === target) {
        returnArr.push(i, i+1)
        return returnArr
      }
    }
    
  
  }
  
  twoSum([4, 9, 11, 14], 15)