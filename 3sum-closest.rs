//https://leetcode.com/problems/3sum-closest/
//https://leetcode.com/problems/3sum-closest/discuss/229111/Rust.-0ms.
//example in rust that i liked

impl Solution {
    pub fn three_sum_closest(nums: Vec<i32>, target: i32) -> i32 {
        if nums.len() <= 3 {
            return nums.into_iter().sum();
        }

        let mut nums = nums;
        nums.sort();

        let mut closest = nums[0] + nums[1] + nums[2];
        let mut min_diff = (closest - target).abs();
        
        let mut a = 0;
		
        while a < nums.len() - 2 {
		
            let mut b = nums.len() - 1;
            let mut c = a + 1;
			
            while c < b {
                let sum = nums[a] + nums[b] + nums[c];
                let diff = (sum - target).abs();

                if diff < min_diff {
                    closest = sum;
                    min_diff = diff;
                }

                if sum > target {
                    b -= 1;
                } else if sum < target {
                    c += 1;
                } else {
                    return closest
                }
                
            }
                
            a += 1;
        }

        closest
    }
}
