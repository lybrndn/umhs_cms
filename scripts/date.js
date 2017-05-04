var dates = document.getElementsByClassName('date');

var today = new Date();
var month = today.getMonth() + 1;
var day = today.getDate();
var year = today.getFullYear();

today = month + "/" + day + "/" + year;

for (var i = 0; i < dates.length; i++) {
   dates[i].textContent = today;
}
