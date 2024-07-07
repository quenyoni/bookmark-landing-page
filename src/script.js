// document
// 	.querySelector("body")
// 	.addEventListener("scroll", function (e) {
// 		console.log("scrolled");
// 	});

// const body = document.querySelector("body");

// body.addEventListener("scroll", function (e) {
// 	console.log("sc", e);
// });
const hamburger =
	document.querySelectorAll(".hamburger");
const form = document.querySelector("form");
const features =
	document.querySelectorAll(".feature");

const featureLinks = document.querySelectorAll(
	"[data-feature-link]",
);

form.addEventListener("submit", function (e) {
	e.preventDefault();
	const input = form.querySelector("input");
	if (input.value) {
		alert("Created Succesfully");
	}
	console.log(value);

	alert("Your Account");
});
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20
	) {
		document
			.querySelector(".header")
			.classList.add("scrolled");
	} else {
		document
			.querySelector(".header")
			.classList.remove("scrolled");
	}
}

// features.forEach(
// 	(f, i) =>
// 		(f.style.transform = `translateX(${
// 			i * 100
// 		}%)`),
// );

featureLinks.forEach((t) => {
	t.addEventListener("click", function (e) {
		e.preventDefault();
		const link = +e.target
			.closest("li")
			.getAttribute("data-feature-link");
		featureLinks.forEach((r) =>
			r.classList.remove("active"),
		);

		featureLinks[link - 1].classList.add(
			"active",
		);

		features.forEach((f) =>
			f.classList.remove("active"),
		);

		document
			.querySelectorAll(`[data-feature]`)
			[link - 1].classList.add("active");
	});
});

function goToSlide(i) {}

const accordionItems = document.querySelectorAll(
	".accordion__item",
);

accordionItems.forEach((a) => {
	a.addEventListener("click", function (e) {
		accordionItems.forEach((z) => {
			z.querySelector(
				".accordion__content",
			).classList.remove("active");
			const svg = z.querySelector("img");
			svg.src = `./assets/images/icon-arrow.svg`;
			svg.style.transform = "rotate(0deg)";
		});
		const selected = e.target.closest(
			".accordion__item",
		);

		const img = selected.querySelector("img");
		const accord = selected.querySelector(
			".accordion__content",
		);

		img.src = `./assets/images/icon-arrow-active.svg`;
		img.style.transform = "rotate(180deg)";
		accord.classList.toggle("active");
	});
});

hamburger.forEach((h) => {
	h.addEventListener("click", function () {
		document
			.querySelector(".mobile__menu")
			.classList.toggle("open");
	});
});
