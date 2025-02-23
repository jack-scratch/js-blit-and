document.addEventListener("DOMContentLoaded", async function() {
	window.canv = document.getElementById("disp");
	
	const ctx = canv.getContext("2d");

	ctx.fillStyle = bg;
	ctx.fillRect(0, 0, 800, 600);

	ctx.fillStyle = js;
	ctx.fillRect(3, 7, 12, 3);
});
