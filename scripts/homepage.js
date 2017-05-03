function start_studentView() {
   document.getElementById('students-link').style.display = 'none';
   document.getElementById('new-email').textContent = 'RE: Midterm Question';
}

function start_adminView() {
   document.getElementById('students-link').style.display = 'inline-block';
   document.getElementById('new-email').textContent = 'Password Change Request';
}

function checkAccount() {
   if (sessionStorage.admin == 'true') {
      start_adminView();
   } else {
      start_studentView();
   }
}

checkAccount();
