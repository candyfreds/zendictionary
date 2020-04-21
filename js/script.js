// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
  


	// Listen for any change in the dropdown menu
	$(".menu").on("change", function(event) {
		
		// Assign the value of whichever dropdown menu item the user chooses to a variable named "choice"
		var choice = $(this).val();

		// Remove the 'active' class from any .active .items
		$(".item.active").removeClass("active");

		// Add the 'active' class to any items whose class corresponds to the filter choice
		$("." + choice).addClass("active");
	});

/* by TC McCarthy
https://github.com/tc-mccarthy/edu/tree/master/exercises/js/filter_foods
*/




// End of Your Code . Don't delete that line below!!
});