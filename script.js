document.addEventListener('DOMContentLoaded', function() {
    // Încarcă fișierul JSON
    fetch('script.json') // Încarcă fișierul JSON
        .then(response => response.json())  // Parsează fișierul JSON
        .then(data => {
            // Afișează mesajul din fișierul JSON în caseta de chat
            document.getElementById("chatbox").textContent = data.message;
        })
        .catch(error => console.error('Eroare la încărcarea fișierului JSON:', error));

    // Afișează chatbotul după 1 secundă
    setTimeout(function() {
        document.getElementById("chatbot").style.display = "block"; // Afișează chatbotul
    }, 1000); // După 1 secundă
});
