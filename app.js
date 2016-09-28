$(document).ready(function(){
	$(".burgerwrapper").click(function(){
		console.log("click");
		$("#menuoverlay").fadeToggle()
	});

	$(".closeoverlay").click(function(){
		$("#menuoverlay").fadeOut()
	})
		






});