const select = document.querySelector(".select");

const selectTitle = select.querySelector(".select__title");

const selectLabels = select.querySelectorAll(".select__label");

/* Выпадение меню */
selectTitle.addEventListener("click", function() {
	if ("active" === select.getAttribute("data-state")) {
		select.setAttribute("data-state", "");
	} else {
		select.setAttribute("data-state", "active");
	}
});



/* Выбор пункта селектора и закрытие меню */
for (let i = 0; i < selectLabels.length; i++) {
	selectLabels[i].addEventListener("click", function(event) {
		/* Убирает чекинг у всех элементов */
		for (let i = 0; i < selectLabels.length; i++) {
			selectLabels[i].classList.remove("select__label--current");
		}
		
		selectTitle.textContent = event.target.textContent;
		select.setAttribute("data-state", "");
		
		/* Добавляет checking для кликнутого элемента */
		this.classList.add("select__label--current");
	})
}



select.addEventListener("click", function() {
	this.parentElement.style.borderColor = "var(--blueColor)";
})

select.addEventListener("mouseleave", function() {
	this.parentElement.style.borderColor = "var(--lightGray)";
})



