let captchacheck = false;
function beforesubmit(event){
    if (captchacheck){

    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    
    console.log("inputdate",inputdate);//string --> date(es_ES)
    let formattedDate = new Date(inputdate.value);
    outputdate.value = formattedDate;
}else{
    alert("Please check the recaptcha box to submit the lead");
    event.preventDefault();
}
}

function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(
            document.getElementsByName("captcha_settings")[0].value
            );
            elems["ts"] = JSON.stringify(new Date().getTime());
            document.getElementsByName("captcha_settings")[0].value = 
                JSON.stringify(elems);
             } 
            } 
            setInterval(timestamp, 500);
            
function captchasuccess (){
    captchacheck = true;
}