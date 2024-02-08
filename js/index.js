// Variabler där HTML-element som har hämtats sparas, används nedan sen.
const showSumElem = document.querySelector('#showSum');
const inputFormElem = document.querySelector('#inputForm');
const friendSumElem = document.querySelector('#friendSum');
const calculateButton = document.querySelector('#calculateButton');



function showDividedSum(sum) {
    // Denna funktion tar emot summan som varje person ska betala och visar den på sidan.

    inputFormElem.classList.toggle('hide'); // Döljer inputfälten.
    showSumElem.classList.toggle('hide'); // Visar elementet för hur mycket varje person ska betala.
    friendSumElem.innerHTML = sum + ' kr'; // Lägger till i HTML:en vad varje person ska betala.
}

calculateButton.addEventListener('click', () => {
 // Denna funktion körs när användaren trycker på knappen "Räkna".
});