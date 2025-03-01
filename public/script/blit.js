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

function blitLine(startX, startY, endX, endY) {
	const slope = (endY - startY) / (endX - startX);

	let dir = 1;
	let baseY = startY;
	if (endX < startX) {
		dir = -1;
		baseY = endY;
	}

	for (let x = 0; x < Math.abs(endX - startX); x++) {
		blitPix(startX + (x * dir), baseY + (x * slope));
	}
}
