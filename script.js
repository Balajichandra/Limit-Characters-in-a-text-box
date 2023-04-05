var mytext = document.getElementById("my-text");
var result = document.getElementById("result");
var limit = 200;
result.textContent = 0 +"/"+limit;

mytext.addEventListener("input",function(){
    var textlen = mytext.value.length;
    result.textContent = textlen + "/" + limit;
    if(textlen >= limit){
        mytext.style.borderColor = "#ff2851";
        result.style.color = "#ff2851"; 
        document.addEventListener('keypress',(mytext) => {
            mytext.preventDefault();
        });
    }
    else{
        mytext.style.borderColor = "#b2b2b2";
        result.style.color = "#737373"; 
    }
}); 