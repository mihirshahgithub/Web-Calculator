var num1=null;
var num2=null;
var operator=null;


var result= parseInt(num1) + operator + parseInt(num2);

/*for(i=0;i<num_array.length;i++){
    if(!isNaN(num_array[i])){
        if(num1===null) {
            num1 = num_array[i];
        }else{num2=num_array[i]};
        }else{
        operator=num_array[i]
    }
    }
*/

function calculate(num1,num2,operator){



    switch(operator) {
        case '+':
            result=num1+num2;
            break;
        case '-':
            result=num1-num2;
            break;
        case 'x':
            result=num1*num2;
            break;
        case '/':
            result= num1/num2;
            break;

    }

    if(num1/num2 && num2==0){
        alert('Error')
    }
    return result;
}
calculate(num1,num2,operator);

//get value with prompt and store all values
//stop storing when prompt returns empty string
/*
 var values=[''];


 while(val!==''){
 var val=prompt("Gimme Gimme");
 values.push(val);
 if(val===''){
 break;
 }
 console.log(values);
 }
 */
var num_array=[''];
for(i=0;i<num_array.length;i++){
    if(!isNaN(num_array[i])){
        if(num1===null) {
            num1 = num_array[i];
        }else{num2=num_array[i]};
    }else{
        operator=num_array[i]
    }
}
var i=0;
function input_digit(numberstring){
    num_array[i]=num_array[i]+numberstring;
   incrementer_array();
    num_array.push("");
}

$(document).ready(function() {
    $('.number_container').on("click", "button", function () {
        var digit = ($(this).text());
        console.log(digit);
        input_digit(digit);
        console.log('array:', num_array);
        calculate();
    });
    $('.operator_container').on("click", "button", function () {
        var op = ($(this).text());
        input_digit(op);
        console.log(op);
        console.log('array:', num_array);
    });
    $('.equals_container').on("click", "button", function () {
        var equals = ($(this).text());
        input_digit(equals);
        console.log(equals);
        console.log('array:', num_array);
    });

});

function incrementer_array(){
    i++;
}

/*function callback(type,digit,item) {
 switch (digit) {
 case undefined:
 $("#display_area").html("");
 break;
 default:
 $("#display_area").html(digit);
 break;
 }
 }

 callback();

 */