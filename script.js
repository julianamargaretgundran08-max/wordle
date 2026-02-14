// At the very top of script.js
(function() {
    // Wait for the EmailJS SDK to load from the CDN
    const checkEmailJS = setInterval(() => {
        if (window.emailjs) {
            emailjs.init("JKqFqwhz7D98snEv6");
            console.log("EmailJS Initialized Successfully!");
            clearInterval(checkEmailJS);
        }
    }, 100);
})();

function sendTheEmail() {
    console.log("Button clicked, sending email...");
    
    // Using your exact requested IDs
    emailjs.send("service_deqbac8", "template_nef26y9")
    .then((res) => {
        console.log("Success from GitHub!", res.status);
    })
    .catch((err) => {
        // This will now catch any 'Public Website' security blocks
        console.error("GitHub Send Error:", err);
        alert("Email failed: " + err.text); 
    });
}