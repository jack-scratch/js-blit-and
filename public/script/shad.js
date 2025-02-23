function solid(x, y) {
	return true;
}

function hStripe(x, stroke) {
	return x % stroke > stroke / 2;
}

function vStripe(y, stroke) {
	return y % stroke > stroke / 2;
}
