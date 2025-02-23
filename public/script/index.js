const wd = 800;
const ht = 600;

document.addEventListener("DOMContentLoaded", async function() {
	window.canv = document.getElementById("disp");
	
	window.ctx = canv.getContext("2d");

	ctx.fillStyle = bg;
	ctx.fillRect(0, 0, wd, ht);
});
