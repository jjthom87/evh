module.exports = (num) => {
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