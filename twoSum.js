var twoSum = function (nums, target) {
  var hash = {};
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    if (nums[i] in hash) return [hash[nums[i]], i];
    hash[target - nums[i]] = i;
  }
  return [-1, -1];
};
//output
console.log(twoSum([2, 7, 11, 15], 9));
