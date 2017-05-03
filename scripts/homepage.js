function start_studentView() {
   document.getElementById('students-link').style.display = 'none';
}

function start_adminView() {
   document.getElementById('students-link').style.display = 'inline-block';
}

function checkAccount() {
   if (sessionStorage.admin == 'true') {
      start_adminView();
   } else {
      start_studentView();
   }
}

checkAccount();
