<script>
	let images = [
		"fish1.jpg",
		"fish2.jpg",
		"fish3.jpg"
		// Add more image URLs here
	];

	let index = 0;
	let slideshow = document.querySelector("#slideshow");

	function changeImage() {
		slideshow.src = images[index];
		index++;
		if (index >= images.length) {
			index = 0;
		}
	}

	setInterval(changeImage, 3000);
</script>
