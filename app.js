document.addEventListener("DOMContentLoaded", function () {
	//   Main Sidebar menus dropdown
	const revealerMenus = document.querySelectorAll(".revealer");
	const dropInstigaters = document.querySelectorAll(".drop-instigater");

	dropInstigaters.forEach((dropInstigater) => {
		dropInstigater.addEventListener("click", function (e) {
			console.log("TARGET", e.target);
			console.log("CURRENT TARGET", e.target);

			// if (e.target !== this) return;

			//  For multiple elements clicks single time
			if (
				document.querySelector(".drop-instigater.active") &&
				document.querySelector(".drop-instigater.active") !== dropInstigater
			) {
				document
					.querySelector(".drop-instigater.active")
					?.classList.toggle("active");
				document.querySelector(".revealer.active")?.classList.toggle("active");
			}

			//   For individual click on menu twice

			dropInstigater.classList.toggle("active");
			if (dropInstigater.classList.contains("active")) {
				dropInstigater.parentElement.classList.remove("transition");
				dropInstigater.parentElement.classList.add("active");
				dropInstigater.classList.add("active");
			} else {
				dropInstigater.parentElement.classList.add("transition");
				dropInstigater.parentElement.classList.remove("active");
				dropInstigater.classList.remove("active");
			}
		});
	});

	// Main Sidebar menu reveal
	const hamburgerIcon = document.querySelector(".hamburger-icon");
	const overlay2 = document.querySelector(".overlay2");
	const mainSidebar = document.querySelector("aside#aside.aside1");

	hamburgerIcon.addEventListener("click", () => {
		hamburgerIcon.classList.toggle("active");
		overlay2.classList.toggle("active");
		mainSidebar.classList.toggle("activate");
	});
	overlay2.addEventListener("click", () => {
		hamburgerIcon.classList.remove("active");
		overlay2.classList.remove("active");
		mainSidebar.classList.remove("activate");
	});

	// Cards
	const tdcCards = document.querySelectorAll(".tdc-card");
	const tdcCardsWrappers = document.querySelectorAll(".tdc-card-wrapper");

	tdcCards.forEach((tdcCard) => {
		tdcCard.addEventListener("click", (e) => {
			if (tdcCard.classList.contains("active")) {
				tdcCard.classList.remove("active");
				tdcCard.parentElement.classList.remove("active");
			} else {
				document.querySelector(".tdc-card.active")?.classList.remove("active");
				document
					.querySelector(".tdc-card-wrapper.active")
					?.classList.remove("active");
				tdcCard.classList.add("active");
				tdcCard.parentElement.classList.add("active");
			}
		});
	});

	// Card Tooltip
	const cardHearts = document.querySelectorAll(
		".tdc-card-wrapper .tdc-card .tdc-img-info span .fa-heart"
	);
	const cardTooltips = document.querySelectorAll(
		".tdc-card-wrapper .tooltip.tooltip-bottom span.tooltip-text"
	);
	const cardTooltipsDownArr = document.querySelectorAll(
		".tdc-card-wrapper .tooltip-down-arr"
	);

	cardHearts.forEach((cardHeart) => {
		cardHeart.addEventListener("mouseover", () => {
			if (
				!cardHeart.parentElement.parentElement.parentElement.parentElement.classList.contains(
					"active"
				)
			)
				cardHeart.parentElement.parentElement.parentElement.parentElement.classList.add(
					"activate"
				);
		});
		cardHeart.addEventListener("mouseleave", () => {
			cardHeart.parentElement.parentElement.parentElement.parentElement.classList.remove(
				"activate"
			);
		});
	});

	const cardHearts2 = document.querySelectorAll(
		".card-info .info-header .fa-heart"
	);
	const cardTooltips2 = document.querySelectorAll(
		".card-info .info-header .tooltip-heart-bottom .tooltip-text"
	);
	const cardTooltipsDownArr2 = document.querySelectorAll(
		".card-info .info-header .tooltip-heart-down-arr"
	);

	cardHearts2.forEach((cardHeart) => {
		cardHeart.addEventListener("mouseover", () => {
			cardHeart.parentElement.parentElement.parentElement.classList.add(
				"activate"
			);
		});
		cardHeart.addEventListener("mouseleave", () => {
			cardHeart.parentElement.parentElement.parentElement.classList.remove(
				"activate"
			);
		});
	});

	// Filter Sidebar Popup
	const filterBtn = document.querySelector("button.filter-btn");
	const filterSidebar = document.querySelector("aside.aside-2");
	const overlay = document.querySelector(".overlay");

	filterBtn.addEventListener("click", () => {
		filterSidebar.classList.add("activate");
		overlay.classList.add("active");
	});

	overlay.addEventListener("click", () => {
		filterSidebar.classList.remove("activate");
		overlay.classList.remove("active");
	});
	console.log(filterSidebar);

	// Loading page
	const loadingComp = document.querySelector(".loading-overloading");

	setTimeout(() => {
		loadingComp.classList.remove("display");
	}, 3000);
});
