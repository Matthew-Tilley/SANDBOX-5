var a = document.getElementById("item_1");
var b = document.getElementById("item_2");
var c = document.getElementById("item_3");

var d = [a,b,c];

$(document).ready(function()
{
	$("#button_1").on("click", function()
	{
		/*$("#item_1")	.hide()
						.delay(1000)
						.fadeIn();*/
		
		for (var items in d)
			{
				$(this).fadeOut();
			}
		
	});
	
});








/*d.forEach(function(item){
	$(item).fadeOut();
});*/









/*for (i=0; i<50; i++)
	{
		console.log(i);
	}*/


/*$(document).ready(function()
{
	
	for (i=0; i<d; i++)
{
	$(d).fadeOut(1500);
}

	
	$(a).fadeOut(2500);
	$(b).fadeOut(3500);
	$(c).fadeOut(4500);
	
});*/