const signEmail = document.getElementById('signEmail');
const signPassword =document.getElementById('signPassword');

let user =[];
user = JSON.parse(localStorage.getItem('user'));
document.getElementById('login').addEventListener('click' , function(){
    if(signEmail == '' || signPassword ==''){
        document.getElementById('message').innerHTML = `<p claas="text-center">all inputs is requierd</p>`
}else{
    checkUser();
}
})
function checkUser(){
    for (let i = 0; i< user.length; i++) {
      if(signEmail.value==user[i].email && signPassword.value == user[i].password){
        var y = user[i].name;
        localStorage.setItem('userName' ,y);
        location.href='../../home/index.html'; 
        break;
      }
       
    }
}