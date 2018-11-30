# Number Spinner

*Simple html number spinner*

In HTML5, you can have a number input field as a spinner which you have up and down arrow at the right of the textbox to increase or decrease the number value. 
Please see the styled spinner component as below, 

![](spinner.png)

# Install

`$ npm install html-number-spinner --save`

# Demo

##### [Click Here to see the demo](https://counter-plugin-edpbjuwlqa.now.sh/demo)

# Usage

*Step 1:*

    <div class="counter"></div>
    
*Step 2:*

    $('.counter').htmlNumberSpinner()
    
*You can get the spinner value like this*

    $('.counter').getSpinnerValue()

# Props

   | Property | Value |
   | ------------- | ------------- |
   | min  | number  |
   | max  | number  |
   | step  | number  |
   
# Examples
    
    Example 1: <div class="counter"></div>
    
    Example 2: <div class="counter" min="5" max="5" step="0.5"></div>
    
    
### Note:

Please include the jquery in your html

    npm i jquery
    
    or 
    
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>