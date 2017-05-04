function viewHomeDir() {
   var directories = document.getElementsByClassName('dir');
   var files = document.getElementsByClassName('file');
   for (var i = 0; i < directories.length; i++) {
      directories[i].style.display = 'inline';
   }
   for (var i = 0; i < files.length; i++) {
      files[i].style.display = 'none';
   }
}

function viewHandoutsDir() {
   var directories = document.getElementsByClassName('dir');
   var files = document.getElementsByClassName('file');
   for (var i = 0; i < directories.length; i++) {
      directories[i].style.display = 'none';
   }
   for (var i = 0; i < files.length; i++) {
      files[i].style.display = 'inline';
   }
}

function viewCheckboxes() {
   document.getElementById('selectall-label').style.display = 'inline';
   document.getElementById('cancel-link').style.display = 'inline';
   document.getElementById('download-link').textContent = 'Download Selected Item(s)';
   var checkboxes = document.getElementsByName('item-checkbox');
   for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].style.display = 'inline';
      checkboxes[i].checked = false;
   }
}

function hideCheckboxes() {
   document.getElementById('selectall-label').style.display = 'none';
   document.getElementById('cancel-link').style.display = 'none';
   document.getElementById('download-link').textContent = 'Download';
   var checkboxes = document.getElementsByName('item-checkbox');
   for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].style.display = 'none';
   }
}

function selectAll() {
   var selectall = document.querySelector('#selectall');
   var checkboxes = document.getElementsByName('item-checkbox');
   if (selectall.checked == true) {
      for (var i = 0; i < checkboxes.length; i++) {
	 checkboxes[i].checked = true;
      }
   } else {
      for (var i = 0; i < checkboxes.length; i++) {
	 checkboxes[i].checked = false;
      }

   }
}

function uploadReadme() {
   document.getElementById('readme').style.display = 'table-row';
}

function start_studentView() {
   document.getElementById('students-link').style.display = 'none';
   document.getElementById('folder-owner').textContent = "Derrick Sung's student folder"; 
}

function start_adminView() {
   document.getElementById('students-link').style.display = 'inline-block';
   document.getElementById('folder-owner').textContent = "Professor Mackey's folder"; 
}

function checkAccount() {
   if (sessionStorage.admin == 'true') {
      start_adminView();
   } else {
      start_studentView();
   }
}

checkAccount();
