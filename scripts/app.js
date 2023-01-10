copyright.textContent = `© ${new Date().getFullYear()}`;

const nDateMod = document.querySelector('#dateModified');
// Try to complete the method with options
try {
	const options = {
		day: "2-digit",
		month: "short",
		year: "numeric"
	};
	dateModified.innerHTML = `Last Modified: <span class="highlight">${new Date().toLocaleDateString("en-US", options)}</span>`;

} catch (e) {
	console.log("Error with code or your browser does not support Locale");
}