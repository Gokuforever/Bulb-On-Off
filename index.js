const bulb = document.querySelector("#bulb");
console.log(bulb);
const bulbSwitch = document.querySelector("#bulbSwitch");
console.log(bulbSwitch);
bulbSwitch.addEventListener("click", function(){
    if(bulb.src.match("off")){
        bulb.src = "/Bulb/bulb-on.gif";
        document.querySelector("#bulbSwitch").innerHTML = "Turn off";
    }
    else{
        bulb.src = "/Bulb/bulb-off.gif";
        document.querySelector("#bulbSwitch").innerHTML = "Turn on";
    }
});