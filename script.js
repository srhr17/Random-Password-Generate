function getPassword() {
  var chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+=-<>{}[]";
  var passwordLength = 16;
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * chars.length);
    password += chars.substring(random, random + 1);
  }
  document.getElementById("password").value = password;
}
