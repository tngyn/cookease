$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// Google analytics events
	$(".button-for-inventory").click(updateLike);

	// confirmation for delete dialog box
	$('.button-for-delete').click(getConfirmation);
}

// Google analytics send
function updateLike(e) {
	ga("send", "event", "collapse", "click");
}

function getConfirmation(e) {
	var itemID = $(this).closest('.inventory-listings').attr('id');
	console.log(itemID);

	var retVal = confirm("Are you sure you want to delete?");
	if( retVal == true ){
		// $.getJSON("../public/data/inventorydata.json", function(data) {
		// 	console.log(data);
		// });
		return true;
   	}else{
   		return false;
   	}
}

