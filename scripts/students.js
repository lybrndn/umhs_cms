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
      window.location.href = "folder.html";
   }
}
