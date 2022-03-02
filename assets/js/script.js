const API_KEY = "Q-9oqOjdYCEaABnz2M90PUSR6BA";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"))

document.getElementById("status").addEventListener("click", e => getStatus(e));

/*	This function has 2 tasks.
	1. Make a GET request to the API URL with the API key
	2. Pass the data to a display function
*/
async function getStatus(e) {
	const queryString = `${API_URL}?api_key=${API_KEY}`;
	
	const response = await fetch(queryString);

	const data = await response.json();

	if (response.ok) {
		// instead of console logging the date i.e console.log(data.expiry);
		displayStatus(data);
	} else {
		throw new Error(data.error);
	}
}



// funcion to display data in modal. Takes in the parameter of data.
function displayStatus(data) {

	let heading = "API Key Status";
	let results = `<div>Your key is valid until</div>`;
	results += `<div class="key-status">${data.expiry}</div>`;

	document.getElementById("resultsModalTitle").innerText = heading;
	document.getElementById("results-content").innerHTML = results;
	resultsModal.show();
}
