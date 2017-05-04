var msgText = "Are you sure you want to permanently delete the selected student(s)?";
var html = document.querySelector('html');

var panel = document.createElement('div');
panel.setAttribute('class', 'msgBox');

var msg = document.createElement('p');
msg.textContent = msgText;
panel.appendChild(msg);

var del = document.createElement('button');
var cancel = document.createElement('button');
var delText = document.createTextNode("Delete");
var cancelText = document.createTextNode("Cancel");
del.appendChild(delText);
cancel.appendChild(cancelText);
del.setAttribute('onclick','deleteAssignment()');
cancel.setAttribute('onclick','cancelMsgBox()');
del.setAttribute('class','msgButton');
cancel.setAttribute('class','msgButton');

panel.appendChild(cancel);
panel.appendChild(del);

var dimDiv = document.createElement('div');
dimDiv.setAttribute('id', 'dimmer');
html.appendChild(dimDiv);

function dim(bool) {
   document.getElementById('dimmer').style.display = (bool? 'block' : 'none');
}
function confirmDelete() {
   html.appendChild(panel);
   dim(true);
}
function deleteAssignment() {
   html.removeChild(panel);
   document.getElementById('derrick').style.display = 'none';
   dim(false);
}
function cancelMsgBox() {
   html.removeChild(panel);
   dim(false);
}

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
   } else if (action === "delete") {
      confirmDelete();
   }
}

function viewStudentInfo() {
   var action = document.querySelector('#student-action').value;
}
