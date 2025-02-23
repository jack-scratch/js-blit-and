document.addEventListener("DOMContentLoaded", async function() {
	window.canv = document.getElementById("disp");
	
	window.ctx = canv.getContext("2d");

	ctx.fillStyle = bg;
	ctx.fillRect(0, 0, 800, 600);
});
