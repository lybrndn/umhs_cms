function validate() {
  var username = document.getElementById("userid-box").value;
  var password = document.getElementById("pw-box").value;
  if (username == "username1" && password == "password1") {
  	window.location = "students_homepage.html";
    return false;
  }
  else {
    alert("Invalid username or password");
    //onclick = "file:///C:/Users/sungd/Desktop/umhs_cms-master/html/login.html";
  }
return false;
}
