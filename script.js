//your code here
// Get all picture elements
const pictures = document.querySelectorAll('.picture');

// Variable to store the picture being dragged
let draggedPicture = null;

// Add event listeners for drag and drop
pictures.forEach(picture => {
  picture.addEventListener('dragstart', dragStart);
  picture.addEventListener('dragover', dragOver);
  picture.addEventListener('dragenter', dragEnter);
  picture.addEventListener('dragleave', dragLeave);
  picture.addEventListener('drop', drop);
  picture.addEventListener('dragend', dragEnd);
});

// Function to handle dragstart event
function dragStart(e) {
  draggedPicture = this;
  this.classList.add('dragging');
}

// Function to handle dragover event
function dragOver(e) {
  e.preventDefault();
}

// Function to handle dragenter event
function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
}

// Function to handle dragleave event
function dragLeave() {
  this.classList.remove('hovered');
}

// Function to handle drop event
function drop() {
  this.classList.remove('hovered');
  swapPictures(this, draggedPicture);
}

// Function to handle dragend event
function dragEnd() {
  draggedPicture.classList.remove('dragging');
  draggedPicture = null;
}

// Function to swap pictures between two divs
function swapPictures(div1, div2) {
  // Get the background image URLs of the two divs
  const img1 = window.getComputedStyle(div1).backgroundImage;
  const img2 = window.getComputedStyle(div2).backgroundImage;

  // Swap the background images
  div1.style.backgroundImage = img2;
  div2.style.backgroundImage = img1;
}
