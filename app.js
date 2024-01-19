const card = document.querySelector('.card');
const btn = card.querySelector('.card__btn');
const adviceId = card.querySelector('.card__advice-id');
const adviceDisplay = card.querySelector('.card__advice-text');

const fetchWisdom = async () => {
	try {
		const res = await fetch('https://api.adviceslip.com/advice');
		const data = await res.json();
		adviceId.innerHTML = `ADVICE #${data.slip.id}`;
		adviceDisplay.innerHTML = `"${data.slip.advice}"`;
	} catch (e) {
		adviceDisplay.innerHTML = `Error: ${e}`;
		console.log(e);
	}
};

btn.addEventListener('click', fetchWisdom);
window.addEventListener('load', fetchWisdom);
