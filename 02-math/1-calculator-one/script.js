(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        let x = Number(document.getElementById("op-one").value);
        let y = Number(document.getElementById("op-two").value);
        let answer = x + y;
        document.getElementById("result").innerHTML =answer;
       // perform an addition
    }); 

    document.getElementById("substraction").addEventListener("click", function() {
        let x = Number(document.getElementById("op-one").value);
        let y = Number(document.getElementById("op-two").value);
        let answer = x - y;
        document.getElementById("result").innerHTML =answer;
      // perform an substraction
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        let x = Number(document.getElementById("op-one").value);
        var y = Number(document.getElementById("op-two").value);
        const answer = x * y;
        document.getElementById("result").innerHTML =answer;
    // perform an multiplication
    });

    document.getElementById("division").addEventListener("click", function() {
        let x = Number(document.getElementById("op-one").value);
        let y = Number(document.getElementById("op-two").value);
        let answer = x / y;
        document.getElementById("result").innerHTML =answer;
      // perform an division
    });
})();