/*
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.
*/

var twoSum = function(nums, target) {
    let memo = {}
    
    // Create a Memo
    for (let i = 0; i < nums.length; i++) {
        memo[nums[i]] = i
    }

    // parse through the memo to determine if there are any matches. 
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i]

        if (memo[difference] && memo[difference] !== i){
            return [i, memo[difference]]
        }    
    }
};

/*
    Mistakes: 
        - I ran into a type error while trying to lookup the object's key by using an integer
        - I missed an edge case and wrote code that can potentially return the same index for 
        both buckets. 

    I'm rusty
*/