const fill = document.querySelector('.fill'); // fill is the picture.
const empties = document.querySelectorAll('.empty'); // empites is nodelist where each node is a box.

fill.addEventListener('dragstart', dragStart); // When the picture is first dragged, execute the function.
fill.addEventListener('dragend', dragEnd); // When the picture is no longer dragged, execute the function.

// For each box/empty in the empties nodelist...
empties.forEach(empty => {
	empty.addEventListener('dragover', dragOver); // When the picture is dragged over the box...
	empty.addEventListener('dragenter', dragEnter); // When the picture enters the box...
	empty.addEventListener('dragleave', dragLeave); // When the picture leaves the box...
	empty.addEventListener('drop', dragDrop); // And when the picture is dropped in the box, execute its respective function.
});

// When the picture is dragged...
function dragStart() {
	this.className += ' hold'; // Give the draggable picture the class name of hold.
	setTimeout(() => (this.className = ''), 0); // Removes the stationary picture's class names, and you need to use setTimeout otherwise it will be applied at the same time as line 17.
}

// When the picture is no longer dragged, make a box's only class name fill.
function dragEnd() {
	this.className = 'fill';
}

// When a box has the picture dragged over it, prevent the default action of resetting the drag operation to none.
function dragOver(e) {
	e.preventDefault();
}

// When the picture is dragged into a box...
function dragEnter(e) {
	e.preventDefault(); // Prevent the default action of rejecting the user selection as the potential target element.
	this.className += ' hovered'; // Give a box the class name of hovered.
}

// When the picture is dragged out of a box, make a box's only class name empty.
function dragLeave() {
	this.className = 'empty';
}

// When the picture is dropped into a box...
function dragDrop() {
	this.className = 'empty'; // Make the box's only class name empty.
	this.append(fill); // Make the picture a child element of the box.
}
