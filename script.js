import Inputmask from 'https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/5.0.9/inputmask.es6.min.js';

function applyPhoneMask() {
	let phone = document.querySelector('#contact-phone');

	Inputmask({
		mask: ['(99) 9999-9999', '(99) 99999-9999'],
		keepStatic: true,
	}).mask(phone);
}

applyPhoneMask();

function formWhatsappRedirect(formID) {
	const form = document.querySelector(formID);

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const text = `Olá Katia, meu nome é ${e.target[0].value} e tenho a seguinte mensagem:\n${e.target[3].value}\nMinhas informações de contato são:\n${
			e.target[2].value ? `E-mail: ${e.target[2].value}` : ''
		}\nTelefone: ${e.target[1].value}`;

		window.open(`http://wa.me/5511970472678?text=${encodeURIComponent(text)}`, '_blank');
	});
}

formWhatsappRedirect('#contact-form');
