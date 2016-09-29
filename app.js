$(document).ready(function() { 

	$('form').on('submit', function(event) { 

		event.preventDefault();

		$('#js-word-count').empty();
		$('#js-unique-count').empty();
		$('#js-avg-word-length').empty();
		$('#js-avg-sentence-length').empty();


		var currentInput = $('textarea').val();
		var wordArray = findWordCount(currentInput);
		var wordCount = wordArray.length;
			$('#js-word-count').append(wordCount);

		var uniqueCount = findUniqueCount(wordArray);
			$('#js-unique-count').append(uniqueCount);

		var avgWordLength = findAvgWordLength(wordArray);
			$('#js-avg-word-length').append(avgWordLength);	

		var avgSentenceLength = findAvgSentenceLength(currentInput);
			$('#js-avg-sentence-length').append(avgSentenceLength);	

		$('dl').removeClass('hidden');
	});
});

function findWordCount(input) {
	return input.split(" ");
}

function findUniqueCount(arr) {
	var uniqueWords = [];
	for (var i = 0; i < arr.length; i++) {
		for (var j = i+1; j < arr.length; j++) {
			if (arr[i] === arr[i+j]) break;
			else if (j === arr.length-1 && arr[i] !== arr[i+j]) uniqueWords.push(arr[i]);
			else continue;
		}
	}
	return uniqueWords.length;
}

function findAvgWordLength(arr) {
	var wordLength = 0;
	for (var i = 0; i < arr.length; i++) {
		wordLength += arr[i].length;
	}
	return (wordLength/arr.length).toFixed(2); 
}

function findAvgSentenceLength(string) {
	var sentenceLength = 0;
	var byPeriod = string.split(".");
	for (var i = 0; i < byPeriod.length-1; i++) {
		sentenceLength += byPeriod[i].length;
	}
	return (sentenceLength/(byPeriod.length-1)).toFixed(2);
}



