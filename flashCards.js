// BasicCard constructor takes two arguments: front and back.
// These values represent the text appearing on the front and the back of the created flash card.
exports.BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
}

// ClozeCard constructor takes two arguments: text and cloze.
// These values represent the full text and the cloze-deleted portion of the flashcard text.
exports.ClozeCard = function(text, cloze) {
	// Convert the incoming strings to lower case
	var textToLower = text.toLowerCase();
	var clozeToLower = cloze.toLowerCase();

	// Confirm that the cloze statement appears within the complete text
	if (!textToLower.includes(clozeToLower)) {
		console.log('ERROR: cloze-deletion does not appear within full text -- <' + cloze + '>');
		return;
	}

	this.full = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');
}
