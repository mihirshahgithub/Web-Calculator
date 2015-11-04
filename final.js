//define global variables
var num1 = null;
var num2 = null;
var operator = null;
var num_array = [''];
var i = 0;

//var result = parseInt(num1) + operator + parseInt(num2);

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

function calculate() {
    for (i = 0; i < num_array.length; i++) {
        if (!isNaN(num_array[i]))
        //if num_array[i] is a number
        {
            if (num1 === null) {
                num1 = num_array[i];
                console.log(num1);
            }
            else {
                num2 = num_array[i];
                console.log(num2);
            }
        }
        else {
            operator = num_array[i];

        }
        // conditional to initialize arithmetic function if num1 and num2 are both numbers
        if (!num1 === null && !num2 === null && operator === null) {
            console.log(num1, num2, operator);
            arithmetic(num1, operator, num2);
            num_array.splice(num_array.length - 1, 2); //this should cut out the operators to be removed and returned
            return;
        }
    }
}

function arithmetic(num1, operator, num2) {
    switch (operator) {
        case '+':
           var result = parseInt(num1) +parseInt(num2);
            //if(){}
            break;
        case '-':
            var result = num1 - num2;
            break;
        case 'x':
            var result = num1 * num2;
            break;
        case '/':
            var result = num1 / num2;
            if(num2==0){alert("ERROR")}
            break;

    }
    var result;
    num_array.push(result); //this should push arithmetic to the array, which will then allow the output to be displayed in the #display_area
    display_result(result);
    console.log(result);
}

function input_digit(number_string) {
    num_array[i] += number_string;
    //incrementer_array();
     //num_array.push("");
}

function incrementer_array() {
    i += 1;
    num_array.push('');
}

$(document).ready(function () {
    $('.number_container').on("click", "button", function () {
        var digit = ($(this).text());
        console.log(digit);
        input_digit(digit);
        console.log('array:', num_array);
        display_result(num_array[i]);
        //calculate(); don't need to call this function here yet
        //will not be calling incrementer_array function for the numbers to ensure that I'm not limited to single digits
    });
    $('.operator_container').on("click", "button", function () {
        incrementer_array();
        var op = ($(this).text());
        input_digit(op);
        console.log(op);
       incrementer_array(); //whenever the program hits an operator, it will iterate to the next slot
        console.log('array:', num_array);
        display_result(op);
    });
    $('.equals_container').on("click", "button", function () {
        calculate();
        arithmetic(num1, operator, num2);
        // var equals = ($(this).text());
        //input_digit(equals);
        //console.log(equals);
        //incrementer_array();
        //console.log('array:', num_array);
        console.log("equal button working");
    });
    $('.clear_container').on('click', 'button', function () {
        var val = $(this).text();
        switch (val) {
            case 'AC':
                AC();
                display_result('');
                console.log("CLEARED AND RESET");
                break;
            case 'C':
                C();
                display_result('');
                console.log("clear");

        }
    });

});

function display_result(result) {
    switch (result) {
        case undefined:
            $('#display_area').html("");
            break;
        default:
            $('#display_area').html(result);
            break;
    }
}

//clear function declaration
function AC() {
    i = 0;
    num1 = null;
    num2 = null;
    operator = null;
    num_array = [''];
}

//clears the last index-entry in the array
function C() {
    num_array.pop();
    num_array.push('');
}

