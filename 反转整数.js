var reverse = function(x) {
    var result = 0
    if(x>0){
        result = parseInt((x+"").split("").reverse().join(""))
    }else{
        result = -parseInt((Math.abs(x)+"").split("").reverse().join(""))
    }
    if(result>Math.pow(2,31)-1||result<-Math.pow(2,31))
    return 0
    return result
};
console.log(reverse(321))
console.log(reverse(-321))
