$("document").ready(function () {

	'use strict';

	//			 alertify.alert(" Islam Elamer UI ");


	var url = "https://jsonplaceholder.typicode.com/posts";

	var postsNames = '<ul>';

	var contentNames = '<ul>';
	var buttons = '<ul>';

	var mybtn1 = '<input type="button" class="read" id="edit" value="Read more"> ';

	var mybtn2 = '<button class="delete">delete</button>';
	$.get(url, function (response) {


		$.each(response, function (index, mypost) {


			postsNames += '<li class="card">' +

				'<h2><i class="far fa-bookmark"></i></h2>' +

				'<h2>' + mypost.title + '</h2>' +
				'<div class="body">' + mypost.body + '</div>' +
				'<div class="btns">' +


				' <input type="button" ' + 'data-value="' + mypost.id + '"' + 'class="read" id="edit" value="Read More"> '



				+
				'</div>'


				+
				'</li>';



		});
		postsNames += '</ul>';


		$("#myList").html(postsNames).hide();
		$("#myList").fadeIn(1000);



		//		--------------- start edit buttom 


		$(".read").click(function (e) {


			alertify.alert(" Just for Testing ");


		});

		$("#title-value").val(localStorage.getItem("title"));
		$("#post-value").val(localStorage.getItem("body"));


		//		-----------end of click edit--------------




		// -----------------end submitEdit() ------------------	





	}); //----- end upper response 







}); //----- end j query
