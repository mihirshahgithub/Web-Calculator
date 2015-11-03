//define global variables
var num1=null;
var num2=null;
var operator=null;
var num_array=[''];


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

function calculate(){
    for(i=0; i<num_array.length;i++)
    {
        if(!isNaN(num_array[i]))
        //if num_array[i] is a number
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
            operator=num_array[i];

        }
        // conditional to initialize arithmetic function if num1 and num2 are both numbers
        if(!num1===null && !num2===null && operator===null ){
            console.log(num1,num2,operator);
            arithmetic(num1,operator,num2);
            num_array.splice(num_array.length-1, 2); //this should cut out the operators to be removed and returned
            return;
        }
    }
}

    function arithmetic(num1,operator,num2) {
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case 'x':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;

        }
        return result;

    }




var i=0;
function input_digit(numberstring){
    num_array[i]=num_array[i]+numberstring;
   incrementer_array();
   // num_array.push("");
}

$(document).ready(function() {
    $('.number_container').on("click", "button", function () {
        var digit = ($(this).text());
        console.log(digit);
        input_digit(digit);
        console.log('array:', num_array);
        //calculate(); don't need to call this function here yet
        //will not be calling incrementer_array function for the numbers to ensure that I'm not limited to single digits
    });
    $('.operator_container').on("click", "button", function () {
        var op = ($(this).text());
        input_digit(op);
        console.log(op);
        incrementer_array(); //whenever the program hits an operator, it will iterate to the next slot
        console.log('array:', num_array);
    });
    $('.equals_container').on("click", "button", function () {
        calculate();
        arithmetic(num1,operator,num2);
       // var equals = ($(this).text());
        //input_digit(equals);
        //console.log(equals);
        //incrementer_array();
        //console.log('array:', num_array);
        console.log("equal button working");
    });

});

function incrementer_array(){
    i+=1;
    num_array.push('');
}

$("document").ready(function(){
    $('#display_area').on('click', 'button',function(){
        var val=$(this).text();
        switch (val) {
            case 'AC':
                clear();
                calculate_result();
                console.log("CLEARED")
                break;
            case 'C':
                clear();
                calculate_result();
                console.log()
            default:
                my_calculator.addItem($(this).text());
        }
    });
});