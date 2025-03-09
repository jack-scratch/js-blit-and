document.addEventListener("DOMContentLoaded", async function() {
	window.canv = document.getElementById("disp");

	canv.width = wd;
	canv.height = ht;
	
	window.ctx = canv.getContext("2d");

	ctx.fillStyle = bg;
	ctx.fillRect(0, 0, wd, ht);

	ctx.fillStyle = js;
});
