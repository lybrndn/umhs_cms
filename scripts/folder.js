function start_studentView() {
   document.getElementById('students-link').style.display = 'none';
   document.getElementById('folder-owner').textContent = "Derrick Sung's student folder"; 
}

function start_adminView() {
   document.getElementById('students-link').style.display = 'inline-block';
   document.getElementById('folder-owner').textContent = "Professor Mackey's folder"; 
}

function checkAccount() {
   if (sessionStorage.admin == 'true') {
      start_adminView();
   } else {
      start_studentView();
   }
}

checkAccount();
