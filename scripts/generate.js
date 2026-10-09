const advice = document.getElementById('advice');
const qrBtn = document.getElementById('qr');
const numberAdvice = document.getElementById('number-advice');

function showAdvice(text, number) {
    advice.textContent = text;
    numberAdvice.textContent = number;
}


async function generateAdvice() {
    try {
        const response = await fetch(`https://api.adviceslip.com/advice`);
        if (response.ok) {
            const result = await response.json();
            console.log(result);
            const {advice, id} = result.slip;
            showAdvice(advice, id);

        }
    } catch (error) {
        console.error(error);
    }
}


qrBtn.addEventListener('pointerdown', generateAdvice);

document.addEventListener('DOMContentLoaded', generateAdvice);