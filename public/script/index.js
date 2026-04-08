document.addEventListener("DOMContentLoaded", async function() {
	window.canv = document.getElementById("disp");

	canv.width = wd;
	canv.height = ht;
	
	window.ctx = canv.getContext("2d");

	ctx.fillStyle = bg;
	ctx.fillRect(0, 0, wd, ht);

	ctx.fillStyle = js;

	const btn = document.getElementById("save");
	const link = document.createElement("a");
	link.download = "blit.png";
	link.href = canv.toDataURL("image/png");
	btn.addEventListener("click", () => {
		link.click();
	});
});
