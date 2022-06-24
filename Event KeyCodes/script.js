const insert = document.getElementById('insert'); // insert is the flexbox container.

// When a key is pressed down in the window/viewport, there is an event/e that...
window.addEventListener('keydown', e => {
	// Adds the text that appears after a key is pressed
	insert.innerHTML = `
        <div class="key">
            <small>event.key</small>
            ${e.key === ' ' ? 'Space' : e.key}
        </div>
        <div class="key">
            <small>event.keyCode</small>
            ${e.keyCode}
        </div>
        <div class="key">
            <small>event.code</small>
            ${e.code}
        </div>
    `;

	// The above event/e returns an object with keys, including key, keyCode, and code.
	// Accessing e.keyCode returns that key's associated value.
});
