$("form").on("submit",function(e) {
	e.preventDefault();
	// console.log("hello in keydown");

	// if(e.keyCode === 13) {
		// console.log("hello Brooke");
	var readytoadd = $("#newitemtoadd").val();
	console.log(readytoadd);

	var newServerObject = {
		name: readytoadd
	};
	console.log(newServerObject);
	myObj.postToDo(newServerObject);
	myObj.getToDo(newServerObject);
});


var myObj = {
	postToDo: function(data) { 
		var newTodo = data;

	$.ajax({
		type:"POST",
		url: "http://tiy-fee-rest.herokuapp.com/collections/brookebc",
		data: newTodo,
		datatype: "json",
		error: function(jqXHR, status, error){
			alert("no! there is an error.");
		},
		success: function (data, datatype, jqXHR){
			console.log("it hears this function");
			return(data);
		}
	});

},
	getToDo: function(data) { 
		var newTodo = data;
		var html = '';

	$.ajax({
		type:"GET",
		url: "http://tiy-fee-rest.herokuapp.com/collections/brookebc",
		data: data,
		datatype: "json",
		error: function(jqXHR, status, error){
			alert("no! it is not posting this to the page.");
		},
		success: function (data, datatype, jqXHR){
			console.log("yeah it is working down here");

			for (var i = 0; i < data.length; i++){

				console.log(data);
				var obj = data;
				var html = '';

			var activeArrayString =_.template($("#toDoTmpl").html());
				console.log("i got here");
				// console.log(activeArrayString);
			$("#righthere").append(activeArrayString, data);
			};
		},
	});

}

};






// var tmpl = _.template(data);
// 			$(el).html(tmpl(json));

// var myObj = {
// 	removeToDo: function(data) { 
// 		var newTodo = data;



// }

// };

// removeToDo(data);


// $.ajax({
// 	url: "http://tiy-fee-rest.herokuapp.com/collections/brookebc",
// 	type:"GET",
// 	datatype: "json",
// 	error: function(jqXHR, status, error){
// 		alert("no! there is an error.");
// 	},
// 	success: function (data, datatype, jqXHR){
// 		console.log("success- it is GETting the info");
// 	}
// });

