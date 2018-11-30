(function($) {
    $.fn.htmlNumberSpinner = function () {

        /* creating the counter buttons */
        $(this).append("<div class='btn decrementer'>-</div> <input class='number-input' type='number'/> <div class='btn incrementer'>+</div>");


        /* default value and variables and jquery elements*/
        var defaultValue = 0, inputValue;
        var numberInput$ = $(this).find('.number-input');
        var incrementerEl$ = $(this).find('.incrementer');
        var decrementerEl$ = $(this).find('.decrementer');

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
        $(this).find('.btn').css({"display":"inline-block", "width":"50px", "height":"30px", "font-size":"25px", "text-align":"center", "vertical-align":"middle", "line-height":"1", "cursor":"pointer", "user-select":"none"});
        incrementerEl$.css({"background-color":"slateblue", "color":"white", "border": "1px solid slateblue"});
        decrementerEl$.css({"background-color":"hotpink", "color":"white", "font-size":"25px", "border": "1px solid hotpink"});
        numberInput$.css({
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


        /* props - dynamic attributes */
        var minAttributeValue = $(this).attr("min");
        var maxAttributeValue = $(this).attr("max");
        var stepAttributeValue = $(this).attr("step");

        if(minAttributeValue){
            numberInput$.attr("min",+minAttributeValue);
        }

        if(maxAttributeValue){
            numberInput$.attr("max", +maxAttributeValue);
        }

        if(stepAttributeValue){
            numberInput$.attr("step", +stepAttributeValue);
        }


        /* set the default value into the input */
        inputValue = minAttributeValue ? minAttributeValue: defaultValue;
        numberInput$.val(inputValue);

        /* incrementer functionality */
        incrementerEl$.click(function () {
            var parentEl = $(this).parent();
            inputValue = parentEl.find('.number-input').val();
            if(maxAttributeValue){
                if(maxAttributeValue==inputValue){
                    return;
                }
            }
            if(stepAttributeValue){
                inputValue = parentEl.find('.number-input').val();
                parentEl.find('.number-input').val((+inputValue)+(+stepAttributeValue));
                return;
            }
            inputValue = parentEl.find('.number-input').val();
            parentEl.find('.number-input').val(++inputValue);
        });

        /* decrementer functionality */
        decrementerEl$.click(function () {
            var parentEl = $(this).parent();
            inputValue = parentEl.find('.number-input').val();
            if(minAttributeValue){
                if(minAttributeValue==inputValue){
                    return;
                }
            }
            if(stepAttributeValue){
                inputValue = parentEl.find('.number-input').val();
                parentEl.find('.number-input').val((+inputValue)-(+stepAttributeValue));
                return;
            }
            inputValue = parentEl.find('.number-input').val();
            parentEl.find('.number-input').val(--inputValue);
        })

        numberInput$.change(function () {
            if(!maxAttributeValue || !minAttributeValue) return;
            var currentValue = $(this).val();
            if((+currentValue)>(+maxAttributeValue)){
                $(this).val(maxAttributeValue)
                return;
            }
            if((+currentValue)<(+minAttributeValue)){
                $(this).val(minAttributeValue)
                return;
            }
        })

    };

    $.fn.getSpinnerValue = function () {
        return $(this).find('.number-input').val();
    }

}(jQuery));
