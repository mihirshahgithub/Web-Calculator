/*var num1=parseInt(prompt('num1'));


var num2=parseInt(prompt('num2'));

var operator=prompt('enter the operator');


var result= parseInt(num1) + operator + parseInt(num2);

function arithmetic(num1,num2,operator){


    console.log(typeof num1);
    console.log(typeof num2);

    switch(operator) {
        case '+':
            result=num1+num2;
            break;
        case '-':
            result=num1-num2;
            break;
        case 'x':
            resut=num1*num2;
            break;
        case '/':
            result= num1/num2;
            break;

    }
    console.log(result);
    //if(num1/num2 && num2==0){
    // alert('Error')
    //}
    return result;
}
arithmetic(num1,num2,operator);

/*get value with prompt and store all values
 //stop storing when prompt returns empty string
 var values=[];
 //noprotect
 while(val!==''){
 var val=prompt("Gimme Gimme");
 values.push(val);
 if(val===''){
 break;
 }
 console.log(values);
 }
 */
/*var num_array=[];
var i=0;
function input_digit(){
    num_array[i]=num_array[i]+numberstring;
}

$(document).ready(function(){
    $('.number_container').on("click","button",function(){
        //console.log("I worked");
        var digit=($(this).text());
        input_digit();
  */

$(document).ready(function(){
    $('.number_container').on("click","button",function(){
        var digit=($(this).text());

        input_digit(digit);
        console.log('aaray:',num_array);

        $('#next').on('click','button',function(){
            console.log("clicking next num");
        });
    });
});

