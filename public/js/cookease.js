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
	var itemName = $(this).parent().find('.item').text();
	console.log(itemName);

	var json = {
		"item": itemName,
	};

	var retVal = confirm("Are you sure you want to delete " + itemName + "?");
	if( retVal == true ){
		$.post('/inventory/delete', json, function() {
			window.location.href = '/inventory';
		});
		return true;
   	}
   	else {
   		return false;
   	}
}

