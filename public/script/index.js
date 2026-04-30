document.addEventListener("DOMContentLoaded", async function() {
	window.canv = document.getElementById("disp");

	canv.width = wd;
	canv.height = ht;
	
	window.ctx = canv.getContext("2d");

	ctx.fillStyle = bg;
	ctx.fillRect(0, 0, wd, ht);

	ctx.fillStyle = js;

	const ln = 100;
	const margin = 8 * 2;
	const bOffset = 16;
	for (let y = 0; y < ht; y++) {
		for (let x = 0; x < wd; x++) {
			if (
				(
					x > margin && x < margin + ln &&
					y > margin && y < margin + ln
				) & (
					x > margin + bOffset && x < margin + bOffset + ln &&
					y > margin + bOffset && y < margin + bOffset + ln
				)
			) {
				ctx.fillRect(x, y, 1, 1);
			}
		}
	}

	const btn = document.getElementById("save");
	const link = document.createElement("a");
	link.download = "blit.png";
	link.href = canv.toDataURL("image/png");
	btn.addEventListener("click", () => {
		link.click();
	});
});
