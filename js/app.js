
function getPin(){

    const pin = Math.round(Math.random() * 10000);
    const pinSting = pin + '';
    if(pinSting.length == 4){
        return pin;
    }
    else{
        // console.log('Got 3 Digit', pin);
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
    
}