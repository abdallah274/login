var signUpName = document.getElementById('signName');
var signUpEmail = document.getElementById('signEmail');
var signUpPassword = document.getElementById('signPassword');
var user=[];
if(localStorage.getItem('user') !=null){
    user = JSON.parse(localStorage.getItem('user'));
}else{
    user=[];
}
document.getElementById('signUp').addEventListener('click', function () {
    if(signUpName == '' || signUpEmail == '' || signUpPassword ==''){
    document.getElementById('message').innerHTML = `<p claas="text-center">all inputs is requierd</p>`
    }else{
        var obj={
            name:signUpName.value,
            email:signUpEmail.value,
            password:signUpPassword.value
        }
        user.push(obj);
        location.href='../../Login/index.html';
        localStorage.setItem('user' , JSON.stringify(user))
    }
   
})
