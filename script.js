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

	const name = form.querySelector('#contact-name');
	const phone = form.querySelector('#contact-phone');
	const email = form.querySelector('#contact-email');
	const message = form.querySelector('#contact-message');

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const text = `Olá Katia, meu nome é ${name.value} e tenho a seguinte mensagem:
${message.value}
Minhas informações de contato são:
${email.value ? `E-mail: ${email.value}` : ''}
Telefone: ${phone.value}`;

		let encodedText = encodeURIComponent(text);

		window.open(`http://wa.me/5511970472678?text=${encodedText}`, '_blank');
	});
}

formWhatsappRedirect('#contact-form');
