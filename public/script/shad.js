function solid(x, y) {
	return true;
}

function hStripe(x, stroke) {
	return x % stroke > stroke / 2;
}

function vStripe(y, stroke) {
	return y % stroke > stroke / 2;
}

function diagStripe(x, y, stroke) {
	return (x + y) % stroke > stroke / 2;
}

function checker(x, y, ln) {
	return hStripe(x, ln) ^ vStripe(y, ln);
}
