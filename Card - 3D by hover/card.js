// const categoryItems = document.querySelectorAll('.category');

const card = document.querySelector('.card');

const rotate3dElement = function (e, target, maxDegrees, scale) {
	const rotateYposition = ((e.layerX / target.scrollWidth) * 2 - 1) * maxDegrees;
	const rotateXposition = ((e.layerY / target.scrollHeight) * 2 - 1) * maxDegrees;

	target.style.transform = `perspective(800px) rotateX(${rotateXposition}deg) rotateY(${-rotateYposition}deg) scale3d(${scale}, ${scale}, ${scale})`;
};

card.addEventListener('mousemove', (e) => {
	card.style.transition = 'transform 100ms ease';
	rotate3dElement(e, card, 15, 1.05);
});

card.addEventListener('mouseout', (e) => {
	card.style.transition = 'transform 300ms ease';
	card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
});
