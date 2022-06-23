const sounds = ['dancefloor', 'dance-moon', 'feel-buzz', 'safe-sound', 'sound-goodbye']; // sounds is an array with all of the audio elements' ids.

// For each id/sound in sounds...
sounds.forEach(sound => {
	const btn = document.createElement('button'); // btn is a button.
	btn.classList.add('btn'); // Add the class name of btn to the button.
	btn.innerText = sound; // Give the button the text of its id/sound.

	// When a button is clicked, execute the stopSongs function, grab the audio element with the id/sound, and play its audio
	btn.addEventListener('click', () => {
		stopSongs();
		document.getElementById(sound).play();
	});

	document.getElementById('buttons').appendChild(btn); // The HTML element with the id of buttons has all of the buttons within it.
});

// Stops the current audio from playing.
function stopSongs() {
	sounds.forEach(sound => {
		const song = document.getElementById(sound);
		song.pause(); // Pauses the audio.
		song.currentTime = 0; // Resets the audio to start at the beginning.
	});
}
