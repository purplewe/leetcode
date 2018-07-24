var longestPalindrome = function(s) {
    var count = 2
    var max_arr = []
    max_arr.push(s[0])
    var result = max_arr
    max_arr.push(s[1])
    for(var i=2; i<s.length; i++){
        if(s[i]==max_arr[max_arr.length-1]||s[i]==max_arr[max_arr.length-count]){
            max_arr.push(s[i])
            count++
        }else{
            max_arr = max_arr.slice(count-1)
            max_arr.push(s[i])
            count = 2
        }
        if(max_arr>result.length){
            result = max_arr
        }
    }
    console.log(result)
};
longestPalindrome("asdljljh")