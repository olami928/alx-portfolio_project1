// Select DOM elements
let no = document.querySelector(".adviceno");
let auth = document.querySelector(".author");
let change = document.querySelector(".change");

// Event listener for changing advice
change.addEventListener("click", getAdvice);

// Function to fetch and display advice
async function getAdvice() {
    try {
        let response = await fetch("https://api.adviceslip.com/advice");
        if (!response.ok) throw new Error('Network response was not ok');
        let data = await response.json();
        no.innerHTML = "ADVICE #" + data.slip.id;
        auth.innerHTML = '"' + data.slip.advice + '"';
    } catch (error) {
        console.error("Failed to fetch advice:", error);
        no.innerHTML = "Error";
        auth.innerHTML = "Sorry, couldn't fetch advice.";
    }
}
