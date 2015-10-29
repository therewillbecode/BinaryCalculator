module.exports.conv = to_decimal;
module.exports.calculate = calculate;

function calculate(a, b){
    
return to_decimal(a) + to_decimal(b)
}

function to_decimal(x){
    var cur = Math.pow(2, (x.length));

    return Array.prototype.map.call(x, function(val, index){
        cur /= 2;
        if (val == 1 && index == x.length -1){
            return 1;
        }
        if (val == 1 && index == x.length -2) {
            cur =2;
            return 2;
        }
        if (val == 1){
            pos = x.length - (index + 1);
            return cur;
        }
        else{
            return 0;
        }
    })
    .reduce(function(a,b){return a + b})
}

console.log(to_decimal("100"));
