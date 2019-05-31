//var regex=/^[a-zA-Z]+[-\.]?[a-z]+@[a-zA-Z]+\.[a-zA-Z]+\.?[a-zA-Z]+?$/;  


document.forms.login.addEventListener("submit",


	function (e) {

		e.preventDefault();


		var y = document.getElementById("pass").value;
		var x = document.getElementById("name").value;

		var flag_A = false;
		var flag_b = false;

		//	   check email


		if (check(x)) {
			flag_A = true;


		} else {
			alert("false");
			flag_A = false;
			document.getElementById("error_email_field").innerHTML = "invalid email";

		}

		//			------- check pass ----

		if (checkPass(y)) {

			flag_b = true;

		} else {


			flag_b = false;
		}


		if ((flag_A == true) && (flag_b == true)) {

//			alert(" done done");

			window.location.href = "../index.html";
		}

	}

);



function check(name) {


	//	var regex=/^[a-zA-Z]+[-\.]?[a-z]+@[a-zA-Z]+\.[a-zA-Z]+\.?[a-zA-Z]+?$/;  

	var regex = /^\w+([\.-\/]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var found = regex.test(name);
	return found;

}



function checkPass(pass) {



	var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,12}$/;
	var found = regex.test(pass);
	return found;



}
