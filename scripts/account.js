function start_studentView() {
   document.getElementById('students-link').style.display = 'none';
   document.getElementById('full-name').textContent = 'Derrick Sung';
   document.getElementById('first-name').textContent = 'Derrick';
   document.getElementById('last-name').textContent = 'Sung';
   document.getElementById('e-mail').textContent = 'sungd@gmail.com';
}

function start_adminView() {
   document.getElementById('students-link').style.display = 'inline-block';
   document.getElementById('full-name').textContent = 'Professor Mackey';
   document.getElementById('first-name').textContent = 'David';
   document.getElementById('last-name').textContent = 'Mackey';
   document.getElementById('e-mail').textContent = 'mackeyd@gmail.com';
}

start_adminView();
