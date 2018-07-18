var lengthOfLongestSubstring = function(s) {
    var max_arr = [];
    var tmp_arr = [];
    for(var i=0; i<s.length; i++){
        if(max_arr.length<=tmp_arr.length){
            max_arr = tmp_arr
        }
        if(tmp_arr.indexOf(s[i])==-1){
            tmp_arr.push(s[i])
        }
        else{
            tmp_arr = tmp_arr.slice(tmp_arr.indexOf(s[i])+1)
            tmp_arr.push(s[i])
        }
    }
    return max_arr.length
};
console.log(lengthOfLongestSubstring('dvdfc'))