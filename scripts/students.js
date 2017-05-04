function selectAll() {
   var selectall = document.querySelector('#selectall');
   var checkboxes = document.getElementsByName('student');
   if (selectall.checked === true) {
      for (var i = 0; i < checkboxes.length; i++) {
	 checkboxes[i].checked = true;
      }
   } else{
      for (var i = 0; i < checkboxes.length; i++) {
	 checkboxes[i].checked = false;
      }
   }
}

function studentsAction() {
   var action = document.querySelector('#student-action').value;
   if (action === "viewStudentFolder") {
      var studentFolder = document.getElementsByClassName('view-student-folder');
      var student = document.getElementsByClassName('student');
      for (var i = 0; i < studentFolder.length; i++) {
	 studentFolder[i].style.display = 'block';
      }
      for (var i = 0; i < student.length; i++) {
	 student[i].style.display = 'none';
      }
   } else if (action === "viewInfo") {
      var studentInfo = document.getElementsByClassName('view-student-info');
      var student = document.getElementsByClassName('student');
      for (var i = 0; i < studentInfo.length; i++) {
	 studentInfo[i].style.display = 'block';
      }
      for (var i = 0; i < student.length; i++) {
	 student[i].style.display = 'none';
      }
   }
}

function viewStudentInfo() {
   var action = document.querySelector('#student-action').value;
}
