
(function() {
    // to get the value of an input: document.getElementById("element-id").valu

    const performOperation = operation => {

            var number1 = Number(document.getElementById("op-one").value);
            var number2 = Number(document.getElementById("op-two").value);
            var answer;
            

            switch(operation){
                case ("addition"): var answer = number1 + number2; break;
                case ("substraction"): answer = number1 - number2; break;
                case ("multiplication"): answer = number1 * number2; break;
                case ("division"):answer= number1/number2; break;
                default : "I'm dying.."; break;
            }

           alert(answer);

    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),

          
        
         ),
    );
})();