//Front
var login = document.getElementById("login")
var register = document.getElementById("register")

var loginBtn = document.getElementById("loginBtn")
var registernBtn = document.getElementById("registerBtn")

function loginBtnClick() {
    login.style.left = "50px";
    register.style.left = "450px";

    registernBtn.classList.remove("activeBtn");
    loginBtn.className = "activeBtn"
}

function registerBtnClick() {
    login.style.left = "-450px";
    register.style.left = "50px";

    loginBtn.classList.remove("activeBtn");
    registernBtn.className = "activeBtn"
}



//User
class User {
  constructor(username, password, email) {
      this.username = username;
      this.password = password;
      this.email = email;
  }
}

//Registartion
document.getElementById("register").addEventListener("registerConfirmBtn",function(){
  const username = document.getElementById("registerName").value
  const password = document.getElementById('registrationPassword').value;
  //const confirmPassword = document.getElementById('registerConfirmPassword').value;
  const email = document.getElementById('registerEmail').value;

  var users = [];
  if (localStorage.getItem("users")) {
      users = JSON.parse(localStorage.getItem("users"));
  }

  const user = users.find(u => u.username === username );
  
  if (user) {
      alert("This username was already taken");
  }
  else {
      const newUser = new User(username, password, email);
      if (localStorage.getItem("users")) {
          users = JSON.parse(localStorage.getItem("users"));
      }
      users.push(newUser);
      document.getElementById("registerName").value = "";
      document.getElementById("registrationPassword").value = "";
      localStorage.setItem("users", JSON.stringify(users));

      prompt("Success");
  }

})


//Login
document.getElementById("login").addEventListener("LoginConfirmBtn", function() {
  const username = document.getElementById("registerName").value
  const password = document.getElementById("registrationPassword").value

  let users = [];

  if (localStorage.getItem("users")) {
      users = JSON.parse(localStorage.getItem("users"));
  }

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    prompt("Success");
  } else {
    prompt("Wrong username or password");
  }
  document.getElementById("registerName").value = "";
  document.getElementById("registrationPassword").value = "";
});
