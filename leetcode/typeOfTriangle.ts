// https://leetcode.com/problems/type-of-triangle

function triangleType(nums: number[]): string {
    const [a,b,c] = nums;

    if (a + b <= c || a + c <= b || b + c <= a) {
        return "none";
    }

    if(a===b && b===c){
        return "equilateral";
    } else if(a===b || a===c || b===c){
        return "isosceles";
    } else {
        return "scalene";
    }
};