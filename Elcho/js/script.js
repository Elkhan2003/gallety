document.addEventListener("DOMContentLoaded", () => {
	const mediaFiles = document.querySelectorAll("img, video", "div", "body", "link");
	let i = 0;

	Array.from(mediaFiles).forEach((file, index) => {
		file.onload = () => {
			i++;

			percents.innerHTML = ((i * 100) / mediaFiles.length).toFixed(1);

			if (i === mediaFiles.length) {
				preloader.classList.add("preloader--hide");
				percents.innerHTML = 100;
			}
		};
	});
});