let a=document.getElementById("num").value;
let sum = 0;
  

function sumOfDigits() {
    while (a > 0) {
      sum += a % 10;
      a=parseInt(a/10);
    }
    console.log(parseInt(sum));
}

sumOfDigits();