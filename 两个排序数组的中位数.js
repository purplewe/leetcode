var findMedianSortedArrays = function(nums1, nums2) {
    var nums = nums1.concat(nums2);
    nums.sort(function(a,b){return a-b})
    var mid = parseInt(nums.length/2);
    console.log(mid)
    if(nums.length%2==0){
       return parseFloat((nums[mid]+nums[mid-1])/2)
    }else{
       return nums[mid]
    }
};
// console.log(findMedianSortedArrays([1],[2,3,4,5,6,7,8,9,10]))
// console.log(findMedianSortedArrays([1],[2,5]))
console.log(parseInt(3/2))