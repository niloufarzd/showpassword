var $=document;
//definde varaible
var TogglePassword=$.getElementsByClassName("toggle-password");
var PasswordField=$.getElementById("password-field");
//evenlistener
TogglePassword[0].addEventListener("click",function(){
     if(PasswordField.type == "text"){
         PasswordField.type="password";
         TogglePassword[0].classList.remove("active");
     }else{
         PasswordField.type="text";
         TogglePassword[0].classList.add("active");

     }

})