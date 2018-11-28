(function($) {
    $.fn.numberSpinner = function () {
        var inputValue = 0;

        /*creating the counter buttons*/
        $(this).append("<div class='btn decrementer'>-</div> <div class='btn display-out'></div> <div class='btn incrementer'>+</div>");

        /*styling the component*/
        /*styling the counter buttons*/
        $(this).find('.btn').css({"float":"left", "width":"50px", "height":"30px", "font-size":"25px", "text-align":"center", "vertical-align":"middle", "line-height":"1", "cursor":"pointer", "user-select":"none"});
        $(this).find('.incrementer').css({"background-color":"slateblue", "color":"white", "border": "1px solid slateblue"});
        $(this).find('.decrementer').css({"background-color":"hotpink", "color":"white", "font-size":"25px", "border": "1px solid hotpink"});
        $(this).find('.display-out').css({"background-color":"white", "border": "1px solid","color":"black",
            "line-height":"normal",
            "border-left-color": "hotpink",
            "border-right-color": "slateblue",
            "border-top-color": "lightblue",
            "border-bottom-color": "lightblue"});

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
    }
}(jQuery));
