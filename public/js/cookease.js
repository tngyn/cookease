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

	$('.submit-item').submit(addItem);
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

	var retVal = confirm("Are you sure you want to remove " + itemName + " from your inventory?");
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

function addItem(e) {
	var itemName = $(this).find('input[name="formsearch"]').val();
	console.log(itemName);

	var json = {
		"item": itemName,
	};

	$.post('/inventory/add', json, function() {
		window.location.href = '/inventory';
	});

	alert(itemName + " has been added to inventory. We'll refresh the page and update your inventory now!" );
}