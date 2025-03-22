const button = document.getElementById('showLogin');
const div = document.getElementById('loginn');

button.addEventListener('click', () => {
  div.classList.remove('hidden');

});

const button2 = document.getElementById('close_login');

button2.addEventListener('click', () => {
  div.classList.add('hidden');

});