function solution(nums) {
    const numSet = new Set(nums);
    return Math.min(numSet.size, nums.length / 2);
}
