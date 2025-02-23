function save() {
	var url = canv.toDataURL("image/png");
	var newTab = window.open('about:blank', 'image from canvas');

	newTab.document.write("<img src='" + url + "' alt='from canvas'/>");
}

document.addEventListener("DOMContentLoaded", async function() {
	window.canv = document.getElementById("disp");
	
	window.ctx = canv.getContext("2d");

	ctx.fillStyle = bg;
	ctx.fillRect(0, 0, 800, 600);

	blitPix(3, 7);
});
