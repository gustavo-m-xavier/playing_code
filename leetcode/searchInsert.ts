// https://leetcode.com/problems/search-insert-position/description/

function searchInsert(nums: number[], target: number) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === target){
            return i;
        } else if(target > nums[i] && target < nums[i+1]){
            return i+1;
        } else if(target > nums[nums.length-1]){
            return nums.length;
        } else if(target < nums[i]) {
            return 0;
        }
    }
};