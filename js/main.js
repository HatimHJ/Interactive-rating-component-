const rateList = [...document.getElementsByName("rate")],
	submit = document.querySelector(".btn"),
	content = document.querySelector(".content-wrapper"),
	rated = document.querySelector("#rated"),
	thanks = document.querySelector(".thanks-wrapper");

submit.onclick = (e) => {
	e.preventDefault();
	const x = rateList.filter((item) => item.checked)[0];
	content.classList.add("hide");
	thanks.classList.add("show");
	rated.textContent = x.value;
};
rateList.forEach((item) => {
	item.addEventListener("change", () => {
		submit.style.opacity = item.value * 0.2;
	});
});
