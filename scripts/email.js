function start_studentView() {
   document.getElementById('students-link').style.display = 'none';
   document.getElementById('dat-msg').style.display = 'none';
   document.getElementById('dis-topic').textContent = 'RE: Midterm Question';
   document.getElementById('dis-msg').textContent = 'Uh... no you may not. See you tomorrow.';
}

function start_adminView() {
   document.getElementById('students-link').style.display = 'inline-block';
   document.getElementById('dat-msg').style.display = 'block';
   document.getElementById('dis-topic').textContent = 'Midterm Question';
   document.getElementById('dis-msg').textContent = 'Can you please email me a digital version of the second midterm that we will be writing tomorrow? I have seen the practice one outside your office, however I fear that the questions on there will not be the exact questions tomorrow. And there is no reason to practice questions that are not going to be on the midterm, might as well practice the exact ones. Thank you in advance.';
}

function checkAccount() {
   if (sessionStorage.admin == 'true') {
      start_adminView();
   } else {
      start_studentView();
   }
}

checkAccount();
