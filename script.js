// --- 1. CONFIGURATION ---
const PUBLIC_KEY = "JKqFqwhz7D98snEv6"; 
const SERVICE_ID = "service_deqbac8";
const TEMPLATE_ID = "template_nef26y9";

// Initialize EmailJS
emailjs.init(PUBLIC_KEY);

// --- 2. THE SEND FUNCTION ---
function sendTheEmail() {
    console.log("Attempting to send email...");

    // Your requested line with added error handling
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        to_name: "Jolie", // This helps the template recognize a recipient
        message: "The Wordle was completed successfully!"
    })
    .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
    })
    .catch((error) => {
        console.error("FAILED TO SEND:", error);
        // This alert is for YOU to see the error while testing
        alert("Email failed: " + JSON.stringify(error));
    });
}

// --- 3. TRIGGER IN THE GAME ---
function showFinalScreen() {
    // We call your command here
    sendTheEmail();

    document.getElementById("game-container").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("game-container").style.display = "none";
        document.getElementById("final-screen").style.display = "flex";
        document.getElementById("signature").innerText = "- Yours Truly"; 
    }, 500);
}