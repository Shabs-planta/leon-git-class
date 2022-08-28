const click = document.querySelector('#submit');

click.addEventListener('click', () => {
   document.querySelector('.heading').innerHTML = "THANK YOU...";
   document.getElementById('submit').style.display = "none";
});