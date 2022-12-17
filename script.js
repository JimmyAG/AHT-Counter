document.getElementById("start").addEventListener("click", startcount);
document.getElementById("stop").addEventListener("click", stopcount); 
document.getElementById("avg").addEventListener("click", avgg); 

var counter = 0;
var chatCount = 0;
var total = 0;

started = false;
stopped = false;
repeated = false;


function startcount(){
    if (started && repeated){
        console.log("up and running");
    }else if(started){
        repeated = true;
    }else{
        started = true;
        stopped = false;
        b = setInterval(update, 1000);
    }
}

function stopcount(){
    stopped = true;
    started = false;
    repeated = false;
    clearInterval(b);
    if (confirm("Are you sure you want to store this value: "+ counter) === true && counter > 0){
        var st =" - " + chatCount + ":"+" "+counter+ "\\//";
        var tag = document.createElement("p");
        var text = document.createTextNode(st);
        document.getElementById("table").appendChild(tag);
        tag.appendChild(text);
        chatCount += 1;
        total += counter
        counter = 0;
        document.getElementById("Count").innerHTML = counter;

    }else{
        counter = 0
        document.getElementById("Count").innerHTML = counter;
    }
}

function update(){
    counter += 1;
    document.getElementById("Count").innerHTML = counter;
}

function avgg(){
    var Avg = Math.round(total / chatCount);
    document.getElementById("avgN").innerHTML = Avg;
}