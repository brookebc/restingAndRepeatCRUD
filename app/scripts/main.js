// $(document).ready(function() {

// 	var activeliststring = _.template($("#putitheretmp").html(), activetodoarray);

// 	$("#righthere").append(activeliststring);
// 	// calculateCompleted();
// });


// var completedtotal = 0;

// var calculateCompleted = function () {
// 	console.log("calculateCompleted called")
// 	var completedtotal = 0;
// 	$('#righthere').children().each(function(child, elem){
// 		console.log("loop called, individual child item is:", child, elem)
// 		if ($(elem).hasClass('completed')) {

// 			completedtotal = completedtotal +1;
// 			console.log("completedtotal: "+completedtotal);
// 			var showcompletedtotal= ("completedtotal: "+completedtotal);
// 			console.log(showcompletedtotal);
// 			("#Donetotal").append(showcompletedtotal);

// 		} else {
// 			return completedtotal;
// 			alert("You have not completed any items!");
// 		};
		
// 	})
// }


// $("input").on("keydown",function(e) {
// 	console.log("hello in keydown");

// 	if(e.keyCode === 13) {
// 		// console.log("hello Brooke");
// 	var readytoadd = $("#newitemtoadd").val();
// 	console.log(readytoadd);
// 	// var readytoadd = new activetodoarray(object);

// 	var newToDoObj = {
//   					activity: readytoadd			
//   		}

// 	activetodoarray.push(newToDoObj);
// 	console.log(activetodoarray);
	
// 	var activeliststring = _.template($("#putitheretmp").html(), activetodoarray);
// 	$("#righthere").html(activeliststring);
// 	calculateCompleted();

// }
// });

$.ajax({
		type:"DELETE",
		url: "http://tiy-fee-rest.herokuapp.com/collections/brookebc/536950fddd635e0200000020",
		data: "data"
	});




