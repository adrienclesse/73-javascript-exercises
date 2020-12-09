(() => {
    document.getElementById("run").addEventListener("click",function(){
    
        fetch("https://restcountries.eu/rest/v2/all")

            .then(response => {console.log(response);
                return response.json();
            })
            
            .then(data=> console.log(data));

    });


})();