<script>
	let images = [
		"bad-weather.jpeg",
		"fishing-not-working.jpeg",
		"fishing-pictures-and-quotes-1.jpg"
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
