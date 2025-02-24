function blitRect(x, y, wd, ht) {
	ctx.fillRect(x, y, wd, ht);
}

function blitSq(x, y, ln) {
	blitRect(x, y, ln, ln);
}

function blitPix(x, y) {
	blitSq(x, ht - y, 1);
}

function blitHLine(x, y, ln) {
	for (let i = 0; i < ln; i++) {
		blitPix(x + i, y);
	}
}

function blitVLine(x, y, ln) {
	for (let i = 0; i < ln; i++) {
		blitPix(x, y + i);
	}
}
