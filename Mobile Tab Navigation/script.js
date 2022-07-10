const contents = document.querySelectorAll('.content'); // contents is a node list where each element is an img element.
const listItems = document.querySelectorAll('li'); // listItems is a nodelist where each item is an li element.

// Executes the below functions, then gives the clicked on icon a class name of active and its associated image a class name of show.
listItems.forEach((item, idx) => {
	item.addEventListener('click', () => {
		hideAllContents();
		hideAllItems();
		item.classList.add('active');
		contents[idx].classList.add('show');
	});
});

// Hides all the images
function hideAllContents() {
	contents.forEach(content => content.classList.remove('show'));
}

// Removes active from all the icons
function hideAllItems() {
	listItems.forEach(item => item.classList.remove('active'));
}
