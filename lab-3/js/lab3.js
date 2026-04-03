
document.querySelectorAll('a').forEach(tab => {
	tab.addEventListener('click', () => {

        document.querySelectorAll('a').forEach(event => event.classList.remove('active'));
        tab.classList.add('active');

    });

});

