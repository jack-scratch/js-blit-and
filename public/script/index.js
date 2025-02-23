document.addEventListener("DOMContentLoaded", async function() {
	window.canv = document.getElementById("disp");
	
	const ctx = canv.getContext("2d");

	ctx.fillStyle = "#f0db4f";
	ctx.fillRect(3, 7, 12, 3);
});
