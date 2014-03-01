$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$(".button-for-inventory").click(updateLike);
}

function updateLike(e) {
	ga("send", "event", "collapse", "click");
}