const toggle = document.querySelector('.toggle');
const h1 = document.querySelector('h1');

toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    h1.innerText = 'Light Mode';
  } else {
    html.classList.add('dark');
    h1.innerText = 'Dark Mode';
  }
})