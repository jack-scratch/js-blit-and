function blitRect(loc, ln) {
	ctx.fillRect(loc.x, loc.y, ln.x, ln.y);
}

function blitSq(loc, ln) {
	blitRect(new Cart(loc.x, loc.y), new Cart(ln, ln));
}

function blitPix(loc) {
	blitSq(new Cart(loc.x, ht - loc.y), 1);
}

function blitHLine(loc, ln) {
	for (let i = 0; i < ln; i++) {
		blitPix(new Cart(loc.x + i, loc.y));
	}
}

function blitVLine(loc, ln) {
	for (let i = 0; i < ln; i++) {
		blitPix(new Cart(loc.x, loc.y + i));
	}
}

function blitLine(start, end) {
	const slope = Math.delta(start.y, end.y) / Math.delta(start.x - end.x);

	let dir = 1;
	let baseY = start.y;
	if (end.x < start.x) {
		dir = -1;
		baseY = end.y;
	}

	for (let x = 0; x < Math.abs(Math.delta(start.x, end.x)); x++) {
		blitPix(new Cart(start.x + (x * dir), baseY + (x * slope)));
	}
}

function blitSin(amp, freq = 1, theta = 0) {
	for (let x = 0; x < wd; x++) {
		for (let y = 0; y < ht; y++) {
			if (y < Math.sin(theta + ((x / wd) * freq * Math.PI * 2)) * amp) {
				ctx.fillRect(x, y, 1, 1);
			}
		}
	}
}
