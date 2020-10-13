function f() {
  var str = document.getElementById("t1").value;
  document.getElementById("t2").innerHTML = str.repeat(1300);
  document.getElementById("a").style.display = "none";
  bg();
}
function bg() {
	var x = document.getElementById("n1").value;
	if (x=='Komal') {
		document.getElementById('t2').style.backgroundImage = "url('1.jpg')";
	}
	else if (x=='Tej') {
		document.getElementById('t2').style.backgroundImage = "url('2.jpg')";
	}
	else if (x=='Khushi') {
		document.getElementById('t2').style.backgroundImage = "url('3.jpg')";
	}
	else if (x=='Meet') {
		document.getElementById('t2').style.backgroundImage = "url('4.jpg')";
	}
	else if (x=='Prachi') {
		document.getElementById('t2').style.backgroundImage = "url('5.jpg')";
	}
	else if (x=='Adinath') {
		document.getElementById('t2').style.backgroundImage = "url('6.png')";
	}
}