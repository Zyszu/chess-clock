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

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });