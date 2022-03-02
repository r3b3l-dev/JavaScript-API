const API_KEY = "Q-9oqOjdYCEaABnz2M90PUSR6BA";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"))

document.getElementById("status").addEventListener("click", e => getStatus(e));
document.getElementById("submit").addEventListener("click", e => postForm(e));

async function postForm(e) {

	const form = new FormData(document.getElementById("checksform"));

	const response = await fetch(API_URL, {
                        	method: "POST",
                        	headers: {
                                    "Authorization": API_KEY,
        },
							body: form,
	})

	// For loop to iterate through entries and log to console. purely for testing.
	// for (let entry of form.entries()) {
	// 	console.log(entry);
	// }
}

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

// Initial solution

function displayStatus(data) {

	document.getElementById("resultsModalTitle").innerText = `API Key Status`;
	document.getElementById("results-content").innerHTML = `Your key is valid until <br> ${data.expiry}`;
	resultsModal.show();
}

// funcion to display data in modal. Takes in the parameter of data.
// function displayStatus(data) {

// 	let heading = "API Key Status";
// 	let results = `<div>Your key is valid until</div>`;
// 	results += `<div class="key-status">${data.expiry}</div>`;

// 	document.getElementById("resultsModalTitle").innerText = heading;
// 	document.getElementById("results-content").innerHTML = results;
// 	resultsModal.show();
// }





