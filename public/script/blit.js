function blitRect(x, y, wd, ht) {
	ctx.fillRect(x, y, wd, ht);
}

function blitSq(x, y, ln) {
	blitRect(x, y, ln, ln);
}

function blitPix(x, y) {
	blitSq(x, ht - y, 1);
}
