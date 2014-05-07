$(document).ready(function(){

ToDos.init();

});


var ToDos = {
init: function() {
	this.initStyling();
	this.initEvents();

},

initStyling: function() {
	this.renderToDos();
},
initEvents: function(){
	$("form").on("submit",this.addToDos);
},

renderToDos: function(){
	
	$.ajax({
			type:"GET",
			url: "http://tiy-fee-rest.herokuapp.com/collections/brookebc",
			datatype: "json",
			error: function(jqXHR, status, error){
				alert("no! it is not posting this to the page.");
			},
			success: function (data, datatype, jqXHR){
				var todos = data;
				console.log(todos);
				
				var html = '';

				for (var i = 0; i <todos.length; i++){
					// var obj = data[i].data;

					// console.log(data);
					
					// var name = name;
					// var name = name;
					
				html += '<li data-postId=' + todos[i]._id + '>' + todos[i].name + '<span class="glyphicon glyphicon-remove removeToDo"></span></li>';
				}; var postId = $(this).closest("article").data("postid");

				console.log("yeah it is working down here- about to add all the todos to the page");
				$("#righthere").html(html);
			}
		});
	},


addToDos: function(e) {
    e.preventDefault();
    // var data = data;

    var newToDo = {
              name: $("#newitemtoadd").val(),
              // _.id: 
        };

	$.ajax({
		type:"POST",
		url: "http://tiy-fee-rest.herokuapp.com/collections/brookebc",
		data: newToDo,
		datatype: "json",
		error: function(jqXHR, status, error){
			alert("no! there is an error.");
		},
		success: function (data, datatype, jqXHR){
			console.log("it hears this function");
			
			$("#newitemtoadd").val(),

			console.log(newToDo);

        	ToDos.renderToDos(data);
		}
	});

}

 // removeItem: function() {
 //    var $thisPost = $(this).closest("article")
 //    var postId = $thisPost.data("postid");

 //    $.ajax({
 //      url: "http://tiy-fee-rest.herokuapp.com/collections/myBlog/" + postId,
 //      type: "DELETE",
 //      error: function(jqXHR, status, error) {
 //        alert("couldnt delete that thing");
 //      }, 
 //      success: function(data) {
 //      	alert("yes! got rid of that todo");
 //         myBlog.renderPosts();  

 //      }
 //    });
 //  }

};	
	



			
	
		








