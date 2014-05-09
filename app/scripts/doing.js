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
	$(".list").on("click",".removeToDo", this.removeMe);
	$(".list").on('dblclick', '.changeToDo', this.selectToDo);
	$(".list").on('focusout',"input", this.upateToDo);

},

renderToDos: function(){
	
	$.ajax({
			type:"GET",
			url: "http://tiy-fee-rest.herokuapp.com/collections/brookebc",
			datatype: "JSON",
			error: function(jqXHR, status, error){
				alert("no! it is not posting this to the page.");
			},
			success: function (data, datatype, jqXHR){
				var todos = data;
				console.log(todos);
				
				var html = '';

				for (var i = 0; i <todos.length; i++){
					
				html += '<li data-postId=' + todos[i]._id + '>' + todos[i].name + '<button class="glyphicon glyphicon-pencil changeToDo"></button><button class="glyphicon glyphicon-remove removeToDo" id="removeToDo"></button></li>';
				}; 

				console.log("yeah it is working down here- about to add all the todos to the page");
				$("#righthere").html(html);
			}
		});
},


addToDos: function(e) {
    e.preventDefault();

    var newToDo = {
              name: $("#newitemtoadd").val(),
        };

	$.ajax({
		type:"POST",
		url: "http://tiy-fee-rest.herokuapp.com/collections/brookebc",
		data: newToDo,
		datatype: "JSON",
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

},

removeMe: function(e) {
	e.preventDefault();

	console.log("I heard you click in an li to REMOVE something");

    var $thisToDO = $(this).closest("li");
    console.log($thisToDO);
    var postId = $thisToDO.data("postid");
    console.log(postId);
    
    $.ajax({
    type: "DELETE",
    url: "http://tiy-fee-rest.herokuapp.com/collections/brookebc/" + postId,
    error: function(jqXHR, status, error) {
        alert("error couldnt delete that thing");
    }, 
    success: function(data) {
      	alert("yes! we got rid of that todo");
        ToDos.renderToDos(data);  

      }
    });
},

selectToDo: function(e) {
	e.preventDefault();

	console.log("you clicked and perhaps you want to change something");
	
	var oldText = $(this).closest("li").text();
	console.log(oldText);

    $("<input type='text'>").appendTo(this).focus();
    $(this).closest("li").find("input").val(oldText);
	
},

upateToDo: function(e) {
	e.preventDefault();

var oldpostId = $(this).closest("li").data("postid");
    	console.log(oldpostId);

	    var $this = $(this);
	    $this.text = ($this.val() || oldText);
	    console.log($this.text);
	    $(this).closest("li").text($this.text);
	    $this.remove();  // Don't just hide, remove the element.

	    var updatedData = {
              name: ($this.text)
        };
   
    	$.ajax({
			type:"PUT",
			url: "http://tiy-fee-rest.herokuapp.com/collections/brookebc/" + oldpostId,
			data: updatedData,
			datatype: "JSON",
			error: function(jqXHR, status, error){
				alert("no! there is an error.");
		},
			success: function (data, datatype, jqXHR){
				console.log("its gonna put it up there");

				console.log(updatedData);
				ToDos.renderToDos(data);
        	
		}
	});

}
    
    
}


	







	



			
	
		








