content = localStorage.getItem("name11")
storePass = localStorage.getItem("password");


if(content!=null){

    login = document.getElementById('login');
    login.style.display="flex";
   
    
    
    btn = document.getElementById('btn2')
  
  btn.addEventListener('click',opera2)
    
    
    
    
    
}else{

create = document.getElementById('create');
    create.style.display= "flex";
   
    
    console.log('working')
  
  btn = document.getElementById('btn1')
  
  btn.addEventListener('click',opera)
    
 
    
    
}


function opera(){
    
  userName = document.getElementById('name1').value.toLowerCase()
  
 console.log(userName) 
 
 pass1 = document.getElementById('password').value.toLowerCase()
 
 console.log(pass1)

   localStorage.setItem('name11',userName)
 localStorage.setItem('password',pass1)
 
 console.log('successfull')
 
 window.location.href = 'home.html'
 

    
}


function opera2(){
      userName = document.getElementById("name2").value.toLowerCase()
  
  pass1 = document.getElementById('password2').value.toLowerCase()
  
 // pass1 = String(pass1)
  
  
  console.log(pass1)
  console.log(userName)
  
if (userName == content && pass1 == storePass) {
window.location.href = '(home.html)'
    
  }else{

err =  document.getElementById('errorbox')

err.textContent ='incorrect login'

err.style.display = "block";

    // Hide the message after 3 seconds
    setTimeout(() => {
      err.style.display = "none";
    }, 2000); 

  }
  
    
}


function togglePassword() {
  const passwordField = document.getElementById("password");
  const toggleIcon = document.getElementById("toggle-icon");
  
  // Toggle password visibility
  if (passwordField.type === "password") {
    passwordField.type = "text";
    
    
  } else {
    passwordField.type = "password";
 
  }
}
  
function togglePassword2() {
  const passwordField = document.getElementById("password2");
  const toggleIcon = document.getElementById("toggle-icon");
  
  // Toggle password visibility
  if (passwordField.type === "password") {
    passwordField.type = "text";
    
    
  } else {
    passwordField.type = "password";
 
  }
}
 
 
function signUp(){

//window.addEventListener('beforeunload', function(event) {
  event.preventDefault();
//});


login = document.getElementById('login');
    login.style.display="none";     
 create = document.getElementById('create');
    create.style.display= "flex";   
 
    
}



function signIn(){

//window.addEventListener('beforeunload', function(event) {
  event.preventDefault();
//});


login = document.getElementById('login');
    login.style.display="flex";     
 create = document.getElementById('create');
    create.style.display= "none";   
 
    
}



  