
function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}


function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
    
}


document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-number');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        const preCalcNumber = calcInput.value;
        const newCalcNumber = preCalcNumber + number;
        calcInput.value = newCalcNumber;
    }
    
});

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-number').value;
    
    const successSms = document.getElementById('success-sms');
    const errorFailed = document.getElementById('error-fail');
    if(pin == typedNumber){
        successSms.style.display = 'block';
        errorFailed.style.display = 'none';
    }
    else{
        errorFailed.style.display = 'block';
        successSms.style.display = 'none';
    }

}





