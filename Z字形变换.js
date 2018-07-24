//算是找规律吧
var convert = function(s, numRows) {
    if(s.length==0||numRows==0||numRows==1){
        return s
    }
    var result = []
    for(var i=0; i<numRows; i++){
        //等差 2*numRows-2
        for( var j=i; j<s.length; j+=(2*numRows-2)){
        if(i!=0&&i!=numRows-1){
            //关键在这两行，如果是第2到numRows-1之间的话，每循环一次等差，向数组中添加两个字符
            result.push(s[j])
            result.push(s[j+(numRows-i-1)*2])
        }else{            
            result.push(s[j])
        }
    }
    }
    return result.join("")
};
console.log(convert("PAYPALISHIRING",4))
console.log(convert("PAYPALISHIRING",3))