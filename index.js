module.exports.conv = conv;
module.exports.calculate = calculate;


function calculate(a, b){

return conv(a) + conv(b)

}


function conv(x){
    var cur = Math.pow(2, (x.length));

    return Array.prototype.map.call(x, function(val, index){
        cur /= 2;

     //   console.log('index:' + (x.length-index) + ' val : ' + (Math.pow(index, 2)));
        if (val == 1 && index == x.length -1){
            return (1);
        }
        if (val == 1 && index == x.length -2) {
            cur =2;
            return (2);
        }
        if (val == 1){
            pos = x.length - (index + 1);
          //  console.log(pos);
            // return counter;
            //'' recursively  double prev val
            return (cur);
        }
        else{
            return 0;
        }
    })
    .reduce(function(a,b){return a + b})
}

console.log(conv("100"));