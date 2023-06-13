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



//Registration logic
document.getElementById('register').addEventListener('registerConfirmBtn', function(event) {
    event.preventDefault(); // Отменяем отправку формы по умолчанию
  
    // Получаем значения полей формы
    var username = document.getElementById('registerName').value;
    var email = document.getElementById('registerEmail').value;
    var password = document.getElementById('registrationPassword').value;
    //var confirmPassword = document.getElementById('registerConfirmPassword').value;
  
    // Создаем объект пользователя
    var user = {
      username: username,
      email: email,
      password: password
    };
  
    // Сохраняем объект пользователя в файле .json
    saveUser(user);
    
  });


  function saveUser(user) {
    let result = JSON.stringify(user)
    login.style.background = "black";
  }