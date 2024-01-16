
var counter = 0;
let displayCounter = document.getElementById('counter');
let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');
let reset = document.getElementById('reset');



increase.addEventListener('click', function(){
    if(counter < "1"){
        counter++;
        displayCounter.innerHTML = counter;
    } else {
        counter++;
        displayCounter.innerHTML = counter;
    }
    if(counter > "0"){
        reset.disabled = false;
        decrease.disabled = false;
    }
});
decrease.addEventListener('click', function(){
    if( counter != 0){
        counter--;
        displayCounter.innerHTML = counter;
        if(counter === 0){
                decrease.disabled = true;  
                reset.disabled = true;
        }
    }
});
reset.addEventListener('click', function(){
    
        displayCounter.innerHTML = "0";
        counter =0;
        reset.disabled = true;
        decrease.disabled = true;
});
