$.fn.myCounter = function(){
    var inputValue = 0;

    /*creating the counter buttons*/
    $(this).append("<div class='btn decrementer'>-</div> <div class='btn display-out'></div> <div class='btn incrementer'>+</div>");

    $(this).find('.display-out').text(inputValue);

    $(this).find('.incrementer').click(function () {
        inputValue++;
        var parentEl = $(this).parent();
        parentEl.find('.display-out').text(inputValue);
    });

    $(this).find('.decrementer').click(function () {
        inputValue--;
        var parentEl = $(this).parent();
        parentEl.find('.display-out').text(inputValue);
    })
};

$( "#umar-counter" ).myCounter();
$( "#haathif-counter" ).myCounter();
$( "#my-counter" ).myCounter();