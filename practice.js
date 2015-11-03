//defining global variables
var num1=null;
var num2=null;
var i=0;
var operator=null;
var num_array=['']; //will be used to populate with operators/operands
var result= parseInt(num1) + operator + parseInt(num2);


function calculate(num1,num2,operator){
    for(i=0; i<num_array.length;i++)
    {
        if(!isNaN(num_array[i]))
        //is a number
        {
            if(num1===null) {
                num1=num_array[i];
                console.log(num1);
            }
            else{
                num2=num_array[i];
                console.log(num2);
            }
        }
        else{
            op=num_array[i];

        }




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
    console.log(result);
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
var i=0;
function input_digit(numberstring){
    num_array[i]=num_array[i]+numberstring;
}

$(document).ready(function() {
    $('.number_container').on("click", "button", function () {
        var digit = ($(this).text());
        console.log(digit);

        input_digit(digit);
        console.log('array:', num_array);
        calculate();

    })
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