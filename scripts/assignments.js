function start_studentView() {
   document.getElementById('students-link').style.display = 'none';
   document.getElementById('post-assignment').style.display = 'none';
}

function start_adminView() {
   document.getElementById('students-link').style.display = 'inline-block';
   document.getElementById('post-assignment').style.display = 'block';
}

function checkAccount() {
   if (sessionStorage.admin == 'true') {
      start_adminView();
   } else {
      start_studentView();
   }
}

checkAccount();
