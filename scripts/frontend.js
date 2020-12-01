const options = document.querySelector('.options');
const optionsOpener = document.querySelector('.openOptions');
const closeOptions = document.querySelector('.closeOptions');

optionsOpener.addEventListener('click', () => {
    options.classList.toggle('open');
    closeOptions.classList.toggle('show');
});

closeOptions.addEventListener('click', () =>{
    options.classList.remove('open');
    closeOptions.classList.remove('show');
});