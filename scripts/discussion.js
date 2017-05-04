function viewSingleThread() {
   var board = document.getElementsByClassName('board');
   var reply = document.getElementsByClassName('reply');
   for (var i = 0; i < board.length; i++) {
      board[i].style.display = 'none';
   }
   for (var i = 0; i < reply.length; i++) {
      reply[i].style.display = 'block';
   }
   if (sessionStorage.admin == "true") {
      document.getElementById('author').textContent = 'David Mackey';
   } else {
      document.getElementById('author').textContent = 'Derrick Sung';
   }
}

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
