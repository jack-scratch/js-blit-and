function blitRect(x, y, wd, ht) {
	ctx.fillStyle = js;

	ctx.fillRect(x, y, wd, ht);
}

function blitPix(x, y) {
	ctx.fillStyle = js;

	blitRect(x, y, 1, 1);
}
