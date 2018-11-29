(function($) {
    $.fn.htmlNumberSpinner = function () {

        /* default value */
        var inputValue = 0;

        /* creating the counter buttons */
        $(this).append("<div class='btn decrementer'>-</div> <input class='number-input' type='number'/> <div class='btn incrementer'>+</div>");

        /* hide the default number input spinner */
        $(this).append("<style>" +
            "input[type=number]::-webkit-inner-spin-button, \n" +
            "input[type=number]::-webkit-outer-spin-button { \n" +
            "    -webkit-appearance: none;\n" +
            "    -moz-appearance: none;\n" +
            "    appearance: none;\n" +
            "    margin: 0; \n" +
            "}</style>");

        /* styling the counter buttons */
        $(this).find('.btn').css({"float":"left", "width":"50px", "height":"30px", "font-size":"25px", "text-align":"center", "vertical-align":"middle", "line-height":"1", "cursor":"pointer", "user-select":"none"});
        $(this).find('.incrementer').css({"background-color":"slateblue", "color":"white", "border": "1px solid slateblue"});
        $(this).find('.decrementer').css({"background-color":"hotpink", "color":"white", "font-size":"25px", "border": "1px solid hotpink"});
        $(this).find('.number-input').css({
            "background-color":"white",
            "border": "1px solid",
            "color":"black",
            "text-align":"center",
            "width":"55px",
            "font-size":"18px",
            "line-height":"normal",
            "padding":"0",
            "outline":"none",
            "border-left-color": "hotpink",
            "border-right-color": "slateblue",
            "border-top-color": "lightblue",
            "border-bottom-color": "lightblue"
        });


        /* set the default value into the input */
        $(this).find('.number-input').val(inputValue);

        /* incrementer functionality */
        $(this).find('.incrementer').click(function () {
            var parentEl = $(this).parent();
            inputValue = parentEl.find('.number-input').val();
            parentEl.find('.number-input').val(++inputValue);
        });

        /* decrementer functionality */
        $(this).find('.decrementer').click(function () {
            var parentEl = $(this).parent();
            inputValue = parentEl.find('.number-input').val();
            parentEl.find('.number-input').val(--inputValue);
        })

        /* props - dynamic attributes */
        
    };

    $.fn.getSpinnerValue = function () {
        return $(this).find('.number-input').val();
    }

}(jQuery));
