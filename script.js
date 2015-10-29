 var my_calculator = new calculator(callback);

 function callback(type,value,item) {
     switch (value) {
         case undefined:
             $("#display_area").html("");
             break;
         default:
             $("#display_area").html(value);
             break;
     }
 }

//adding click handlers to all buttons
$("document").ready(function(){
    $('button').on('click',function(){
    var val=$(this).text();
        switch (val) {
            case 'AC':
                my_calculator.allClear();
                break;
            case 'C':
                my_calculator.allClear();
            default:
                my_calculator.addItem($(this).text());
        }
    });
});

