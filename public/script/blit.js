function blitRect(loc, ln) {
	ctx.fillRect(loc[0], loc[1], ln[0], ln[1]);
}

function blitSq(loc, ln) {
	blitRect([loc[0], loc[1]], [ln, ln]);
}

function blitPix(loc) {
	blitSq([loc[0], ht - loc[1]], 1);
}

function blitHLine(loc, ln) {
	for (let i = 0; i < ln; i++) {
		blitPix([loc[0] + i, loc[1]]);
	}
}

function blitVLine(loc, ln) {
	for (let i = 0; i < ln; i++) {
		blitPix([loc[0], loc[1] + i]);
	}
}

function blitLine(start, end) {
	const slope = Math.delta(start[1], end[1]) / Math.delta(start[0] - end[0]);

	let dir = 1;
	let baseY = start[1];
	if (end[0] < start[0]) {
		dir = -1;
		baseY = end[1];
	}

	for (let x = 0; x < Math.abs(Math.delta(start[0], end[0])); x++) {
		blitPix([start[0] + (x * dir), baseY + (x * slope)]);
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
