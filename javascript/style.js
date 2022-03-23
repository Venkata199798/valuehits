var nameel=document.getElementById("name");
var emailel=document.getElementById("enam");
var mobileel=document.getElementById("mob");

var nameerrorel=document.getElementById("nameerror");
var emailerrorel=document.getElementById("emailerror");
var naumerrel=document.getElementById("naumerr");


  function Name_vaidate(){
    nameel.textContent="";
    let name_value = nameel.value;
    let regular = new RegExp("^[A-Za-z]*$");

    if (name_value==""){
        nameerrorel.textContent="This field should not be Empty";
        nameerrorel.classList.add("errmsg");
        // nameel.classList.add("border_color");
        return false;
    }
    else if (regular.test(name_value)==false){
        nameerrorel.textContent="Name should be in the alpabets only"
        // nameerrorel.classList.add("border_color");
        nameerrorel.classList.add("errmsg");
        return false;
    }
    else{
        nameerrorel.textContent="";
        nameerrorel.style.border = "none";
        return true;
    }
}

function Email_validate(){
    emailel.textContent=""
    let email = emailel.value;
    let reg=email.substring(email.indexOf('@')+1);

    if (email == '') {
        emailerrorel.textContent = "This field is  required";
        emailerrorel.classList.add("errmsg")
        // emailerrorel.classList.add("border_color");
        // emailNode.style.border = border1;
        return false;
    }else if(!email.includes("@")|| reg=='') {
       emailerrorel.textContent = "Please put valid email";
       emailerrorel.classList.add("errmsg");
       return false;
    }
    else {
        emailerrorel.textContent="";
        return true;
} 
}

function mobile_vli() {
    let mobileel1 = mobileel.value;
    let reg_1=new RegExp("^[0-9]*$");
    mobileel1.textContent="";

    if ( mobileel1 == '') {
        naumerrel.textContent = "This field is required";
        naumerrel.classList.add("errmsg");
        // naumerrel.classList.add("border_color");
        return false;
    }else if(reg_1.test(mobile)==false){
        naumerrel.textContent = "It Should Contain Only Digits";
        naumerrel.classList.add("errmsg");
        return false;
    }
    else {
        naumerrel.textContent=""
        return true;
} 
}

function subbmitted_form(){
    return Name_vaidate() && Email_validate() && mobile_vli();

}