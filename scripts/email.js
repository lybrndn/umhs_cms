function start_studentView() {
   document.getElementById('students-link').style.display = 'none';
   var adminMsgs = document.getElementsByClassName('admin-message');
   for (var i = 0; i < adminMsgs.length; i++) {
      adminMsgs[i].style.display = 'none';
   }
   var studentMsgs = document.getElementsByClassName('student-message');
   for (var i = 0; i < adminMsgs.length; i++) {
      studentMsgs[i].style.display = 'block';
   }
}

function start_adminView() {
   document.getElementById('students-link').style.display = 'inline-block';
   var adminMsgs = document.getElementsByClassName('admin-message');
   for (var i = 0; i < adminMsgs.length; i++) {
      adminMsgs[i].style.display = 'block';
   }
   var studentMsgs = document.getElementsByClassName('student-message');
   for (var i = 0; i < adminMsgs.length; i++) {
      studentMsgs[i].style.display = 'none';
   }
}

function checkAccount() {
   if (sessionStorage.admin == 'true') {
      start_adminView();
   } else {
      start_studentView();
   }
}

checkAccount();
