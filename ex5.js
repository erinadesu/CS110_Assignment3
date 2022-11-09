let num = 4613;
let temp = num
let bin1 = 0;
let bin2 = 1;
while (temp) {
    bin1 = bin1 + temp%2*bin2;
    temp = Math.floor(temp/2);
    bin2 = bin2*10;
}
console.log(num, ':', bin1)