async function getCards() {
	const response = await fetch("db.json");

	const cards = await response.json();

	return cards;
}

getCards().then((cards) => {
	let output = "";
		

	cards.forEach((elem) => {
		
		const cards = document.querySelector("#cards");
		cards.classList = `cards ${elem.category}`;
		cards.style.alignItems = "baseline";
		
		const cardInner = document.createElement("div");
		cardInner.className = "card-inner";
		cardInner.style.width = "500px";
		cards.appendChild(cardInner);
		
		const cardOutput = document.createElement("div");
		cardOutput.className = "card-output";
		cardOutput.style.padding = "20px";
		cardOutput.style.background = "white";
		cardOutput.style.height = "470px";
		cardOutput.style.borderRadius = "20px";
		cardInner.appendChild(cardOutput);
		
		const cardImage = document.createElement("img");
		cardImage.className = "card-img";
		cardImage.src = elem.img;
		cardOutput.appendChild(cardImage);
		
		const title = document.createElement("h3");
		title.className = "card-title";
		title.innerText = elem.title;
		title.style.marginBottom = "15px";
		cardOutput.appendChild(title);
		
		const category = document.createElement("h4");
		category.className = "category";
		category.innerText = elem.category;
		category.style.marginBottom = "15px";
		cardOutput.appendChild(category);
		
		const price = document.createElement("p");
		price.innerText = elem.price + ` сом`;
		price.style.marginBottom = "15px";
		cardOutput.appendChild(price);
		
		const line = document.createElement("hr");
		line.style.marginBottom = "15px";
		cardOutput.appendChild(line);
		
		const desc = document.createElement("p");
		desc.className = "desc";
		desc.innerText = elem.desc;
		desc.style.textAlign = "justify";
		cardOutput.appendChild(desc);




		const smartBtn = document.querySelector("#prod-smart-btn");
		const laptopBtn = document.querySelector("#prod-laptop-btn");
		const allProdBtn = document.querySelector("#prod-all-btn");


	

		smartBtn.addEventListener("click", function() {
			if (elem.category === "смартфоны") {
				cardInner.style.display = "block";
			} else {
				cardInner.style.display = "none";
			}
		});

		laptopBtn.addEventListener("click", function() {
			if (elem.category === "ноутбуки") {
				cardInner.style.display = "block";
			} else {
				cardInner.style.display = "none";
			}
		});

		allProdBtn.addEventListener("click", function() {
			if (elem.category === "") {
				cardInner.style.display = "none";
			} else {
				cardInner.style.display = "block";
			}
		});

		
		// const sortProducts = document.querySelector(".cards__filters");
		// const filterCards = document.querySelectorAll(".cards");

		// sortProducts.addEventListener("click", (e) => {
		// 	if (e.target.tagName !== "BUTTON") return false;
		// 	let filterClass = e.target.dataset["filter"];
		// 	filterCards.forEach((elem) => {
		// 		elem.classList.remove("hide");
		// 		if (!elem.classList.contains(filterClass) && filterClass !== "all") {
		// 			elem.classList.add("hide");
		// 		}
		// 	});
		// });



		console.log(cards)
	});

});











