var date = document.querySelector('#date');

var today = new Date();
var month = today.getMonth() + 1;
var day = today.getDate();
var year = today.getFullYear();

today = month + "/" + day + "/" + year;

date.textContent= "Date: " + today;
