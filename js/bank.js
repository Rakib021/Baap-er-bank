document.getElementById("btn-submit").addEventListener("click",function(){
    //get user email
 const emailField =document.getElementById("user-email");
 const userEmail = emailField.value;
//get user password
const passwordField =document.getElementById("user-password");
 const userPassword = passwordField.value;
//check email and password
 if(userEmail == "rakibul02107089@gmail.com" && userPassword == "rakib"){

    window.location.href ="banking.html";
 }
else{

    window.location.href ="invalid.html";
}
});

