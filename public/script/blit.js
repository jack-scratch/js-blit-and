function blitRect(x, y, wd, ht) {
	ctx.fillStyle = js;

	ctx.fillRect(x, y, wd, ht);
}

function blitSq(x, y, ln) {
	ctx.fillStyle = js;

	blitRect(x, y, ln, ln);
}

function blitPix(x, y) {
	ctx.fillStyle = js;

	blitSq(x, y, 1);
}
