document.addEventListener("DOMContentLoaded", function() {
    // Butonul care trimite numele
    document.getElementById("submit-name").addEventListener("click", function() {
        var userName = document.getElementById("user-name").value;

        // Verificăm dacă utilizatorul a introdus un nume
        if (userName.trim() !== "") {
            // Adăugăm răspunsul botului în funcție de numele utilizatorului
            var response = document.getElementById("response");

            // Logica pentru răspunsuri bazate pe numele introdus
            var message = `<div class="bot-message"><p><strong>Sofie Marie:</strong> Buna, ${userName}! Te ajut cu informatiile tale:</p>`;
            
            // Logica pentru a oferi detalii în funcție de numele utilizatorului
            if (userName.toLowerCase() === "ion") {
                message += `<p><strong>Sofie Marie:</strong> Esti cazat in Camera 3 si vei sta la masa 2.</p></div>`;
            } else if (userName.toLowerCase() === "maria") {
                message += `<p><strong>Sofie Marie:</strong> Esti cazat in Camera 4 si vei sta la masa 5.</p></div>`;
            } else {
                message += `<p><strong>Sofie Marie:</strong> Esti cazat in Camera 1 si vei sta la masa 10.</p></div>`;
            }

            response.innerHTML = message;

            // Resetează câmpul de input
            document.getElementById("user-name").value = "";
        } else {
            alert("Te rog să introduci un nume.");
        }
    });
});
