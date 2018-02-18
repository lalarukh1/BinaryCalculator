document.getElementById('btn0').onclick = zero;
document.getElementById('btn1').onclick = one;
document.getElementById('btnSum').onclick = sum;
document.getElementById('btnMul').onclick = mul;
document.getElementById('btnSub').onclick = sub;
document.getElementById('btnDiv').onclick = div;
document.getElementById('btnEql').onclick = eql;
document.getElementById('btnClr').onclick = clr;

document.getElementById('res').onclick = action;

function clr(e) {
    res.innerHTML = '';
  }
function zero(e) {
    res.innerHTML +=  '0';
    return res.innerHTML;
}
function one(e) {
    res.innerHTML +=  '1';
}
function sum(e) {
    res.innerHTML +=  '+';
}
function mul(e) {
    res.innerHTML +=  '*';
}
function sub(e) {
    res.innerHTML +=  '-';
}
function div(e) {
    res.innerHTML +=  '/';
}

function eql(e) {
    let re = /\d+/g
    let re2 = /[\+\-\*\/]+/g
    let numbers = res.innerHTML.match(re);
    let operations = res.innerHTML.match(re2);
    
 if(operations.includes('*')) {
 let indexOfMul = operations.indexOf('*');
 let mul = ( indexOfMul!=0 ? parseInt(numbers[indexOfMul-1],2) :                  parseInt(numbers[indexOfMul],2) ) * parseInt(numbers[indexOfMul+1],2);
          numbers.splice(indexOfMul,2);
          numbers.splice(indexOfMul,0,mul.toString(2));
          operations.splice(indexOfMul,1);
        } 
 else if (operations.includes('+')) {
          let indexOfSum = operations.indexOf('+');
          let sum = ( indexOfSum!=0 ? parseInt(numbers[indexOfSum-1],2) : parseInt(numbers[indexOfSum],2) ) + parseInt(numbers[indexOfSum+1],2);
          numbers.splice(indexOfSum,2);
          numbers.splice(indexOfSum,0,sum.toString(2));
          operations.splice(indexOfSum,1);
        }
else if (operations.includes('/')) {
          let indexOfDiv = operations.indexOf('/');
          let division = ( indexOfDiv!=0 ? parseInt(numbers[indexOfDiv-1],2) : parseInt(numbers[indexOfDiv],2) ) / parseInt(numbers[indexOfDiv+1],2);
          numbers.splice(indexOfDiv,2);
          numbers.splice(indexOfDiv,0,division.toString(2));
          operations.splice(indexOfDiv,1);
        }
  
else {
          let indexOfSub = operations.indexOf('-');
          let sub = ( indexOfSub!=0 ? parseInt(numbers[indexOfSub-1],2) : parseInt(numbers[indexOfSub],2) )- parseInt(numbers[indexOfSub+1],2);
          numbers.splice(indexOfSub,2);
          numbers.splice(indexOfSub,0,sub.toString(2));
          operations.splice(indexOfSub,1);
        } 
    res.innerHTML = numbers[0].toString(2); 
}
