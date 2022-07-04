const header = document.getElementById('header'); // header is the car picture.
const title = document.getElementById('title'); // title is the title.
const excerpt = document.getElementById('excerpt'); // excerpt is the text.
const profile_img = document.getElementById('profile-img'); // profile-img is the profile icon.
const name = document.getElementById('name'); // name is the name.
const date = document.getElementById('date'); // date is the date.
const animated_bgs = document.querySelectorAll('.animated-bg'); // animated_bgs is a nodelist where each node is a gray line behind an image.
const animated_bg_texts = document.querySelectorAll('.animated-bg-text'); // animated_bg_texts is a nodelist where each node is a gray line behind text.

setTimeout(getData, 2500); // Executes the function after 2500 milliseconds.

// Replaces the moving gray lines with text
function getData() {
	header.innerHTML = `<img src="img/car.jpg" alt="car" />`;
	title.innerHTML = 'Lorem ipsum dolor sit amet.';
	excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, iure.';
	profile_img.innerHTML = `<img src="img/profile-icon.jpg" alt="profile-icon" />`;
	name.innerHTML = 'Christian Demesa';
	date.innerHTML = 'Jul 03, 2022';

	animated_bgs.forEach(bg => bg.classList.remove('animated-bg')); // Removes the animated-bg class name.
	animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text')); // Removes the animated-bg-text class name.
}
