
function parse(){
	var tomboyString = document.getElementById('example-input').value;
	var tomboyMarkdown = new TomboyMarkdown ();
	tomboyMarkdown.convert(tomboyString, doneParsing);
};

function doneParsing(output) {
	document.getElementById('example-output').value = output;
};

document.getElementById('convert').onclick = parse;
