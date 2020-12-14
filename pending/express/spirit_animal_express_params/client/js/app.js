$(document).ready(function(){

	$('#quiz').hide();

	$('#start-button').on('click', () => {
		$('#quiz').show();
		$('#start').hide();
	});

	var quiz = [
		'I appreciate life', 
		'I take advantage of my time', 
		'I take care of myself',
		'I get along with my family',
		'I make sure to spend time with my family',
		'I get along with my friends',
		'I make sure to spend time with my friends'
	]

	var answers = [
		'Strongly Agree',
		'Agree',
		'Right in the middle',
		'Disagree',
		'Strongly Disagree'
	]

	var quizDiv = $('<div id="quiz-div">');
	quizDiv.css({margin: '20px', border: 'black', borderWidth: '2px', borderStyle: 'solid', display: 'inline-block'});
	var showQuestion = (index) => {
		var qDiv = $('<div id="qDiv">');
		var qText = $('<p>',{
			text: quiz[index]
		});
		qText.css({fontSize: '30px'})
		qDiv.append(qText);
		quizDiv.append(qDiv);

		quizDiv.append(showAnswers());

		var nextButton = $('<button id="next-button">');
		nextButton.text("Next");
		nextButton.css('margin-left', "15px");
		quizDiv.append(nextButton);

		$('#quiz').append(quizDiv);
	}
	var showAnswers = () => {
		var inputDiv = $('<div>');
		inputDiv.css({margin: '10px'})
		var newInput;
		var str = ""
		for(var i = 0; i < answers.length; i++){
			str += "<input type='radio' name='answer' value=" + (i + 1) + "> " + answers[i] + "<br>"
		}
		inputDiv.append(str);
		return inputDiv;
	}

	showQuestion(0);

	var indexNum = 0;
	var totalArr = [];
	$(document).on('click', '#next-button', function(){
		if(indexNum < quiz.length - 1){
			var radioValue = $("input[name='answer']:checked").val();
			if(radioValue){
				totalArr.push(parseInt(radioValue))
				$('#quiz-div').empty();
				indexNum++
				showQuestion(indexNum);
			} else {
				alert("Please pick an answer")
			}
		} else {
			$('#quiz-div').remove();
			var reduced = totalArr.reduce((sum, value) => { return sum + value });

			window.location.href = `/sa/${calculateThis(reduced)}`
		}
	});

	const calculateThis = (num) => {
		switch(true){
			case num <= 6:
				return 'dolphin';
				break;
			case num > 6 && num <= 12:
				return 'eagle';
				break;
			case num > 12 && num <= 18:
				return 'fox';
				break;
			case num > 18 && num <= 24:
				return 'panther';
				break;
			default:
				return 'spider';
		}
	}

});