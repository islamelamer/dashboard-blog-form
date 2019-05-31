$("document").ready(function () {

	'use strict';

	//			 alertify.alert(" Islam Elamer UI ");


	var url = "https://jsonplaceholder.typicode.com/posts";

	var postsNames = '<ul>';

	var contentNames = '<ul>';
	var buttons = '<ul>';

	var mybtn1 = '<input type="button" class="edit" id="edit" value="edit"> ';

	var mybtn2 = '<button class="delete">delete</button>';
	$.get(url, function (response) {


		$.each(response, function (index, mypost) {


			postsNames += '<li class="card">' +

				'<h2><i class="far fa-bookmark"></i></h2>' +

				'<h2>' + mypost.title + '</h2>' +
				'<div class="body">' + mypost.body + '</div>' +
				'<div class="btns">' +


				' <input type="button" ' + 'data-value="' + mypost.id + '"' + 'class="edit" id="edit" value="edit"> '


				+

				' <input type="button" ' + 'data-value="' + mypost.id + '"' + 'class="delete" id="edit" value="delete"> '


				+
				'</div>'


				+
				'</li>';



		});
		postsNames += '</ul>';


		$("#myList").html(postsNames).hide();
		$("#myList").fadeIn(1000);




		//		--------------- start edit buttom 


		$(".edit").click(function (e) {




			//		var editCon=$(this).parent().siblings(".body").html(); 
			var ID = $(this).attr("data-value");
			var edit_url = "https://jsonplaceholder.typicode.com/posts/" + ID;


			var myID = localStorage.getItem("edit");
			console.log("this message from local you will edit " + myID)


			$.get(edit_url, function (ee) {

				alert(" you will edit post #" + ID);
				var title = ee.title;
				var body = ee.body;
				localStorage.setItem("id", ID);
				localStorage.setItem("title", title);
				localStorage.setItem("body", body);
				window.location.href = "edit.html";

			});


			//			 $("#post-content").text(localStorage.getItem("title"));


		});

		$("#title-value").val(localStorage.getItem("title"));
		$("#post-value").val(localStorage.getItem("body"));


		//		-----------end of click edit--------------






		//		--------------start delete Button --------------

		$(".delete").click(function (e) {

			var de_id = $(this).attr("data-value");

			if (confirm(' you will delete this post?' + " post id:" + de_id)) {

				//				console.log( de_id);
				//			


				$.ajax({

					url: "https://jsonplaceholder.typicode.com/posts/" + de_id,

					type: "DELETE",
					data: {
						"id": de_id
					},
					success: function (response) {


						$(e.target).parent().parent().slideUp(500, function () {


							alertify.alert("post has been deleted");

						});

						console.log("done");


					},


					error: function (response) {
						console.log("Sorry")
					}

				})






			}


		})

		//		--------------end delete Button --------------









		// -----------------start submitEdit() ------------------	


		//	 function myFunction (){
		//			
		//			alert("done"); 
		//			
		//			
		//		}



		$("#save-btn").click(function () {
			var t = $("#title-value").val();

			var bo = $("#post-value").val();
			if (bo == "" || t == "") {

				alert(" plz enter two Values");


			} else {
			var e_id = localStorage.getItem("id");
				/*	alert("DONE" + " (request has been sent)" + "post id :" + e_id);


				$.put("https://jsonplaceholder.typicode.com/posts/" + e_id, {
					title: t,
					body: bo
				}, function () {
					alert("put function work" + " you edit posst id #" + e_id);
				})*/

				//			------------ ajax edit by put method 2 
			$.ajax({
				
				url:"https://jsonplaceholder.typicode.com/posts/" + e_id,
				type:"PUT",
				data:{title:t,bodt:bo},
				success:function(response){alert("done .. request has been sent post number: "+e_id)},
				error:function(response){alert("there is an error")}
				
				
				
			})
			
			
//			------------ ajax  edit end

			}
			
			

			
			
			
			


		})





		// -----------------end submitEdit() ------------------	





	}); //----- end upper response 







}); //----- end j query
